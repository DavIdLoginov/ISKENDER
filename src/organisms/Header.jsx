import React from "react";
import './style.css'
import Logo from "../atoms/header/Logo";
import CatalogBtn from "../atoms/header/CatalogBtn";
import SearchBtn from "../atoms/header/SearchBtn";
import AuthHeader from "../molecules/header/AuthHeader";

const Header = () => {
  return (
    <header className="header">
      <div className="header__cont">
        <Logo />
        <CatalogBtn />
        <SearchBtn />
        <AuthHeader />
      </div>
    </header>
  );
};

export default Header;
