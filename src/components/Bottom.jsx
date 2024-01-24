import React from "react";

import darkFurniture from "../images/image-about-dark.jpg";
import lightFurniture from "../images/image-about-light.jpg";

const Bottom = () => {
  return (
    <div className="bottom">
      <img
        src={darkFurniture}
        alt="two black low-height chairs with arm rests around a coffee table with a bowl on top"
      />

      <div className="bottom__about">
        <h2 className="bottom__about_heading">ABOUT OUR FURNITURE</h2>

        <p className="bottom__about_description">
          Our multifunctional collection blends design and function to suit your
          individual taste. Make each room unique, or pick a cohesive theme that
          best express your interests and what inspires you. Find the furniture
          pieces you need, from traditional to contemporary styles or anything
          in between. Product specialists are available to help you create your
          dream space.
        </p>
      </div>

      <img
        src={lightFurniture}
        alt="a white medium-height chair against a white backdrop "
      />
    </div>
  );
};

export default Bottom;
