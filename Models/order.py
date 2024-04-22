from sqlalchemy import create_engine, Column, Integer, String, Text, DateTime, Decimal, ForeignKey
from sqlalchemy.orm import relationship
from sqlalchemy.ext.declarative import declarative_base

Base = declarative_base()

class Order(Base):
    """
    order model class
    """
    __tablename__ = 'order'

    order_id = Column(Integer, primary_key=True)
    customer_id = Column(Integer, ForeignKey('customer.customer_id'))
    order_date = Column(DateTime)
    delivery_date = Column(DateTime)
    status = Column(String)
    weight = Column(Decimal)