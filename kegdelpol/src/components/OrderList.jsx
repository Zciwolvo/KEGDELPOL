import React from 'react';
import OrderItem from './OrderItem';
import { ListGroup } from 'react-bootstrap';

const OrderList = ({ orders, onUpdateOrder }) => {
  return (
    <ListGroup className="order-list">
      {orders.map((order, index) => (
        <OrderItem key={index} order={order} onUpdateOrder={onUpdateOrder} />
      ))}
    </ListGroup>
  );
};

export default OrderList;
