from Repository.customer_repo import CustomerRepository
from Repository.vehicle_repo import VehicleRepository
from Repository.order_repo import OrderRepository

class OrderService:
    def __init__(self, db):
        self.customer_repo = CustomerRepository(db)
        self.vehicle_repo = VehicleRepository(db)
        self.order_repo = OrderRepository(db)

    def add_order(self, new_order):
        self.order_repo.add_order(new_order)

    def get_orders(self, client_id):
        return self.order_repo.get_orders_by_client_id(client_id)

    def delete_order(self, order_id):
        self.order_repo.delete_order(order_id)

    def update_order(self, order_id, data):
        existing_order = self.order_repo.get_order_by_id(order_id)
        if not existing_order:
            raise ValueError("Order not found")

        existing_order.client_id = data.get('client_id', existing_order.client_id)
        existing_order.product_id = data.get('product_id', existing_order.product_id)
        existing_order.quantity = data.get('quantity', existing_order.quantity)
        existing_order.total_price = data.get('total_price', existing_order.total_price)

        self.order_repo.update_order(existing_order)

    def order_details(self, order_id):
        return self.order_detail_repo.get_order_details_by_order_id(order_id)

    def modify_order(self, order_id, order_data):
        self.order_repo.modify_order(order_id, order_data)

    def get_orders_for_driver(self, driver_username):
        return self.order_repo.get_orders_for_driver(driver_username)

    def update_order_status(self, order_id, driver_username, new_status):
        return self.order_repo.update_order_status(order_id, driver_username, new_status)

    def get_all_orders(self):
        return self.order_repo.get_all_orders()
