from Model.authorization import Authorization
from sqlalchemy.orm import scoped_session, sessionmaker

class AuthRepository:
    def __init__(self, db):
        self.db = db
        self.Session = scoped_session(sessionmaker(bind=db.engine))

    def get_user_by_username(self, username):
        with self.Session() as session:
            return session.query(Authorization).filter_by(login=username).first()

    def create_user(self, username, password, role):
        new_user = Authorization(login=username, password=password, role=role)
        with self.Session() as session:
            session.add(new_user)
            session.commit()
            return new_user
