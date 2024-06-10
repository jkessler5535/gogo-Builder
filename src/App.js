import React, { useState } from "react";
import "./index.scss";
import { HuePicker } from 'react-color';



//Logo
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
import FooterIcon from "./components/logos/footerIcon";

function App() {
    const [color, setColor] = useState('#ff0000');
  
    const handleColorChange = (selectedColor) => {
      setColor(selectedColor.hex);
    };

    window.addEventListener('scroll', () => {
      const gridContainer = document.getElementById('grid');
      const scrollPosition = window.scrollY || window.pageYOffset;
      const isScrolledToBottom = (window.innerHeight + scrollPosition) >= document.body.offsetHeight;
    
      console.log('Scrolled to bottom:', isScrolledToBottom); // Check if this message appears in the console
    
      if (isScrolledToBottom) {
        console.log('Revealing hidden boxes...');
        revealHiddenBoxes(gridContainer);
      }
    });
    
    function revealHiddenBoxes(gridContainer) {
      const hiddenBoxes = gridContainer.querySelectorAll('.hidden');
      hiddenBoxes.forEach(box => {
        box.classList.remove('hidden'); // Show the hidden boxes
      });
    }
    
    
    
  return (
    <div className="container">
        <header>
          <nav className="nav-list">
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
          </nav> 
          <div className="social-btns">
              <a href="https://discord.com"><Discord/></a>
              <a href="https://twitter.com"><Twitter/></a>
          </div>
        </header>

     
        <div className="builder-container">
          <ul>
            <li>
              <a href="https://www.gogopool.com">
                <div className="logo-container">
                  <NewTshirt className="logo" />
                </div>
                <div className="text-container">Shirts</div>
              </a>
            </li>
            <li>
              <a href="https://www.gogopool.com">
                <div className="logo-container">
                  <NewHat className="logo" />
                </div>
                <div className="text-container">Hats</div>
              </a>
            </li>
            <li>
              <a href="https://www.gogopool.com">
                <div className="logo-container">
                  <NewGlasses className="logo"/>
                </div>
                <div className="text-container">Eyewear</div>
              </a>
            </li>
            <li>
              <a href="https://www.gogopool.com">
                <div className="logo-container">
                  <NewHeadphones className="logo"/>
                </div>
                <div className="text-container">Earwear</div>
              </a>
            </li>
            <li>
              <a href="https://www.gogopool.com">
                <div className="logo-container">
                  <NewJacket className="logo"/>
                </div>
                <div className="text-container">Outwear</div>
              </a>
            </li>
            <li>
              <a href="https://www.gogopool.com">
                <div className="logo-container">
                  <NewAcess className="logo"/>
                </div>
                <div className="text-container">Acessories</div>
              </a>
            </li>
            <li className="save-btn">
              <a href="https://www.gogopool.com">
                <div className="logo-container">
                  <SaveIcon className="logo"/>
                </div>
                <div className="text-container">Save Progress</div>
              </a>
            </li>
          </ul>
        </div>
      

      
        <div className="column-container">
          <div className="left-column">
            <div className="grid" id="grid">
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

            <div className="colorSlide" >
              <HuePicker color={color} onChange={handleColorChange} className="color"/>
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
        
        <footer className="IamTheFoot">
          <p>Brought to you by<span className="footer-img"><FooterIcon/></span> GoGoPool</p>
        </footer>
  </div>
 );
}

export default App;
