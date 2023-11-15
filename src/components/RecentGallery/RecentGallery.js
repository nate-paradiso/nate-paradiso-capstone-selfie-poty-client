import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import "./RecentGallery.scss";

export const RecentGallery = () => {
  const [recentGallery, setRecentGallery] = useState([]);

  useEffect(() => {
    const getAllImages = async () => {
      try {
        const { data } = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/`);
        console.log(data);
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
        </section>
      ) : (
        <p>loading...</p>
      )}
    </>
  );
};
