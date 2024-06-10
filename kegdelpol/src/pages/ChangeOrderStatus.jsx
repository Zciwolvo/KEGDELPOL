import React, { useState, useEffect } from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import Table from '../Components/Table';
import 'bootstrap/dist/css/bootstrap.min.css';
import './ChangeOrderStatus.css';
import UserSearchInput from '../Components/UserSearchInput';
import Quote from '../Components/Quote';

const ChangeOrderStatus = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [tableData, setTableData] = useState([]);
  const [tableColumns, setTableColumns] = useState([
    'customer_id',
    'delivery_date',
    'order_date',
    'order_id',
    'status',
    'weight'
  ]);

  useEffect(() => {
    fetchOrders(); // Pobieranie zamówień przy pierwszym renderowaniu
  }, []); // Pusta tablica zależności, aby useEffect wykonał się tylko raz przy montowaniu komponentu

  const fetchOrders = () => {
    fetch('https://www.igorgawlowicz.pl/kegdelpol/order/orders')
      .then(response => response.json())
      .then(data => {
        // Tutaj ustawiamy pobrane dane do stanu
        setTableData(data);
        console.log(data); // Wyświetlenie pobranych danych
      })
      .catch(error => console.error('Error fetching orders:', error));
  };

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  // Filtracja zamówień na bieżąco na podstawie wprowadzonej frazy
  const filteredOrders = tableData.filter(order =>
    typeof order.order_id === 'string' &&
    order.order_id.toLowerCase().includes(searchTerm.trim().toLowerCase())
  );

  return (
    <div className="change-order-status-container">
      <Navbar />
      <div className="container">
        <Quote quoteText="Did you know that the oldest beer brewery dates back to 1040?" />
        <div className="heading">
          <span>CHANGE</span> ORDER STATUS
        </div>
        {/* Komponent do wyszukiwania */}
        <UserSearchInput
          value={searchTerm}
          onChange={handleInputChange}
          placeholder="Type Order ID"
        />
        {/* Wyświetlanie tabeli */}
        <Table
          data={tableData}
          columns={tableColumns}
          updateButtonText="Update Order"
        />
      </div>
      <Footer />
    </div>
  );
};

export default ChangeOrderStatus;
