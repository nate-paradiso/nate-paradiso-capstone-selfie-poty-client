import React from "react";
import logo from "../../assets/images/logo.png";
import { NavLink } from "react-router-dom";
import "./Header.scss";
import { HashLink as Link } from "react-router-hash-link";
import { useAuth } from "../../App";

export const Header = () => {
  console.log("Header component rendered");
  const { isLoggedIn, logout } = useAuth();
  return (
    <header className="header">
      <div className="header__logo">
        <NavLink to="/">
          <img className="header__logo--image" src={logo} alt="logo" />
        </NavLink>
      </div>
      <div className="header__link-container">
        <div className="header__link">
          <Link smooth to="/">
            Home
          </Link>
        </div>
        <div className="header__link">
          <Link smooth to="/#categories">
            Categories
          </Link>
        </div>
        <div className="header__link">
          {isLoggedIn ? (
            <NavLink className="header__dashboard" to="/profile">
              Dashboard
            </NavLink>
          ) : (
            <NavLink to="/register">Register</NavLink>
          )}
        </div>
        <div className="header__link">
          {isLoggedIn ? (
            <NavLink className="header__logout" onClick={logout}>
              Logout
            </NavLink>
          ) : (
            <NavLink className="header__login" to="/login">
              Login
            </NavLink>
          )}
        </div>
      </div>
    </header>
  );
};
