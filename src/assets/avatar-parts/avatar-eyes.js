
import React from "react";

function AvatarEyes({color}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 600 600" className="avatar-svg"
    >
      <defs>
        <filter
          id="luminosity-invert"
          width="91"
          height="148"
          x="280"
          y="351"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feColorMatrix
            result="cm"
            values="-1 0 0 0 1 0 -1 0 0 1 0 0 -1 0 1 0 0 0 1 0"
          ></feColorMatrix>
        </filter>
        <mask
          id="mask"
          width="91"
          height="148"
          x="280"
          y="351"
          maskUnits="userSpaceOnUse"
        >
          <g filter="url(#luminosity-invert)">
            <image
              width="91"
              height="148"
              transform="translate(280 351)"
              xlinkHref="data:image/png;base64,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"
            ></image>
          </g>
        </mask>
        <filter
          id="luminosity-invert-2"
          width="82"
          height="132"
          x="399"
          y="352"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feColorMatrix
            result="cm"
            values="-1 0 0 0 1 0 -1 0 0 1 0 0 -1 0 1 0 0 0 1 0"
          ></feColorMatrix>
        </filter>
        <mask
          id="mask-1"
          width="82"
          height="132"
          x="399"
          y="352"
          maskUnits="userSpaceOnUse"
        >
          <g filter="url(#luminosity-invert-2)">
            <image
              width="82"
              height="132"
              transform="translate(399 352)"
              xlinkHref="data:image/png;base64,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"
            ></image>
          </g>
        </mask>
      </defs>
      <g style={{ isolation: "isolate" }}>
        <path
          fill="#fff"
          strokeWidth="0"
          d="M0 0H600.22V600.22H0z"
          opacity="0"
        ></path>
        <g>
          <g strokeWidth="0">
            <ellipse
              cx="325.19"
              cy="425.28"
              fill="#fff"
              rx="39.46"
              ry="68.05"
            ></ellipse>
            <path d="M325.19 360.74c19.86 0 35.95 28.89 35.95 64.54s-16.1 64.54-35.95 64.54-35.95-28.89-35.95-64.54 16.1-64.54 35.95-64.54m0-7.01c-24.09 0-42.97 31.43-42.97 71.55s18.87 71.55 42.97 71.55 42.97-31.43 42.97-71.55-18.87-71.55-42.97-71.55z"></path>
          </g>
          <g
            style={{ mixBlendMode: "multiply" }}
            strokeWidth="0"
            mask="url(#mask)"
            opacity="0.1"
          >
            <ellipse cx="325.19" cy="425.28" rx="39.46" ry="68.05"></ellipse>
            <path d="M325.19 360.74c19.86 0 35.95 28.89 35.95 64.54s-16.1 64.54-35.95 64.54-35.95-28.89-35.95-64.54 16.1-64.54 35.95-64.54m0-7.01c-24.09 0-42.97 31.43-42.97 71.55s18.87 71.55 42.97 71.55 42.97-31.43 42.97-71.55-18.87-71.55-42.97-71.55z"></path>
          </g>
          <g>
            <g strokeWidth="0">
              <ellipse
                cx="440.05"
                cy="418.12"
                fill="#fff"
                rx="35.09"
                ry="60.5"
              ></ellipse>
              <path d="M440.05 360.74c17.66 0 31.97 25.69 31.97 57.38s-14.31 57.38-31.97 57.38-31.97-25.69-31.97-57.38 14.31-57.38 31.97-57.38m0-6.24c-21.42 0-38.2 27.95-38.2 63.62s16.78 63.62 38.2 63.62 38.2-27.95 38.2-63.62-16.78-63.62-38.2-63.62z"></path>
            </g>
            <g
              style={{ mixBlendMode: "multiply" }}
              strokeWidth="0"
              mask="url(#mask-1)"
              opacity="0.1"
            >
              <ellipse cx="440.05" cy="418.12" rx="35.09" ry="60.5"></ellipse>
              <path d="M440.05 360.74c17.66 0 31.97 25.69 31.97 57.38s-14.31 57.38-31.97 57.38-31.97-25.69-31.97-57.38 14.31-57.38 31.97-57.38m0-6.24c-21.42 0-38.2 27.95-38.2 63.62s16.78 63.62 38.2 63.62 38.2-27.95 38.2-63.62-16.78-63.62-38.2-63.62z"></path>
            </g>
          </g>
        </g>
      </g>
    </svg>
  );
}

export default AvatarEyes;