import React, { useState } from "react";
import { HuePicker } from 'react-color';




//Logos
import NewHat2 from "../logos/NewHat2";
import Avatar from "../logos/avatar";
import ShareIcon from "../logos/share";
import DownloadIcon from "../logos/download";



const PageBody = () => {
  const [color, setColor] = useState('#ff0000');
  
  const handleColorChange = (selectedColor) => {
    setColor(selectedColor.hex);
  };



  return (
    <div className="column-container">
      <div className="left-column">
        <div className="grid">
          <div className="selection">
              <NewHat2/>
          </div>
          <div className="selection">
              
          </div>
          <div className="selection">
              
          </div>
          <div className="selection">
              
          </div>
          <div className="selection">
              
          </div>
          <div className="selection">
              
          </div>
          <div className="selection">
              
          </div>
          <div className="selection">
              
          </div>
          <div className="selection">
              
          </div>
          <div className="selection hidden">
              
          </div>
          <div className="selection hidden">
              
          </div>
          <div className="selection hidden">
              
          </div>
        </div>

        <div className="color-picker" >
          <HuePicker/>
        </div>
      </div>


      <div className="right-column">
            <div className="avatar-container">
              <Avatar className="avatar"/>
            </div>
          <div className="d-s-buttonContainer ">
            <button className="access-bar">
              <div className="logo-container">
                <DownloadIcon className="logo d-s-logo"/>
              </div>
              <div className="text-container">
                <p className="d-s-text">Download Art</p>
              </div>
            </button>
            <button className="access-bar hi">
              <div className="logo-container share-btn">
                <ShareIcon className="logo "/>
              </div>
              <div className="text-container share-btn">
                <p>Share Art</p>
              </div>
            </button>
          </div>
      </div>
    </div>
      
);
}

export default PageBody;