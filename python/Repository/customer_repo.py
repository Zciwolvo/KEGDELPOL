from Model.order import Order
from Model.customer import Customer

class CustomerRepository:
    def __init__(self, db):
        self.db = db

    def get_orders_by_client_id(self, client_id):
        return self.db.session.query(Order).filter(Order.customer_id == client_id).all()

    def add_user(self, new_user):
        self.db.session.add(new_user)
        self.db.session.commit()

    def modify_user(self, user_id, user_data):
        user = self.db.session.query(Customer).filter(Customer.customer_id == user_id).first()
        for key in user_data:
            setattr(user, key, user_data[key])
        self.db.session.commit()

    def delete_user(self, user_id):
        user = self.db.session.query(Customer).filter(Customer.customer_id == user_id).first()
        self.db.session.delete(user)
        self.db.session.commit()
