import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import InputField from '../Components/InputField';
import SubmitButton from '../Components/SubmitButton';

const AddNewItem = () => {
  return (
    <div>
      <Navbar />
      <div className="container mt-4">
        <h1>Add New Item</h1>
        <InputField label="Name" id="itemName" placeholder="Enter name" />
        <InputField label="Price" id="itemPrice" type="number" placeholder="Enter price" />
        <InputField label="Description" id="itemDescription" placeholder="Enter description" />
        <SubmitButton buttonText="Submit" />
      </div>
      <Footer />
    </div>
  );
};

export default AddNewItem;
