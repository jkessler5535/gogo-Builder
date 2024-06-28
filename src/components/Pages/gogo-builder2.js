import React, {useState} from "react";
import { HuePicker } from 'react-color';
import {motion} from 'framer-motion';
import BuilderDash from './builder-dash.js';


import Hat1 from "../hats/hat-1";
import Hat2 from "../hats/hat-2";
import Hat3 from "../hats/hat-3";
import Hat4 from "../hats/hat-4";
import Hat5 from "../hats/hat-5";
import Hat6 from "../hats/hat-6";
import Hat7 from "../hats/hat-7";

//Logos

import Avatar from "../logos/avatar";
import ShareIcon from "../logos/share";
import DownloadIcon from "../logos/download";




const GogoBuilder2 = () => {
  const hatOptions = [<Hat1 />, <Hat2 />, <Hat3 />, <Hat4 />, <Hat5 />, <Hat6 />, <Hat7 />];

  const [selectedPart, setSelectedPart] = useState("hat");

  const [colors, setColors] = useState({
    hat: "#000"

  });
  const [hatIndex, setHatIndex] = useState(0);

  const handleColorChange = (colorHex) => {
    setColors({ ...colors, [selectedPart]: colorHex });
  };

  const currentHat = React.cloneElement(hatOptions[hatIndex], {
    color: colors.hat,
  });

  return (
  <>
    <BuilderDash/>
    <div className="column-container ">
      <div className="left-column selected-part-controller">
          {selectedPart === "hat" && (
            <div className="hat-options grid">
              {hatOptions.map((Hat, index) => (
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  key={index}
                  onClick={() => setHatIndex(index)}
                  className={hatIndex === index ? "active-button" : ""}
                >
                  {React.cloneElement(Hat, { color: colors.hat })}
                </motion.button>
              ))}
            </div>
          
          )}
        <div className="hue-picker" >
          <HuePicker/>
        </div>
      </div>
     


      <div className="right-column">
            <div className="avatar-container">
              {currentHat}
              <Avatar/>
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
  </>
      
);
}

export default GogoBuilder2;