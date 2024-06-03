from sqlalchemy import Column, Integer, String, Decimal, ForeignKey
from sqlalchemy.orm import relationship
from sqlalchemy.ext.declarative import declarative_base

Base = declarative_base()

class Route(Base):
    """
    route model class
    """
    __tablename__ = 'route'

    route_id = Column(Integer, primary_key=True)
    start_location = Column(String)
    end_location = Column(String)
    distance = Column(Decimal)
    estimated_duration = Column(Integer)
    assigned_driver_id = Column(Integer, ForeignKey('driver.employee_id'))
    assigned_vehicle_id = Column(Integer, ForeignKey('vehicle.vehicle_id'))