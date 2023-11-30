import "../RecentGallery/RecentGallery.scss";
import ModalImage from "react-modal-image";

export const UserGallery = ({ userGallery }) => {
  const numberOfRecentImagesToShow = 27;
  const mostRecentImages = userGallery.slice(-numberOfRecentImagesToShow).reverse();

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
