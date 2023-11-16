import React from "react";
import logo from "../../assets/images/logo.png";
import { NavLink } from "react-router-dom";
import "./Header.scss";
import { HashLink as Link } from "react-router-hash-link";

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
          <Link smooth to="/#section-two">
            Categories
          </Link>
        </div>
        <div className="header__link">
          <NavLink to="/login">Login</NavLink>
        </div>
      </div>
    </header>
  );
};
