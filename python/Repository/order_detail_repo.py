from flask_sqlalchemy import SQLAlchemy


class OrderDetailRepository:
    def __init__(self, db):
        self.db = db
