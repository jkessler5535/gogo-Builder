import React from 'react';


//Logos
import Icon from "./logos/gogoIcon";
import Discord from "./logos/discord-icon";
import Twitter from "./logos/twitter-icon";


const Navbar = () => {
 return (
    <>
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
      <div className="social-btns">
          <a href="https://discord.com"><Discord/></a>
          <a href="https://twitter.com"><Twitter/></a>
      </div>
    </>

 );
}

export default Navbar;
