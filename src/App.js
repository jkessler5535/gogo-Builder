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
import NewGlasses from "./components/logos/new-glasses";
import NewHeadphones from "./components/logos/new-headphones";
import NewJacket from "./components/logos/new-jacket";
import NewAcess from "./components/logos/new-acess";


function App() {
  
    
  return (
    <div className="app-container">
      <header className="App-header">
        <button>
          <img src={Icon}  />
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
         <button className="icon-button">
            <NewTshirt className="logo"/>
            Shirts
          </button>
          <button className="icon-button">
            <NewHat className="logo"/>
            Hats
          </button>
          <button className="icon-button">
            <NewGlasses className="logo"/>
            Glasses
          </button>
          <button className="icon-button">
            <NewHeadphones className="logo"/>
            Earwear
          </button>
          <button className="icon-button">
            <NewJacket className="logo"/>
            Outwear
          </button>
          <button className="icon-button">
            <NewAcess className="logo"/>
            Accessories
          </button>
       </div>

      </div>
      <footer>
        <p>Brought to you by<span className="footer-img"><img src={FooterImg} alt="footer-icon"/></span> GoGoPool</p>
      </footer>
    </div>
  );
}

export default App;
