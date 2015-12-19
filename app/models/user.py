class User():
    def __init__(self, email, name, surname, profile_pic):
        self.id = ""
        self.email = email
        self.name = name
        self.surname = surname
        self.profile_pic = profile_pic

    def register(self, db):
        try:
            cursor = db.cursor()
            cursor.execute("INSERT INTO USERS (email, name, surname, profile_pic) VALUES ( ?, ? , ? , ?)",
                           [self.email, self.name, self.surname, self.profile_pic])
            self.id = unicode(cursor.lastrowid)
            db.commit()
            return True
        except:
            return False

    def __repr__(self):
        return '<email {}>'.format(self.email)

    def get_id(self):
        return unicode(self.id)

    def is_anonymous(self):
        return False

    def is_active(self):
        return True

    def is_authenticated(self):
        return True
