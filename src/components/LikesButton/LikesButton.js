import { useState, useEffect } from "react";
import "./LikesButton.scss";
import thumbsUp from "../../assets/images/thumbsup.png";

export const LikesButton = () => {
  const [likes, setLikes] = useState("");

  const handleClick = () => {
    setLikes(likes === "" ? 1 : likes + 1);
  };

  return (
    <>
      <button className="likes__button" onClick={handleClick}>
        <span className="likes__button-counter">
          <img className="likes__button-thumb" src={thumbsUp} alt="thumbs up icon" />
          {likes !== "" ? `${likes}` : ""}
        </span>
      </button>
    </>
  );
};
