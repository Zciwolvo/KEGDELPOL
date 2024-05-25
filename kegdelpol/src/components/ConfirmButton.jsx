import React from 'react';
import './ConfirmButton.css'; // Zaimportuj plik stylów CSS

const ConfirmButton = ({ buttonText, onClick }) => {
  return (
    <button type="submit" className="submit-button" onClick={onClick}>
      {buttonText}
    </button>
  );
};

export default ConfirmButton;
