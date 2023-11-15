import React from "react";
import "./Categories.scss";

export const Categories = () => {
  return (
    <>
      <section className="categories">
        <h2 className="categories__title">Categories</h2>
        <div className="categories__text-container">
          <div className="categories__text-container-top">
            <h3 className="categories__sub-title">Self Portrait</h3>
            <p className="categories__text">
              The "Self Portrait" category invites photographers to explore their own identity,
              emotions, and creativity, offering a canvas for expressive self-representation through
              the lens.
            </p>
            <h3 className="categories__sub-title">Underwater Selfie</h3>
            <p className="categories__text">
              The "Underwater Selfie" category invites photographers to plunge into the depths of
              creativity as they capture captivating self-portraits beneath the surface, exploring
              the mystique and beauty of submerged worlds while showcasing their unique and
              imaginative underwater perspectives.
            </p>
          </div>
          <div className="categories__text-container-bottom">
            <h className="categories__sub-title">Artificial Selfie “AI”</h>
            <p className="categories__text">
              The "AI Selfies" category showcases the fascinating world of artificial intelligence
              and machine-generated self-portraits, where creators leverage AI technologies to craft
              imaginative, surreal, and thought-provoking self-images, blurring the lines between
              human expression and AI's artistic capabilities.
            </p>
            <h3 className="categories__sub-title">Phone Selfie</h3>
            <p className="categories__text">
              In the "Phone Selfie" category, photographers capture the world around them using the
              convenience and creative potential of their smartphones, exploring the art of
              self-expression through mobile photography, from candid moments to carefully crafted
              self-portraits.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};
