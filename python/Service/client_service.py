from Repository import CustomerRepository, order_repo, product_repo, order_detail_repo
from Repository import order




class ClientService:
    def __init__(self, db):
        self.client_repo = CustomerRepository(db)
        self.order_repo: order_repo = order_repo.OrderRepo(db)
        self.product_repo = product_repo.ProductRepo(db)
        self.order_detail_repo = order_detail_repo.OrderDetailRepo(db)

    def get_orders_by_client_id(self, client_id):
        return self.client_repo.get_orders_by_client_id(client_id)
    def add_order(self, data):
        new_order = order.Order(data['order_id'], data['client_id'], data['product_id'], data['quantity'])
        self.order_repo.add_order(new_order)

    def delete_order(self, order_id):
        self.order_repo.delete_order(order_id)

    def update_order(self, order_id, data):
        self.order_repo.update_order(order_id, data)

    def get_order_details(self, order_id):
        return self.order_detail_repo.get_order_details(order_id)

    def add_items_to_order(self, order_id, data):
        self.order_detail_repo.add_items_to_order(order_id, data)

    def delete_item(self, order_id, item_id):
        self.order_detail_repo.delete_item(order_id, item_id)

    def update_item(self, order_id, item_id, data):
        self.order_detail_repo.update_item(order_id, item_id, data)