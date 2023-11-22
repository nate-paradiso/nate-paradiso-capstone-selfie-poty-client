import "./UserGallery.scss";
import { useState } from "react";

export const UserGallery = ({ userGallery }) => {
  // const staticHost = "http://localhost:8080/images/";
  const [enlarged, setEnlarged] = useState(false);

  const numberOfRecentImagesToShow = 20;
  const mostRecentImages = userGallery.slice(-numberOfRecentImagesToShow).reverse();

  const handleClick = () => {
    setEnlarged(!enlarged);
  };
  return (
    <>
      {userGallery ? (
        <section className="user-gallery">
          <h2 className="user-gallery__title">Your images</h2>
          <div className="user-gallery__image-gallery">
            {mostRecentImages.map(image => (
              <div className="user-gallery__image-container">
                <button className="user-gallery__image--button">
                  <img
                    className={`user-gallery__image ${
                      enlarged ? "user-gallery__image--enlarge" : ""
                    }`}
                    key={image.id}
                    src={`${image.image}`}
                    alt={image.category}
                    onClick={handleClick}
                  />
                </button>
                <p className="user-gallery__text">
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
