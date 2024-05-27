import React, { useState } from 'react';
import './DropDownInput.css'; // Zaimportuj plik stylów CSS

const DropdownInput = ({ label, options }) => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className="dropdown-input-container">
      <label>{label}</label>
      <select
        value={selectedOption}
        onChange={handleOptionChange}
        className="dropdown-select"
      >
        <option value="">Choose an option</option>
        {options.map((option, index) => (
          <option key={index} value={option}>{option}</option>
        ))}
      </select>
    </div>
  );
};

export default DropdownInput;
