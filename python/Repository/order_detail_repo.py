from Model.order_detail import OrderDetail

class OrderDetailRepository:
    def __init__(self, db):
        self.db = db

    def update_order_detail(self, order_detail):
        self.db.session.commit()

    def get_order_details(self, order_id):
        return self.db.session.query(OrderDetail).filter(OrderDetail.order_id == order_id).all()
