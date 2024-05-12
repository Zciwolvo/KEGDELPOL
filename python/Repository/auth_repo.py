from Model import Authentication


class AuthRepository:
    def get_user_by_username(self, username):
        return Authentication.query.filter_by(login=username).first()
