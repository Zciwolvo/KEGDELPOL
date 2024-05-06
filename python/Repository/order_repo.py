from flask_sqlalchemy import SQLAlchemy
from models import Order  # Assuming you have an Order model defined in models.py


class OrderRepository:
    def __init__(self, db):
        self.db = db

# 
    def select_orders():
        return self.db.session.query(Order).all()
