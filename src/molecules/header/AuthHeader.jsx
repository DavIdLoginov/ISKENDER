import React from "react";
import '../style.css'
import AuthText from "../../atoms/header/AuthText";

const AuthHeader = () => {
  return (
    <div className="auth__cont">
      <AuthText />
      <div className="auth__line"></div>
      <svg
        width="35"
        height="35"
        viewBox="0 0 30 30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="30" height="30" rx="15" fill="white" />
        <path
          d="M6.70654 8.41309L7.59111 8.59C8.20009 8.7118 8.65815 9.21696 8.71995 9.83492L8.84508 11.0863M8.84508 11.0863L9.61224 17.4793C9.69746 18.1894 10.2999 18.7239 11.0151 18.7239H18.1418C19.2764 18.7239 20.2655 17.9517 20.5406 16.8509L21.4771 13.1052C21.7334 12.0797 20.9578 11.0863 19.9007 11.0863H8.84508Z"
          stroke="#0063A9"
          stroke-width="1.05971"
          stroke-linecap="round"
        />
        <path
          d="M15.3677 13.9453H11.7017"
          stroke="#0063A9"
          stroke-width="1.05971"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <circle cx="11.6705" cy="21.3971" r="1.14564" fill="#0063A9" />
        <circle cx="18.5446" cy="21.3971" r="1.14564" fill="#0063A9" />
      </svg>
    </div>
  );
};

export default AuthHeader;
