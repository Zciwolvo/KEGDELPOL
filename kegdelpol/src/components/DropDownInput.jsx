import React, { useState } from 'react';
import './DropDownInput.css';

const DropDownInput = ({ label, options, onChange }) => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionChange = (event) => {
    const value = event.target.value;
    setSelectedOption(value);
    onChange(value); // Wywołanie przekazanego propsa onChange
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
        {options && options.map((option, index) => (
          <option key={index} value={option.value}>{option.label}</option>
        ))}
      </select>
    </div>
  );
};

export default DropDownInput;
