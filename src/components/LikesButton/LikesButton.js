import "./LikesButton.scss";
import thumbsUp from "../../assets/images/thumbsup.png";
import axios from "axios";

export const LikesButton = ({ imageId, likes, handleUpdateLikes }) => {
  const handleClick = async () => {
    try {
      const response = await axios.patch(`${process.env.REACT_APP_BACKEND_URL}/likes`, { imageId });

      if (response.status !== 200) {
        throw new Error("Failed to update likes");
      }
      handleUpdateLikes(imageId, response.data.updatedLikes);
    } catch (error) {
      console.error("Error updating likes:", error.message);
    }
  };

  return (
    <>
      <button className="likes__button" onClick={handleClick}>
        <span className="likes__button-counter">
          <img className="likes__button-thumb" src={thumbsUp} alt="thumbs up icon" />
          {likes !== 0 ? `${likes}` : ""}
        </span>
      </button>
    </>
  );
};
