import unittest
from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from MicroService import auth_microservice, client_microservice, driver_microservice, employee_microservice, notification_microservice, order_microservice
from Service.auth_service import AuthService

class AuthMicroserviceTestCase(unittest.TestCase):

    def setUp(self):
        self.app = Flask(__name__)
        self.app.config['TESTING'] = True
        self.app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql+pymysql://IgorGawlowicz:micro4321@IgorGawlowicz.mysql.pythonanywhere-services.com/IgorGawlowicz$test'
        self.app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

        self.db = SQLAlchemy(self.app)
        self.app.config['db'] = self.db

        with self.app.app_context():
            self.db.create_all()

        self.app.register_blueprint(auth_microservice.auth_microservice, url_prefix='/auth')
        self.app.register_blueprint(client_microservice.client_microservice, url_prefix='/client')
        self.app.register_blueprint(driver_microservice.driver_microservice, url_prefix='/driver')
        self.app.register_blueprint(employee_microservice.employee_microservice, url_prefix='/employee')
        self.app.register_blueprint(notification_microservice.notification_microservice, url_prefix='/notification')
        self.app.register_blueprint(order_microservice.order_microservice, url_prefix='/order')

        self.client = self.app.test_client()
        self.auth_service = AuthService(self.db)

    def tearDown(self):
        with self.app.app_context():
            self.db.session.remove()
            self.db.drop_all()

    def test_register_user(self):
        response = self.client.post('/auth/register', json={
            'username': 'testuser',
            'password': 'password123',
            'role': 'user'
        })
        self.assertEqual(response.status_code, 201)
        self.assertEqual(response.get_json(), {'message': 'User registered successfully'})

    def test_login_user(self):
        self.auth_service.register_user('testuser', 'password123', 'user')
        response = self.client.post('/auth/login', json={
            'username': 'testuser',
            'password': 'password123'
        })
        self.assertEqual(response.status_code, 200)
        self.assertIn('token', response.get_json())

    def test_login_user_invalid_credentials(self):
        response = self.client.post('/auth/login', json={
            'username': 'wronguser',
            'password': 'wrongpassword'
        })
        self.assertEqual(response.status_code, 401)
        self.assertEqual(response.get_json(), {'message': 'Invalid credentials'})

    def test_check_authorization(self):
        self.auth_service.register_user('testuser', 'password123', 'user')
        token = self.auth_service.generate_jwt_token('testuser')

        response = self.client.post('/auth/check_authorization', json={'role': 'user'},
                                    headers={'Authorization': f'Bearer {token}'})
        self.assertEqual(response.status_code, 200)
        self.assertEqual(response.get_json(), {'message': 'Authorized'})

    def test_check_authorization_invalid_role(self):
        self.auth_service.register_user('testuser', 'password123', 'user')
        token = self.auth_service.generate_jwt_token('testuser')

        response = self.client.post('/auth/check_authorization', json={'role': 'admin'},
                                    headers={'Authorization': f'Bearer {token}'})
        self.assertEqual(response.status_code, 403)
        self.assertEqual(response.get_json(), {'message': 'Not authorized'})

if __name__ == '__main__':
    unittest.main()
