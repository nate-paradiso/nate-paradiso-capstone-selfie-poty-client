import React from "react";
import logo from "../../assets/images/logo.png";
import { NavLink } from "react-router-dom";
import "./Header.scss";

export const Header = () => {
  return (
    <header className="header">
      <div className="header__logo">
        <NavLink to="/">
          <img className="header__logo--image" src={logo} alt="logo" />
        </NavLink>
      </div>
      <div className="header__link-container">
        <div className="header__link">
          <NavLink to="">Categories</NavLink>
        </div>
        <div className="header__link">
          <NavLink to="">Login</NavLink>
        </div>
      </div>
    </header>
  );
};
