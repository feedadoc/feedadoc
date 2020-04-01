import React from "react";

function Clock() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100"
      height="100"
      fill="none"
      viewBox="0 0 100 100"
    >
      <title>A circlular icon of a clock in light teal</title>
      <path
        fill="#89C5CC"
        d="M49.959 8.333C26.959 8.333 8.333 27 8.333 50S26.96 91.667 49.96 91.667C73 91.667 91.666 73 91.666 50S73 8.333 49.958 8.333zm.041 75c-18.416 0-33.333-14.916-33.333-33.333 0-18.417 14.916-33.333 33.333-33.333 18.417 0 33.334 14.916 33.334 33.333 0 18.417-14.917 33.333-33.334 33.333z"
      ></path>
      <path
        fill="#89C5CC"
        d="M52.084 29.167h-6.25v25l21.874 13.125 3.126-5.125-18.75-11.125V29.167z"
      ></path>
    </svg>
  );
}

export default Clock;
