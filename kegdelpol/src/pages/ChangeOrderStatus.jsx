import React, { useState, useEffect } from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import Table from '../Components/Table';
import 'bootstrap/dist/css/bootstrap.min.css';
import './ChangeOrderStatus.css'; // Importujemy styl CSS dla ChangeOrderStatus
import UserSearchInput from '../Components/UserSearchInput'; // Importujemy komponent UserSearchInput
import Quote from '../Components/Quote';

const ChangeOrderStatus = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredOrders, setFilteredOrders] = useState([]);

  // Dane zamówień
  const orders = [
    { id: 1, orderID: 'ORD123', orderDate: '2024-05-01', deliveryDate: '2024-05-10', orderStatus: 'Pending' },
    { id: 2, orderID: 'ORD456', orderDate: '2024-05-02', deliveryDate: '2024-05-12', orderStatus: 'Completed' },
    { id: 3, orderID: 'ORD789', orderDate: '2024-05-03', deliveryDate: '2024-05-15', orderStatus: 'Processing' },
    
    // Dodaj więcej zamówień...
  ];

  // Kolumny tabeli
  const columns = ['ID', 'OrderID', 'OrderDate', 'DeliveryDate', 'OrderStatus'];

  // Obsługa zmiany wprowadzonej frazy
  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  // Filtrowanie zamówień na bieżąco
  useEffect(() => {
    const filtered = orders.filter(order => 
      order.orderID.toLowerCase().includes(searchTerm.trim().toLowerCase())
    );
    setFilteredOrders(filtered);
  }, [searchTerm]);

  return (
    <div className="change-order-status-container">
      <Navbar />
      <div className="container">
        <Quote quoteText="Did you that the oldest beer brewery dates back to 1040?" />
        <div className="heading">
          <span>CHANGE</span> ORDER STATUS
        </div>
        {/* Użyjemy naszego nowego komponentu UserSearchInput */}
        <UserSearchInput
          value={searchTerm}
          onChange={handleInputChange}
          placeholder="Type Order ID"
        />
        {/* Wyświetlamy tabelę */}
        <Table
          data={filteredOrders}
          columns={columns}
          updateButtonText="Update Order"
        />
      </div>
      <Footer />
    </div>
  );
};

export default ChangeOrderStatus;
