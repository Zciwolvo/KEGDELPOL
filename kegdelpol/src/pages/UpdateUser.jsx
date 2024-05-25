import React, { useState } from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import Table from '../Components/Table';
import 'bootstrap/dist/css/bootstrap.min.css';
import './UpdateUser.css';
import UserSearchInput from '../Components/UserSearchInput'; // Importujemy komponent UserSearchInput

const UpdateUser = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [showTable, setShowTable] = useState(false);
  const [filteredUsers, setFilteredUsers] = useState([]);

  // Dane użytkowników
  const users = [
    { id: 1, name: 'John', surname: 'Doe', address: '123 Main St', phone: '123-456-7890' },
    { id: 2, name: 'Jane', surname: 'Doe', address: '456 Elm St', phone: '987-654-3210' },
    { id: 3, name: 'Alice', surname: 'Smith', address: '789 Oak St', phone: '555-123-4567' },
    { id: 4, name: 'John', surname: 'Doe', address: '123 Main St', phone: '123-456-7890' },
    { id: 5, name: 'Jane', surname: 'Doe', address: '456 Elm St', phone: '987-654-3210' },
    { id: 6, name: 'Alice', surname: 'Smith', address: '789 Oak St', phone: '555-123-4567' },
    { id: 7, name: 'John', surname: 'Doe', address: '123 Main St', phone: '123-456-7890' },
    { id: 8, name: 'Jane', surname: 'Doe', address: '456 Elm St', phone: '987-654-3210' },
    { id: 9, name: 'Alice', surname: 'Smith', address: '789 Oak St', phone: '555-123-4567' },
    { id: 10, name: 'John', surname: 'Doe', address: '123 Main St', phone: '123-456-7890' },
    { id: 20, name: 'Jane', surname: 'Doe', address: '456 Elm St', phone: '987-654-3210' },
    { id: 30, name: 'Alice', surname: 'Smith', address: '789 Oak St', phone: '555-123-4567' },
    { id: 100, name: 'John', surname: 'Doe', address: '123 Main St', phone: '123-456-7890' },
    { id: 200, name: 'Jane', surname: 'Doe', address: '456 Elm St', phone: '987-654-3210' },
    { id: 300, name: 'Alice', surname: 'Smith', address: '789 Oak St', phone: '555-123-4567' },
    // Dodaj więcej użytkowników...
  ];

  // Kolumny tabeli
  const columns = ['ID', 'Name', 'Surname', 'Address', 'Phone'];

  // Obsługa zmiany wprowadzonej frazy
  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  // Obsługa naciśnięcia przycisku "Search"
  const handleConfirm = () => {
    // Filtrowanie użytkowników na podstawie wprowadzonego tekstu
    const filtered = users.filter(user => user.name.toLowerCase().includes(searchTerm.trim().toLowerCase()));
    setFilteredUsers(filtered);
    setShowTable(true);
  };

  return (
    <div className="update-user-container">
      <Navbar />
      <div className="container">
        <h2>Choose the user to update</h2>
        {/* Użyjemy naszego nowego komponentu UserSearchInput */}
        <UserSearchInput
          value={searchTerm}
          onChange={handleInputChange}
          onClick={handleConfirm}
        />
        {/* Wyświetlamy tabelę tylko jeśli showTable jest true */}
        {showTable && (
          <Table
            data={filteredUsers}
            columns={columns}
          />
        )}
      </div>
      <Footer />
    </div>
  );
};

export default UpdateUser;
