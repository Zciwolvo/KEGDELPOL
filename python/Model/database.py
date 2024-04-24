from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from .customer import Customer
from .order import Order
from .product import Product
from .order_detail import OrderDetail
from .driver import Driver
from .vehicle import Vehicle
from .route import Route
from .delivery import Delivery
from .employee import Employee
from .authentication import Authentication
from .role import Role
from .status import Status
from .customer import Base as CustomerBase


Base = CustomerBase
engine = create_engine('mysql://admin:password@localhost/KEGDELPOL_Database')
Base.metadata.create_all(engine)
Session = sessionmaker(bind=engine)
session = Session()
