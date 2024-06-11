import React, { useState, useEffect } from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import DropDownInput from '../Components/DropDownInput';
import 'bootstrap/dist/css/bootstrap.min.css';
import './AssignTheDriverUI.css';
import ConfirmButton from '../Components/ConfirmButton';

const AssignTheDriverUI = () => {
  const [selectedDriver, setSelectedDriver] = useState('');
  const [selectedOrder, setSelectedOrder] = useState('');
  const [ordersData, setOrdersData] = useState([]);
  const [driversData, setDriversData] = useState([]);

  useEffect(() => {
    fetchOrders();
    fetchDrivers();
  }, []);

  const fetchOrders = () => {
    fetch("https://www.igorgawlowicz.pl/kegdelpol/order/orders")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Orders:", data);
        // Assuming data is an array of orders
        const formattedOrders = data.map(order => ({
          label: `Order ${order.order_id}`,
          value: order.order_id
        }));
        setOrdersData(formattedOrders);
      })
      .catch((error) => {
        console.error("There was a problem with the fetch operation:", error);
      });
  };

  const fetchDrivers = () => {
    fetch("https://www.igorgawlowicz.pl/kegdelpol/driver/get_all_drivers")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Drivers:", data);
        // Assuming data is an array of drivers
        const formattedDrivers = data.map(driver => ({
          label: driver.name,
          value: driver.driver_id
        }));
        setDriversData(formattedDrivers);
      })
      .catch((error) => {
        console.error("There was a problem with the fetch operation:", error);
      });
  };

  const handleDriverChange = (value) => {
    setSelectedDriver(value);
    console.log('Selected Driver:', value);
  };

  const handleOrderChange = (value) => {
    setSelectedOrder(value);
    console.log('Selected Order:', value);
  };

  const handleSubmit = () => {
    const token = localStorage.getItem('jwt');
    const requestOptions = {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify({ driver_id: selectedDriver })
    };

    fetch(`https://www.igorgawlowicz.pl/kegdelpol/order/orders/${selectedOrder}`, requestOptions)
      .then(response => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then(data => {
        console.log("Response:", data);
        // Additional logic on success if needed
      })
      .catch(error => {
        console.error("There was a problem with the fetch operation:", error);
      });
  };

  return (
    <div className="container">
      <Navbar />
      <div className="flexbox-container">
        <div className="heading">
          <span>ASSIGN</span> THE DRIVER
        </div>
        <div className="inputs-container">
          <DropDownInput label="Select Driver" options={driversData} onChange={handleDriverChange} />
          <DropDownInput label="Select Order" options={ordersData} onChange={handleOrderChange} />
        </div>
        <ConfirmButton buttonText="CONFIRM" onClick={handleSubmit} />
      </div>
      <Footer />
    </div>
  );
};

export default AssignTheDriverUI;
