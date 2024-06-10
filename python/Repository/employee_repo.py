from flask_sqlalchemy import SQLAlchemy


class EmployeeRepository:
    def __init__(self, db):
        self.db = db
        
    def get_all_employees(self):
        employees = self.db.session.query(employee).all()
        return [employee.to_dict() for employee in employees]
