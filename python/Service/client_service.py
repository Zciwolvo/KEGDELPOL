from Repository import customer_repo, order_repo, product_repo, order_detail_repo
from Model import order

class ClientService:
    def __init__(self, db):
        self.client_repo = customer_repo.CustomerRepo(db)
        self.order_repo = order_repo.OrderRepo(db)
        self.product_repo = product_repo.ProductRepo(db)
        self.order_detail_repo = order_detail_repo.OrderDetailRepo(db)

    def get_orders_by_client_id(self, client_id):
        return self.order_repo.get_orders_by_client_id(client_id)

    def add_order(self, new_order):
        self.order_repo.add_order(new_order)

    def delete_order(self, order_id):
        self.order_repo.delete_order(order_id)

    def update_order(self, order_id, data):
        existing_order = self.order_repo.get_order_by_id(order_id)
        if not existing_order:
            raise ValueError("Order not found")

        existing_order.client_id = data.get('client_id', existing_order.client_id)
        existing_order.product_id = data.get('product_id', existing_order.product_id)
        existing_order.quantity = data.get('quantity', existing_order.quantity)
        existing_order.total_price = data.get('total_price', existing_order.total_price)

        self.order_repo.update_order(existing_order)

    def get_order_details(self, order_id):
        return self.order_detail_repo.get_order_details_by_order_id(order_id)
