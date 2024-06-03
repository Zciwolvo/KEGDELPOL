import React, { useState } from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import DropDownInput from '../Components/DropDownInput';
import 'bootstrap/dist/css/bootstrap.min.css';
import './AssignTheDriverUI.css';
import ConfirmButton from '../Components/ConfirmButton';

const AssignTheDriverUI = () => {
  const [selectedDriver, setSelectedDriver] = useState('');
  const [selectedOrder, setSelectedOrder] = useState('');

  const handleDriverChange = (value) => {
    setSelectedDriver(value);
    console.log('Selected Driver:', value);
  };

  const handleOrderChange = (value) => {
    setSelectedOrder(value);
    console.log('Selected Order:', value);
  };

  return (
    <div className="container">
      <Navbar />
        <div className="flexbox-container">
        <div className="heading">
        <span>ASSIGN</span> THE DRIVER
        </div>
        <div className="inputs-container">
          <DropDownInput label="Select Driver" options={['Driver 1', 'Driver 2', 'Driver 3']} onChange={handleDriverChange} />
          <DropDownInput label="Select Order" options={['Order 1', 'Order 2', 'Order 3']} onChange={handleOrderChange} />
        </div>
        <ConfirmButton buttonText="CONFIRM" />

     </div>
      <Footer />
      </div>
  );
};

export default AssignTheDriverUI;
