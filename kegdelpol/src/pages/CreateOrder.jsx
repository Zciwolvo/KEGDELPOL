import React, { useState, useEffect } from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import DropDownInput from '../Components/DropDownInputDriver';
import SubmitButton from '../Components/SubmitButton';
import InputQuantity from '../Components/InputQuantity';
import ItemList from '../Components/ItemList';

const CreateOrder = () => {
  const [selectedItem, setSelectedItem] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [totalCost, setTotalCost] = useState(0);
  const [itemId, setItemId] = useState(null);
  const [addItemClicked, setAddItemClicked] = useState(false);
  const [availableItems, setAvailableItems] = useState([]);
  const [customerId, setCustomerId] = useState(null);
  const [orderItems, setOrderItems] = useState([]);

  useEffect(() => {
    const customerIdFromStorage = localStorage.getItem('auth_id');
    setCustomerId(customerIdFromStorage);

    const token = localStorage.getItem('jwt');

    fetch('https://www.igorgawlowicz.pl/kegdelpol/employee/get_all_products', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      setAvailableItems(data);
    })
    .catch(error => console.error('Error fetching items:', error));
  }, []);

  const handleItemChange = (item) => {
    const selectedItemData = availableItems.find((i) => i.name === item);
    if (selectedItemData) {
      setSelectedItem(item);
      setItemId(selectedItemData.product_id);
      setTotalCost(selectedItemData.price * quantity);
    }
  };

  const handleQuantityChange = (value) => {
    setQuantity(parseInt(value));
    if (itemId !== null) {
      const selectedItemData = availableItems.find((i) => i.product_id === itemId);
      if (selectedItemData) {
        setTotalCost(selectedItemData.price * parseInt(value));
      }
    }
  };

  const handleAddItem = () => {
    const selectedItemData = availableItems.find((item) => item.name === selectedItem);
    if (selectedItemData) {
      setOrderItems(prevItems => [
        ...prevItems,
        { id: selectedItemData.product_id, name: selectedItemData.name, quantity: quantity, price: selectedItemData.price }
      ]);
      setAddItemClicked(true);
    }
  };

  const handleRemoveItem = (index) => {
    setOrderItems(prevItems => prevItems.filter((_, i) => i !== index));
  };

  const handleSendItemsList = () => {
    const dataToSend = {
      auth_id: customerId,
      items: orderItems.map(item => ({
        product_id: item.id,
        quantity: item.quantity,
        total_price: item.price * item.quantity
      }))
    };

    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(dataToSend),
    };
    console.log(JSON.stringify(dataToSend));

    fetch('https://www.igorgawlowicz.pl/kegdelpol/order/orders', requestOptions)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        console.log('Response:', data);
      })
      .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
      });
  };

  return (
    <div>
      <Navbar />
      <div className="container mt-4">
        <h1>Create New Order</h1>
        <div className="mb-3">
          {availableItems.length > 0 && (
            <DropDownInput
              label="Select Item"
              options={availableItems.map((item) => item.name)}
              onChange={handleItemChange}
            />
          )}
          <InputQuantity
            value={quantity}
            onChange={(value) => handleQuantityChange(value)}
            placeholder="Enter quantity"
          />
          <p>Total: ${totalCost}</p>
          <SubmitButton buttonText="Add Item" onClick={handleAddItem} />
        </div>
        {addItemClicked && (
          <>
            <ItemList items={orderItems} onRemoveItem={handleRemoveItem} />

            <SubmitButton buttonText="Send Items List" onClick={handleSendItemsList} />
          </>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default CreateOrder;
