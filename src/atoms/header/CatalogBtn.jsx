import React from "react";
import "../style.css";

const CatalogBtn = () => {
  return (
    <button className="catalog__btn ml-20">
      <svg
        width="15"
        height="9"
        viewBox="0 0 15 9"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="15" height="1" rx="0.5" fill="#D9D9D9" />
        <rect y="4" width="15" height="1" rx="0.5" fill="#D9D9D9" />
        <rect y="8" width="15" height="1" rx="0.5" fill="#D9D9D9" />
      </svg>

      <span>Каталог</span>
    </button>
  );
};

export default CatalogBtn;
