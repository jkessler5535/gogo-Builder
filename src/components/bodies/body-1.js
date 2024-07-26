import React from 'react';

function Body1({ color, size }) {
  const bodySizes = {
    normal: 600,
    small: 300,
    medium: 400,
    large: 700,

  };

  return (
    <svg
      width={bodySizes[size] || 600}
      height={bodySizes[size] || 600}
      viewBox="0 0 600 600"
      fill="none"
      className="gogo-c gogo-body"
    >
      <g clipPath="url(#clip0_1207_1192)">
        <path
          fill={color}
          stroke="#221F20"
          strokeMiterlimit="10"
          strokeWidth="2"
          d="M235.896 469.063l8.371 46.018c-7.998-4.189-18.026-7.066-30.515-7.066-31.112 0-45.183 17.858-51.032 29.381-2.223 4.383 1 9.57 5.924 9.57h103.899l14.25-55.349-50.897-22.539v-.015z"
        ></path>
        <path
          stroke="#221F20"
          strokeLinecap="round"
          strokeMiterlimit="10"
          strokeWidth="2"
          d="M238.895 512.606s5.312.597 11.355 7.931"
        ></path>
        <path
          fill={color}
          stroke="#221F20"
          strokeMiterlimit="10"
          strokeWidth="2"
          d="M424.267 537.381C418.418 525.843 404.346 508 373.235 508c-13.295 0-23.815 3.28-32.052 7.916l6.76-58.793-47.75 34.465 14.251 55.349h103.899c4.924 0 8.147-5.173 5.924-9.571v.015z"
        ></path>
        <path
          stroke="#221F20"
          strokeLinecap="round"
          strokeMiterlimit="10"
          strokeWidth="2"
          d="M343.854 514.5s-5.461 2.742-7.998 7.304"
        ></path>
        <g clipPath="url(#clip1_1207_1192)">
          <path
            fill="#fff"
            d="M212.775 511.173c7.533-21.537-1.766-43.884-1.766-43.884s-24.805-15.251-32.766-14.919l-26.357-19.96s-16.991 1.234-24.992 6.737c-5.927 4.085-13.044 23.726-3.746 33.367-.522 2.547-.562 4.828.214 6.485 2.328 5.067 6.904 10.809 9.727 14.124 1.003 4.629 3.652 9.708 8.884 15.053 17.928 18.288 36.618 5.039 42.171.291l1.605-.079c.201 4.416 3.666 8.156 8.268 8.554 2.676.239 6.128.318 10.543.159 3.72-.133 7.024-2.467 8.242-5.955l-.027.027z"
          ></path>
          <path
            fill="#231F20"
            d="M209.725 510.125c5.017-13.408 4-28.685-.388-42.146l.722.849c-7.653-4.589-15.533-9.045-23.761-12.493-2.623-1.048-5.62-2.122-8.322-2.202a1.48 1.48 0 01-.816-.331l-25.769-20.729.562.173c-7.425 1.83-15.065 3.421-21.687 6.989-4.282 2.254-5.793 6.657-7.332 10.928-2.074 6.564-2.729 14.309 1.539 20.118.347.464.588 1.048.468 1.605-.321 1.777-.415 3.62.013 4.933 2.395 5.305 6.235 9.734 9.7 14.429 2.02 4.801 5.098 8.872 8.83 12.48 12.617 12.625 25.434 11.538 39.75 2.214.548-.384 1.793-.265 2.422-.331a1.791 1.791 0 011.873 1.485c.321 2.334 1.792 4.377 3.719 5.358 2.181 1.141 4.602.676 7.011.729 2.007-.026 4.214-.212 6.234-.371 2.235-.225 4.415-1.578 5.258-3.687h-.026zm6.127 2.109c-1.859 5.729-7.412 8.806-13.312 8.169-4.683-.331-10.061.12-14.048-2.772-3.01-2.108-4.683-5.715-4.549-9.137l1.9 1.724s-1.606.066-1.606.08l1.097-.438c-6.315 6.764-15.948 11.816-25.594 11.087-6.154-.265-12.001-3.077-16.751-6.883-5.98-5.278-11.211-12.347-11.666-20.529l.388.782c-2.73-2.984-5.245-6.167-7.426-9.641-1.11-1.817-2.234-3.674-2.97-5.69-.749-2.506-.361-4.748.067-6.816l.468 1.604c-4.455-3.978-6.127-10.211-5.806-15.98.548-8.236 3.733-18.421 11.747-22.214 7.572-3.435 15.894-4.27 24.029-3.979.2 0 .401.04.562.173l26.972 19.177-1.177-.372c1.886.04 3.532.385 5.044.849 4.482 1.353 8.669 3.382 12.803 5.437 5.446 2.772 10.73 5.743 15.948 8.899.335.212.576.504.723.849 5.913 14.376 7.706 30.622 3.157 45.621z"
          ></path>
          <path
            fill="#fff"
            d="M158.348 442.874c-4.08-6.313-5.285-12.559-2.622-17.28 5.311-9.43 22.223-5.942 39.99 3.885 17.768 9.828 29.648 22.254 24.337 31.683-2.97 5.278-10.128 7.493-18.972 6.711"
          ></path>
          <path
            fill="#231F20"
            d="M157.158 443.63c-9.165-10.954-6.235-26.272 9.914-26.63 15.814.119 33.073 9.787 45.261 19.323 5.526 4.721 11.292 10.463 12.51 18.062 1.498 9.27-6.81 15.809-15.413 15.888-2.943.146-5.78-.278-8.469-1.008-.763-.212-1.218-.994-1.003-1.75.16-.571.655-.968 1.217-1.035 12.71-1.021 22.571-7.625 11.814-19.588-9.633-10.543-28.203-20.834-42.332-23.447-14.128-2.321-16.978 7.639-11.118 18.66.776 1.512-1.338 2.825-2.381 1.512v.013z"
          ></path>
          <path
            fill="#231F20"
            d="M171.995 432.066c8.978 9.588 20.43 16.06 33.435 18.42.602.106 1.003.69.843 1.287a1.043 1.043 0 01-.843.769c-3.492.597-7.185.716-10.717-.08-10.583-2.068-20.082-9.588-24.39-19.415-.415-1.008.977-1.83 1.672-.981z"
          ></path>
          <path
            fill="#fff"
            d="M137.169 502.38s-10.248-11.776 10.958-28.897z"
          ></path>
          <path
            fill="#231F20"
            d="M135.818 503.547c-4.469-5.915-2.997-14.203.936-19.906 2.703-4.257 6.703-7.93 10.597-11.1 1.19-.995 2.756.756 1.605 1.804l-.067.066-3.117 2.811c-4.656 4.562-9.379 10.451-9.432 17.188.053 2.427.735 5.053 2.274 6.923 1.472 1.843-1.311 4.058-2.796 2.214z"
          ></path>
          <path fill="#fff" d="M185.736 508.414s-1.124-3.129.107-8.58z"></path>
          <path
            stroke="#231F20"
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M185.736 508.414s-1.124-3.129.107-8.58"
          ></path>
          <path
            fill="#fff"
            d="M170.563 487.089s9.46 12.679 25.314 13.992z"
          ></path>
          <path
            fill="#231F20"
            d="M171.487 486.413c7.278 6.114 15.546 10.251 24.483 13.421.723.239 1.111 1.048.803 1.737a1.272 1.272 0 01-1.003.756c-5.298.876-10.757-.689-15.279-3.435-4.522-2.758-8.402-6.405-10.851-11.126-.588-1.141.937-2.242 1.86-1.353h-.013z"
          ></path>
          <path
            fill="#fff"
            d="M181.374 496.704s-7.639 5.079-13.7 3.554z"
          ></path>
          <path
            fill="#231F20"
            d="M182.832 498.839c-4.79 2.361-10.088 4.165-15.453 2.613a1.22 1.22 0 01-.789-1.552c.187-.57.749-.915 1.324-.835 4.282.49 8.724-1.976 12.028-4.509 3.011-2.281 6.168 2.374 2.904 4.283h-.014z"
          ></path>
          <path
            fill="#fff"
            d="M123.348 479.013s-1.431-8.103 9.62-21.18z"
          ></path>
          <path
            fill="#231F20"
            d="M121.154 479.397c-.294-7.599 4.322-14.362 8.871-20.052l2.006-2.281a1.234 1.234 0 011.726-.119 1.2 1.2 0 01.148 1.671l-1.74 2.347c-3.144 4.602-6.061 9.801-6.649 15.384-.067.716-.094 1.645.013 2.294.455 2.865-3.84 3.621-4.402.756h.027z"
          ></path>
        </g>
        <g clipPath="url(#clip2_1207_1192)">
          <path
            fill="#fff"
            d="M364.119 511.178c-7.463-21.526 1.75-43.861 1.75-43.861s24.578-15.244 32.465-14.912l26.128-19.949s16.836 1.232 24.763 6.733c5.873 4.083 12.925 23.714 3.712 33.35.517 2.545.557 4.825-.212 6.482-2.306 5.063-6.84 10.803-9.637 14.117-.994 4.626-3.619 9.702-8.803 15.044-17.763 18.279-36.282 5.037-41.784.292l-1.591-.08c-.198 4.414-3.632 8.152-8.192 8.55-2.651.239-6.071.318-10.446.159-3.685-.133-6.96-2.465-8.166-5.952l.013.027z"
          ></path>
          <path
            fill="#231F20"
            d="M361.084 512.238c-4.521-14.991-2.731-31.229 3.128-45.597a1.8 1.8 0 01.716-.849 239.556 239.556 0 0115.802-8.894c4.109-2.041 8.245-4.083 12.686-5.435 1.511-.464 3.128-.821 4.998-.848l-1.167.371 26.725-19.167a.954.954 0 01.557-.172c8.073-.278 16.305.543 23.808 3.976 7.941 3.791 11.083 13.985 11.639 22.203a24.226 24.226 0 01-1.047 8.549c-.928 2.784-2.492 5.435-4.693 7.41l.464-1.604c.425 2.068.809 4.295.067 6.813-.729 2.015-1.856 3.871-2.943 5.687-2.161 3.473-4.667 6.654-7.358 9.636l.385-.782c-.451 8.192-5.634 15.244-11.56 20.519-4.706 3.791-10.486 6.615-16.597 6.88-9.558.729-19.102-4.321-25.359-11.082l1.087.438-1.578-.08s1.883-1.723 1.869-1.723c.133 3.42-1.524 7.025-4.507 9.133-3.95 2.903-9.279 2.439-13.919 2.77-5.846.623-11.348-2.425-13.19-8.165l-.013.013zm6.071-2.107c.835 2.094 2.996 3.459 5.21 3.685 2.015.146 4.176.344 6.177.371 2.386-.053 4.786.397 6.947-.729 1.909-.981 3.367-3.022 3.685-5.355a1.793 1.793 0 011.856-1.485c.61.093 1.895-.079 2.386.332 14.184 9.318 26.897 10.418 39.398-2.201 3.699-3.605 6.748-7.661 8.749-12.473 3.42-4.706 7.238-9.133 9.611-14.435.424-1.312.345-3.155.013-4.931-.132-.609.133-1.14.464-1.604 4.229-5.819 3.566-13.546 1.525-20.108-1.525-4.268-3.036-8.655-7.265-10.922-6.562-3.579-14.131-5.156-21.488-6.985l.556-.173-25.531 20.718a1.488 1.488 0 01-.809.331c-2.678.067-5.647 1.154-8.246 2.201-8.165 3.446-15.96 7.9-23.543 12.486l.716-.848c-4.348 13.454-5.342 28.724-.384 42.125h-.027z"
          ></path>
          <path
            fill="#fff"
            d="M418.046 442.914c4.044-6.31 5.237-12.553 2.599-17.272-5.263-9.424-22.019-5.938-39.624 3.884-17.591 9.822-29.363 22.242-24.1 31.667 2.943 5.275 10.035 7.489 18.798 6.707"
          ></path>
          <path
            fill="#231F20"
            d="M416.867 442.158c2.916-5.474 5.09-14.262-1.352-17.762-13.005-6.362-50.216 15.443-55.333 28.181-4.122 9.729 7.822 13.348 15.431 13.944a1.419 1.419 0 011.246 1.578 1.407 1.407 0 01-1.034 1.206c-5.647 1.537-11.785 1.657-17.22-1.471-4.56-2.559-7.344-8.205-6.43-13.415 2.254-12.446 15.868-21.261 25.917-27.266 11.745-6.76 40.047-19.1 45.946.186.743 3.168.266 6.296-.689 9.014a27.139 27.139 0 01-4.123 7.303 1.41 1.41 0 01-1.975.239 1.435 1.435 0 01-.384-1.75v.013z"
          ></path>
          <path
            fill="#231F20"
            d="M406.182 433.092c-5.647 13.016-20.601 22.189-34.785 19.485-1.14-.186-1.127-1.869 0-2.055 12.885-2.346 24.233-8.828 33.128-18.411.676-.848 2.081-.027 1.657.981z"
          ></path>
          <path
            fill="#fff"
            d="M439.031 502.39s10.155-11.771-10.857-28.883z"
          ></path>
          <path
            fill="#231F20"
            d="M437.692 501.237c3.527-4.706 2.28-11.307-.729-16.052-1.723-2.943-4.043-5.554-6.456-7.94l-3.088-2.81-.067-.053c-1.14-1.034.398-2.811 1.591-1.803 4.189 3.393 8.325 7.37 11.122 12.022 3.394 5.594 4.534 13.375.318 18.955-1.551 1.896-4.334-.49-2.691-2.319z"
          ></path>
          <path fill="#fff" d="M390.911 508.421s1.113-3.128-.106-8.576z"></path>
          <path
            stroke="#231F20"
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M390.911 508.421s1.113-3.128-.106-8.576"
          ></path>
          <path
            fill="#fff"
            d="M405.943 487.107s-9.372 12.671-25.081 13.984z"
          ></path>
          <path
            fill="#231F20"
            d="M406.871 487.796c-4.321 7.993-12.779 14.13-21.939 14.766-1.312.119-2.651-.04-3.95-.212a1.286 1.286 0 01-1.101-1.445c.067-.517.425-.888.889-1.06 4.44-1.776 8.576-3.234 12.699-5.528 4.083-2.173 7.914-4.984 11.56-7.886.914-.875 2.426.225 1.842 1.352v.013z"
          ></path>
          <path
            fill="#fff"
            d="M395.232 496.717s7.569 5.076 13.574 3.552z"
          ></path>
          <path
            fill="#231F20"
            d="M396.664 494.569c3.274 2.519 7.675 4.984 11.917 4.507 1.445-.186 1.923 1.948.531 2.386-3.964 1.246-7.968.345-11.693-.994-2.107-.849-6.23-2.015-4.679-5.13.756-1.432 2.704-1.803 3.924-.769z"
          ></path>
          <path
            fill="#fff"
            d="M452.725 479.034s1.419-8.099-9.531-21.168z"
          ></path>
          <path
            fill="#231F20"
            d="M450.551 478.65c.345-3.473-.848-6.986-2.267-10.207-1.484-3.393-3.778-6.839-6.018-9.809-.968-1.206.835-2.73 1.856-1.55 1.02 1.126 2.956 3.459 3.871 4.679 3.645 5.116 7.224 11.108 6.906 17.656-.543 2.849-4.812 2.12-4.361-.756l.013-.013z"
          ></path>
        </g>
        <path
          fill={color}
          stroke="#231F20"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="3"
          d="M370.119 449.552c-18.653-22.023-41.78-30.087-56.981-33.015a20.738 20.738 0 01-16.79-19.636c-.486-13.387 11.637-23.655 24.771-21.092 22.39 4.373 55.318 16.202 81.627 47.921 2.44 2.939 2.75 7.127.811 10.408l-.696 1.175a36.767 36.767 0 01-23.764 17.3c-3.344.744-6.793-.47-9-3.089l.022.028zM203.012 454.303c19.317-21.443 42.68-28.796 57.963-31.258a20.738 20.738 0 0017.383-19.115c.88-13.358-10.909-23.998-24.13-21.832-22.499 3.68-55.772 14.497-83.039 45.397-2.529 2.864-2.966 7.041-1.129 10.379l.66 1.196a36.77 36.77 0 0023.224 18.018c3.32.846 6.805-.262 9.091-2.813l-.023.028z"
        ></path>
        <path
          stroke="#231F20"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M233.224 418.929s2.252-1.937-.13-10.832"
        ></path>
        <path
          fill={color}
          d="M315.04 499.205c-7.625 3.786-16.055 5.903-24.919 5.903a55.533 55.533 0 01-18.16-3.056"
        ></path>
        <path
          stroke="#221F20"
          strokeLinecap="round"
          strokeMiterlimit="10"
          strokeWidth="2"
          d="M315.04 499.205c-7.625 3.786-16.055 5.903-24.919 5.903a55.533 55.533 0 01-18.16-3.056"
        ></path>
        <path
          fill={color}
          d="M246.356 484.656c-11.371-12.79-18.414-30.514-18.414-50.117 0-38.966 27.829-70.539 62.164-70.539s62.164 31.588 62.164 70.539c0 14.34-3.776 27.667-10.237 38.803"
        ></path>
        <path
          stroke="#221F20"
          strokeLinecap="round"
          strokeMiterlimit="10"
          strokeWidth="2"
          d="M246.356 484.656c-11.371-12.79-18.414-30.514-18.414-50.117 0-38.966 27.829-70.539 62.164-70.539s62.164 31.588 62.164 70.539c0 14.34-3.776 27.667-10.237 38.803"
        ></path>
        <path
          fill={color}
          d="M290.121 502.037c22.02 0 39.87-10.324 39.87-23.061 0-12.736-17.85-23.06-39.87-23.06-22.02 0-39.871 10.324-39.871 23.06 0 12.737 17.851 23.061 39.871 23.061z"
        ></path>
        <path
          stroke="#221F20"
          strokeLinecap="round"
          strokeMiterlimit="10"
          strokeWidth="2"
          d="M290.121 380.129v80.914"
        ></path>
      </g>
      <defs>
        <clipPath id="clip0_1207_1192">
          <path fill="#fff" d="M0 0H600V600H0z"></path>
        </clipPath>
        <clipPath id="clip1_1207_1192">
          <path
            fill="#fff"
            d="M0 0H109V104H0z"
            transform="translate(116.003 417)"
          ></path>
        </clipPath>
        <clipPath id="clip2_1207_1192">
          <path
            fill="#fff"
            d="M0 0H108V104H0z"
            transform="translate(352.003 417)"
          ></path>
        </clipPath>
      </defs>
    </svg>
  );
}

export default Body1;