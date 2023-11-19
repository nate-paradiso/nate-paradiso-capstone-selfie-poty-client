import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Profile.scss";

export const Profile = () => {
  const [user, setUser] = useState(null);
  const [failedAuth, setFailedAuth] = useState(false);

  useEffect(() => {
    const token = sessionStorage.getItem("token");

    if (!token) {
      return setFailedAuth(true);
    }
    const getCurrent = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/users/current`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setUser(response.data);
      } catch (error) {
        console.log(error);
        setFailedAuth(true);
      }
    };
    getCurrent();
  }, []);

  const handleLogout = () => {
    sessionStorage.removeItem("token");
    setUser(null);
    setFailedAuth(true);
  };

  if (failedAuth) {
    return (
      <main className="profile">
        <p>You must be logged in to see this page.</p>
        <p>
          <Link to="/login">Log in</Link>
        </p>
      </main>
    );
  }

  if (user === null) {
    return (
      <main className="profile">
        <p>Loading...</p>
      </main>
    );
  }

  return (
    <>
      <main className="profile">
        <h1 className="profile">Dashboard</h1>

        <p>
          Welcome back, {user.first_name} {user.last_name}
        </p>

        <h2>My Profile</h2>
        <p>Email: {user.email}</p>
        <p>
          Name: {user.first_name} {user.last_name}
        </p>

        <button className="profile__log-out" onClick={handleLogout}>
          Log out
        </button>
      </main>
    </>
  );
};
