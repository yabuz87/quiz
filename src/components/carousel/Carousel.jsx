import React from 'react';
import { photoObj } from '../../assets/photObj';
import image from '../../assets/examCarousel.jpg';
import '../Home/index.css';
import './carousel.css';


const Carousel = () => {
  return (
    <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
        {photoObj.map((_, index) => (
          <button
            key={index + 1}
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to={index + 1}
            aria-label={`Slide ${index + 2}`}
          ></button>
        ))}
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={image} className="d-block w-100 img-fluid" alt="..." />
          <div className="carousel-caption d-none d-md-block">
            <h5 className="text-light text-center">{photoObj[0].name}</h5>
            <p className="text-light text-center">Some representative</p>
          </div>
        </div>
        {photoObj.slice(1).map((item, index) => (
          <div className="carousel-item" key={index + 1}>
            <img src={image} className="d-block w-100 img-fluid" alt={`Slide ${index + 2}`} />
            <div className="carousel-caption d-none d-md-block">
              <h5 className="text-light text-center">{item.name}</h5>
              <p className="text-light text-center">Some representative placeholder content for slide {index + 2}.</p>
            </div>
          </div>
        ))}
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default Carousel;
