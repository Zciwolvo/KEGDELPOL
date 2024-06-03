from Service.order_service import OrderService

class DriverService:
    def __init__(self, db):
        self.order_service = OrderService(db)

    def get_orders_for_driver(self, driver_username):
        return self.order_service.get_orders_for_driver(driver_username)

    def update_order_status(self, order_id, driver_username, new_status):
        return self.order_service.update_order_status(order_id, driver_username, new_status)
