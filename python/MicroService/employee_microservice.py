from flask import Blueprint, jsonify, request, current_app
from Service.employee_service import EmployeeService
from Model.vehicle import Vehicle

employee_microservice = Blueprint('employee_microservice', __name__)

@employee_microservice.before_app_request
def create_employee_service():
    db = current_app.config['db']
    employee_microservice.employee_service = EmployeeService(db)

# Add vehicle
@employee_microservice.route('/vehicles', methods=['POST'])
def add_vehicle():
    data = request.get_json()
    if not data:
        return jsonify({'error': 'Invalid or missing JSON data'}), 400

    required_fields = ['vehicle_id', 'type', 'capacity', 'registration_info']
    for field in required_fields:
        if field not in data:
            return jsonify({'error': f'Missing required field: {field}'}), 400

    new_vehicle = Vehicle(
        vehicle_id=data['vehicle_id'],
        type=data['type'],
        capacity=data['capacity'],
        registration_info=data['registration_info']
    )

    employee_service = employee_microservice.employee_service
    employee_service.add_vehicle(new_vehicle)

    return jsonify({'message': 'Vehicle added successfully'}), 201
