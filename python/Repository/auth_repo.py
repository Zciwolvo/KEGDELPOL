from flask_sqlalchemy import SQLAlchemy



class AuthRepository:
    def __init__(self, db):
        self.db = db
