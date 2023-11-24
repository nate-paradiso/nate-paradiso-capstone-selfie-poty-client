import "./RegisterButton.scss";
import { NavLink } from "react-router-dom";
import { useAuth } from "../../App.js";

export const RegisterButton = () => {
  const { isLoggedIn } = useAuth();
  return (
    <div className="button-container">
      {!isLoggedIn && (
        <NavLink className="button-container__link" to="/register">
          <button className="button-container__register">Register now</button>
        </NavLink>
      )}
    </div>
  );
};
