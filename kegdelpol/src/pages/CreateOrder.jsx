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
  const [itemId, setItemId] = useState(null); // Przechowuje tylko id wybranego przedmiotu
  const [addItemClicked, setAddItemClicked] = useState(false);
  const [availableItems, setAvailableItems] = useState([]);

  useEffect(() => {
    // Pobranie przykładowych przedmiotów (tymczasowo, zamiast z serwera)
    const sampleItems = [
      { id: 1, name: 'Product 1', price: 10 },
      { id: 2, name: 'Product 2', price: 20 },
      { id: 3, name: 'Product 3', price: 15 },
    ];
    setAvailableItems(sampleItems);
  }, []);

  const handleItemChange = (item) => {
    const selectedItemData = availableItems.find((i) => i.name === item);
    if (selectedItemData) {
      setSelectedItem(item);
      setItemId(selectedItemData.id);
      // Aktualizacja ceny tylko jeśli selectedItemData istnieje
      setTotalCost(selectedItemData.price * quantity);
    }
  };

  const handleQuantityChange = (value) => {
    setQuantity(parseInt(value));
    // Sprawdź, czy itemId nie jest null przed aktualizacją ceny
    if (itemId !== null) {
      const selectedItemData = availableItems.find((i) => i.id === itemId);
      if (selectedItemData) {
        setTotalCost(selectedItemData.price * parseInt(value));
      }
    }
  };

  const handleAddItem = () => {
    // Zaktualizuj tylko itemId
    const selectedItemData = availableItems.find((item) => item.name === selectedItem);
    if (selectedItemData) {
      setItemId(selectedItemData.id);
      setAddItemClicked(true);
    }
  };

  const handleRemoveItem = () => {
    // Usuń wybrany przedmiot
    setItemId(null);
    setAddItemClicked(false);
  };

  const handleSendItemsList = () => {
    // Przygotowanie danych do wysłania na serwer
    const createdAt = new Date().toISOString(); // Data utworzenia zamówienia
    const dataToSend = {
      createdAt: createdAt,
      itemId: itemId // Przekazywanie tylko id przedmiotu
    };

    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(dataToSend),
    };
    console.log(JSON.stringify(dataToSend));

    // Wysłanie danych na serwer
    fetch('https://www.igorgawlowicz.pl/kegdelpol/order/orders', requestOptions)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        console.log('Response:', data);
        // Możesz obsłużyć odpowiedź serwera tutaj
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
          {/* Sprawdź, czy availableItems nie jest puste */}
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
        {addItemClicked && itemId !== null && (
          <>
            {/* Przekazanie tylko itemId do ItemList */}
            <ItemList items={[{ id: itemId, name: selectedItem, quantity: quantity }]} availableItems={availableItems} onRemoveItem={handleRemoveItem} />

            <SubmitButton buttonText="Send Items List" onClick={handleSendItemsList} />
          </>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default CreateOrder;
