import { useState } from "react";
import "./LikesButton.scss";

export const LikesButton = () => {
  const [likes, setLikes] = useState(0);
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    // if (isClicked) {
    //   setLikes(likes - 1);
    // } else
    // {
    setLikes(likes + 1);

    setIsClicked(!isClicked);
  };

  return (
    <>
      {/* <div className="likes"> */}
      <button className={`like__button ${isClicked && "liked"}`} onClick={handleClick}>
        <span className="likes__button-counter">{`likes ${likes}`}</span>
      </button>
      {/* </div> */}
    </>
  );
};
