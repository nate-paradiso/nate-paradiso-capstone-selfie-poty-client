import "./UserGallery.scss";
import { useState } from "react";

export const UserGallery = ({ userGallery }) => {
  const [enlargedImage, setEnlargedImage] = useState(null);

  const handleClick = image => {
    setEnlargedImage(enlargedImage === image ? null : image);
  };

  const numberOfRecentImagesToShow = 20;
  const mostRecentImages = userGallery.slice(-numberOfRecentImagesToShow).reverse();

  return (
    <>
      {userGallery ? (
        <section className="user-gallery">
          <h2 className="user-gallery__title">Your images</h2>
          <div className="user-gallery__image-gallery">
            {mostRecentImages.map((image, index) => (
              <div className="user-gallery__image-container" key={index}>
                <button className="user-gallery__image--button" onClick={() => handleClick(image)}>
                  <img
                    className={`user-gallery__image ${
                      enlargedImage === image ? "user-gallery__image--enlarge" : ""
                    }`}
                    src={image.image}
                    alt={image.category}
                  />
                  <p className="user-gallery__text">
                    {image.category} -- {image.title}
                  </p>
                </button>
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
