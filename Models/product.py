from sqlalchemy import create_engine, Column, Integer, String, Text, DateTime, Decimal, ForeignKey
from sqlalchemy.orm import relationship
from sqlalchemy.ext.declarative import declarative_base

Base = declarative_base()


class Product(Base):
    """
    product model class
    """
    __tablename__ = 'product'

    product_id = Column(Integer, primary_key=True)
    name = Column(String)
    description = Column(Text)
    price = Column(Decimal)