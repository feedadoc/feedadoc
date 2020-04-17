import React from "react";

function MapMarker() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        fill="#1F28CF"
        d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"
      ></path>
      <path
        fill="#fff"
        d="M12 13l.435-.432C13.98 11.041 15 10.034 15 8.798 15 7.791 14.274 7 13.35 7c-.522 0-1.023.265-1.35.683-.327-.418-.828-.683-1.35-.683C9.726 7 9 7.791 9 8.798c0 1.236 1.02 2.243 2.565 3.774L12 13z"
      ></path>
    </svg>
  );
}

export default MapMarker;
