import sqlite3 as sql

conn = sql.connect("gang.db")
c = conn.cursor()

c.execute("DROP TABLE IF EXISTS USERS")
c.execute("DROP TABLE IF EXISTS GROUPS")
c.execute("DROP TABLE IF EXISTS THREADS")
c.execute("DROP TABLE IF EXISTS MESSAGES")
c.execute("DROP TABLE IF EXISTS SUBSCRIBES")
c.execute("DROP TABLE IF EXISTS READS")

c.execute("CREATE TABLE USERS(" + \
          "id INTEGER PRIMARY KEY ASC, " + \
          "email TEXT, " + \
          "name TEXT, " + \
          "surname TEXT, " + \
          "birth_date DATETIME, " + \
          "join_date DATETIME DEFAULT CURRENT_TIMESTAMP)")

c.execute("CREATE TABLE GROUPS(" + \
          "id INTEGER PRIMARY KEY ASC, " + \
          "manager_id INTEGER, " + \
          "name TEXT, " + \
          "picture TEXT DEFAULT 'none', " + \
          "create_date timestamp DATETIME DEFAULT CURRENT_TIMESTAMP, " + \
          "FOREIGN KEY(manager_id) REFERENCES USERS(id))")

c.execute("CREATE TABLE THREADS(" + \
          "id INTEGER PRIMARY KEY ASC, " + \
          "user_id INTEGER, " + \
          "group_id INTEGER, " + \
          "content TEXT, " + \
          "thumbnail TEXT, " + \
          "title TEXT, " + \
          "description TEXT, " + \
          "timestamp DATETIME DEFAULT CURRENT_TIMESTAMP, " + \
          "FOREIGN KEY(user_id) REFERENCES USERS(id)," + \
          "FOREIGN KEY(group_id) REFERENCES GROUPS(id))")

c.execute("CREATE TABLE MESSAGES(" + \
          "id INTEGER PRIMARY KEY ASC, " + \
          "user_id INTEGER, " + \
          "thread_id INTEGER, " + \
          "content TEXT, " + \
          "thumbnail TEXT, " + \
          "title TEXT, " + \
          "description TEXT, " + \
          "timestamp DATETIME DEFAULT CURRENT_TIMESTAMP, " + \
          "FOREIGN KEY(user_id) REFERENCES USERS(id)," + \
          "FOREIGN KEY(thread_id) REFERENCES THREADS(id))")

c.execute("CREATE TABLE SUBSCRIBES(" + \
          "id INTEGER PRIMARY KEY ASC, " + \
          "user_id INTEGER, " + \
          "group_id INTEGER, " + \
          "FOREIGN KEY(user_id) REFERENCES USERS(id), " + \
          "FOREIGN KEY(group_id) REFERENCES GROUPS(id))")

c.execute("CREATE TABLE READS(" + \
          "id INTEGER PRIMARY KEY ASC, " + \
          "user_id INTEGER, " + \
          "thread_id INTEGER, " + \
          "last_checked DATETIME DEFAULT CURRENT_TIMESTAMP, " + \
          "FOREIGN KEY(user_id) REFERENCES USERS(id), " + \
          "FOREIGN KEY(thread_id) REFERENCES THREADS(id))")

conn.commit()
conn.close()
