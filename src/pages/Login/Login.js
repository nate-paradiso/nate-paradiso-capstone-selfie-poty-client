import React from "react";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.scss";

export const Login = () => {
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async event => {
    event.preventDefault();
    try {
      const response = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/users/login`, {
        email: event.target.email.value,
        user_password: event.target.user_password.value,
      });
      sessionStorage.setItem("token", response.data.token);
      navigate("/current");
    } catch (error) {
      setError(error.response.data);
    }
  };

  return (
    <div>
      <section className="login">
        <h2 className="login__title">Login here</h2>
        <form className="login__form" onSubmit={handleSubmit}>
          <div className="login__form-container">
            <input
              className="login__form-text"
              type="email"
              name="email"
              id="email"
              //   value={loginFormData.email}
              //   onChange={handleChange}
              placeholder="email"
            />
            <input
              className="login__form-text"
              type="password"
              name="user_password"
              id="password"
              //   value={loginFormData.user_password}
              //   onChange={handleChange}
              placeholder="password"
            />
          </div>
          <div className="button-container">
            {" "}
            <button className="button-container__login" type="submit">
              Login
            </button>
          </div>
        </form>
        {/* {success && <p className="login__success">Login successful!</p>} */}
        {error && <p className="login__error">{error}</p>}
      </section>
    </div>
  );
};
// export const Login = () => {
//   const [loginFormData, setLoginForm] = useState({
//     email: "",
//     user_password: "",
//   });
//   const [error, setError] = useState("");
//     const [success, setSuccess] = useState(false);
//   const navigate = useNavigate();

//   const formSubmitHandler = async event => {
//     event.preventDefault();

//     if (!loginFormData.email || !loginFormData.user_password) {
//       setError("** Please fill in each field **");
//       return;
//     }
//     try {
//       const response = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/users/login`, {
//         email: event.target.email.value,
//         password: event.target.user_password.value,
//       });
//       sessionStorage.setItem("token", response.data.token);
//         setSuccess(true);
//       setError("");
//       setLoginForm({ email: "", user_password: "" });
//       navigate("/");
//     } catch (error) {
//       setError(error.response.data);
//     }
//   };
//     const handleChange = e => {
//       setLoginForm({
//         ...loginFormData,
//         [e.target.name]: e.target.value,
//       });
//     };

//   const handleSubmit = event => {
//     event.preventDefault();

//     if (!loginFormData.email || !loginFormData.user_password) {
//       setError("** Please fill in each field **");
//       return;
//     }

//     setError(false);

//     formSubmitHandler(event, loginFormData.email, loginFormData.user_password);
//   };
