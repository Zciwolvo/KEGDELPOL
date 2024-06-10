from flask_sqlalchemy import SQLAlchemy


class ProductRepository:
    def __init__(self, db):
        self.db = db
        
    def get_all_products(self):
        products = self.db.session.query(Product).all()
        return [product.to_dict() for product in products]
