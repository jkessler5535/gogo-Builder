import React, {useState} from 'react';
import TemporaryAlert from '../TempAlert';

//Logos

import NewTshirt from "../logos/new-tshirt";
import NewHat from "../logos/new-hat";
import NewGlasses from "../logos/new-glasses";
import NewHeadphones from "../logos/new-headphones";
import NewJacket from "../logos/new-jacket";
import NewAcess from "../logos/new-acess";
import SaveIcon from "../logos/save";

const Builder = ({ onSelectPart, onSave }) => {
  const [showAlert, setShowAlert] = useState(false);
  

  const handleSave = () => {
    if (onSave) {
   onSave();
   }
   setShowAlert(true);
  };

  
  
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
            <button className="hair-btn"
            onClick={() => onSelectPart('hair')}>
              <div className="logo-container">
                <NewHeadphones className="logo"/>
              </div>
              <div className="text-container">Hair</div>
            </button>
          </li>
          <li>
            <button className="scarf-btn"
            onClick={() => onSelectPart('scarf')}>
              <div className="logo-container">
                <NewJacket className="logo"/>
              </div>
              <div className="text-container">Scarf</div>
            </button>
          </li>
          <li>
            <button className="mask-btn" onClick={() =>   onSelectPart('mask')}>
              <div className="logo-container">
                <NewAcess className="logo"/>
              </div>
              <div className="text-container">Acessories</div>
            </button>
          </li>
          <li>
            <button onClick={handleSave}  className="save-btn">
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
          </li>
      </ul>
    </div>
  );
}
export default Builder;
