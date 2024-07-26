import React, { useEffect } from 'react';


const TemporaryAlert = ({ message, onClose }) => {
  useEffect(() => {
   
    const timer = setTimeout(() => {
      onClose();
    }, 2000);

    
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className="temporary-alert">
      {message}
    </div>
  );
};

export default TemporaryAlert;
