import React from 'react';

function Hat6({ color }) {
  return(
    <svg
    width="600"
    height="600"
    fill="none"
    viewBox="0 0 600 600"
    className="gogo-hat gogo-c gogo-cap"
  >
    <path
      fill={color}
      stroke="#231F20"
      strokeMiterlimit="10"
      strokeWidth="2"
      d="M244.443 134.149c-.441-13.347 10.022-24.524 23.37-24.964 13.347-.441 24.524 10.022 24.964 23.369l.126 3.797-48.335 1.595-.125-3.797z"
    ></path>
    <path
      fill={color}
      stroke="#231F20"
      strokeMiterlimit="10"
      strokeWidth="2"
      d="M145.971 230.565c-1.876-56.855 42.693-104.465 99.547-106.341l55.822-1.841c56.854-1.876 104.465 42.693 106.34 99.547l1.583 47.974-261.709 8.635-1.583-47.974z"
    ></path>
    <path
      fill={color}
      stroke="#231F20"
      strokeMiterlimit="10"
      strokeWidth="2"
      d="M198.884 202.935c-1.405-42.574 31.97-78.227 74.545-79.632 42.575-1.404 78.227 31.971 79.632 74.545l2.436 73.83-154.177 5.087-2.436-73.83z"
    ></path>
    <path
      fill={color}
      stroke="#231F20"
      strokeMiterlimit="10"
      strokeWidth="2"
      d="M111.528 311.295c-3.715 3.821.643 9.442 5.537 7.332 46.135-19.891 101.084-32.746 160.459-35.618 57.893-2.8 112.511 4.254 159.542 18.833 5.09 1.578 8.821-4.474 4.722-7.879-42.468-35.265-102.202-55.797-167.353-52.646-65.938 3.189-124.018 29.988-162.907 69.978z"
    ></path>
  </svg>
  );
}

export default Hat6;