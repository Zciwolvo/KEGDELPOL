import React, { useState, useEffect } from 'react';
import OrderStatus from '../Components/Order';
import UserSearchInput from '../Components/UserSearchInput';
import ButtonSelect from '../Components/ButtonsOrders';
import DropDownInput from '../Components/DropDownInput';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

const getTotalPrice = (order) => {
  return order.items.reduce((total, item) => total + item.quantity * item.price, 0);
};

const ReadOrders = () => {
  const [orders, setOrders] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState(null);
  const [sortBy, setSortBy] = useState('');

  useEffect(() => {
    // Zastąp poniższe przykładowe dane rzeczywistym wywołaniem API
    const fetchedOrders = [
      {
        status: 'Processing',
        createdAt: '2023-07-01T14:48:00.000Z',
        deliveryDate: '2023-07-05T14:48:00.000Z',
        items: [
          { name: 'Item1', quantity: 2, price: 25.00 },
          { name: 'Item2', quantity: 1, price: 15.00 },
        ],
      },
      {
        status: 'Shipped',
        createdAt: '2023-05-02T14:48:00.000Z',
        deliveryDate: '2023-05-06T14:48:00.000Z',
        items: [
          { name: 'Item3', quantity: 1, price: 45.00 },
          { name: 'Item4', quantity: 3, price: 10.00 },
        ],
      },
      {
        status: 'Shipped',
        createdAt: '2023-05-012T14:48:00.000Z',
        deliveryDate: '2023-05-06T14:48:00.000Z',
        items: [
          { name: 'Item3', quantity: 1, price: 10.00 },
          { name: 'Item4', quantity: 3, price: 10.00 },
        ],
      },
    ];

    // Ustawienie stanu zamówień na pobrane dane
    setOrders(fetchedOrders);
  }, []);

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
    // Możemy zrobić coś z całkowitą ceną, ale w tym przypadku nie jest to potrzebne
    console.log('Total cost:', totalCost);
  };

  const filteredOrders = orders.filter(order => {
    const matchesStatus = !filterStatus || order.status === filterStatus;
    const matchesSearch = order.items.some(item =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    return matchesStatus && matchesSearch;
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
    <div className="container">
        <Navbar />
      <h1 className="text-center my-4">Orders List</h1>
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
      {sortedOrders.map((order, index) => (
        <OrderStatus key={index} order={order} onTotalCost={handleTotalCost} />
      ))}
      <Footer />
    </div>
  );
};

export default ReadOrders;
