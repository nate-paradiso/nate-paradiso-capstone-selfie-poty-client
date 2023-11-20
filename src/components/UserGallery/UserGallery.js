import axios from "axios";
import { useState, useEffect } from "react";

export const UserGallery = ({ user }) => {
  const staticHost = "http://localhost:8080/images/";
  const [userGallery, setUserGallery] = useState([]);

  useEffect(() => {
    if (user) {
      const getUserImages = async () => {
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
      };

      getUserImages();
    }
  }, [user]);

  return (
    <section>
      <div className="recent-gallery__image-gallery">
        {userGallery.map((image, index) => (
          <div className="recent-gallery__image-container">
            <img
              className="recent-gallery__image"
              key={index}
              src={`${staticHost}${image.image}`}
              alt={image.category}
            />
            <p className="recent-gallery__text">
              {image.category} -- {image.title}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};
