from flask import Blueprint, jsonify
from Model import order, product, order_detail, client
from Repository import order_repo, product_repo, customer_repo, order_detail_repo
from flask import request
from Repository import client_repo

# Na podstawie ID klienta sprawdza jego zamówienia, można je wyświetlić
# Klient może dodać zamówienia, które są przypisane do jego ID
# Klient może usunąć zamówienia, które są przypisane do jego ID
# Klient może zaktualizować zamówienia, które są przypisane do jego ID
# Klient może zobaczyć szczegóły zamówienia, które są przypisane do jego ID
# Klient może dodawać, usuwać i modyfikować przedmioty


client_microservice = Blueprint('client_microservice', __name__)

repo = client_repo.ClientRepo()
@client_microservice.route('/client/<int:client_id>', methods=['GET'])
def get_orders(client_id):
    orders = repo.get_orders_by_client_id(client_id)
    return jsonify(orders)

@client_microservice.route('/orders', methods=['POST'])
def add_order():
    # Expecting JSON with data for the new order
    data = request.get_json()
    
    # Create a new Order object using the data
    new_order = order.Order(data['order_id'], data['client_id'], data['product_id'], data['quantity'])
    
    # Add the new order to the database using the repository
    repo.add_order(new_order)
    
    return jsonify({"message": "Order added successfully"})

@client_microservice.route('/orders/<order_id>', methods=['DELETE'])
def delete_order(order_id):
    # Usuń zamówienie na podstawie jego ID
    repo.delete_order(order_id)
    return jsonify({"message": "Order deleted successfully"})

@client_microservice.route('/orders/<order_id>', methods=['PUT'])
def update_order(order_id):
    # Expecting JSON with data for the updated order
    data = request.get_json()
    
    # Update the order in the database using the repository
    repo.update_order(order_id, data)
    
    return jsonify({"message": "Order updated successfully"})

@client_microservice.route('/orders/details/<order_id>', methods=['GET'])
def order_details(order_id):
    order = repo.get_order_details(order_id)
    return jsonify(order)

@client_microservice.route('/orders/<order_id>/items', methods=['POST'])
def add_items(order_id):
    # Expecting JSON with data for the new items
    data = request.get_json()
    
    # Add the new items to the corresponding order in the database using the repository
    repo.add_items_to_order(order_id, data)
    
    return jsonify({"message": "Items added successfully"})

@client_microservice.route('/orders/<order_id>/items/<item_id>', methods=['DELETE'])
def delete_item(order_id, item_id):
    # Usuń przedmiot z zamówienia na podstawie ID zamówienia i ID przedmiotu
    repo.delete_item(order_id, item_id)
    return jsonify({"message": "Item deleted successfully"})

@client_microservice.route('/orders/<order_id>/items/<item_id>', methods=['PUT'])
def update_item(order_id, item_id):
    # Expecting JSON with data for the updated item
    data = request.get_json()
    
    # Update the item in the corresponding order in the database using the repository
    repo.update_item(order_id, item_id, data)
    
    return jsonify({"message": "Item updated successfully"})
