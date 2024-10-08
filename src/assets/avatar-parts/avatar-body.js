
import React from "react";

function AvatarBody({color}) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 600" className="avatar-svg">
      <path
        fill={color}
        strokeWidth="0"
        d="M-0.11 0H600.11V600.22H-0.11z"
        opacity="0"
      ></path>
      <g strokeWidth="0">
        <path
          fill="#bfbfbf"
          d="M400.12 600.24c-17.33-50.76-55.94-86.08-100.79-86.08s-83.46 35.33-100.79 86.08h201.58z"
        ></path>
        <path d="M398.25 598.9c-.88-.98-1.62-1.46-1.95-2.21l-1.6-3.8c-5.63-13.3-13.02-25.91-22.17-37.08-47.29-57.57-118.5-47.19-157.17 13.61-6.26 9.78-11.38 20.33-15.37 31.31l-1.45-2.03c63.39.9 136.14.51 199.71.19zm3.75 2.68c-64.81-.33-138.81-.7-203.45.19l-2.12.03c3.78-12.04 8.74-23.74 15.19-34.69 44.01-75.32 131.62-75.08 176.09-.4 4.58 7.76 8.48 15.89 11.67 24.3.24.76 1.08 2.9 1.35 3.7.8 2.18 1.17 4.84 1.28 6.86z"></path>
        <path
          d="M244.26 600.24c12.38-44.52 38.06-76.87 68.54-82.97-4.29-.69-8.66-1.05-13.08-1.05-43.68 0-81.4 34.48-98.58 84.02h43.12z"
          opacity="0.2"
        ></path>
      </g>
    </svg>
  );
}

export default AvatarBody;
