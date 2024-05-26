import React from 'react';
import './UserSearchInput.css'; // Importujemy plik stylów CSS

const UserSearchInput = ({ value, onChange, onClick }) => {
  return (
    <div className="user-search-input-container">
      <div className="user-search-input">
        <input
          type="text"
          value={value}
          onChange={onChange}
          placeholder="Type user name..."
          className="form-control"
        />
        <button className="btn btn-primary" onClick={onClick}>Search</button>
      </div>
    </div>
  );
};

export default UserSearchInput;
