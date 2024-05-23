from Repository import customer_repo, vehicle_repo, order_repo
from Model import customer, vehicle

class EmployeeService:
    def __init__(self, db):
        self.customer_repo = customer_repo.CustomerRepo(db)
        self.vehicle_repo = vehicle_repo.VehicleRepo(db)
        self.order_repo = order_repo.OrderRepo(db)

    def add_user(self, user_data):
        new_user = customer.Customer(**user_data)
        self.customer_repo.add_user(new_user)

    def modify_user(self, user_id, user_data):
        self.customer_repo.modify_user(user_id, user_data)

    def delete_user(self, user_id):
        self.customer_repo.delete_user(user_id)

    def add_vehicle(self, vehicle_data):
        new_vehicle = vehicle.Vehicle(**vehicle_data)
        self.vehicle_repo.add_vehicle(new_vehicle)

    def modify_order(self, order_id, order_data):
        self.order_repo.modify_order(order_id, order_data)

    def get_all_orders(self):
        return self.order_repo.get_all_orders()

    def get_order_details(self, order_id):
        return self.order_repo.get_order_details(order_id)
