from flask import Blueprint, jsonify
from Model import order, product, order_detail, customer
from Repository import order_repo, product_repo, customer_repo, order_detail_repo
from flask import request
from Service import client_service

# Na podstawie ID klienta sprawdza jego zamówienia, można je wyświetlić
# Klient może dodać zamówienia, które są przypisane do jego ID
# Klient może usunąć zamówienia, które są przypisane do jego ID
# Klient może zaktualizować zamówienia, które są przypisane do jego ID
# Klient może zobaczyć szczegóły zamówienia, które są przypisane do jego ID
# Klient może dodawać, usuwać i modyfikować przedmioty


client_microservice = Blueprint('client_microservice', __name__)
client_service = client_service()

#add  user
@client_microservice.route('/users', methods=['POST'])
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
        client_service.add_user(new_user)

        return jsonify({'message': 'User added successfully'}), 201

#modify user
@client_microservice.route('/users/<user_id>', methods=['PUT'])
def modify_user(user_id):
     # Oczekujemy danych w formacie JSON
        data = request.get_json()

        if not data:
            return jsonify({'error': 'Invalid or missing JSON data'}), 400

        # Użyj serwisu do modyfikacji użytkownika
        client_service.modify_user(user_id, data)

        return jsonify({'message': 'User modified successfully'}), 200

#delete user
@client_microservice.route('/users/<user_id>', methods=['DELETE'])
def delete_user(user_id):
        # Użyj serwisu do modyfikacji użytkownika
        client_service.delete_user(user_id, data)

        return jsonify({'message': 'User modified successfully'}), 200






