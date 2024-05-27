import React from 'react';
import './UserSearchInput.css';

const UserSearchInput = ({ value, onChange, onClick, placeholder }) => {
  return (
    <div className="user-search-input-container">
      <div className="user-search-input">
        <input
          type="text"
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className="form-control"
        />
        <button className="btn btn-primary" onClick={onClick}>Search</button>
      </div>
    </div>
  );
};

export default UserSearchInput;
