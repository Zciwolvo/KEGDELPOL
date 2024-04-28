from flask_sqlalchemy import SQLAlchemy


class OrderRepository:
    def __init__(self, db):
        self.db = db
