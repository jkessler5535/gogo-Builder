import React from 'react';
import { motion } from "framer-motion";

function ColorSwatch({ color, onClick, isActive }) {
  return (
    <motion.button
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}
    style={{ 
        border: 'none',
        backgroundColor: 'transparent',
    }}
  >
    <div
      onClick={onClick}
      style={{
        width: '68px',
        height: '68px',
        backgroundColor: color,
        border: isActive ? '2px solid black' : 'none',
        margin: '5px',
        cursor: 'pointer',
        borderRadius: '16px',
      }}
    ></div>
    </motion.button>
  );
}

function ColorPicker({ selectedColor, onColorSelect }) {
  const colors = ['#FF5733', '#33FF57', '#5733FF', '#F8CC3E', '#1ADA66', '#FF9D29', '#FF2A29', '#323441', '#2E25A0' /* ... other colors */];

  return (
    <div className="color-picker-tool" style={{ display: 'flex', flexDirection: 'column' }}>
      {colors.map((color) => (
        <ColorSwatch
          key={color}
          color={color}
          onClick={() => onColorSelect(color)}
          isActive={color === selectedColor}
        />
      ))}
    </div>
  );
}

export default ColorPicker;
