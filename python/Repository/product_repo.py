from Model.product import Product

class ProductRepository:
    def __init__(self, db):
        self.db = db
        
    def get_all_orders(self):
        return self.db.session.query(Product).all()
    
    def add_product(self, new_product):
        self.db.session.add(new_product)
        self.db.session.commit()        
    