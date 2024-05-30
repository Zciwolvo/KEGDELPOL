import React, { useState } from 'react';
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
  const [searchClicked, setSearchClicked] = useState(false); // Dodatkowy stan

  const handleButtonSelect = (category) => {
    setSelectedCategory(category);
    setSearchClicked(false); // Zresetuj stan po wyborze kategorii
  };

  const handleSearch = () => {
    setSearchClicked(true); // Ustaw stan na true po naciśnięciu przycisku "Search"

    let data = [];
    // Wybierz odpowiednie dane na podstawie wybranej kategorii, jeśli kategoria została wybrana
    if (selectedCategory === 'users') {
      data = usersData;
    } else if (selectedCategory === 'orders') {
      data = ordersData;
    }
    // Filtrowanie danych na podstawie wprowadzonej frazy, jeśli kategoria została wybrana
    if (selectedCategory) {
      const filteredData = data.filter(item => {
        // Dla kategorii 'users' filtrowanie po nazwie
        if (selectedCategory === 'users') {
          return item.name.toLowerCase().includes(searchTerm.toLowerCase());
        }
        // Dla kategorii 'orders' filtrowanie po produkcie
        if (selectedCategory === 'orders') {
          return item.product.toLowerCase().includes(searchTerm.toLowerCase());
        }
      });
      // Ustawienie wyników filtrowania w tabeli
      setTableData(filteredData);
    }
  };

  // Nagłówki tabeli będą się zmieniać tylko po naciśnięciu przycisku "Search"
  const tableColumns = searchClicked ? (selectedCategory === 'users' ? ['ID', 'Name', 'Email', 'Role'] : ['ID', 'Product', 'Quantity', 'Status']) : [];

  return (
    <div className="page">
      <Navbar />
      <div className="container">
        <ButtonSelect onSelect={handleButtonSelect} />
        <UserSearchInput 
          value={searchTerm} 
          onChange={(e) => setSearchTerm(e.target.value)} 
          onClick={handleSearch} 
          placeholder="Search..."
        />
        {searchClicked && tableData.length > 0 && <Table data={tableData} columns={tableColumns} />}
      </div>
      <Footer />
    </div>
  );
};

export default Page;
