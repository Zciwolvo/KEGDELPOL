import React from 'react';
import './SubmitButton.css';

const SubmitButton = ({ buttonText }) => {
  return (
    <button className="btn submit-button">
      {buttonText}
    </button>
  );
};

export default SubmitButton;
