import React from 'react';

function Glasses3({ color }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="600"
      height="600"
      fill="none"
      viewBox="0 0 600 600"
      className="gogo-c gogo-glasses-white"
    >
      <g clipPath="url(#clip0_1631_383)">
        <path
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="18"
          d="M264.735 308h23.972"
        ></path>
        <path
          fill="#000"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="6"
          d="M151.863 303.895l4.389 30.958c3.712 26.185 26.128 45.647 52.575 45.647 26.914 0 49.571-20.136 52.733-46.863l3.516-29.725a1.671 1.671 0 00-1.653-1.912H153.517c-1.022 0-1.8.891-1.654 1.895zM289.018 303.895l4.388 30.958c3.712 26.185 26.128 45.647 52.575 45.647 26.914 0 49.572-20.136 52.733-46.863l3.516-29.725a1.671 1.671 0 00-1.653-1.912H290.671a1.658 1.658 0 00-1.653 1.895z"
        ></path>
        <path
          fill={color}
          d="M151.863 303.895H127v11.632h25.22l-.357-11.632zM423.006 314.296h-24.863v-11.632h25.219l-.356 11.632z"
        ></path>
      </g>
      <defs>
        <clipPath id="clip0_1631_383">
          <path fill="#fff" d="M0 0H600V600H0z"></path>
        </clipPath>
      </defs>
    </svg>
  );
}

export default Glasses3;