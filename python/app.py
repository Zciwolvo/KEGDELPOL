# app.py
from flask import Flask
from MicroService import auth_microservice, client_microservice, driver_microservice, employee_microservice, notification_microservice, order_microservice

app = Flask(__name__)

app.register_blueprint(auth_microservice.auth_microservice, url_prefix='auth')
app.register_blueprint(client_microservice.client_microservice, url_prefix='client')
app.register_blueprint(driver_microservice.driver_microservice, url_prefix='driver')
app.register_blueprint(employee_microservice.employee_microservice, url_prefix='employee')
app.register_blueprint(notification_microservice.notification_microservice, url_prefix='notification')
app.register_blueprint(order_microservice.order_microservice, url_prefix='order')

@app.route('/')
def hello():
    return 'Hello, World!'

if __name__ == '__main__':
    app.run(debug=True)
