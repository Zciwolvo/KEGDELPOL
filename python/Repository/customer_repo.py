from flask_sqlalchemy import SQLAlchemy


class CustomerRepository:
    def __init__(self, db):
        self.db = db
