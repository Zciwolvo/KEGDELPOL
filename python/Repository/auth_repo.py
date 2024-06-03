from Model.authentication import Authentication
from sqlalchemy.orm import sessionmaker
from sqlalchemy import create_engine

class AuthRepository:
    def __init__(self, db):
        self.db = db
        self.Session = sessionmaker(bind=db.engine)
        self.session = self.Session()

    def get_user_by_username(self, username):
        return self.session.query(Authentication).filter_by(login=username).first()

    def create_user(self, username, password, role):
        new_user = Authentication(login=username, password=password, role=role)
        self.session.add(new_user)
        self.session.commit()
        return new_user
