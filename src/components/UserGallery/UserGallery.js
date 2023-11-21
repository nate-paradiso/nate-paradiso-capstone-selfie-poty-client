import "./UserGallery.scss";

export const UserGallery = ({ userGallery }) => {
  const staticHost = "http://localhost:8080/images/";

  const numberOfRecentImagesToShow = 20;
  const mostRecentImages = userGallery.slice(-numberOfRecentImagesToShow).reverse();

  return (
    <section className="user-gallery">
      <h2 className="user-gallery__title">Your images</h2>
      <div className="recent-gallery__image-gallery">
        {mostRecentImages.map(image => (
          <div className="recent-gallery__image-container">
            <img
              className="recent-gallery__image"
              key={image.id}
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
