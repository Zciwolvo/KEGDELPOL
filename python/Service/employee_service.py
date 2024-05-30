from Repository import customer_repo, vehicle_repo, order_repo
from Model import customer, vehicle

class EmployeeService:
    def __init__(self, db):
        self.customer_repo = customer_repo.CustomerRepo(db)
        self.vehicle_repo = vehicle_repo.VehicleRepo(db)
        self.order_repo = order_repo.OrderRepo(db)

    def add_vehicle(self, vehicle_data):
        new_vehicle = vehicle.Vehicle(**vehicle_data)
        self.vehicle_repo.add_vehicle(new_vehicle)

    def get_order_details(self, order_id):
        return self.order_repo.get_order_details(order_id)
