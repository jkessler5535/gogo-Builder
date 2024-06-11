import React from 'react';



//Logos
import Icon from "../logos/gogoIcon";
import Discord from "../logos/discord-icon";
import Twitter from "../logos/twitter-icon";


const Header = () => {
 return (
    <header>
      <nav className="nav-list">
        <ul className="container">
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
          <li>
            <a href="https://discord.com"><Discord/></a>
          </li>
          <li>
            <a href="https://twitter.com"><Twitter/></a>
          </li>
        </ul>
      </nav>
    </header>
 );
}

export default Header;
