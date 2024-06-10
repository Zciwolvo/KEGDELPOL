from flask import Blueprint, jsonify, request
from Service import employee_service
from Model import customer, vehicle
from Repository import customer_repo, driver_repo, employee_repo, vehicle_repo, product_repo

# Dodawać, modyfikować oraz usuwać użytkowników
employee_microservice = Blueprint('employee_microservice', __name__)
employee_service = employee_service()

# add vehicle
@employee_microservice.route('/vehicles', methods=['POST'])
def add_vehicle():
     # Walidacja wymaganych pól
        data = request.get_json()  # Define the variable "data" by getting the JSON data
        
        required_fields = ['vehicle_id', 'type', 'capacity', 'registration_info']
        for field in required_fields:
            if field not in data:
                return jsonify({'error': f'Missing required field: {field}'}), 400

        # Utworzenie nowego obiektu Vehicle przy użyciu danych
        new_vehicle = vehicle.Vehicle(
            vehicle_id=data['vehicle_id'],
            type=data['make'],
            model=data['type'],
            capacity=data['capacity'],
            registration_info=data['registration_info']
        )

        # Dodanie nowego pojazdu do bazy danych przy użyciu serwisu
        employee_service.add_vehicle(new_vehicle)

        return jsonify({'message': 'Vehicle added successfully'}), 201

@employee_microservice.route('/products', methods=['GET'])
def get_all_products():
    products = product_repo.get_all_products()
    return jsonify(products), 200

@employee_microservice.route('/users', methods=['GET'])
def get_all_users():
    customers = customer_repo.get_all_customers()
    drivers = driver_repo.get_all_drivers()
    employees = employee_repo.get_all_employees()

    all_users = customers + drivers + employees

    return jsonify(all_users), 200






