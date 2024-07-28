import React, {useState, useRef} from "react";
import { HuePicker } from 'react-color';
import {motion} from 'framer-motion';
import BuilderDash from './builder-dash.js';
import Avatar from './avatar.js';
import html2canvas from 'html2canvas';
import LoadingSpinner from '../loadingSpinner.js'; 


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
import ShareIcon from "../logos/share";
import DownloadIcon from "../logos/download";


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
  <div/>,
  <div/>,
  <div/>,
  <div/>,
  <div/>,
  <div/>,
  <div/>,
  <div/>,
  <div/>,

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
  const [selectedPart, setSelectedPart] = useState("body");
  const [hatIndex, setHatIndex] = useState(-1);
  const [bodyIndex, setBodyIndex] = useState(-1);
  const [glassesIndex, setGlassesIndex] = useState(-1);
  const [headIndex, setHeadIndex] = useState(-1);
  const [beltIndex, setBeltIndex] = useState(-1);
  const [outwearIndex, setOutwearIndex] = useState(-1);
 

 
  //State to manage colors for each part
  const [colors, setColors] = useState({
    hat: "#000",
    glasses: "#000",
    body: "#000",
    head: "#000",
    belt: "#000",
    outwear: "#000",
  });


  const [isProcessing, setIsProcessing] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [shareableLink, setShareableLink] = useState('');
  const [imagePreview, setImagePreview] = useState('');
  

  const avatarRef = useRef(null);

 const downloadAvatar = async () => {
  setIsProcessing(true);  
  try {
    if (avatarRef.current) {
      const canvas = await html2canvas(avatarRef.current, { scale: 2,
      useCORS: true
     });
      const link = document.createElement('a');
      link.href = canvas.toDataURL('image/png');
      link.download = 'avatar.png';
      link.click();
    } else {
      console.error('Avatar reference is null');
     }
    } catch (error) {
      console.error('Error capturing avatar:', error);
    } finally {
      setIsProcessing(false);
    }
  };
  


  const saveAvatar = () => {
    console.log("Avatar saved:", {
        hatIndex,
        bodyIndex,
        glassesIndex,
        headIndex,
        beltIndex,
        outwearIndex,
        colors,
    });
  };

const shareAvatar = async () => {
  setIsProcessing(true); 
  try {
    if (avatarRef.current) {
      const canvas = await html2canvas(avatarRef.current, { scale: 2,
      useCORS: true,
      logging:false
    });
      const imageBase64 = canvas.toDataURL('image/png');
      const base64Image = encodeURIComponent(imageBase64);

      const avatarState = {
        hatIndex,
        bodyIndex,
        glassesIndex,
        headIndex,
        beltIndex,
        outwearIndex,
        colors,
      };
      const base64Config = encodeURIComponent(btoa(JSON.stringify(avatarState)));

      const shareableLink = `${window.location.origin}/share?image=${base64Image}&config=${base64Config}`;

      //set the generated link and image
      setShareableLink(shareableLink);
      setImagePreview(imageBase64);
      setModalVisible(true);
      } else {
        console.error('Avatar reference is null');
      }
    } catch (error) {
      console.error('Error capturing avatar for sharing:', error);
    } finally {
      setIsProcessing(false);
    }
  };
  

const closeModal = () => {
  setModalVisible(false);
};


const copyToClipboard = () => {
  navigator.clipboard.writeText(shareableLink).then(() => {
    alert("Link copied to clipboard!");
  });
};




  // Handler to handle color change for selected part
  const handleColorChange = (color) => {
    setColors({ ...colors, [selectedPart]: color.hex });
  };


 
  const onSelectPart = (part) => {
    setSelectedPart(part);
    switch (part) {
      case "hat":
        setHatIndex(-1); 
        break;
      case "body":
        setBodyIndex(-1); 
        break;
      case "glasses":
        setGlassesIndex(-1); 
        break;
      case "head":
        setHeadIndex(-1); 
        break;
      case "belt":
        setBeltIndex(-1); 
        break;
      case "outwear":
        setOutwearIndex(-1); 
        break;
        default:
        break;
    }
  };

  
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
        onSave={saveAvatar}
        selectHat={() => onSelectPart("hat")}
        selectBody={() => onSelectPart("body")}
        selectHead={() => onSelectPart("head")}
        selectOutwear={() => onSelectPart("outwear")}
        selectBelt={() => onSelectPart("belt")} />

      <div className="column-container ">
        <div className="left-column selected-part-controller">
          {renderCurrentPart()}
        
          <div className="hue-picker">
          <HuePicker color={colors[selectedPart]} onChange={handleColorChange}  />
         </div>
        </div>



      <div className="right-column">
        {isProcessing && <LoadingSpinner />}
        <div className="avatar-container current-hat   current-body current-glasses current-head" ref={avatarRef}>
        {hatIndex === -1 && <Avatar showHat={true} hatColor={colors.hat} />}
        {glassesIndex === -1 && <Avatar showGlasses={true} glassesColor={colors.glasses} />}
        {bodyIndex === -1 && <Avatar showBody={true} 
        bodyColor={colors.body} />}
          {hatIndex !== -1 && React.cloneElement(hatOptions[hatIndex], { color: colors.hat })}
          {bodyIndex !== -1 && React.cloneElement(bodyOptions[bodyIndex], { color: colors.body })}
          {glassesIndex !== -1 && React.cloneElement(glassesOptions[glassesIndex], { color: colors.glasses })}
          {headIndex !== -1 && React.cloneElement(headOptions[headIndex], { color: colors.head })}
          {beltIndex !== -1 && React.cloneElement(beltOptions[beltIndex], { color: colors.belt })}
          {outwearIndex !== -1 && React.cloneElement(outwearOptions[outwearIndex], { color: colors.outwear })}
          <Avatar
               showBody={glassesIndex === -1}
               showHat={hatIndex === -1} 
               showEyes={glassesIndex === -1} 
               showGlasses={glassesIndex === -1}
              
            />

        </div>


          <div className="d-s-buttonContainer ">
            <button className="access-bar download-btn" onClick={downloadAvatar}>
              <div className="logo-container">
                <DownloadIcon className="logo d-s-logo" />
              </div>
              <div className="text-container">
                <p className="d-s-text">Download Art</p>
              </div>
            </button>
            <button className="access-bar share-btn" onClick={shareAvatar}>
              <div className="logo-container ">
                <ShareIcon className="logo " />
              </div>
              <div className="text-container share-btn">
                <p>Share Art</p>
              </div>
            </button>
          </div>
        </div>
      </div>

      {modalVisible && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2>Share Your Avatar</h2>
            <p>Here is your shareable Avatar:</p>
            {imagePreview && <img src={imagePreview} alt="Avatar Preview" className="modal-preview" />}
            <input 
              type="text" 
              value={shareableLink} 
              readOnly 
              onClick={(e) => e.target.select()}
              className="modal-input"
            />
            <button className="copy-btn" onClick={copyToClipboard}>
              Copy Link
            </button>
            <button className="close-btn" onClick={closeModal}>
              Close
            </button>
          </div>
        </div>
      )}
    </>

  );
}

export default GogoBuilder2;


