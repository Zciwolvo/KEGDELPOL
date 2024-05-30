import React, { useState, useEffect } from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import ButtonSelect from '../Components/ButtonSelect';
import UserSearchInput from '../Components/UserSearchInput';
import Table from '../Components/Table';
import 'bootstrap/dist/css/bootstrap.min.css';
import './ReadDbTable.css';

// Importuj dane
import { usersData, ordersData } from './data'; // Upewnij się, że ścieżka jest poprawna

const Page = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [tableData, setTableData] = useState([]);
  const [tableColumns, setTableColumns] = useState([]);

  const handleButtonSelect = (category) => {
    setSelectedCategory(category);
    setSearchTerm(''); // Reset search term when category changes
  };

  useEffect(() => {
    if (selectedCategory) {
      let data = [];
      if (selectedCategory === 'users') {
        data = usersData;
        setTableColumns(['ID', 'Name', 'Email', 'Role']);
      } else if (selectedCategory === 'orders') {
        data = ordersData;
        setTableColumns(['ID', 'Product', 'Quantity', 'Status']);
      }
      setTableData(data);
    }
  }, [selectedCategory]);

  useEffect(() => {
    if (selectedCategory) {
      let data = selectedCategory === 'users' ? usersData : ordersData;
      if (searchTerm !== '') {
        data = data.filter(item => {
          if (selectedCategory === 'users') {
            return item.name.toLowerCase().includes(searchTerm.toLowerCase());
          }
          if (selectedCategory === 'orders') {
            return item.product.toLowerCase().includes(searchTerm.toLowerCase());
          }
        });
      }
      setTableData(data);
    }
  }, [searchTerm, selectedCategory]);

  return (
    <div className="page">
      <Navbar />
      <div className="container">
        <ButtonSelect onSelect={handleButtonSelect} />
        <UserSearchInput 
          value={searchTerm} 
          onChange={(e) => setSearchTerm(e.target.value)} 
          placeholder="Search..."
        />
        {tableData.length > 0 && <Table data={tableData} columns={tableColumns} />}
      </div>
      <Footer />
    </div>
  );
};

export default Page;