from Repository import customer_repo, order_repo, product_repo, order_detail_repo
from Model import order, customer, product, order_detail

class ClientService:
    def __init__(self, db):
        self.client_repo = customer_repo.CustomerRepo(db)
        self.order_repo = order_repo.OrderRepo(db)
        self.product_repo = product_repo.ProductRepo(db)
        self.order_detail_repo = order_detail_repo.OrderDetailRepo(db)

    
    def add_user(self, user_data):
        new_user = customer.Customer(**user_data)
        self.customer_repo.add_user(new_user)
    
    def modify_user(self, user_id, user_data):
        self.customer_repo.modify_user(user_id, user_data)
    
    def delete_user(self, user_id):
        self.customer_repo.delete_user(user_id)

