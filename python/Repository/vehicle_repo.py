class VehicleRepository:
    def __init__(self, db):
        self.db = db

    def add_vehicle(self, new_vehicle):
        self.db.session.add(new_vehicle)
        self.db.session.commit()
