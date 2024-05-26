from flask import Blueprint, jsonify, request
from Model import order
from Service import order_service

order_microservice = Blueprint('order_microservice', __name__)
order_service = order_service()

#Add order
@order_microservice.route('/orders', methods=['POST'])
def add_order():
    # Expecting JSON with data for the new order
    data = request.get_json()
    # Create a new Order object using the data
    new_order = order.Order(data['order_id'], data['client_id'], data['product_id'], data['quantity'], data['total_price'])
    
    # Add the new order to the database using the repository
    order_service.add_order(new_order)
    
    return jsonify({"message": "Order added successfully"})

#Get orders by client ID
@order_microservice.route('/client/<int:client_id>', methods=['GET'])
def get_orders(client_id):
    orders = order_service.get_orders_by_client_id(client_id)
    return jsonify(orders)

#Delete order
@order_microservice.route('/orders/<order_id>', methods=['DELETE'])
def delete_order(order_id):
    order_service.delete_order(order_id)
    return jsonify({"message": "Order deleted successfully"})

#Update order
@order_microservice.route('/orders/<order_id>', methods=['PUT'])
def update_order(order_id):
    data = request.get_json()
    order_service.update_order(order_id, data)
    
    return jsonify({"message": "Order updated successfully"})

#Get order details
@order_microservice.route('/orders/details/<order_id>', methods=['GET'])
def order_details(order_id):
    order = order_service.get_order_details(order_id)
    return jsonify(order)

#modify order
@order_microservice.route('/orders/<order_id>', methods=['PUT'])
def modify_order(order_id):
    data = request.get_json()

    if not data:
        return jsonify({'error': 'Invalid or missing JSON data'}), 400

    # Użyj serwisu do modyfikacji zamówienia
    order_service.modify_order(order_id, data)

    return jsonify({'message': 'Order modified successfully'}), 200

#get orders
@order_microservice.route('/orders', methods=['GET'])
def get_orders():
     # Użyj serwisu do pobrania wszystkich zamówień
    orders = order_service.get_all_orders()

        # Przekonwertuj zamówienia na format JSON i zwróć
    return jsonify(orders), 200


