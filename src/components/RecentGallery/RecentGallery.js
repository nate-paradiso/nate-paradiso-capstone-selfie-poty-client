import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import "./RecentGallery.scss";

export const RecentGallery = () => {
  const staticHost = "http://localhost:8080/images/";
  const [recentGallery, setRecentGallery] = useState([]);

  useEffect(() => {
    const getAllImages = async () => {
      try {
        const { data } = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/`);

        setRecentGallery(data);
      } catch (error) {
        console.error("Error fetching recent images:", error.message);
      }
    };
    getAllImages();
  }, []);

  return (
    <>
      {recentGallery ? (
        <section className="recent-gallery">
          <h2 className="recent-gallery__title">Recent Uploads</h2>
          <div className="recent-gallery__image-gallery">
            {recentGallery.map((image, index) => (
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
      ) : (
        <p>loading...</p>
      )}
    </>
  );
};
