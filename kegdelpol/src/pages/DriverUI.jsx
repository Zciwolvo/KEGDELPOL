import React, { useState } from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import DropDownInput from '../Components/DropDownInput';
import OrderList from '../Components/OrderList';
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './DriverUI.css';
import SubmitButton from '../Components/SubmitButton';

const ordersData = [
  { name: 'Order 1', orderDate: '2024-06-01', deliveryDate: '2024-06-03', status: 'Pending' },
  { name: 'Order 2', orderDate: '2024-06-02', deliveryDate: '2024-06-04', status: 'Delivered' },
  // Dodaj więcej zamówień według potrzeby
];

const DriverUI = () => {
  const [filteredOrders, setFilteredOrders] = useState(ordersData);
  const [updatedOrders, setUpdatedOrders] = useState(ordersData); // Przechowuje zaktualizowane zamówienia

  const handleOrderChange = (orderName) => {
    if (orderName) {
      setFilteredOrders(ordersData.filter(order => order.name === orderName));
    } else {
      setFilteredOrders(ordersData);
    }
  };

  const handleSubmitChanges = () => {
    // Tutaj można przesłać zaktualizowane zamówienia do serwera i bazy danych
    console.log('Updated orders:', updatedOrders);
    // Przykładowo można wywołać tutaj funkcję API do przesyłania danych
  };

  return (
    <div className="driver-ui">
      <Navbar />
      <Container className="content">
        <DropDownInput label="Select Order" options={ordersData.map(order => order.name)} onChange={handleOrderChange} />
        <OrderList orders={filteredOrders} onUpdateOrder={(updatedOrder) => setUpdatedOrders(updatedOrders.map(order => (order.name === updatedOrder.name ? updatedOrder : order)))} />
        <SubmitButton buttonText="Submit" onClick={handleSubmitChanges} />
      </Container>
      <Footer />
    </div>
  );
};

export default DriverUI;
