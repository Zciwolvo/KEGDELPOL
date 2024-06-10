import React, { useState } from 'react';
import Navbar from '../Components/Navbar';
import DropDownInput from '../Components/DropDownInput';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Registration.css';
import InputField from '../Components/InputField';
import SubmitButton from '../Components/SubmitButton';
import Footer from '../Components/Footer';
import Quote from '../Components/Quote';

//DODAĆ METODE PUT GDY SIE NACISNIE PZYCISK TAK ABY WYSLAC DANE NA SERWER TYLKO NAME PASSWORD ROLE
const RegistrationPage = () => {
  const [userType, setUserType] = useState('');

  const handleUserTypeChange = (selectedOption) => {
    setUserType(selectedOption);
  };

  return (
    <div className="registration-container">
      <Navbar />
      <div className="container">
        <Quote quoteText="Did you know that Budweiser is the world’s most famous beer?" />
        <div className="heading">
        <span>REGISTER</span> NEW ACCOUNT
      </div>
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
