import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import MoveTo from '../Components/MoveTo';
import './EmployeeUI.css';

const EmployeeUI = () => {
  return (
    <div className="employee-ui-container">
      <Navbar />

      <div className="content">
        <div className="choose-action">Choose your action</div>
        <MoveTo imageSrc="/DriverLicense.svg" title="Assign The Driver" to="/AssignTheDriver" />
        <MoveTo imageSrc="/AddUser.svg" title="Create New Account" to="/AddUser" />
        <MoveTo imageSrc="/Database.svg" title="Database" to="/DataBase" />
        <MoveTo imageSrc="/DeliveryBox.svg" title="Approve Order" to="/ApproveOrder" />
        <MoveTo imageSrc="/UpdateUser.svg" title="Update The User" to="/UpdateUser" />
        <MoveTo imageSrc="/Truck.svg" title="Add Vehicle" to="/AddVehicle" />
      </div>
      <Footer />
    </div>
  );
};

export default EmployeeUI;
