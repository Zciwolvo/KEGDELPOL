import React, { useState } from 'react';
import Navbar from '../Components/Navbar';
import DropDownInput from '../Components/DropDownInput';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Registration.css';
import InputField from '../Components/InputField';
import SubmitButton from '../Components/SubmitButton';
import Footer from '../Components/Footer';

const RegistrationPage = () => {
  const [userType, setUserType] = useState('');

  const handleUserTypeChange = (selectedOption) => {
    setUserType(selectedOption);
  };

  return (
    <div className="registration-container d-flex flex-column min-vh-100">
      <Navbar />
      <div className="content d-flex flex-column align-items-center flex-grow-1">
        <h1 className="register-header text-center my-4">
          Register <span className="highlight">New Account</span>
        </h1>
        <DropDownInput label="User Type" options={['Employee', 'Driver', 'Customer']} onChange={handleUserTypeChange} />
        
        {userType === 'Employee' && (
          <>
            <InputField label="Name" id="employeeName" placeholder="Enter name" />
            <InputField label="Surname" id="employeeSurname" placeholder="Enter surname" />
            <InputField label="Phone Number" id="employeePhone" placeholder="Enter phone number" />
          </>
        )}

        {userType === 'Driver' && (
          <>
            <InputField label="Name" id="driverName" placeholder="Enter name" />
            <InputField label="Surname" id="driverSurname" placeholder="Enter surname" />
            <InputField label="Phone Number" id="driverPhone" placeholder="Enter phone number" />
            <InputField label="License Info" id="driverLicense" placeholder="Enter license info" />
          </>
        )}

        {userType === 'Customer' && (
          <>
            <InputField label="Customer Name" id="customerName" placeholder="Enter customer name" />
            <InputField label="Address" id="customerAddress" placeholder="Enter address" />
            <InputField label="Phone Number" id="customerPhone" placeholder="Enter phone number" />
          </>
        )}

        <SubmitButton buttonText="Confirm" />
      </div>
      <Footer />
    </div>
  );
};

export default RegistrationPage;
