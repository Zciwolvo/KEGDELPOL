from flask_sqlalchemy import SQLAlchemy
from Model import order, order_detail, product, customer
from Model import OrderDetail



class CustomerRepository:
    def __init__(self, db):
        self.db = db
    def get_orders_by_client_id(self, client_id):
        return self.db.query(order).filter(order.customer_id == client_id).all()

    def add_order(self, new_order):
        self.db.add(new_order)
        self.db.commit()

    def delete_order(self, order_id):
        order_to_delete = self.db.query(order).filter(order.order_id == order_id).first()
        if order_to_delete:
            self.db.delete(order_to_delete)
            self.db.commit()

    def update_order(self, order_id, data):
        order_to_update = self.db.query(order).filter(order.order_id == order_id).first()
        if order_to_update:
            for key, value in data.items():
                setattr(order_to_update, key, value)
            self.db.commit()

    def get_order_details(self, order_id):
        return self.db.query(OrderDetail).filter(OrderDetail.order_id == order_id).all()


    def add_items_to_order(self, order_id, items_data):
        for item_data in items_data:
            new_item = OrderDetail(order_id=order_id, product_id=item_data['product_id'], quantity=item_data['quantity'], total_price=item_data['total_price'])
            self.db.add(new_item)
        self.db.commit()

    def delete_item(self, order_id, item_id):
        item_to_delete = self.db.query(OrderDetail).filter(OrderDetail.order_id == order_id, OrderDetail.order_detail_id == item_id).first()
        if item_to_delete:
            self.db.delete(item_to_delete)
            self.db.commit()

    def update_item(self, order_id, item_id, data):
        item_to_update = self.db.query(OrderDetail).filter(OrderDetail.order_id == order_id, OrderDetail.order_detail_id == item_id).first()
        if item_to_update:
            for key, value in data.items():
                setattr(item_to_update, key, value)
            self.db.commit()