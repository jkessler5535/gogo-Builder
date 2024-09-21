import React from "react";

function DeleteIcon({ className, size = "10px", color ="#242031" }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000"
    className={className}
    width={size}
    height={size}
    style={{ stroke: color }}>
      <path
        fill="none"
        strokeWidth="20"
        d="M324.45 213.01a86.051 83.23 0 11-172.1 0 86.051 83.23 0 11172.1 0z"
        transform="matrix(5.1965 0 0 5.3726 -738.86 -644.43)"
      ></path>
      <path
        fill="none"
        strokeWidth="100"
        d="M166.83 166.83l666.33 666.33"
      ></path>
    </svg>
  );
}

export default DeleteIcon;