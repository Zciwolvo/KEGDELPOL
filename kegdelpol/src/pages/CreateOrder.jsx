import React, { useState } from 'react';
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

  // Przykładowa lista przedmiotów
  const availableItems = [
    { name: 'Item1', price: 10 },
    { name: 'Item2', price: 20 },
    { name: 'Item3', price: 30 },
  ];

  const handleItemChange = (item) => {
    setSelectedItem(item);
    const selectedItemPrice = availableItems.find((item) => item.name === selectedItem)?.price;
    if (selectedItemPrice !== undefined) {
      setTotalCost(selectedItemPrice * quantity);
    }
  };

  const handleQuantityChange = (value) => {
    setQuantity(parseInt(value));
    const selectedItemPrice = availableItems.find((item) => item.name === selectedItem)?.price;
    if (selectedItemPrice !== undefined) {
      setTotalCost(selectedItemPrice * parseInt(value));
    }
  };

  const handleAddItem = () => {
    const selectedItemPrice = availableItems.find((item) => item.name === selectedItem)?.price;
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
    console.log('Items List:', itemsList); // Przykładowa funkcja, która wyśle listę przedmiotów
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
