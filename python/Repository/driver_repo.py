from flask_sqlalchemy import SQLAlchemy


class DriverRepository:
    def __init__(self, db):
        self.db = db
