from flask_sqlalchemy import SQLAlchemy

class VehicleRepository:
    def __init__(self, db):
        self.db = db
