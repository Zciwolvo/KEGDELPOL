import React, { useState, useEffect } from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import UserList from '../Components/UserList';
import Quote from '../Components/Quote';
import 'bootstrap/dist/css/bootstrap.min.css';
import './UpdateUser.css';
import UserSearchInput from '../Components/UserSearchInput'; // Importujemy komponent UserSearchInput

const UpdateUser = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);

  // Dodanie przykładowych użytkowników na sztywno
  useEffect(() => {
    const exampleUsers = [
      { auth_id: 1, login: 'johndoe', role: 'employee' },
      { auth_id: 2, login: 'janedoe', role: 'client' }
    ];
    setUsers(exampleUsers);
    setFilteredUsers(exampleUsers);
  }, []);

  // Obsługa zmiany wprowadzonej frazy
  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  // Filtrowanie użytkowników na bieżąco
  useEffect(() => {
    const filtered = users.filter(user => 
      user.login.toLowerCase().includes(searchTerm.trim().toLowerCase())
    );
    setFilteredUsers(filtered);
  }, [searchTerm, users]);

  // Obsługa zmiany roli użytkownika
  const handleRoleChange = (id, newRole) => {
    if (!['employee', 'client', 'driver'].includes(newRole)) {
      console.error('Invalid role:', newRole);
      return;
    }
    
    const updatedUsersList = users.map(user => 
      user.auth_id === id ? { ...user, role: newRole } : user
    );
    setUsers(updatedUsersList);
    setFilteredUsers(updatedUsersList);

    // Wysyłanie zaktualizowanego użytkownika na serwer
    const token = localStorage.getItem('jwt');
    const requestOptions = {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify({ id, role: newRole }), // Przesłanie ID i nowej roli
    };

    fetch(`https://www.igorgawlowicz.pl/kegdelpol/user/users/${id}`, requestOptions) // Dodanie ID do URL
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
        <UserList users={filteredUsers} onRoleChange={handleRoleChange} />
      </div>
      <Footer />
    </div>
  );
};

export default UpdateUser;
