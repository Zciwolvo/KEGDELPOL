import jwt
from datetime import datetime, timedelta
from Repository import AuthRepository

class AuthService:
    def __init__(self):
        self.auth_repo = AuthRepository()
        self.secret_key = 'your_secret_key'  # Change this to a secure secret key

    def authenticate_user(self, username, password):
        user = self.auth_repo.get_user_by_username(username)
        if user and user.password == password:
            return True
        return False

    def generate_jwt_token(self, username):
        payload = {
            'username': username,
            'exp': datetime.utcnow() + timedelta(days=1)  # Token expiration time (e.g., 1 day)
        }
        token = jwt.encode(payload, self.secret_key, algorithm='HS256')
        return token.decode('utf-8')
