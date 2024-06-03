from Repository import customer_repo, vehicle_repo, order_repo
from Model.vehicle import Vehicle

class EmployeeService:
    def __init__(self, db):
        self.customer_repo = customer_repo.CustomerRepository(db)
        self.vehicle_repo = vehicle_repo.VehicleRepository(db)
        self.order_repo = order_repo.OrderRepository(db)

    def add_vehicle(self, vehicle_data):
        new_vehicle = Vehicle(**vehicle_data)
        self.vehicle_repo.add_vehicle(new_vehicle)

    def get_order_details(self, order_id):
        return self.order_repo.get_order_details(order_id)
