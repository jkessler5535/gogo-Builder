import React from 'react';


//Logos

import NewTshirt from "../logos/new-tshirt";
import NewHat from "../logos/new-hat";
import NewGlasses from "../logos/new-glasses";
import NewHeadphones from "../logos/new-headphones";
import NewJacket from "../logos/new-jacket";
import NewAcess from "../logos/new-acess";
import SaveIcon from "../logos/save";

const Builder = () => {
  return (
     <div className="builder">
        <ul className="menu">
          <li>
            <button>
              <div className="logo-container">
                <NewTshirt className="logo" />
              </div>
              <div className="text-container">Shirts</div>
            </button>
          </li>
          <li>
            <button>
                <div className="logo-container">
                  <NewHat className="logo" />
                </div>
                <div className="text-container">Hats</div>
            </button> 
          </li>
          <li>
            <button>
              <div className="logo-container">
                <NewGlasses className="logo"/>
              </div>
              <div className="text-container">Eyewear</div>
            </button>
          </li>
          <li>
            <button>
              <div className="logo-container">
                <NewHeadphones className="logo"/>
              </div>
              <div className="text-container">Earwear</div>
            </button>
          </li>
          <li>
            <button>
              <div className="logo-container">
                <NewJacket className="logo"/>
              </div>
              <div className="text-container">Outwear</div>
            </button>
          </li>
          <li>
            <button>
              <div className="logo-container">
                <NewAcess className="logo"/>
              </div>
              <div className="text-container">Acessories</div>
            </button>
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
  );
}
export default Builder;
