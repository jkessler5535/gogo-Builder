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

import Body1 from "../bodies/body-1";
import Body2 from "../bodies/body-2";
import Body3 from "../bodies/body-3";
import Body4 from "../bodies/body-4";
import Body5 from "../bodies/body-5";
import Body6 from "../bodies/body-6";

import Glasses1 from "../glasses/glasses-1";
import Glasses2 from "../glasses/glasses-2";
import Glasses3 from "../glasses/glasses-3";

import Belt1 from "../belt/belt-1";
import Headphones1 from "../headphones/headphones-1";

//Logos

import Avatar from "../logos/avatar";
import ShareIcon from "../logos/share";
import DownloadIcon from "../logos/download";

//Icons



function GogoBuilder2() {

  const hatOptions = [<Hat1 />, <Hat2 />, <Hat3 />, <Hat4 />, <Hat5 />, <Hat6 />, <Hat7 />, <Hat7 />, <Hat7/>];

  const bodyOptions = [<Body1 />, <Body2 />, <Body3 />, <Body4 />, <Body5 />, <Body6 />, <Body6 />, <Body6 />,<Body6 />];

  const glassesOptions = [<Glasses1 />, <Glasses2 />, <Glasses3 />, <Glasses3 />, <Glasses3 />, <Glasses3 />,
    <Glasses3 />,<Glasses3 />,<Glasses3 />
  ];

  const headOptions = [
  <Headphones1/>,
  <Headphones1/>,
  <Headphones1/>,
  <Headphones1/>,
  <Headphones1/>,
  <Headphones1/>,
  <Headphones1/>,
  <Headphones1/>,
  <Headphones1/>
];

const outwearOptions = [
  <Headphones1/>,
  <Headphones1/>,
  <Headphones1/>,
  <Headphones1/>,
  <Headphones1/>,
  <Headphones1/>,
  <Headphones1/>,
  <Headphones1/>,
  <Headphones1/>,

];

  const beltOptions = [
     <Belt1 />,
     <Belt1 />,
     <Belt1 />,
     <Belt1 />,
     <Belt1 />,
     <Belt1 />,
     <Belt1 />,
     <Belt1 />,
     <Belt1 />,
    ];


  //State to track selected part and its index

  const [selectedPart, setSelectedPart] = useState("hat");
  const [hatIndex, setHatIndex] = useState(0);
  const [bodyIndex, setBodyIndex] = useState(0);
  const [glassesIndex, setGlassesIndex] = useState(0);
  const [headIndex, setHeadIndex] = useState(0);
  const [beltIndex, setBeltIndex] = useState(0);
  const [outwearIndex, setOutwearIndex] = useState(0);

 
  //State to manage colors for each part
  const [colors, setColors] = useState({
    hat: "#000",
    glasses: "#000",
    body: "#000",
    head: "#000",
    belt: "#000",
    outwear: "#000",
  });


  //Conditional statement to render the currently select Part

  const onSelectPart = (part) => {
    setSelectedPart(part);
    switch (part) {
      case "hat":
        setHatIndex(0); 
        break;
      case "body":
        setBodyIndex(0); 
        break;
      case "glasses":
        setGlassesIndex(0); 
        break;
      case "head":
        setHeadIndex(0); 
        break;
      case "belt":
        setBeltIndex(0); 
        break;
      case "outwear":
        setOutwearIndex(0); 
        break;
        default:
        break;
    }
  };

   // Handler to handle color change for selected part
   const handleColorChange = (colorHex, part) => {
    setColors({ ...colors, [selectedPart]: colorHex });
  };



  
 /*
  const currentHat = React.cloneElement(hatOptions[hatIndex], {
    color: colors.hat,
  });

  const currentBody = React.cloneElement(bodyOptions[bodyIndex], {
    color: colors.body,
  });

  const currentGlasses = glassesOptions[glassesIndex]
    ? React.cloneElement(glassesOptions[glassesIndex], { color: colors.glasses })
    : null;

    const currentHead = headOptions[headIndex]
    ? React.cloneElement(headOptions[headIndex], { color: colors.head })
    : null;

  const currentBelt = beltOptions[beltIndex]
    ? React.cloneElement(beltOptions[beltIndex], { color: colors.belt })
    : null;

  const currentOutwear = outwearOptions [outwearIndex]
   ? React.cloneElement(outwearOptions[outwearIndex], { color: colors.outwear})
   : null;
  */
   const renderCurrentPart = () => {
    switch (selectedPart) {
      case "hat":
        return (
          <div className="hat-options grid">
            {hatOptions.map((Hat, index) => (
              <motion.button
                key={index}
                onClick={() => setHatIndex(index)}
                className={hatIndex === index ? "active-button" : ""}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                {React.cloneElement(Hat, { color: colors.hat })}
              </motion.button>
            ))}
          </div>
        );
      case "body":
        return (
          <div className="body-options grid">
            {bodyOptions.map((Body, index) => (
              <motion.button
                key={index}
                onClick={() => setBodyIndex(index)}
                className={bodyIndex === index ? "active-button" : ""}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                {React.cloneElement(Body, { color: colors.body })}
              </motion.button>
            ))}
          </div>
        );
      case "glasses":
        return (
          <div className="glasses-options grid">
            {glassesOptions.map((Glasses, index) => (
              <motion.button
                key={index}
                onClick={() => setGlassesIndex(index)}
                className={glassesIndex === index ? "active-button" : ""}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                {React.cloneElement(Glasses, { color: colors.glasses })}
              </motion.button>
            ))}
          </div>
        );
      case "head":
        return (
          <div className="head-options grid">
            {headOptions.map((Head, index) => (
              <motion.button
                key={index}
                onClick={() => setHeadIndex(index)}
                className={headIndex === index ? "active-button" : ""}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                {React.cloneElement(Head, { color: colors.head })}
              </motion.button>
            ))}
          </div>
        );
      case "belt":
        return (
          <div className="belt-options grid">
            {beltOptions.map((Belt, index) => (
              <motion.button
                key={index}
                onClick={() => setBeltIndex(index)}
                className={beltIndex === index ? "active-button" : ""}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                {React.cloneElement(Belt, { color: colors.belt })}
              </motion.button>
            ))}
          </div>
        );
      case "outwear":
        return (
          <div className="outwear-options grid">
            {outwearOptions.map((Outwear, index) => (
              <motion.button
                key={index}
                onClick={() => setOutwearIndex(index)}
                className={outwearIndex === index ? "active-button" : ""}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                {React.cloneElement(Outwear, { color: colors.outwear })}
              </motion.button>
            ))}
          </div>
        );
      default:
        return null;
    }
  };
  

  
  return (
    <>
      <BuilderDash
        onSelectPart={onSelectPart}
        selectHat={() => onSelectPart("hat")}
        selectBody={() => onSelectPart("body")}
        selectHead={() => onSelectPart("head")}
        selectOutwear={() => onSelectPart("outwear")}
        selectBelt={() => onSelectPart("belt")} />

      <div className="column-container ">
        <div className="left-column selected-part-controller">
          {renderCurrentPart()}
        
          <div className="hue-picker">
            <HuePicker onChange={(color) => handleColorChange(color.hex, onSelectPart)} />
          </div>
        </div>



        <div className="right-column">
          <div className="avatar-container current-hat current-body current-glasses current-head">
          {React.cloneElement(hatOptions[hatIndex], {  color: colors.hat })}
            {React.cloneElement(bodyOptions[bodyIndex], { color: colors.body })}
            {React.cloneElement(glassesOptions[glassesIndex], { color: colors.glasses })}
            {React.cloneElement(headOptions[headIndex], { color: colors.head })}
            {React.cloneElement(beltOptions[beltIndex], { color: colors.belt })}
            {React.cloneElement(outwearOptions[outwearIndex], { color: colors.outwear })}
            <Avatar/>
          </div>

          <div className="d-s-buttonContainer ">
            <button className="access-bar">
              <div className="logo-container">
                <DownloadIcon className="logo d-s-logo" />
              </div>
              <div className="text-container">
                <p className="d-s-text">Download Art</p>
              </div>
            </button>
            <button className="access-bar">
              <div className="logo-container share-btn">
                <ShareIcon className="logo " />
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