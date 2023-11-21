import React from "react";
import logo from "../../assets/images/logo.png";
import "./Hero.scss";

export const Hero = () => {
  return (
    <>
      <section className="hero">
        <img className="hero__logo--image" src={logo} alt="logo" />
        <div className="hero__text-container">
          <p className="hero__text-title">What is a Selfie? </p>
          <div className="hero__text-paragraphs">
            <p>A self-portrait through your lens. </p>
            <p>Your story, your shot.</p>
            <p className="hero__text-paragraphs--tagline">A contest to celebrate you!</p>
          </div>
        </div>
      </section>
    </>
  );
};
