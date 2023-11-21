import { useAuth } from "../../App.js";
import axios from "axios";
import { useCallback, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Profile.scss";
import { UserGallery } from "../../components/UserGallery/UserGallery";
import { Upload } from "../../components/Upload/Upload";

export const Profile = () => {
  const { isLoggedIn } = useAuth();
  const [user, setUser] = useState(null);
  const [failedAuth, setFailedAuth] = useState(false);
  const [userGallery, setUserGallery] = useState([]);

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
        isLoggedIn();
      }
    };
    getCurrent();
  }, [isLoggedIn]);

  const getUserImages = useCallback(async () => {
    try {
      const token = sessionStorage.getItem("token");
      const { data } = await axios.get(
        `${process.env.REACT_APP_BACKEND_URL}/users/current/${user.id}/images`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );

      setUserGallery(data);
    } catch (error) {
      console.error("Error fetching user images:", error.message);
    }
  }, [user]);

  useEffect(() => {
    if (user) {
      getUserImages();
    }
  }, [user, getUserImages]);

  if (failedAuth) {
    return (
      <main className="profile">
        <p>Please Login</p>
        <p>
          <Link className="profile__link" to="/login">
            <button className="profile__button">Login</button>
          </Link>
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
        <h3 className="profile__name">Welcome {user.first_name}!</h3>

        <p className="profile__email">Email/Username: {user.email}</p>

        <Upload user={user} getUserImages={getUserImages} />
        <UserGallery userGallery={userGallery} />
      </main>
    </>
  );
};
