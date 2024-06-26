import React from "react";
import { HuePicker } from 'react-color';


import Hat1 from "../hats/hat-1";
import Hat2 from "../hats/hat-2";
import Hat3 from "../hats/hat-3";
import Hat4 from "../hats/hat-4";
import Hat5 from "../hats/hat-5";
import Hat6 from "../hats/hat-6";
import Hat7 from "../hats/hat-7";

//Logos

import Avatar from "../logos/avatar";
import ShareIcon from "../logos/share";
import DownloadIcon from "../logos/download";




const PageBody = () => {
  return (
    <div className="column-container ">
      <div className="left-column">
        <div className="grid">
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
          
        </div>

        <div className="hue-picker" >
          <HuePicker/>
        </div>
      </div>


      <div className="right-column">
            <div className="avatar-container">
              <Avatar/>
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
      
);
}

export default PageBody;