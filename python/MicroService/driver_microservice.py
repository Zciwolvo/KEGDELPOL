from flask import Blueprint, jsonify, request
from jwt_util import decode_jwt_token
from driver_service import DriverService

driver_microservice = Blueprint('driver_microservice', __name__)
driver_service = DriverService()

@driver_microservice.route('/orders', methods=['GET'])
def get_orders():
    auth_header = request.headers.get('Authorization')
    if not auth_header:
        return jsonify({'message': 'Missing Authorization header'}), 401

    token = auth_header.split(" ")[1]
    try:
        username = decode_jwt_token(token)['username']
    except Exception as e:
        return jsonify({'message': 'Invalid token'}), 401

    orders = driver_service.get_orders_for_driver(username)
    return jsonify({'orders': orders}), 200

@driver_microservice.route('/orders/<int:order_id>', methods=['PUT'])
def update_order_status(order_id):
    auth_header = request.headers.get('Authorization')
    if not auth_header:
        return jsonify({'message': 'Missing Authorization header'}), 401

    token = auth_header.split(" ")[1]
    try:
        username = decode_jwt_token(token)['username']
    except Exception as e:
        return jsonify({'message': 'Invalid token'}), 401

    data = request.get_json()
    new_status = data.get('status')
    if not new_status:
        return jsonify({'message': 'Missing status in request body'}), 400

    success = driver_service.update_order_status(order_id, username, new_status)
    if success:
        return jsonify({'message': 'Order status updated successfully'}), 200
    else:
        return jsonify({'message': 'Failed to update order status'}), 400
