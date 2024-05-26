import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import MoveTo from '../Components/MoveTo';
import 'bootstrap/dist/css/bootstrap.min.css';
import './ClientUI.css';

const ClientUI = () => {
  return (
    <div className="client-ui-container d-flex flex-column min-vh-100">
      <Navbar />
      <div className="content-client-ui d-flex flex-column justify-content-center align-items-center flex-grow-1">
        <div className="choose-action-client text-center font-weight-bold">
          Choose your action
        </div>
        <div className="centered-images-client d-flex justify-content-center flex-wrap gap-5">
          <MoveTo imageSrc="/shoppingcart.svg" title="Create orders" to="/CreateOrder" />
          <MoveTo imageSrc="/order.svg" title="Orders" to="/orders" />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ClientUI;
