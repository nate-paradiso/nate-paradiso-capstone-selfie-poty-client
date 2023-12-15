import "../RecentGallery/RecentGallery.scss";
import ModalImage from "react-modal-image";
// import { useState } from "react";

export const UserGallery = ({ userGallery }) => {
  const numberOfRecentImagesToShow = 10;
  const mostRecentImages = userGallery.slice(-numberOfRecentImagesToShow).reverse();

  // // State to manage the gallery
  // const [gallery, setGallery] = useState(mostRecentImages);

  // // Function to handle image deletion
  // const handleDelete = indexToDelete => {
  //   const updatedGallery = gallery.filter((_, index) => index !== indexToDelete);
  //   setGallery(updatedGallery);
  //   // Here, you might also want to perform some API call or action to delete the image from your backend/database
  // };

  return (
    <>
      {userGallery ? (
        <section className="recent-gallery">
          <h2 className="recent-gallery__title">Your Uploads</h2>
          <div className="recent-gallery__image-gallery">
            {mostRecentImages.map((image, index) => (
              <div className="recent-gallery__image-container" key={index}>
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
                {/* <button onClick={() => handleDelete(index)}>Delete</button>{" "} */}
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
