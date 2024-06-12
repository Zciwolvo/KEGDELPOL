import React from 'react';
import './InputField.css';

const InputField = ({ label, id, type = "text", placeholder, value, onChange }) => {
  const handleChange = (event) => {
    const newValue = event.target.value;
    onChange(newValue); // Call the onChange handler with the extracted value
  };

  return (
    <div className="input-container">
      <label htmlFor={id} className="form-label">{label}</label>
      <input 
        type={type} 
        id={id} 
        placeholder={placeholder} 
        className="form-control input-field" 
        value={value}
        onChange={handleChange} // Use the handleChange function
      />
    </div>
  );
};

export default InputField;
