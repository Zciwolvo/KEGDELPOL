import React, { useState, useEffect } from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import Table from '../Components/UserTable';
import Quote from '../Components/Quote';
import SubmitButton from '../Components/SubmitButton'; // Importujemy komponent SubmitButton
import 'bootstrap/dist/css/bootstrap.min.css';
import './UpdateUser.css';
import UserSearchInput from '../Components/UserSearchInput'; // Importujemy komponent UserSearchInput

const UpdateUser = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [updatedUsers, setUpdatedUsers] = useState([]); // Stan przechowujący zaktualizowanych użytkowników

  // Fetchowanie użytkowników z serwera
  useEffect(() => {
    fetch('https://www.igorgawlowicz.pl/kegdelpol/user/users')
      .then(response => response.json())
      .then(data => {
        setUsers(data);
        setFilteredUsers(data); // Ustawienie początkowego filtrowania
      })
      .catch(error => console.error('Error fetching users:', error));
  }, []);

  // Kolumny tabeli
  const columns = ['ID', 'Name', 'Role'];

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
  }, [searchTerm, users]);

  // Obsługa zmiany roli użytkownika
  const handleRoleChange = (id, newRole) => {
    const updatedUsersList = users.map(user => 
      user.id === id ? { ...user, role: newRole } : user
    );
    setUsers(updatedUsersList);
    setFilteredUsers(updatedUsersList);
    const updatedUser = updatedUsersList.find(user => user.id === id);
    setUpdatedUsers([...updatedUsers, updatedUser]);
  };

  // Obsługa kliknięcia przycisku Submit
  const handleSubmit = () => {
    const requestOptions = {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedUsers),
    };

    fetch('https://www.igorgawlowicz.pl/kegdelpol/user/users', requestOptions)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        console.log('Response:', data);
        // Tutaj możesz obsłużyć odpowiedź, jeśli to konieczne
      })
      .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
      });
      console.log('Updated users:', updatedUsers);  
  };

  return (
    <div className="update-user-container">
      <Navbar />
      <div className="container">
        <Quote quoteText="Do you know that Budweiser is the world’s most famous beer?" />
        <div className="heading">
          <span>CHOOSE</span> THE USER TO UPDATE
        </div>
        <div className="update-user-search-container">
          <UserSearchInput
            value={searchTerm}
            onChange={handleInputChange}
            placeholder="Type User name"
          />
        </div>
        <Table
          data={filteredUsers}
          columns={columns}
          updateButtonText="Update"
          deleteButtonText="Remove"
          onRoleChange={handleRoleChange} // Przekazanie funkcji zmiany roli
        />
        <SubmitButton buttonText="Submit" onClick={handleSubmit} />
      </div>
      <Footer />
    </div>
  );
};

export default UpdateUser;
