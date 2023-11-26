import { useEffect, useState } from "react";
import ModalImage from "react-modal-image";
import axios from "axios";
import "./RecentGallery.scss";

export const RecentGallery = () => {
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

  const numberOfRecentImagesToShow = 20;
  const mostRecentImages = recentGallery.slice(-numberOfRecentImagesToShow).reverse();

  return (
    <>
      {recentGallery ? (
        <section className="recent-gallery">
          <h2 className="recent-gallery__title">Recent Uploads</h2>
          <div className="recent-gallery__image-gallery">
            {mostRecentImages.map((image, index) => (
              <div key={index}>
                <ModalImage
                  key={index}
                  className="recent-gallery__image-modal"
                  small={image.image}
                  large={image.image}
                  hideDownload={true}
                  hideZoom={true}
                  alt={`${image.category} - ${image.title}`}
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
