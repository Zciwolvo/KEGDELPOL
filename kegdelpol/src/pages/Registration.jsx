import React from 'react';
import Navbar from '../Components/Navbar';
import DropDownInput from '../Components/DropDownInput';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Registration.css';
import InputField from '../Components/InputField';
import SubmitButton from '../Components/SubmitButton';

const RegistrationPage = () => {
  return (
    <div className="registration-container d-flex flex-column min-vh-100">
      <Navbar />
      <div className="content d-flex flex-column align-items-center flex-grow-1">
        <h1 className="register-header text-center my-4">
          Register <span className="highlight">New Account</span>
        </h1>
        <DropDownInput label="User Type" options={['Employee', 'Driver', 'Customer']} />
        <InputField label="Name" id="name" placeholder="Enter your name" />
        <InputField label="Surname" id="surname" placeholder="Enter your surname" />
        <InputField label="Phone Number" id="phone" placeholder="Enter your phone number" />
        <InputField label="License Info" id="license" placeholder="Enter your license info" />
        <SubmitButton buttonText="Confirm" />
      </div>
    </div>
  );
};

export default RegistrationPage;
