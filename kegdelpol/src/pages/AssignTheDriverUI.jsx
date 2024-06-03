import React, { useState } from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import DropDownInput from '../Components/DropDownInput';
import ButtonWithText from '../Components/ConfirmButton';
import 'bootstrap/dist/css/bootstrap.min.css';
import './AssignTheDriverUI.css';

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
    <div className="assign-the-driver-ui-container d-flex flex-column min-vh-100">
      <Navbar />
      <div className="content-assign-the-driver-ui d-flex flex-column justify-content-center align-items-center flex-grow-1">
        <div className="assign-text">
          <span>Assign</span> the Driver
        </div>
        <div className="inputs-container">
          <DropDownInput label="Select Driver" options={['Driver 1', 'Driver 2', 'Driver 3']} onChange={handleDriverChange} />
          <DropDownInput label="Select Order" options={['Order 1', 'Order 2', 'Order 3']} onChange={handleOrderChange} />
        </div>
        <ButtonWithText buttonText="Confirm" />
      </div>
      <Footer />
    </div>
  );
};

export default AssignTheDriverUI;
