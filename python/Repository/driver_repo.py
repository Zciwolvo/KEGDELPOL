from flask_sqlalchemy import SQLAlchemy
from Model.driver import Driver


class DriverRepository:
    def __init__(self, db):
        self.db = db

    def get_all_drivers(self):
        return self.db.session.query(Driver).all()