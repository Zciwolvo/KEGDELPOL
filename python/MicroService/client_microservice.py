from flask import Blueprint, jsonify
from Model import order, product, order_detail, client
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

#Get orders by client ID
@client_microservice.route('/client/<int:client_id>', methods=['GET'])
def get_orders(client_id):
    orders = client_service.get_orders_by_client_id(client_id)
    return jsonify(orders)

#Add order
@client_microservice.route('/orders', methods=['POST'])
def add_order():
    # Expecting JSON with data for the new order
    data = request.get_json()
    # Create a new Order object using the data
    new_order = order.Order(data['order_id'], data['client_id'], data['product_id'], data['quantity'], data['total_price'])
    
    # Add the new order to the database using the repository
    client_service.add_order(new_order)
    
    return jsonify({"message": "Order added successfully"})

#Delete order
@client_microservice.route('/orders/<order_id>', methods=['DELETE'])
def delete_order(order_id):
    client_service.delete_order(order_id)
    return jsonify({"message": "Order deleted successfully"})

#Update order
@client_microservice.route('/orders/<order_id>', methods=['PUT'])
def update_order(order_id):
    data = request.get_json()
    client_service.update_order(order_id, data)
    
    return jsonify({"message": "Order updated successfully"})

#Get order details
@client_microservice.route('/orders/details/<order_id>', methods=['GET'])
def order_details(order_id):
    order = client_service.get_order_details(order_id)
    return jsonify(order)

