from flask_sqlalchemy import SQLAlchemy
from models import Order  # Assuming you have an Order model defined in models.py


class OrderRepository:
    def __init__(self, db):
        self.db = db

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