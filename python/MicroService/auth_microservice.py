from flask import Blueprint, jsonify, request
from Service import AuthService

auth_microservice = Blueprint('auth_microservice', __name__)
auth_service = AuthService()

@auth_microservice.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    username = data.get('username')
    password = data.get('password')

    if not username or not password:
        return jsonify({'message': 'Username or password is missing'}), 400

    if auth_service.authenticate_user(username, password):
        token = auth_service.generate_jwt_token(username)
        return jsonify({'token': token}), 200
    else:
        return jsonify({'message': 'Invalid credentials'}), 401
