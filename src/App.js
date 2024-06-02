import React from "react";
import "./index.scss";




//Generator
import TVGenerator from "./assets/lab-assets/tv-generator.svg";
import Generator from "./assets/lab-assets/generator.svg";
import PanelLines from "./assets/lab-assets/panel-lines.svg";
//


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


function App() {
  
    
  return (
    <div className="app-container">
      <header className="App-header">
        <button className="header-icon">
          <Icon/>
        </button>
        <nav>
          <div className="nav-list">
            <a href="https://app.gogopool.com/liquid-staking/">Liquid Stake</a>
            <a href="https://app.gogopool.com/">Validate AVAX</a>
            <a href="https://docs.gogopool.com/gogopool-primer">
              Explore Subnets
            </a>
          </div>

          <div className="btn-container">
            <button className="icon-button">
              <Discord />
            </button>
            <button className="icon-button">
              <Twitter />
            </button>
          </div>
        </nav>
      </header>

      <div className="builder-container">
       <div className="builder">
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
         <div className="divider">
          <div className="active"></div>
         </div>
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
        <footer>
          <p>Brought to you by<span className="footer-img"><img src={FooterImg} alt="footer-icon"/></span> GoGoPool</p>
        </footer>
    </div>
   
 );
}

export default App;
