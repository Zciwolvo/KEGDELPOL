from models import Order
from flask_sqlalchemy import SQLAlchemy

class OrderRepository:
    def __init__(self):
        self.db = SQLAlchemy()

    def get_orders_for_driver(self, driver_username):
        return Order.query.filter_by(driver_id=driver_username).all()

    def update_order_status(self, order_id, driver_username, new_status):
        order = Order.query.filter_by(order_id=order_id, driver_id=driver_username).first()
        if order:
            order.status = new_status
            self.db.session.commit()
            return True
        return False
