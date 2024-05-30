import React from 'react';
import './InputField.css';

const InputField = ({ label, id, type = "text", placeholder }) => {
  return (
    <div className="input-container">
      <label htmlFor={id} className="form-label">{label}</label>
      <input 
        type={type} 
        id={id} 
        placeholder={placeholder} 
        className="form-control input-field" 
      />
    </div>
  );
};

export default InputField;
