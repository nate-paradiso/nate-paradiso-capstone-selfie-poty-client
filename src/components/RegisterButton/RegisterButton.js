import React from "react";
import "./RegisterButton.scss";
import { NavLink } from "react-router-dom";

export const RegisterButton = () => {
  return (
    <div className="button-container">
      {" "}
      <NavLink className="button-container__link" to="/register">
        <button className="button-container__register">Register now</button>
      </NavLink>
    </div>
  );
};
