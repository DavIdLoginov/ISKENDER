import React from "react";
import "../style.css";

const AuthText = () => {
  return (
    <div className="auth__text">
      <div>
        <p>Добро пожаловать</p>
        <a href="/">Вход/Регистрация</a>
      </div>
      <svg
        width="35"
        height="35"
        viewBox="0 0 30 30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="0.5"
          y="0.5"
          width="29"
          height="29"
          rx="14.5"
          fill="white"
          stroke="#C1C1C1"
        />
        <circle
          cx="15.2017"
          cy="11.1553"
          r="3.38444"
          stroke="#BEBEBE"
          stroke-width="1.0625"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M9.83326 19.2468C9.83235 19.0089 9.88556 18.7739 9.98887 18.5596C10.313 17.9112 11.2272 17.5676 11.9858 17.412C12.5329 17.2952 13.0876 17.2172 13.6456 17.1785C14.6788 17.0878 15.718 17.0878 16.7513 17.1785C17.3093 17.2177 17.8639 17.2956 18.4111 17.412C19.1696 17.5676 20.0838 17.8788 20.408 18.5596C20.6158 18.9964 20.6158 19.5037 20.408 19.9406C20.0838 20.6213 19.1696 20.9325 18.4111 21.0817C17.8646 21.2033 17.3098 21.2834 16.7513 21.3216C15.9103 21.3929 15.0654 21.4059 14.2227 21.3605C14.0282 21.3605 13.8401 21.3605 13.6456 21.3216C13.0892 21.2839 12.5365 21.2037 11.9923 21.0817C11.2272 20.9325 10.3195 20.6213 9.98887 19.9406C9.88609 19.7237 9.83293 19.4868 9.83326 19.2468Z"
          stroke="#BEBEBE"
          stroke-width="1.0625"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </div>
  );
};

export default AuthText;
