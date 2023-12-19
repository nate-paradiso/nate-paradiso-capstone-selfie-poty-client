import { useState } from "react";
import "./LikesButton.scss";
import thumbsUp from "../../assets/images/thumbsup.png";

export const LikesButton = () => {
  const [likes, setLikes] = useState("");
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    if (isClicked) {
      setLikes(likes - 1);
    } else {
      setLikes(likes + 1);
    }
    setIsClicked(!isClicked);
  };

  return (
    <>
      <button className="likes__button" onClick={handleClick}>
        <span className="likes__button-counter">
          {" "}
          <img className="likes__button-thumb" src={thumbsUp} alt="thumbs up icon" />
          {`${likes}`}
        </span>
      </button>
    </>
  );
};
