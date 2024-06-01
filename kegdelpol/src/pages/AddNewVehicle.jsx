import React, { useState } from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import InputField from '../Components/InputField'; // Importujemy komponent InputField
import DropDownInput from '../Components/DropDownInput';
import ConfirmButton from '../Components/ConfirmButton';
import 'bootstrap/dist/css/bootstrap.min.css';
import './AddNewVehicle.css';

const AddNewVehicle = () => {
  const [vehicleType, setVehicleType] = useState('');
  const [capacity, setCapacity] = useState('');
  const [registrationInfo, setRegistrationInfo] = useState('');

  const handleVehicleTypeChange = (value) => {
    setVehicleType(value);
  };

  const handleCapacityChange = (event) => {
    setCapacity(event.target.value);
  };

  const handleRegistrationInfoChange = (event) => {
    setRegistrationInfo(event.target.value);
  };

  return (
    <div className="client-ui-container d-flex flex-column min-vh-100">
      <Navbar />
      <div className="container flex-grow-1 d-flex flex-column justify-content-center align-items-center">
        <h1 className="mb-4">Add New Vehicle</h1>
        <DropDownInput label="Vehicle Type" options={['Car', 'Truck', 'Motorcycle']} onChange={handleVehicleTypeChange} />
        <InputField label="Capacity" id="capacity" placeholder="Enter capacity" onChange={handleCapacityChange} />
        <InputField label="Registration Info" id="registrationInfo" placeholder="Enter registration info" onChange={handleRegistrationInfoChange} />
        <ConfirmButton buttonText="Confirm" onClick={() => console.log('Vehicle Added')} />
      </div>
      <Footer />
    </div>
  );
};

export default AddNewVehicle;
