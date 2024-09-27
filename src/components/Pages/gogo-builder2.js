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



import Body1 from "../bodies/body-1";
import Body2 from "../bodies/body-2";


import Beard1 from "../hair/beard-1.js";
import Hair1 from "../hair/hair-1.js";
import Hair2 from "../hair/hair-2.js";

import Glasses1 from "../glasses/glasses-1";
import Glasses2 from "../glasses/glasses-2";
import Glasses3 from "../glasses/glasses-3";

import Mask1 from "../masks/mask-1";


//Logos
import ShareIcon from "../logos/share";
import DownloadIcon from "../logos/download";
import Scarf1 from "../scarf/scarf1.js";
import DeleteIcon from "../logos/delete-symbol.js";




function GogoBuilder2() {
  const avatarRef = useRef(null);
  

  const hatOptions = [<Hat1 />, <Hat2 />, <Hat3 />, <Hat4 />, <Hat5 />, <div />, <div />, <div />, <DeleteIcon className="delete-icon" /> ];

  const bodyOptions = [<Body1 />, <Body2 />, <div />, <div />, <div />, <div />, <div />, <div />, <div />];

  const glassesOptions = [<Glasses1 />, <Glasses2 />, <Glasses3 />, <Glasses3 />, <Glasses3 />, <Glasses3 />, <Glasses3 />, <Glasses3 />, <Glasses3 />];

  const scarfOptions = [<Scarf1 />, <div />, <div />, <div />, <div />, <div />, <div />, <div />, <div />];

  const hairOptions = [<Beard1 />, <Hair1 />, <Hair2 />, <div />, <div />, <div />, <div />, <div />, <div />];

  const maskOptions = [<Mask1 />, <div />, <div />, <div />, <div />, <div />, <div />, <div />, <div />];
 


  //State to track selected part and its index
  const [selectedPart, setSelectedPart] = useState("body");
  const [hatIndex, setHatIndex] = useState(-1);
  const [bodyIndex, setBodyIndex] = useState(-1);
  const [glassesIndex, setGlassesIndex] = useState(-1);
  const [scarfIndex, setScarfIndex] = useState(-1);
  const [maskIndex, setMaskIndex] = useState(-1);
  const [hairIndex, setHairIndex] = useState(-1);
 

  
 
  //State to manage colors for each part
  const [colors] = useState({
    hat: "#BFBFBF",
    glasses: "#BABABA",
    body: "#BABABA",
    hair: "#BABABA",
    mask: "#BABABA",
    scarf: "#BABABA",
    beard:"#BABABA",
  });

  
// State to track colors of the currently selected parts, updated during color selection
  const [activeColors, setActiveColors] = useState({
    hat: colors.hat,
    glasses: colors.glasses,
    body: colors.body,
    hair: colors.hair,
    mask: colors.mask,
    scarf: colors.scarf,
  });
  

  const [isProcessing, setIsProcessing] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [shareableLink, setShareableLink] = useState('http://default-link.com');
  const [imagePreview, setImagePreview] = useState('');
  

  const saveAvatar = () => {
    console.log("Avatar saved:", {
        hatIndex,
        bodyIndex,
        glassesIndex,
        hairIndex,
        scarfIndex,
        maskIndex,
        colors,
    });
  };


  const downloadAvatar = async () => {
    console.log("Download button clicked");
    setIsProcessing(true);  
    try {
      if (avatarRef.current) {
        await new Promise((resolve) => setTimeout(resolve, 100)); 
  
        console.log("Capturing avatar"); 
        const canvas = await html2canvas(avatarRef.current, { scale: 2, useCORS: true });
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
  
  

  const shareAvatar = async () => {
    console.log("Share button clicked");
    setIsProcessing(true); 
    try {
      if (avatarRef.current) {
        await new Promise((resolve) => setTimeout(resolve, 100)); 
  
        console.log("Capturing avatar for sharing");
        const canvas = await html2canvas(avatarRef.current, { scale: 2, useCORS: true });
        const imageBase64 = canvas.toDataURL('image/png');
        const base64Image = encodeURIComponent(imageBase64);
  
        const avatarState = {
          hatIndex,
          bodyIndex,
          glassesIndex,
          hairIndex,
          scarfIndex,
          maskIndex,
          colors,
        };
        const base64Config = encodeURIComponent(btoa(JSON.stringify(avatarState)));
  
        const shareableLink = `${window.location.origin}/share?image=${base64Image}&config=${base64Config}`;
  
        
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
  }).catch(error => {
    console.error("Error copying link:", error);
  });
};




  // Handler to handle color change for selected part
  const handleColorChange = (color) => {
    setActiveColors((prev) => ({
      ...prev,
      [selectedPart]: color.hex,
    }));
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
      case "hair":
        setHairIndex(-1); 
        break;
      case "scarf":
        setScarfIndex(-1); 
        break;
      case "mask":
        setMaskIndex(-1); 
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
              onClick={() => {
                if (index === hatOptions.length - 1) {
                  console.log("Delete action triggered!");
                  setHatIndex(-1);
                } else {
                  setHatIndex(index);
                }
              }}
              className={hatIndex === index ? "active-button" : ""}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              >
              {index === hatOptions.length - 1 ? (
                <DeleteIcon className="delete-icon"/>
              ) : (
                React.cloneElement(Hat, { color: colors.hat })
              )}
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
              onClick={() => {
                if (index === bodyOptions.length - 1) {
                  console.log("Delete action triggered!");
                  setBodyIndex(-1);
                } else {
                  setBodyIndex(index);
                }
              }}
              className={bodyIndex === index ? "active-button" : ""}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              >
              {index === bodyOptions.length - 1 ? (
                <DeleteIcon className="delete-icon"/>
              ) : (
                React.cloneElement(Body, { color: colors.body })
              )}
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
              onClick={() => {
                if (index === glassesOptions.length - 1) {
                  console.log("Delete action triggered!");
                  setGlassesIndex(-1);
                } else {
                  setGlassesIndex(index);
                }
              }}
              className={glassesIndex === index ? "active-button" : ""}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              >
              {index === glassesOptions.length - 1 ? (
                <DeleteIcon className="delete-icon"/>
              ) : (
                React.cloneElement(Glasses, { color: colors.glasses })
              )}
            </motion.button>
            ))}
          </div>
        );
      case "hair":
        return (
          <div className="hair-options grid">
            {hairOptions.map((Hair, index) => (
              <motion.button
              key={index}
              onClick={() => {
                if (index === hairOptions.length - 1) {
                  console.log("Delete action triggered!");
                  setHairIndex(-1);
                } else {
                  setHairIndex(index);
                }
              }}
              className={hairIndex === index ? "active-button" : ""}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              >
              {index === hairOptions.length - 1 ? (
                <DeleteIcon className="delete-icon"/>
              ) : (
                React.cloneElement(Hair, { color: colors.hair })
              )}
            </motion.button>
            ))}
          </div>
        );
      case "scarf":
        return (
          <div className="scarf-options grid">
            {scarfOptions.map((Scarf, index) => (
             <motion.button
             key={index}
             onClick={() => {
               if (index === scarfOptions.length - 1) {
                 console.log("Delete action triggered!");
                 setScarfIndex(-1);
               } else {
                 setScarfIndex(index);
               }
             }}
             className={scarfIndex === index ? "active-button" : ""}
             whileHover={{ scale: 1.1 }}
             whileTap={{ scale: 0.9 }}
             >
             {index === scarfOptions.length - 1 ? (
               <DeleteIcon className="delete-icon"/>
             ) : (
               React.cloneElement(Scarf, { color: colors.scarf })
             )}
           </motion.button>
            ))}
          </div>
        );
      case "mask":
        return (
          <div className="mask-options grid">
            {maskOptions.map((Mask, index) => (
              <motion.button
              key={index}
              onClick={() => {
                if (index === maskOptions.length - 1) {
                  console.log("Delete action triggered!");
                  setMaskIndex(-1);
                } else {
                  setMaskIndex(index);
                }
              }}
              className={maskIndex === index ? "active-button" : ""}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              >
              {index === maskOptions.length - 1 ? (
                <DeleteIcon className="delete-icon"/>
              ) : (
                React.cloneElement(Mask, { color: colors.mask })
              )}
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
        selectHair={() => onSelectPart("hair")}
        selectScarf={() => onSelectPart("scarf")}
        selectMask={() => onSelectPart("mask")} />

      <div className="column-container main-content">
        <div className="left-column selected-part-controller" >
          {renderCurrentPart()}
        
          <div className="hue-picker">
            <HuePicker color={colors[selectedPart]} onChange={handleColorChange}  />
         </div>
        </div>



      <div className="right-column">
        {isProcessing && <LoadingSpinner />}
        <div className="avatar-container current-hat   current-body current-glasses current-hair current-scarf current-mask" ref={avatarRef}>
        {hatIndex === -1 && <Avatar showHat={true} hatColor={colors.hat} />}
        {glassesIndex === -1 && <Avatar showGlasses={true} glassesColor={colors.glasses} />}
        {bodyIndex === -1 && <Avatar showBody={true} 
        bodyColor={colors.body} />}
         
        {hatIndex !== -1 && React.cloneElement(hatOptions[hatIndex], { color: activeColors.hat })}
        {bodyIndex !== -1 && React.cloneElement(bodyOptions[bodyIndex], { color: activeColors.body })}
        {glassesIndex !== -1 && React.cloneElement(glassesOptions[glassesIndex], { color: activeColors.glasses })}
        {hairIndex !== -1 && React.cloneElement(hairOptions[hairIndex], { color: activeColors.hair })}
        {scarfIndex !== -1 && React.cloneElement(scarfOptions[scarfIndex], { color: activeColors.scarf })}
        {maskIndex !== -1 && React.cloneElement(maskOptions[maskIndex], { color: activeColors.mask })}

          <Avatar
                 showBody={bodyIndex === -1}
                 showHat={hatIndex === -1}
                 showGlasses={glassesIndex === -1}
                 showEyes={glassesIndex === -1}
            />

        </div>


          <div className="d-s-buttonContainer ">
            <button className="access-bar download-btn"    onClick={downloadAvatar}>
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
            <button className="copy-btn modal-btns" onClick={copyToClipboard}>
              Copy Link
            </button>
            <button className="close-btn modal-btns" onClick={closeModal}>
              Close
            </button>
          </div>
        </div>
      )}
    </>

  );
}

export default GogoBuilder2;


