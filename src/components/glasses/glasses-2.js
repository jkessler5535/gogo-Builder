import React from 'react';

function Glasses2({ color }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="600"
      height="600"
      fill="none"
      viewBox="0 0 600 600"
      className="gogo-c gogo-glasses-white"
    >
      <g clipPath="url(#clip0_1393_382)">
        <path
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="6"
          d="M263.422 302h26.581M264.735 317.358h23.972"
        ></path>
        <path
          fill={color}
          d="M151.863 303.895H127v11.632h25.22l-.357-11.632zM423.006 314.296h-24.863v-11.632h25.219l-.356 11.632z"
        ></path>
        <path
          fill="#D9D9D9"
          stroke={color}
          strokeWidth="8"
          d="M156 304.018v-.007l.005-.006.006-.005H260.989s0 0 0 0l.006.005.005.006V333.5c0 28.995-23.505 52.5-52.5 52.5S156 362.495 156 333.5v-29.482zM293 304.018v-.007l.005-.006.006-.005H397.989s0 0 0 0l.006.005.005.006V333.5c0 28.995-23.505 52.5-52.5 52.5S293 362.495 293 333.5v-29.482z"
        ></path>
      </g>
      <defs>
        <clipPath id="clip0_1393_382">
          <path fill="#fff" d="M0 0H600V600H0z"></path>
        </clipPath>
      </defs>
    </svg>
  );
}

export default Glasses2;