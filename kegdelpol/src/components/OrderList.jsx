import React from 'react';
import OrderItem from './OrderItem';
import { ListGroup } from 'react-bootstrap';

const OrderList = ({ orders }) => {
  return (
    <ListGroup className="order-list">
      {orders.map((order, index) => (
        <OrderItem key={index} order={order} />
      ))}
    </ListGroup>
  );
};

export default OrderList;
