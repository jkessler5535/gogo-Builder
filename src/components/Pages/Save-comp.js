import React, { useState } from 'react';
import TemporaryAlert from '../TempAlert';
import SaveIcon from '../logos/save'; 

const SaveButton = ({ onSave }) => {
  const [showAlert, setShowAlert] = useState(false);

  const handleSave = () => {
    if (onSave) {
      onSave();
    }
    setShowAlert(true);
  };

  return (
    <div>
      <button onClick={handleSave} className="save-btn">
        <div className="logo-container">
          <SaveIcon className="logo" />
        </div>
        <div className="text-container white-space">Save Progress</div>
      </button>
      {showAlert && (
        <TemporaryAlert
          message="Saved!"
          onClose={() => setShowAlert(false)}
        />
      )}
    </div>
  );
};

export default SaveButton;
