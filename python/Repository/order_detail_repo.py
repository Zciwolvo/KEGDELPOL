from flask_sqlalchemy import SQLAlchemy
from Model import order_detail, order, product, customer


class OrderDetailRepository:
    def __init__(self, db):
        self.db = db
    def update_order_detail(self, order_detail):
        self.db.session.commit()
    def get_order_details(self, order_id):
        return self.db.query(ord).filter(order_detail.order_id == order_id).all()