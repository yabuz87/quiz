import React from 'react';
import { photoObj } from '../../assets/photObj';
import image from "../../assets/examCarousel.jpg"
import "../Home/index.css"
import './carousel.css'; // Ensure you link the above CSS here

const Carousel = () => {
  return (
    <div id="carouselExampleDark" className="carousel carousel-dark slide">
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
        {photoObj.map((_, index) => (
          <button
            key={index + 1}
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to={index + 1}
            aria-label={`Slide ${index + 2}`}
          ></button>
        ))}
      </div>
      <div className="carousel-inner p-4">
        <div className="carousel-item carousel-item active" data-bs-interval="10000">
          <img src={image} className="d-block" alt="..." />
          <div className="carousel-caption d-none d-md-block">
            <h5 className="text-light">{photoObj[0].name}</h5>
            <p>Some representative placeholder content for the first slide.</p>
          </div>
        </div>
        {photoObj.slice(1).map((item, index) => (
          <div className="carousel-item" data-bs-interval="2000" key={index + 1}>
            <img src={image} className="d-block" alt={`Slide ${index + 2}`} />
            <div className="carousel-caption d-none d-md-block">
              <h5 className="text-light">{item.name}</h5>
              <p className="text-light">Some representative placeholder content for the slide {index + 2}.</p>
            </div>
          </div>
        ))}
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default Carousel;
