from models import Order
from flask_sqlalchemy import SQLAlchemy

class OrderRepository:
    def __init__(self):
        self.db = SQLAlchemy()

    def get_orders_for_driver(self, driver_username):
        return Order.query.filter_by(driver_id=driver_username).all()

    def add_order(self, new_order):
        self.db.session.add(new_order)
        self.db.session.commit()

    def delete_order(self, order_id):
        order = self.db.session.query(Order).filter(Order.order_id == order_id).first()
        self.db.session.delete(order)
        self.db.session.commit()

    def modify_order(self, order_id, order_data):
        order = self.db.session.query(Order).filter(Order.order_id == order_id).first()
        for key in order_data:
            setattr(order, key, order_data[key])
        self.db.session.commit()
    
    def get_all_orders(self):
        return self.db.session.query(Order).all()
      
    def update_order_status(self, order_id, driver_username, new_status):
        order = Order.query.filter_by(order_id=order_id, driver_id=driver_username).first()
        if order:
            order.status = new_status
            self.db.session.commit()
            return True
        return False
