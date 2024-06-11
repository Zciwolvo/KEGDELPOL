import unittest
from unittest.mock import patch
from test_server import create_app, push_app_context
from flask import json

class OrderMicroserviceTestCase(unittest.TestCase):

    @classmethod
    def setUpClass(cls):
        cls.app, cls.db = create_app()
        cls.app_context = push_app_context(cls.app)
        cls.client = cls.app.test_client()

    @classmethod
    def tearDownClass(cls):
        cls.app_context.pop()

    def setUp(self):
        with self.app.app_context():
            self.db.create_all()

    def tearDown(self):
        with self.app.app_context():
            self.db.session.remove()
            self.db.drop_all()

    @patch('Service.order_service.OrderService.add_order')
    def test_add_order_success(self, mock_add_order):
        order_data = {
            'order_id': 1,
            'client_id': 1,
            'product_id': 1,
            'quantity': 10,
            'total_price': 100.00
        }
        response = self.client.post('/order/orders', json=order_data)
        self.assertEqual(response.status_code, 201)
        self.assertEqual(response.get_json(), {'message': 'Order added successfully'})
        mock_add_order.assert_called_once()
        args, kwargs = mock_add_order.call_args
        self.assertEqual(args[0].order_id, order_data['order_id'])
        self.assertEqual(args[0].client_id, order_data['client_id'])
        self.assertEqual(args[0].product_id, order_data['product_id'])
        self.assertEqual(args[0].quantity, order_data['quantity'])
        self.assertEqual(args[0].total_price, order_data['total_price'])

    def test_add_order_missing_json(self):
        response = self.client.post('/order/orders')
        self.assertEqual(response.status_code, 415)
        self.assertEqual(response.get_json(), None)

    def test_add_order_missing_fields(self):
        incomplete_data = {
            'order_id': 1,
            'client_id': 1,
            'product_id': 1,
            'quantity': 10,
            'total_price': '100.00'
        }
        response = self.client.post('/order/orders', json=incomplete_data)
        self.assertEqual(response.status_code, 400)
        self.assertIn('Missing required field', response.get_json()['error'])

    @patch('Service.order_service.OrderService.get_orders_by_client_id')
    def test_get_orders_success(self, mock_get_orders_by_client_id):
        customer_id = 1
        mock_get_orders_by_client_id.return_value = [{'order_id': 1, 'customer_id': 1, 'product_id': 1, 'quantity': 10, 'total_price': 100.00}]
        response = self.client.get(f'/order/client/{customer_id}')
        self.assertEqual(response.status_code, 200)
        self.assertEqual(response.get_json(), [{'order_id': 1, 'client_id': 1, 'product_id': 1, 'quantity': 10, 'total_price': 100.00}])
        mock_get_orders_by_client_id.assert_called_once_with(customer_id)

    @patch('Service.order_service.OrderService.delete_order')
    def test_delete_order_success(self, mock_delete_order):
        order_id = "1"
        response = self.client.delete(f'/order/orders/{order_id}')
        self.assertEqual(response.status_code, 200)
        self.assertEqual(response.get_json(), {'message': 'Order deleted successfully'})
        mock_delete_order.assert_called_once_with(order_id)

    @patch('Service.order_service.OrderService.update_order')
    def test_update_order_success(self, mock_update_order):
        order_id = "1"
        update_data = {'status': 'shipped'}
        response = self.client.put(f'/order/orders/{order_id}', json=update_data)
        self.assertEqual(response.status_code, 200)
        self.assertEqual(response.get_json(), {'message': 'Order updated successfully'})
        mock_update_order.assert_called_once_with(order_id, update_data)

    @patch('Service.order_service.OrderService.order_details')
    def test_order_details_success(self, mock_order_details):
        order_id = 1
        mock_order_details.return_value = {'order_id': 1, 'client_id': 1, 'product_id': 1, 'quantity': 10, 'total_price': 100.00}
        response = self.client.get(f'/order/orders/details/{order_id}')
        self.assertEqual(response.status_code, 200)
        self.assertEqual(response.get_json(), {'order_id': 1, 'client_id': 1, 'product_id': 1, 'quantity': 10, 'total_price': 100.00})
        mockorder_details.assert_called_once_with(order_id)

    @patch('Service.order_service.OrderService.get_all_orders')
    def test_get_all_orders_success(self, mock_get_all_orders):
        mock_get_all_orders.return_value = [{'order_id': 1, 'client_id': 1, 'product_id': 1, 'quantity': 10, 'total_price': 100.00}]
        response = self.client.get('/order/orders')
        self.assertEqual(response.status_code, 200)
        self.assertEqual(response.get_json(), [{'order_id': 1, 'client_id': 1, 'product_id': 1, 'quantity': 10, 'total_price': 100.00}])
        mock_get_all_orders.assert_called_once()

if __name__ == '__main__':
    unittest.main()
