import React from "react";
import "./Rating.sass";

function Rating({ rating }) {
  const totalStars = 5;
  const filledStars = Math.round(rating);

  return (
    <div className="rating">
      {[...Array(totalStars)].map((_, index) => (
        <i
          key={index}
          className={`fas fa-star ${
            index < filledStars ? "filled" : "disabled"
          }`}
        ></i>
      ))}
    </div>
  );
}

export default Rating;
