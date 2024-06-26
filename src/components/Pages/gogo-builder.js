import React, { useState } from "react";
import ColorPicker from "./color-picker";

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

import Head1 from "../heads/head-1";
import Belt1 from "../belt/belt-1";
import { motion } from "framer-motion";

//Icons
import { ReactComponent as HatIcon } from "../assets/icons/hat.svg";
import { ReactComponent as BodyIcon } from "../assets/icons/body.svg";
import { ReactComponent as GlassesIcon } from "../assets/icons/glasses.svg";
import { ReactComponent as BeltIcon } from "../assets/icons/belt.svg";
import  NoneIcon from "../assets/icons/none-icon.svg";

//Lab Assets
import Platform from "../assets/lab-assets/platform.png";

const partIcons = {
  hat: <HatIcon />,
  body: <BodyIcon />,
  belt: <BeltIcon/>,
  glasses: <GlassesIcon/>,
};

const AvatarBuilder = (downloadAvatar) => {
  const hatOptions = [<Hat1 />, <Hat2 />, <Hat3 />, <Hat4 />, <Hat5 />, <Hat6 />, <Hat7 />];
  const bodyOptions = [<Body1 />, <Body2 />, <Body3 />, <Body4 />, <Body5 />, <Body6 />];
  const headOptions = [<Head1 />];
  const beltOptions = [null, <Belt1 />];
  const glassesOptions = [null, <Glasses1 />, <Glasses2 />, <Glasses3 />];

  const [selectedPart, setSelectedPart] = useState("hat");
  const [colors, setColors] = useState({
    hat: "#000",
    body: "#000",
    head: "#000",
    belt: "#000",
    glasses: "#000",
  });

  const [hatIndex, setHatIndex] = useState(0);
  const [bodyIndex, setBodyIndex] = useState(0);
  const [headIndex, setHeadIndex] = useState(0);
  const [beltIndex, setBeltIndex] = useState(0);
  const [glassesIndex, setGlassesIndex] = useState(0);

  const handleColorChange = (colorHex) => {
    setColors({ ...colors, [selectedPart]: colorHex });
  };

  const currentHat = React.cloneElement(hatOptions[hatIndex], {
    color: colors.hat,
  });
  const currentBody = React.cloneElement(bodyOptions[bodyIndex], {
    color: colors.body,
  });
  const currentHead = React.cloneElement(headOptions[headIndex], {
    color: colors.head,
  });


  const currentBelt = beltOptions[beltIndex] 
  ? React.cloneElement(beltOptions[beltIndex], { color: colors.belt }) 
  : null;

  const currentGlasses = glassesOptions[glassesIndex] 
  ? React.cloneElement(glassesOptions[glassesIndex], { color: colors.glasses }) 
  : null;

  

  return (
    <div className="flex gogo-builder">
      <div className="gogo-comp-holder">
        <div className="scan-line"></div>
        <div className="avatar-only">
          {currentHat}
          {currentGlasses}
          {currentHead}
          {currentBelt}
          {currentBody}
        </div>
        <img
          className="lab-asset lab-asset__platform"
          src={Platform}
          alt="Illustration of a platform"
        />
      </div>
      <div className="gogo-controls">
        <div className="part-selection">
          {Object.entries(partIcons).map(([part, Icon]) => (
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}

              key={part}
              onClick={() => setSelectedPart(part)}
              className={selectedPart === part ? "active-button" : ""}
            >
              {Icon}
            </motion.button>
          ))}
        </div>
        <div className="selected-part-controller">
          {selectedPart === "hat" && (
            <div className="hat-options">
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

          {selectedPart === "body" && (
            <div className="body-options">
              {bodyOptions.map((Body, index) => (
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}

                  key={index}
                  onClick={() => setBodyIndex(index)}
                  className={bodyIndex === index ? "active-button" : ""}
                >
                  {React.cloneElement(Body, { color: colors.body })}
                </motion.button>
              ))}
            </div>
          )}

          {selectedPart === "head" && (
            <div className="head-options">
              {headOptions.map((Head, index) => (
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  key={index}
                  onClick={() => setHeadIndex(index)}
                  className={headIndex === index ? "active-button" : ""}
                >
                  {React.cloneElement(Head, { color: colors.head })}
                </motion.button>
              ))}
            </div>
          )}

          {selectedPart === "belt" && (
            <div className="belt-options">
              {beltOptions.map((Belt, index) => (
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  key={index}
                  onClick={() => setBeltIndex(index)}
                  className={beltIndex === index ? "active-button" : ""}
                >
                  {Belt 
                    ? React.cloneElement(Belt, { color: colors.belt }) 
                    : <img src={NoneIcon} alt="non icon" className="none-icon"/>
                  }
                </motion.button>
              ))}
            </div>
          )}
          {selectedPart === "glasses" && (
            <div className="glasses-options">
              {glassesOptions.map((Glasses, index) => (
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  key={index}
                  onClick={() => setGlassesIndex(index)}
                  className={glassesIndex === index ? "active-button" : ""}
                >
                  {Glasses 
                    ? React.cloneElement(Glasses, { color: colors.glasses }) 
                    : <img src={NoneIcon} alt="non icon" className="none-icon"/>
                  }
                </motion.button>
              ))}
            </div>
          )}
        </div>
        <div className="color-picker">
          <ColorPicker
            selectedColor={colors[selectedPart]}
            onColorSelect={handleColorChange}
          />
        </div>
        <button
          style={{ position: "absolute", zIndex: "200", top: "0", right: "0" }}
          onClick={downloadAvatar}
        >
          Download Avatar
        </button>
      </div>
    </div>
  );
};

export default AvatarBuilder;
