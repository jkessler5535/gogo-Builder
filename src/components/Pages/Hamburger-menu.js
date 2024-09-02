import React from 'react';


const HamburgerMenu = ({ isOpen, onToggle }) => {
  const handleClick = () => {
    if (onToggle) {
      onToggle(); 
    }
  };

  return (
    <div className="hamburger-menu" onClick={handleClick}>
      {isOpen ? '✖' : '☰'}
    </div>
  );
};

export default HamburgerMenu;
