import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import DropdownInput from '../Components/DropDownInput';
import ButtonWithText from '../Components/ConfirmButton';
import 'bootstrap/dist/css/bootstrap.min.css';
import './AssignTheDriverUI.css'; // Zaimportuj plik stylów CSS



const AssignTheDriverUI = () => {
  return (
    <div className="assign-the-driver-ui-container d-flex flex-column min-vh-100">
      <Navbar />
      <div className="content-assign-the-driver-ui d-flex flex-column justify-content-center align-items-center flex-grow-1">
        <div className="choose-action-assign-driver text-center font-weight-bold">
          Assign the Driver
        </div>
        <div className="inputs-container">
          <DropdownInput label="Select Driver" options={['Driver 1', 'Driver 2', 'Driver 3']} />
          <DropdownInput label="Select Order" options={['Order 1', 'Order 2', 'Order 3']} />
        </div>
        <ButtonWithText buttonText="Assign Driver" />
      </div>
      <Footer />
    </div>
  );
};

export default AssignTheDriverUI;
