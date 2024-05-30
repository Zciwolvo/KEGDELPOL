import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import DropDownInput from '../Components/DropDownInput';
import ConfirmButton from '../Components/ConfirmButton';
import 'bootstrap/dist/css/bootstrap.min.css';
import './AddNewVehicle.css';

const AddNewVehicle = () => {
  return (
    <div className="client-ui-container d-flex flex-column min-vh-100">
      <Navbar />
      <div className="container flex-grow-1 d-flex flex-column justify-content-center align-items-center">
        <h1 className="mb-4">Add New Vehicle</h1>
        <DropDownInput label="Vehicle Type" options={['Car', 'Truck', 'Motorcycle']} />
        <DropDownInput label="Brand" options={['Toyota', 'Ford', 'BMW']} />
        <DropDownInput label="Model" options={['Corolla', 'Mustang', '3 Series']} />
        <ConfirmButton buttonText="Confirm" onClick={() => console.log('Vehicle Added')} />
      </div>
      <Footer />
    </div>
  );
};

export default AddNewVehicle;
