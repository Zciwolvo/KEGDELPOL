import React, { useState, useEffect } from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import DropDownInput from '../Components/DropDownInput';
import SubmitButton from '../Components/SubmitButton';
import InputQuantity from '../Components/InputQuantity';
import ItemList from '../Components/ItemList'; 

const CreateOrder = () => {
  const [selectedItem, setSelectedItem] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [totalCost, setTotalCost] = useState(0);
  const [itemsList, setItemsList] = useState([]);
  const [addItemClicked, setAddItemClicked] = useState(false);
  const [availableItems, setAvailableItems] = useState([
    { name: "piwo", price: 2.5 },
    { name: "wino", price: 15 },
    { name: "skrzynia", price: 100 }
  ]); // Dostępne przedmioty z cenami

  useEffect(() => {
    const selectedItemPrice = availableItems.find(item => item.name === selectedItem)?.price;
    if (selectedItemPrice !== undefined) {
      setTotalCost(selectedItemPrice * quantity);
    }
  }, [selectedItem, quantity, availableItems]);

  const handleItemChange = (item) => {
    setSelectedItem(item);
  };

  const handleQuantityChange = (value) => {
    setQuantity(parseInt(value));
  };

  const handleAddItem = () => {
    const selectedItemPrice = availableItems.find(item => item.name === selectedItem)?.price;
    if (selectedItemPrice !== undefined) {
      const newItem = { name: selectedItem, quantity: quantity, price: selectedItemPrice };
      setItemsList([...itemsList, newItem]);
      setAddItemClicked(true);
    }
  };

  const handleRemoveItem = (index) => {
    const updatedItemsList = [...itemsList];
    updatedItemsList.splice(index, 1);
    setItemsList(updatedItemsList);
  };

  const handleSendItemsList = () => {
    console.log('Sending items list:', itemsList); // Tutaj możesz dodać kod wysyłający zamówienie do bazy danych
  };

  return (
    <div>
      <Navbar />
      <div className="container mt-4">
        <h1>Create New Order</h1>
        <div className="mb-3">
          <DropDownInput
            label="Select Item"
            options={availableItems.map(item => item.name)}
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
