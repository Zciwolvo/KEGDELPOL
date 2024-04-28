from flask_sqlalchemy import SQLAlchemy


class ProductRepository:
    def __init__(self, db):
        self.db = db
