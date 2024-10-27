import "./Slideshow.sass";
import React, { useState } from "react";

function Slideshow({ pictures }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex(
      currentIndex === 0 ? pictures.length - 1 : currentIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex(
      currentIndex === pictures.length - 1 ? 0 : currentIndex + 1
    );
  };
  return (
    <div className="carousel">
      {pictures.length > 1 && (
        <div className="left-arrow" onClick={prevSlide}>
          &#60;
        </div>
      )}
      {pictures.length > 1 && (
        <div className="right-arrow" onClick={nextSlide}>
          &#62;
        </div>
      )}
      {pictures.map((picture, index) => (
        <div
          className={index === currentIndex ? "slide active" : "slide"}
          key={index}
        >
          {index === currentIndex && (
            <img src={picture} alt="apartmentimage" className="image" />
          )}
        </div>
      ))}
      <div className="page-indicator">
        {currentIndex + 1}/{pictures.length}
      </div>
    </div>
  );
}

export default Slideshow;
