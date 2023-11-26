import React from "react";
import logo from "../../assets/images/logo.png";
import linkedin from "../../assets/images/linkedin.png";
import facebookLogo from "../../assets/images/facebook.png";
import gitHubLogo from "../../assets/images/github.png";
import instagramLogo from "../../assets/images/instagram.png";
import { Link } from "react-router-dom";
import "./Footer.scss";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__logo">
        <Link to="/">
          <img className="footer__logo--image-selfie-logo" src={logo} alt="logo" />
        </Link>
      </div>
      <div className="footer__link-container">
        <div className="footer__link">
          <Link to="https://www.linkedin.com/in/nate-paradiso" target="blank">
            <img
              className="footer__logo--image-linkedin"
              src={linkedin}
              alt="nate paradiso github logo"
            />
          </Link>
        </div>
        <div className="footer__link">
          <Link to="https://github.com/nate-paradiso" target="blank">
            <img
              className="footer__logo--image-git"
              src={gitHubLogo}
              alt="nate paradiso github logo"
            />
          </Link>
        </div>
        <div className="footer__link">
          <Link to="https://www.instagram.com/paradisopics13/" target="blank">
            <img className="footer__logo--image" src={instagramLogo} alt="instagram logo" />
          </Link>
        </div>
        <div className="footer__link">
          <Link to="https://www.facebook.com" target="blank">
            {" "}
            <img className="footer__logo--image" src={facebookLogo} alt="facebook logo" />
          </Link>
        </div>
      </div>
    </footer>
  );
};
