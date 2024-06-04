import React, { useState } from "react";
import "./index.scss";
import { HuePicker } from 'react-color';




//Logo
import FooterImg from "./Images/Group.png";
import Icon from "./components/logos/gogoIcon";
import Discord from "./components/logos/discord-icon";
import Twitter from "./components/logos/twitter-icon";
import NewTshirt from "./components/logos/new-tshirt";
import NewHat from "./components/logos/new-hat";
import NewHat2 from "./components/logos/NewHat2"
import NewGlasses from "./components/logos/new-glasses";
import NewHeadphones from "./components/logos/new-headphones";
import NewJacket from "./components/logos/new-jacket";
import NewAcess from "./components/logos/new-acess";
import SaveIcon from "./components/logos/save";
import Avatar from "./components/logos/avatar";
import ShareIcon from "./components/logos/share";
import DownloadIcon from "./components/logos/download";

function App() {
    const [color, setColor] = useState('#ff0000');
  
    const handleColorChange = (selectedColor) => {
      setColor(selectedColor.hex);
    };
    
  return (
    <main>
      <header>
        <nav>
          <div className="nav-list">
          <ul>
            <li>
              <a href="/home">
                <Icon className="gogo-icon"/>
              </a>
            </li>
            <li>
              <a href="https://app.gogopool.com/liquid-staking/">Liquid Stake</a> 
            </li>
            <li>
              <a href="https://app.gogopool.com/">
              Validate AVAX</a>
            </li>
            <li>
              <a href="https://docs.gogopool.com/gogopool-primer">Explore Subnets</a>
            </li>
          </ul>
          </div>
         
            <div className="btn-container">
              <button className="social-button">
                <Discord />
              </button>
              <button className="social-button">
                <Twitter />
              </button>
            </div>
        </nav>
      </header>

      <div className="content-container">
        <div className="builder-container">
          <button className="access-bar">
            <div className="logo-container">
              <NewTshirt className="logo "/>
            </div>
            <div className="text-container">
                Shirts
            </div>
          </button>
          <button className="access-bar">
            <div className="logo-container">
              <NewHat className="logo"/>
            </div>
            <div className="text-container">
              Hats
            </div>
          </button>
          <button className="access-bar">
            <div className="logo-container">
              <NewGlasses className="logo"/>
            </div>
            <div className="text-container">
              Eyewear
            </div>
          </button>
          <button className="access-bar">
            <div className="logo-container">
              <NewHeadphones className="logo"/>
            </div>
            <div className="text-container">
              Earwear
            </div>
          </button>
          <button className="access-bar">
            <div className="logo-container">
              <NewJacket className="logo"/>
            </div>
            <div className="text-container">
              Outwear
            </div>
          </button>
          <button className="access-bar">
            <NewAcess className="logo" />
            Accessories
          </button>
          <button className="access-bar">
            <div className="logo-container">
              <SaveIcon className="logo"/>
            </div>
            <div className="text-container">
              Save Progress
            </div>
          </button>
        </div>
      

      
        <div className="main-container">
            <div className="main-content">
              <div className="main-left">
                <button className="selection">
                    <NewHat2/>
                </button>
                <button className="selection">
                    
                </button>
                <button className="selection">
                    
                </button>
                <button className="selection">
                    
                </button>
                <button className="selection">
                    
                </button>
                <button className="selection">
                    
                </button>
                <button className="selection">
                    
                </button>
                <button className="selection">
                    
                </button>
                <button className="selection">
                    
                </button>
              </div>
            
              <div className="main-right">
                <Avatar className="avatar" alt="avatar"/>
              </div>
            </div>
        </div>
       
        <div className="colorShare">
          <div className="color-Slider">
            <HuePicker color={color} onChange={handleColorChange}  className="slider-picker"/>
          </div>
          <div className="d-s-buttonContainer">
            <button className="access-bar">
              <div className="logo-container">
                <DownloadIcon className="logo d-s-logo"/>
              </div>
              <div className="text-container">
                Download Art
              </div>
            </button>
            <button className="access-bar">
              <div className="logo-container">
                <ShareIcon className="logo d-s-logo"/>
              </div>
              <div className="text-container">
                Share Art
              </div>
            </button>
          </div>
        </div>
        <footer>
          <p>Brought to you by<span className="footer-img"><img src={FooterImg} alt="footer-icon"/></span> GoGoPool</p>
        </footer>
      </div>
    </main>
    
   
 );
}

export default App;
