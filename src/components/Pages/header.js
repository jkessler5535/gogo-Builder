import React, {useState} from 'react';


//Logos
import Icon from "../logos/gogoIcon";
import Discord from "../logos/discord-icon";
import Twitter from "../logos/twitter-icon";

//Icon
import SaveIcon from "../logos/save";




const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => setIsOpen(!isOpen);

  return (
    <header>
      <nav className="nav">
        <h1><a href="/home"><Icon/></a></h1>
          <div className="hamburger-menu" onClick={toggleNavbar}>
            ☰
          </div>
          <SaveIcon/>
          <ul className={`nav-list ${isOpen ? 'show' : ''}`}>
          <li>
            <a href="https://app.gogopool.com/liquid-staking/">Liquid Stake</a>
          </li>
          <li>
            <a href="https://app.gogopool.com/">Validate AVAX</a>
          </li>
          <li>
            <a href="https://docs.gogopool.com/gogopool-primer">Explore Subnets</a>
          </li>
          <li className="social-btn">
            <a href="https://discord.com"><Discord/></a>
          </li>
          <li className="social-btn">
            <a href="https://twitter.com"><Twitter/></a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;