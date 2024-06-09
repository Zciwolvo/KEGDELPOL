import jwt
from datetime import datetime, timedelta
from werkzeug.security import generate_password_hash, check_password_hash
from Repository.auth_repo import AuthRepository

class AuthService:
    def __init__(self, db):
        self.auth_repo = AuthRepository(db)
        self.secret_key = 'secret'

    def authenticate_user(self, username, password):
        user = self.auth_repo.get_user_by_username(username)
        if user and check_password_hash(user.password, password):
            return True
        return False

    def generate_jwt_token(self, username):
        user = self.auth_repo.get_user_by_username(username)
        payload = {
            'username': username,
            'role': user.role,
            'exp': datetime.utcnow() + timedelta(days=1)
        }
        token = jwt.encode(payload, self.secret_key, algorithm='HS256')
        return token

    def register_user(self, username, password, role):
        hashed_password = generate_password_hash(password)
        return self.auth_repo.create_user(username, hashed_password, role)
