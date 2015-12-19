class User():
    def __init__(self, id, email, name, surname, profile_pic):
        self.id = id
        self.email = email
        self.name = name
        self.surname = surname
        self.profile_pic = profile_pic
        self.token = ""

    def register(self, db):
        cursor = db.cursor()
        cursor.execute("INSERT INTO USERS (id, email, name, surname, profile_pic) " +
                       "VALUES (?, ?, ?, ?, ?)",
                       [self.id, self.email, self.name, self.surname, self.profile_pic])
        db.commit()
        return True

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
