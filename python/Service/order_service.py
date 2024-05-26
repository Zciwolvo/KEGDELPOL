from order_repository import OrderRepository

class OrderService:
    def __init__(self):
        self.order_repo = OrderRepository()

    def get_orders_for_driver(self, driver_username):
        return self.order_repo.get_orders_for_driver(driver_username)

    def update_order_status(self, order_id, driver_username, new_status):
        return self.order_repo.update_order_status(order_id, driver_username, new_status)
