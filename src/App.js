import React from "react";
import "./index.scss";
import AvatarBuilder from "./components/gogo-builder";



//Generator
import TVGenerator from "./assets/lab-assets/tv-generator.svg";
import Generator from "./assets/lab-assets/generator.svg";
import PanelLines from "./assets/lab-assets/panel-lines.svg";


//Logo
import Logo2 from "./Images/Logo-2.png";
import Layer1 from "./Images/layer1.png";
import Layer2 from "./Images/layer2.png";
import Button1 from "./Images/Button1.png";
import Button2 from "./Images/Button2.png";
import FooterImg from "./Images/Group.png";

function App() {
  
    
  return (
    <div className="app-container">
      <header className="App-header">
        <img src={Logo2} alt="GogoBuilder head"   />
        <img src={Layer1} alt="gogo letters"/>
        <img src={Layer2} alt="gogo letters"/>
        
        <nav>
          <div className="nav-list">
            <a href="https://app.gogopool.com/liquid-staking/">Liquid Stake</a>
            <a href="https://app.gogopool.com/">Validate AVAX</a>
            <a href="https://docs.gogopool.com/gogopool-primer">
              Explore Subnets
            </a>
          </div>
          
            <img src={Button1} alt="gogo letters"/>
            <img src={Button2} alt="gogo letters"/>
          
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
        <p>Brought to you by<span className="footer-img"><img src={FooterImg} alt="footer-icon"/></span> GoGoPool</p>
      </footer>
    </div>
  );
}

export default App;
