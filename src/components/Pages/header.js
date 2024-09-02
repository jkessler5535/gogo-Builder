import React, {useState, useEffect} from 'react';
import HamburgerMenu from './Hamburger-menu';


//Logos
import Icon from "../logos/gogoIcon";
import Discord from "../logos/discord-icon";
import Twitter from "../logos/twitter-icon";

//Icon
import SaveIcon from "../logos/save";


const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNavbar = () => {
    setIsNavOpen(prevState => !prevState);
  };

  const closeNavbar = () => {
    setIsNavOpen(false);
  }

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isNavOpen && !event.target.closest('.navbar')) {
        closeNavbar();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isNavOpen]);

  return (
    <header>
      <nav className="navbar">
          <HamburgerMenu isOpen={isNavOpen} onToggle={toggleNavbar}/>
          <h1><a href="/home"><Icon/></a></h1>
          <SaveIcon/>
          <ul className={`nav-list ${isNavOpen ? 'show' : ''}`}>
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