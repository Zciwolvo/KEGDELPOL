import React, { useState } from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import InputField from '../Components/InputField';
import SubmitButton from '../Components/SubmitButton';
import 'bootstrap/dist/css/bootstrap.min.css';

const AddNewItem = () => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handlePriceChange = (event) => {
    setPrice(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleSubmit = () => {
    const token = localStorage.getItem('jwt');
    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify({
        name: name,
        price: price,
        description: description
      })
    };

    fetch('https://www.igorgawlowicz.pl/kegdelpol/employee/product', requestOptions)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        console.log('Response:', data);
        // Dodatkowa logika po udanym dodaniu przedmiotu
      })
      .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
      });
  };

  return (
    <div>
      <Navbar />
      <div className="container mt-4">
        <h1>Add New Item</h1>
        <InputField label="Name" id="itemName" placeholder="Enter name" onChange={handleNameChange} />
        <InputField label="Price" id="itemPrice" type="number" placeholder="Enter price" onChange={handlePriceChange} />
        <InputField label="Description" id="itemDescription" placeholder="Enter description" onChange={handleDescriptionChange} />
        <SubmitButton buttonText="Submit" onClick={handleSubmit} />
      </div>
      <Footer />
    </div>
  );
};

export default AddNewItem;
