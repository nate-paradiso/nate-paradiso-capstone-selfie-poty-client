import React from "react";
import logo from "../../assets/images/logo.png";
import "./Hero.scss";

export const Hero = () => {
  return (
    <>
      <section className="hero">
        <img className="hero__logo--image" src={logo} alt="logo" />
        <div className="hero__text-container">
          <p>What is a Selfie?</p>
          <div>
            <p>A photograph that one has taken of oneself.</p>
            <p>A contest to celebrate you!</p>
          </div>
        </div>
        <button className="button">Register now</button>
      </section>
    </>
  );
};
