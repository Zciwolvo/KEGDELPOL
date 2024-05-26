from flask_sqlalchemy import SQLAlchemy

class VehicleRepository:
    def __init__(self, db):
        self.db = db
    
    def add_vehicle(self, new_vehicle):
        self.db.add(new_vehicle)
        self.db.commit()
