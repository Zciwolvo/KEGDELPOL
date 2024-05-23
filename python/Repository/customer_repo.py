from flask_sqlalchemy import SQLAlchemy
from Model import order, order_detail, product, customer
from Model import OrderDetail



class CustomerRepository:
    def __init__(self, db):
        self.db = db
    def get_orders_by_client_id(self, client_id):
        return self.db.query(order).filter(order.customer_id == client_id).all()
    
    def add_user(self, new_user):
        self.db.add(new_user)
        self.db.commit()

    def modify_user(self, user_id, user_data):
        user = self.db.query(customer).filter(customer.id == user_id).first()
        for key in user_data:
            setattr(user, key, user_data[key])
        self.db.commit()
    def delete_user(self, user_id):
        user = self.db.query(customer).filter(customer.id == user_id).first()
        self.db.delete(user)
        self.db.commit()
