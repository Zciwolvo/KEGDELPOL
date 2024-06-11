import React, { useState, useEffect } from 'react';
import OrderStatus from '../Components/Order';
import UserSearchInput from '../Components/UserSearchInput';
import DropDownInput from '../Components/DropDownInput';
import ButtonSelect from '../Components/ButtonsOrders';
import Table from '../Components/Table';
import NotAvailable from '../Components/NotAvailable.jsx' // Import the NotAvailable component
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

const ReadOrders = () => {
  const [orders, setOrders] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState(null);
  const [sortBy, setSortBy] = useState('');
  const [tableData, setTableData] = useState([]);
  const [tableColumns, setTableColumns] = useState([]);

  useEffect(() => {
    fetchOrders();
  }, [filterStatus]); // Trigger fetchOrders when filterStatus changes

  const fetchOrders = () => {
    fetch('https://www.igorgawlowicz.pl/kegdelpol/order/orders')
      .then(response => response.json())
      .then(data => {
        setOrders(data);
        setTableData(data);
        setTableColumns(['ClientID', 'DeliveryDate', 'OrderDate', 'OrderID', 'Status', 'Weight']);
      })
      .catch(error => console.error('Error fetching orders:', error));
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleStatusSelect = (status) => {
    setFilterStatus(status);
  };

  const handleSortByChange = (option) => {
    setSortBy(option);
  };

  const handleTotalCost = (totalCost) => {
    console.log('Total cost:', totalCost);
  };

  const getTotalPrice = (order) => {
    return order.items.reduce((total, item) => total + item.quantity * item.price, 0);
  };

  const filteredOrders = orders.filter(order => {
    const matchesSearch = order.items && order.items.some(item =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    return matchesSearch;
  });

  const filteredTableData = tableData.filter(order => {
    if (!filterStatus) return true; // If no status filter applied, return true for all
    return order.status === filterStatus;
  });

  const sortedOrders = filteredOrders.sort((a, b) => {
    switch (sortBy) {
      case 'Delivery date':
        return new Date(a.deliveryDate) - new Date(b.deliveryDate);
      case 'Total(min)':
        return getTotalPrice(a) - getTotalPrice(b);
      case 'Total(max)':
        return getTotalPrice(b) - getTotalPrice(a);
      case 'CreatedAt':
        return new Date(a.createdAt) - new Date(b.createdAt);
      default:
        return 0;
    }
  });

  return (
    <div className="read-orders-container">
      <Navbar />
      <div className="container">
      <h1 className="heading"><span>Orders</span> List</h1>
      <UserSearchInput
        value={searchTerm}
        onChange={handleSearchChange}
        placeholder="Search by item name..."
      />
      <ButtonSelect onSelect={handleStatusSelect} />
      <DropDownInput
        label="Sort By"
        options={['Delivery date', 'Total(min)','Total(max)', 'CreatedAt']}
        onChange={handleSortByChange}
      />
      {filteredTableData.length > 0 ? (
        <Table data={filteredTableData} columns={tableColumns} />
      ) : (
        <NotAvailable /> // Render the NotAvailable component when no orders are available
      )}
      {sortedOrders.length > 0 && sortedOrders.map((order, index) => (
        <OrderStatus key={index} order={order} onTotalCost={handleTotalCost} />
      ))}
      </div>
      <Footer />
    </div>
  );
};

export default ReadOrders;
