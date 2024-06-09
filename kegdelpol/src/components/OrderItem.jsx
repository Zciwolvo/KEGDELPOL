import React, { useState, useEffect } from 'react';
import StatusButton from './StatusButton';
import { ListGroupItem, Row, Col } from 'react-bootstrap';
import './OrderItem.css';

const OrderItem = ({ order, onUpdateOrder }) => {
  const [status, setStatus] = useState(order.status);

  const handleStatusChange = (newStatus) => {
    setStatus(newStatus);
    onUpdateOrder({ ...order, status: newStatus });
  };

  useEffect(() => {
    setStatus(order.status); // Ensure status sync when order changes
  }, [order]);

  return (
    <ListGroupItem className="order-item">
      <Row>
        <Col md={3}>
          <div><strong>{order.name}</strong></div>
        </Col>
        <Col md={3}>
          <div>Order Date: <br /> {order.orderDate}</div>
        </Col>
        <Col md={3}>
          <div>Delivery Date: <br /> {order.deliveryDate}</div>
        </Col>
        <Col md={3}>
          <Row>
            <Col md={6}>
              <div>Status: {status}</div>
            </Col>
            <Col md={6}>
              <div className="status-button">
                <StatusButton currentStatus={status} onStatusChange={handleStatusChange} />
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </ListGroupItem>
  );
};

export default OrderItem;
