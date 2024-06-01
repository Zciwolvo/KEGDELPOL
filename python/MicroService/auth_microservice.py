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

@auth_microservice.route('/register', methods=['POST'])
def register():
    data = request.get_json()
    username = data.get('username')
    password = data.get('password')
    role = data.get('role')

    if not username or not password or not role:
        return jsonify({'message': 'Username, password or role is missing'}), 400

    user = auth_service.register_user(username, password, role)
    return jsonify({'message': 'User registered successfully'}), 201

@auth_microservice.route('/check_authorization', methods=['POST'])
def check_authorization():
    token = request.headers.get('Authorization').split()[1]
    data = jwt.decode(token, auth_service.secret_key, algorithms=['HS256'])
    required_role = request.get_json().get('role')

    if data['role'] == required_role:
        return jsonify({'message': 'Authorized'}), 200
    else:
        return jsonify({'message': 'Not authorized'}), 403
