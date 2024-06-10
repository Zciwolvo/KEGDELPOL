from flask_sqlalchemy import SQLAlchemy


class DriverRepository:
    def __init__(self, db):
        self.db = db
        
    def get_all_drivers(self):
        drivers = self.db.session.query(driver).all()
        return [driver.to_dict() for driver in drivers]
