import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import MoveTo from '../Components/MoveTo';
import 'bootstrap/dist/css/bootstrap.min.css';
import './DriverUI.css';

const DriverUI = () => {
  return (
    <div className="driver-ui-container d-flex flex-column min-vh-100">
      <Navbar />
      <div className="content-driver-ui d-flex flex-column justify-content-center align-items-center flex-grow-1">
        <div className="choose-action-driver text-center font-weight-bold">
          Choose your action
        </div>
        <div className="centered-images-driver d-flex justify-content-center flex-wrap gap-5">
          <MoveTo imageSrc="/shoppingcart.svg" title="Create orders" to="/CreateOrder" />
          <MoveTo imageSrc="/order.svg" title="Orders" to="/orders" />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default DriverUI;
