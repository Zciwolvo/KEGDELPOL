import React, { useState, useEffect } from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import DropDownInput from '../Components/DropDownInput';
import SubmitButton from '../Components/SubmitButton';
import InputQuantity from '../Components/InputQuantity';
import ItemList from '../Components/ItemList'; // Import komponentu ItemList

const CreateOrder = () => {
  const [selectedItem, setSelectedItem] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [totalCost, setTotalCost] = useState(0);
  const [itemsList, setItemsList] = useState([]); // Stan przechowujący listę dodanych przedmiotów
  const [addItemClicked, setAddItemClicked] = useState(false); // Stan określający, czy przycisk "Add Item" został kliknięty
  const [availableItems, setAvailableItems] = useState([]); // Stan przechowujący dostępne przedmioty

  useEffect(() => {
    // Fetchowanie listy przedmiotów z serwera
    fetch('https://www.igorgawlowicz.pl/kegdelpol/order/orders')
      .then(response => response.json())
      .then(data => {
        setAvailableItems(data);
      })
      .catch(error => console.error('Error fetching items:', error));
  }, []);

  const handleItemChange = (item) => {
    setSelectedItem(item);
    const selectedItemPrice = availableItems.find((i) => i.name === item)?.price;
    if (selectedItemPrice !== undefined) {
      setTotalCost(selectedItemPrice * quantity);
    }
  };

  const handleQuantityChange = (value) => {
    setQuantity(parseInt(value));
    const selectedItemPrice = availableItems.find((i) => i.name === selectedItem)?.price;
    if (selectedItemPrice !== undefined) {
      setTotalCost(selectedItemPrice * parseInt(value));
    }
  };

  const handleAddItem = () => {
    const selectedItemPrice = availableItems.find((i) => i.name === selectedItem)?.price;
    if (selectedItemPrice !== undefined) {
      const newItem = { name: selectedItem, quantity: quantity, price: selectedItemPrice };
      setItemsList([...itemsList, newItem]);
      setAddItemClicked(true); // Ustawienie, że przycisk "Add Item" został kliknięty
    }
  };

  const handleRemoveItem = (index) => {
    const updatedItemsList = [...itemsList];
    updatedItemsList.splice(index, 1);
    setItemsList(updatedItemsList);
  };

  const handleSendItemsList = () => {
    const requestOptions = {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(itemsList),
    };

    fetch('https://www.igorgawlowicz.pl/kegdelpol/order/orders', requestOptions)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        console.log('Response:', data);
        // Tutaj możesz obsłużyć odpowiedź, jeśli to konieczne
      })
      .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
      });
    console.log('Updated orders:', itemsList);  
  };

  return (
    <div>
      <Navbar />
      <div className="container mt-4">
        <h1>Create New Order</h1>
        <div className="mb-3">
          <DropDownInput
            label="Select Item"
            options={availableItems.map((item) => item.name)}
            onChange={handleItemChange}
          />
          <InputQuantity
            value={quantity}
            onChange={(value) => handleQuantityChange(value)}
            placeholder="Enter quantity"
          />
          <p>Total: ${totalCost}</p>
          <SubmitButton buttonText="Add Item" onClick={handleAddItem} />
        </div>
        {addItemClicked && itemsList.length > 0 && (
          <>
            <ItemList items={itemsList} onRemoveItem={handleRemoveItem} />
            <SubmitButton buttonText="Send Items List" onClick={handleSendItemsList} />
          </>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default CreateOrder;
