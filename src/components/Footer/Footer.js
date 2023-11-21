import React from "react";
import logo from "../../assets/images/logo.png";
import instagramLogo from "../../assets/images/insta.png";
import facebookLogo from "../../assets/images/facebook.png";
import gitHubLogo from "../../assets/images/github.png";

import { NavLink } from "react-router-dom";
import "./Footer.scss";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__logo">
        <NavLink to="/">
          <img className="footer__logo--image-selfie-logo" src={logo} alt="logo" />
        </NavLink>
      </div>
      <div className="footer__link-container">
        <div className="footer__link">
          <NavLink to="https://github.com/nate-paradiso" target="blank">
            <img
              className="footer__logo--image-git"
              src={gitHubLogo}
              alt="nate paradiso github logo"
            />
          </NavLink>
        </div>
        <div className="footer__link">
          <NavLink to="https://www.instagram.com/paradisopics13/" target="blank">
            <img className="footer__logo--image" src={instagramLogo} alt="instagram logo" />
          </NavLink>
        </div>
        <div className="footer__link">
          <NavLink to="https://www.facebook.com" target="blank">
            {" "}
            <img className="footer__logo--image" src={facebookLogo} alt="facebook logo" />
          </NavLink>
        </div>
      </div>
    </footer>
  );
};
