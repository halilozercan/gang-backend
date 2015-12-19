class Group():

    def __init__(self, name, picture, admin_id):
        self.name = name
        self.picture = picture
        self.admin_id = admin_id

    def __repr__(self):
        return '<name {}>'.format(self.name)