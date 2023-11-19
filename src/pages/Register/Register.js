import { useState } from "react";
// import { useEffect } from "react";
import "./Register.scss";
import axios from "axios";
import { NavLink } from "react-router-dom";

export const Register = () => {
  const [registerFormData, setRegisterForm] = useState({
    first_name: "",
    last_name: "",
    email: "",
    user_password: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  //   const [users, setUsers] = useState(null);

  //   const getUsers = async () => {
  //     try {
  //       const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/users`);
  //       //   setUsers(response.data);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  //   useEffect(() => {
  //     getUsers();
  //   }, []);

  const formSubmitHandler = async (e, first_name, last_name, email, user_password) => {
    e.preventDefault();
    try {
      await axios.post(`${process.env.REACT_APP_BACKEND_URL}/users/register`, {
        first_name: first_name,
        last_name: last_name,
        email: email,
        user_password: user_password,
      });
      setSuccess(true);
      setRegisterForm({ first_name: "", last_name: "", email: "", user_password: "" });
    } catch (error) {
      console.log(error);
    }
  };
  const handleChange = e => {
    setRegisterForm({
      ...registerFormData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = event => {
    event.preventDefault();

    if (
      !registerFormData.first_name ||
      !registerFormData.last_name ||
      !registerFormData.email ||
      !registerFormData.user_password
    ) {
      setError("** Please fill in each field **");
      return;
    }

    setError(false);

    formSubmitHandler(
      event,
      registerFormData.first_name,
      registerFormData.last_name,
      registerFormData.email,
      registerFormData.user_password,
    );
  };
  return (
    <>
      <section className="register">
        <h2 className="register__title">Register here</h2>
        <form className="register__form" onSubmit={handleSubmit}>
          <div className="register__form-container">
            <input
              className="register__form-text"
              type="text"
              name="first_name"
              id="first_name"
              value={registerFormData.first_name}
              onChange={handleChange}
              placeholder="first name"
            />
            <input
              className="register__form-text"
              type="text"
              name="last_name"
              id="last_name"
              value={registerFormData.last_name}
              onChange={handleChange}
              placeholder="last name"
            />
            <input
              className="register__form-text"
              type="email"
              name="email"
              id="email"
              value={registerFormData.email}
              onChange={handleChange}
              placeholder="email"
            />
            <input
              className="register__form-text"
              type="password"
              name="user_password"
              id="password"
              value={registerFormData.user_password}
              onChange={handleChange}
              placeholder="password"
            />
          </div>
          <div className="button-container">
            {" "}
            <button className="button-container__register" type="submit">
              Register
            </button>
          </div>
        </form>
        <p>
          Have an account? <NavLink to="/login">Login</NavLink>
        </p>
        {success && <p className="register__success">User registered successfully!</p>}
        {error && <p className="register__error">{error}</p>}
      </section>
    </>
  );
};
