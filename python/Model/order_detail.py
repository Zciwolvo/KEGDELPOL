from sqlalchemy import create_engine, Column, Integer, String, Text, DateTime, Decimal, ForeignKey
from sqlalchemy.orm import relationship
from sqlalchemy.ext.declarative import declarative_base

Base = declarative_base()

class OrderDetail(Base):
    """
    order detail model class
    """
    __tablename__ = 'order_detail'

    order_detail_id = Column(Integer, primary_key=True)
    order_id = Column(Integer, ForeignKey('order.order_id'))
    product_id = Column(Integer, ForeignKey('product.product_id'))
    quantity = Column(Integer)
    total_price = Column(Decimal)