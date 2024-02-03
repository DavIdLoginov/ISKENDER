import React, { useState } from 'react';
import './style.css'

const LikeButton = () => {
  const [isLiked, setIsLiked] = useState(false);

  const handleLikeClick = () => {
    setIsLiked(!isLiked);
  };

  return (
    <div className="like-icon" onClick={handleLikeClick}>
      {isLiked ? (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="0.387817"
            y="0.728088"
            width="24.8737"
            height="24.8737"
            rx="4.14562"
            fill="white"
            fill-opacity="0.5"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M12.7175 20.8781C10.9087 19.7649 9.22594 18.4547 7.69942 16.971C6.62621 15.9025 5.80919 14.5998 5.31093 13.1628C4.4143 10.3753 5.46162 7.18402 8.39261 6.2396C9.93303 5.7437 11.6154 6.02713 12.9134 7.00123C14.212 6.02831 15.8937 5.74498 17.4342 6.2396C20.3652 7.18402 21.4201 10.3753 20.5235 13.1628C20.0252 14.5998 19.2082 15.9025 18.135 16.971C16.6084 18.4547 14.9257 19.7649 13.1169 20.8781L12.921 21L12.7175 20.8781Z"
            fill="#174261"
            stroke="#174261"
            stroke-width="1.25"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M16.0328 9.3775C16.9205 9.66109 17.5513 10.4581 17.6301 11.3958L16.0328 9.3775Z"
            fill="white"
          />
          <path
            d="M16.0328 9.3775C16.9205 9.66109 17.5513 10.4581 17.6301 11.3958"
            stroke="#174261"
            stroke-width="1.25"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      ) : (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="24" height="24" rx="4" fill="white" fill-opacity="0.5" />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M7.44994 6.03671C6.07748 6.56439 4.98435 7.87152 4.98435 9.60341C4.98435 10.9734 5.6019 12.2867 6.59087 13.5546C7.58003 14.8227 8.89993 15.9935 10.2183 17.0724C10.7552 17.5118 11.1137 17.8038 11.4124 17.9926C11.6966 18.1722 11.8607 18.2146 12 18.2146C12.1393 18.2146 12.3034 18.1722 12.5876 17.9926C12.8863 17.8038 13.2448 17.5118 13.7817 17.0724C15.1001 15.9935 16.42 14.8227 17.4091 13.5546C18.3981 12.2867 19.0157 10.9734 19.0157 9.60341C19.0157 7.87152 17.9225 6.56439 16.5501 6.03671C15.1901 5.51383 13.5901 5.76522 12.5066 7.1508C12.3859 7.30512 12.1986 7.39564 12 7.39564C11.8014 7.39564 11.6141 7.30512 11.4934 7.1508C10.4099 5.76522 8.80992 5.51383 7.44994 6.03671ZM12 5.83211C10.5572 4.4534 8.61244 4.24926 6.98326 4.87564C5.16679 5.57404 3.70877 7.31395 3.70877 9.60341C3.70877 11.3514 4.49713 12.9272 5.57673 14.3113C6.65615 15.6951 8.06749 16.9389 9.39976 18.0292L9.42995 18.0539C9.92862 18.4621 10.3473 18.8047 10.72 19.0403C11.1147 19.2899 11.5216 19.4621 12 19.4621C12.4784 19.4621 12.8853 19.2899 13.28 19.0403C13.6527 18.8047 14.0714 18.4621 14.5701 18.0539L14.6003 18.0292C15.9325 16.9389 17.3439 15.6951 18.4233 14.3113C19.5029 12.9272 20.2912 11.3514 20.2912 9.60341C20.2912 7.31395 18.8332 5.57404 17.0167 4.87564C15.3876 4.24926 13.4428 4.4534 12 5.83211Z"
            fill="#717171"
          />
        </svg>
      )}
    </div>
  );
};

export default LikeButton;
