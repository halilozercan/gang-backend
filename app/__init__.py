# Import flask and template operators
import json

import os
from flask import Flask, render_template, send_from_directory, request, redirect, url_for, g
from flask.ext.login import LoginManager, login_user, current_user, login_required, logout_user
from flask_socketio import SocketIO
import requests
import functools
import sqlite3

app = Flask(__name__)
app.config.from_object('config.DevelopmentConfig')
socketio = SocketIO(app)
login_manager = LoginManager()
login_manager.init_app(app)
DATABASE = 'gang.db'

from models import User, Group
sessions = {}


@login_manager.user_loader
def load_user(user_id):
    print "id ", user_id
    user_from_db = query_db('SELECT * FROM USERS WHERE id = ?', [int(user_id)], one=True)
    if user_from_db is None:
        return None
    user = User(user_from_db['email'], user_from_db['name'], user_from_db['surname'], user_from_db['birth_date'])
    user.id = user_from_db['id']
    return user


def get_db():
    db = getattr(g, '_database', None)
    if db is None:
        db = g._database = connect_to_database()
    return db


def query_db(query, args=(), one=False):
    cur = get_db().execute(query, args)
    rv = cur.fetchall()
    cur.close()
    return (rv[0] if rv else None) if one else rv


def insert_db(query, args=()):
    cur = get_db().execute(query, args)
    id = cur.lastrowid
    cur.close()
    return id


def connect_to_database():
    db = sqlite3.connect(DATABASE)
    db.row_factory = sqlite3.Row
    return db


@app.teardown_appcontext
def close_connection(exception):
    db = getattr(g, '_database', None)
    if db is not None:
        db.close()


@app.route("/login", methods=["POST"])
def login():
    id = request.form['id']
    email = request.form['email']
    token = request.form['token']
    name = request.form['name']
    surname = request.form['surname']
    profile_pic = request.form['profile_pic']
    token_validation_result = requests.get("https://graph.facebook.com/me?fields=email&access_token=" + token).json()
    print(token_validation_result)
    if token_validation_result is not None and token_validation_result['email'] == email:
        user_from_db = query_db('SELECT * FROM USERS WHERE email = ?', [email], one=True)
        if user_from_db is None:
            user = User(id, email, name, surname, profile_pic)
            print "result of register " + str(user.register(get_db()))
        else:
            user = User(user_from_db['id'],
                        user_from_db['email'],
                        user_from_db['name'],
                        user_from_db['surname'],
                        user_from_db['profile_pic'])
            user.register(get_db())

        login_user(user)
        return json.dumps({'success': True})
    else:
        return json.dumps({'success': False})


@app.route("/logout")
@login_required
def logout():
    logout_user()
    return redirect(url_for('index'))


@app.route('/getUser', methods=["GET"])
@login_required
def get_user():
    user = {
        'id' : current_user.id,
        'email': current_user.email,
        'name': current_user.name,
        'surname': current_user.surname,
        'picture': current_user.profile_pic
    }
    return json.dump(user)


@app.route('/users', methods=["GET"])
def users():
    return str(len(query_db("SELECT * FROM USERS")))


@app.route('/', methods=["GET"])
def index():
    if current_user.is_authenticated and not current_user.is_anonymous:
        return redirect(url_for('chat'))
    else:
        print 'rendering login'
        return render_template('login.html')


@app.route('/chat')
@login_required
def chat():
    return render_template('chat.html')


@app.route('/getGangs', methods=["GET"])
@login_required
def get_groups():
    user_id = current_user.id
    subs_from_db = query_db("SELECT * FROM SUBSCRIBES WHERE user_id = ?", [int(user_id)])
    groups = []
    for sub in subs_from_db:
        group_id = int(sub['group_id'])
        group_from_db = query_db("SELECT * FROM GROUPS WHERE id = ?", [group_id])
        group = {'name': group_from_db['name'], 'picture': group_from_db['picture']}
        last_message = query_db("SELECT * FROM THREADS, MESSAGES, USERS AS U1, USERS AS U2 "
                                "WHERE U1.id = MESSAGES.user_id AND U2.id = THREADS.user_id AND " +
                                "THREADS.id = MESSAGES.thread_id AND THREADS.group_id = ? " +
                                "ORDER BY MESSAGES.timestamp DESC",
                                [group_id],
                                one=True)

        group['last_thread'] = \
            {
                'name': last_message['U2.name'],
                'surname': last_message['U2.surname'],
                'profile_pic': last_message['U2.profile_pic'],
                'title': last_message['THREADS.title']
            }

        threads_from_db = query_db("SELECT * FROM THREADS WHERE group_id = ?",
                                   [group_id])

        nonReadThreadCount = 0
        for thread in threads_from_db:
            thread_last_checked = query_db("SELECT * FROM READS WHERE thread_id = ? AND user_id = ?",
                                           [thread['id'], int(user_id)],
                                           one=True)['last_checked']
            if query_db("SELECT * FROM MESSAGES WHERE thread_id = ? AND timestamp > ?",
                        [thread['id'], thread_last_checked],
                        one=True) is not None:
                nonReadThreadCount += 1

        group['non_read_total'] = nonReadThreadCount
        group['last_active'] = query_db("SELECT MAX(timestamp) as last_message FROM MESSAGES, THREADS " +
                                        "WHERE MESSAGES.thread_id = THREADS.id AND THREADS.group_id = ?",
                                        [group_id],
                                        one=True)['last_message']
        groups.append(group)

    return json.dumps({"success": True, "count": len(groups), "gangs": groups})


