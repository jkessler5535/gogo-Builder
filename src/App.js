import React, { useState } from "react";
import "./index.scss";
import AvatarBuilder from "./components/gogo-builder";
import html2canvas from "html2canvas";
import Switch from "./components/switch";


//Generator
import TVGenerator from "./assets/lab-assets/tv-generator.svg";
import Generator from "./assets/lab-assets/generator.svg";
import PanelLines from "./assets/lab-assets/panel-lines.svg";
import { motion } from "framer-motion";

//Logo
import Logo from "./assets/gogobuilder-logo.svg";
import Fire from "./assets/icons/fire.svg";


function App() {
    

  const downloadAvatar = async () => {
    const avatarElement = document.querySelector(".avatar-only");
    const canvas = await html2canvas(avatarElement, {
      scale: 2,
      useCORS: true,
      backgroundColor: null,
    });

    const link = document.createElement("a");
    link.href = canvas.toDataURL("image/png");
    link.download = "avatar.png";
    link.click();
  };
  return (
    <div className="app-container">
      <header className="App-header">
        <img src={Logo} alt="GogoBuilder Logo" />
        <nav>
          <div className="nav-list">
            <a href="https://app.gogopool.com/liquid-staking/">Liquid Stake</a>
            <a href="https://app.gogopool.com/">Validate</a>
            <a href="https://docs.gogopool.com/gogopool-primer">
              Our Mission
            </a>
          </div>
          <Switch/> 
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            style={{
              border: "none",
              backgroundColor: "transparent",
            }}
          >
            <button className="btn" onClick={downloadAvatar}>
              Download Avatar
            </button>
          </motion.button>
        </nav>
      </header>
      <div className="builder-container">
        <AvatarBuilder />
        <img
          className="lab-asset lab-asset__tv"
          src={TVGenerator}
          alt="TV Generator Illustration"
        />
        <img
          className="lab-asset lab-asset__gen"
          src={Generator}
          alt="Generator Illustration"
        />
        <img
          className="lab-asset lab-asset_panels"
          src={PanelLines}
          alt="Panel Line illustrations"
        />
      </div>
      <footer>
        <p>Made with <span><img src={Fire} alt="decorative icon"/></span> by GoGoPool</p>
        <p>Copyright © 2023 GoGoPool</p>
        <a href="https://www.gogopool.com/">GoGoPool</a>
      </footer>
    </div>
  );
}

export default App;
