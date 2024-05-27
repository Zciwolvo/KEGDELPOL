import React, { useState } from 'react';
import './DropdownInput.css'; // Zaimportuj plik stylów CSS

const DropDownInput = ({ label, options }) => {
  const [inputValue, setInputValue] = useState('');
  const [filteredOptions, setFilteredOptions] = useState([]);
  const [isListVisible, setIsListVisible] = useState(false);

  const handleInputChange = (event) => {
    const value = event.target.value;
    setInputValue(value);
    filterOptions(value);
    setIsListVisible(true);
  };

  const filterOptions = (value) => {
    const filtered = options.filter(option =>
      option.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredOptions(filtered);
  };

  const handleOptionSelect = (value) => {
    setInputValue(value);
    setIsListVisible(false);
    console.log(value);
  };

  const handleInputBlur = () => {
    setIsListVisible(false);
  };

  return (
    <div className="dropdown-input-container mb-3">
      <label>{label}</label>
      <div className="dropdown-input">
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          onBlur={handleInputBlur}
          placeholder="Type here..."
          className="form-control"
        />
        {isListVisible && (
          <div className="options-dropdown">
            <ul className="options-list list-group">
              {filteredOptions.map((option, index) => (
                <li key={index} className="list-group-item" onMouseDown={() => handleOptionSelect(option)}>
                  {option}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default DropDownInput;
