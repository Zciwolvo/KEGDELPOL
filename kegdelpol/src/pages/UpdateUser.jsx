import React, { useState, useEffect } from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import Table from '../Components/Table';
import 'bootstrap/dist/css/bootstrap.min.css';
import './UpdateUser.css';
import UserSearchInput from '../Components/UserSearchInput'; // Importujemy komponent UserSearchInput

const UpdateUser = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredUsers, setFilteredUsers] = useState([]);

  // Dane użytkowników
  const users = [
    { id: 1, name: 'John', surname: 'Doe', address: '123 Main St', phone: '123-456-7890' },
    { id: 2, name: 'Jane', surname: 'Doe', address: '456 Elm St', phone: '987-654-3210' },
    { id: 3, name: 'Alice', surname: 'Smith', address: '789 Oak St', phone: '555-123-4567' },
    // Dodaj więcej użytkowników...
  ];

  // Kolumny tabeli
  const columns = ['ID', 'Name', 'Surname', 'Address', 'Phone'];

  // Obsługa zmiany wprowadzonej frazy
  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  // Filtrowanie użytkowników na bieżąco
  useEffect(() => {
    const filtered = users.filter(user => 
      user.name.toLowerCase().includes(searchTerm.trim().toLowerCase())
    );
    setFilteredUsers(filtered);
  }, [searchTerm]);

  return (
    <div className="update-user-container">
      <Navbar />
      <div className="container">
        <h2>Choose the user to update</h2>
        {/* Użyjemy naszego nowego komponentu UserSearchInput */}
        <UserSearchInput
          value={searchTerm}
          onChange={handleInputChange}
          placeholder="Type User name"
        />
        {/* Wyświetlamy tabelę */}
        <Table
          data={filteredUsers}
          columns={columns}
        />
      </div>
      <Footer />
    </div>
  );
};

export default UpdateUser;
