import React, {useState} from 'react';
import CustomAlert from '../CustomAlert';

//Logos

import NewTshirt from "../logos/new-tshirt";
import NewHat from "../logos/new-hat";
import NewGlasses from "../logos/new-glasses";
import NewHeadphones from "../logos/new-headphones";
import NewJacket from "../logos/new-jacket";
import NewAcess from "../logos/new-acess";
import SaveIcon from "../logos/save";

const Builder = ({ onSelectPart, onSave }) => {
  const [alertMessage, setAlertMessage] = useState('');

  const handleSave = () => {
    onSave();
    setAlertMessage('Saved!'); 
   
    
   
  };

  const handleButtonClick = (part) => {
    onSelectPart(part);
  }

  return (
     <div className="builder">
        <ul className="menu">
          <li>
            <button className="shirt-btn" onClick={() => onSelectPart('body')}>
              <div className="logo-container">
                <NewTshirt className="logo" />
              </div>
              <div className="text-container">Shirts</div>
            </button>
          </li>
          <li>
            <button className="hat-btn" onClick={() =>
            onSelectPart('hat')}>
                <div className="logo-container">
                  <NewHat className="logo" />
                </div>
                <div className="text-container">Hats</div>
            </button> 
          </li>
          <li>
            <button className="glasses-btn" onClick={() => onSelectPart('glasses')}>
              <div className="logo-container">
                <NewGlasses className="logo"/>
              </div>
              <div className="text-container">Eyewear</div>
            </button>
          </li>
          <li>
            <button className="head-btn"
            onClick={() => onSelectPart('head')}>
              <div className="logo-container">
                <NewHeadphones className="logo"/>
              </div>
              <div className="text-container">Earwear</div>
            </button>
          </li>
          <li>
            <button className="outwear-btn"
            onClick={() => onSelectPart('outwear')}>
              <div className="logo-container">
                <NewJacket className="logo"/>
              </div>
              <div className="text-container">Outwear</div>
            </button>
          </li>
          <li>
            <button className="belt-btn" onClick={() =>   onSelectPart('belt')}>
              <div className="logo-container">
                <NewAcess className="logo"/>
              </div>
              <div className="text-container">Acessories</div>
            </button>
          </li>
          <li className="save-btn">
            <button onClick={handleSave}>
              <div className="logo-container">
                <SaveIcon className="logo" />
              </div>
              <div className="text-container">Save Progress</div>
            </button>
          </li>
        </ul>
        <CustomAlert message={alertMessage} onClose={() => setAlertMessage('')} />
      </div>
  );
}
export default Builder;
