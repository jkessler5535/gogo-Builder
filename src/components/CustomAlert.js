// CustomAlert.js
import React from 'react';


const CustomAlert = ({ message, onClose }) => {
  if (!message) return null;

  return (
    <div className="custom-alert">
      <div className="custom-alert-content">
        <p>{message}</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default CustomAlert;
