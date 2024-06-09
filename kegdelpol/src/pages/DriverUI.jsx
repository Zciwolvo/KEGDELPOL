import React, { useState, useEffect } from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import DropDownInput from '../Components/DropDownInput';
import OrderList from '../Components/OrderList';
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './DriverUI.css';
import SubmitButton from '../Components/SubmitButton';

const ordersData = [];
//ORDER LIST ZMIENIĆ DODAĆ ID 
const DriverUI = () => {
  const [filteredOrders, setFilteredOrders] = useState(ordersData);
  const [updatedOrders, setUpdatedOrders] = useState(ordersData);

  useEffect(() => {
    fetchOrders();
  }, []); // Empty dependency array ensures it runs only once on mount

  const fetchOrders = () => {
    fetch('https://www.igorgawlowicz.pl/kegdelpol/order/orders')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        console.log('Orders:', data);
        ordersData = data;
        // Assuming data is an array of orders, you can set it to state
        setFilteredOrders(data);
        setUpdatedOrders(data);
      })
      .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
      });
  };

  const handleOrderChange = (orderName) => {
    if (orderName) {
      setFilteredOrders(ordersData.filter(order => order.name === orderName));
    } else {
      setFilteredOrders(ordersData);
    }
  };

  const handleUpdateOrder = (updatedOrder) => {
    setUpdatedOrders(prevOrders => prevOrders.map(order => 
      order.name === updatedOrder.name ? updatedOrder : order
    ));
  };

  const handleSubmitChanges = () => {
    const orderID = 123; // ID zamówienia do zaktualizowania

    const requestOptions = {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(updatedOrders) // Wysyłamy zaktualizowane zamówienia
    };
  
    fetch(`https://www.igorgawlowicz.pl/kegdelpol/order/orders/${orderID}`, requestOptions)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        console.log('Response:', data);
        // Tutaj możesz obsłużyć odpowiedź, jeśli to konieczne
      })
      .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
      });
    console.log('Updated orders:', updatedOrders);
  };

  return (
    <div className="driver-ui">
      <Navbar />
      <Container className="content">
        <DropDownInput label="Select Order" options={ordersData.map(order => order.name)} onChange={handleOrderChange} />
        <OrderList orders={filteredOrders} onUpdateOrder={handleUpdateOrder} />
        <SubmitButton buttonText="Submit" onClick={handleSubmitChanges} />
      </Container>
      <Footer />
    </div>
  );
};

export default DriverUI;
