from flask import Blueprint, jsonify, request
from Service import employee_service
from Model import customer, vehicle

# Dodawać, modyfikować oraz usuwać użytkowników
employee_microservice = Blueprint('employee_microservice', __name__)
employee_service = employee_service()

#add  user
@employee_microservice.route('/users', methods=['POST'])
def add_user():
    
        # Oczekujemy danych w formacie JSON
        data = request.get_json()

        if not data:
            return jsonify({'error': 'Invalid or missing JSON data'}), 400

        # Walidacja wymaganych pól
        required_fields = ['customer_id', 'name', 'address', 'phone_number', 'auth_id']
        for field in required_fields:
            if field not in data:
                return jsonify({'error': f'Missing required field: {field}'}), 400

        # Utworzenie nowego obiektu User przy użyciu danych
        new_user = customer.Customer(
            customer_id=data['customer_id'],
            name=data['name'],
            address=data['address'],
            phone_number=data['phone_number'],
            auth_id=data['auth_id']
        )

        # Dodanie nowego użytkownika do bazy danych przy użyciu serwisu
        employee_service.add_user(new_user)

        return jsonify({'message': 'User added successfully'}), 201


#modify user
@employee_microservice.route('/users/<user_id>', methods=['PUT'])
def modify_user(user_id):
     # Oczekujemy danych w formacie JSON
        data = request.get_json()

        if not data:
            return jsonify({'error': 'Invalid or missing JSON data'}), 400

        # Użyj serwisu do modyfikacji użytkownika
        employee_service.modify_user(user_id, data)

        return jsonify({'message': 'User modified successfully'}), 200

#delete user
@employee_microservice.route('/users/<user_id>', methods=['DELETE'])
def delete_user(user_id):
        # Użyj serwisu do modyfikacji użytkownika
        employee_service.delete_user(user_id, data)

        return jsonify({'message': 'User modified successfully'}), 200

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

#modify order
@employee_microservice.route('/orders/<order_id>', methods=['PUT'])
def modify_order(order_id):
    data = request.get_json()

    if not data:
        return jsonify({'error': 'Invalid or missing JSON data'}), 400

    # Użyj serwisu do modyfikacji zamówienia
    employee_service.modify_order(order_id, data)

    return jsonify({'message': 'Order modified successfully'}), 200

#get orders
@employee_microservice.route('/orders', methods=['GET'])
def get_orders():
     # Użyj serwisu do pobrania wszystkich zamówień
    orders = employee_service.get_all_orders()

        # Przekonwertuj zamówienia na format JSON i zwróć
    return jsonify(orders), 200

#get order details
@employee_microservice.route('/orders/<order_id>', methods=['GET'])
def get_order_details(order_id):
    order_details = employee_service.get_order_details(order_id)

        # Sprawdź, czy znaleziono zamówienie
    if not order_details:
        return jsonify({'error': 'Order not found'}), 404

        # Przekonwertuj szczegóły zamówienia na format JSON i zwróć
    return jsonify(order_details), 200