@app.route('/getThreads/<group_id>')
@login_required
def get_threads(group_id):
    group_id = int(group_id)
    user_id = current_user.id
    if query_db("SELECT * FROM SUBSCRIBES WHERE user_id = ? AND group_id = ?",
                [int(user_id), group_id],
                one=True) is None:
        return json.dumps({"success": False, "message": "You are not subscriber"})

    threads_from_db = query_db("SELECT * FROM THREADS, USERS "
                               "WHERE USERS.id = THREADS.user_id AND " +
                               "THREADS.group_id = ? ORDER BY timestamp DESC",
                               [group_id])

    threads = []
    for thread_from_db in threads_from_db:
        thread = {}
        thread['op'] = {
            'name': thread_from_db['USERS.name'],
            'surname': thread_from_db['USERS.surname'],
            'profile_pic': thread_from_db['USERS.profile_pic']
        }
        thread['content'] = thread_from_db['THREADS.content']
        thread['thumbnail'] = thread_from_db['THREADS.thumbnail']
        thread['title'] = thread_from_db['THREADS.title']
        thread['description'] = thread_from_db['THREADS.description']
        thread['last_message_time'] = query_db("SELECT * FROM MESSAGES " +
                                               "WHERE thread_id = ? ORDER BY timestamp DESC",
                                               [thread_from_db['THREADS.id']],
                                               one=True)['timestamp']

        last_seen = query_db("SELECT * FROM READS WHERE user_id = ? AND thread_id = ?",
                             [int(user_id), thread_from_db['THREADS.id']],
                             one=True)['last_checked']

        thread['not_read_total'] = query_db("SELECT COUNT(*) AS total "
                                            "FROM MESSAGES "
                                            "WHERE thread_id = ? AND timestamp > ?",
                                            [thread_from_db['THREADS.id'], last_seen],
                                            one=True)['total']

        threads.append(thread)

    return json.dumps({"success": True, "count": len(threads), "threads": threads})


@app.route("/getThread/<thread_id>")
@login_required
def get_thread(thread_id):
    thread_id = int(thread_id)
    user_id = current_user.id
    if sessions[user_id] is not None:
        last_messages_from_db = query_db("SELECT * FROM MESSAGES, USERS " +
                                         "WHERE MESSAGES.user_id = USERS.id AND " +
                                         "thread_id = ?", [thread_id])
        for message_from_db in last_messages_from_db:
            message = {}
            message['id'] = message_from_db['MESSAGES.id']
            message['user'] = {
                'id': message_from_db['USERS.id'],
                'name': message_from_db['USERS.name'],
                'surname': message_from_db['USERS.surname'],
                'profile_pic': message_from_db['USERS.profile_pic']
            }
            message['thread_id'] = message_from_db['MESSAGES.thread_id']
            message['content'] = message_from_db['MESSAGES.content']
            message['thumbnail'] = message_from_db['MESSAGES.thumbnail']
            message['title'] = message_from_db['MESSAGES.title']
            message['description'] = message_from_db['MESSAGES.description']
            message['timestamp'] = message_from_db['MESSAGES.timestamp']

            socketio.emit('message', message, room=sessions[user_id])


@app.route('/createGroup', methods=["POST"])
def create_group():
    return True

@socketio.on('connect')
def connect_handler():
    if current_user.is_authenticated:
        sessions[current_user.id] = request.sid
        print 'session id ' + request.sid
        return True
    else:
        print "Failed to connect"
        return False  # not allowed here


@socketio.on('disconnect')
def disconnect():
    print('Client disconnected')


@socketio.on('chat message')
def chat_message(string):
    return string


def authenticated_only(f):
    @functools.wraps(f)
    def wrapped(*args, **kwargs):
        if not current_user.is_authenticated:
            disconnect()
        else:
            return f(*args, **kwargs)

    return wrapped


@socketio.on('message')
@authenticated_only
def chat_message(json):

    message = {}
    message['thread_id'] = json['thread_id']
    message['content'] = json['content']
    client_timestamp = json['client_timestamp']

    user = query_db("SELECT * FROM USERS WHERE id = ?", [message['user_id']], one=True)

    import opengraph, re
    link = re.search("(?P<url>https?://[^\s]+)", message['text']).group("url")
    openGraphObj = opengraph.OpenGraph(url=link)
    if openGraphObj.is_valid():
        message['thumbnail'] = openGraphObj['image']
        message['title'] = openGraphObj['title']
        message['description'] = openGraphObj['description']

    message_id = insert_db("INSERT INTO MESSAGES " +
                           "(user_id, thread_id, content, thumbnail, title, description) "
                           "VALUES " +
                           "(?, ?, ?, ?, ?, ?)",
                           [message['user_id'], message['thread_id'], message['content'],
                            message['thumbnail'], message['title'], message['description']])

    message_back_from_db = query_db("SELECT * FROM MESSAGE WHERE id = ?",
                                    [message_id],
                                    one=True)
    message['id'] = message_id
    message['user'] = {
        'id': current_user.id,
        'name': user['name'],
        'surname': user['surname'],
        'profile_pic': user['profile_pic']
    }
    message['timestamp'] = message_back_from_db['timestamp']

    group_id = query_db("SELECT * FROM THREADS WHERE id = ?", [message['thread_id']], one=True)['group_id']
    users_from_db = query_db("SELECT * FROM SUBSCRIBES " +
                             "WHERE group_id = ? AND user_id <> ?",
                             [group_id, message['user_id']])

    for user_from_db in users_from_db:
        if sessions[user_from_db['user_id']] is not None:
            socketio.emit('message', message, room=sessions[user_from_db['user_id']])

    message['client_timestamp'] = client_timestamp
    socketio.emit('message', message)
    return None


# Sample HTTP error handling
@app.errorhandler(404)
def not_found(error):
    return render_template('404.html'), 404
