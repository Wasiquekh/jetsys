// components/Carousel.js
import React from "react";
import Slider from "react-slick";

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true, // Centers the current item
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="carousel-container">
      <Slider {...settings}>
        <div className="carousel-item">
          <a href="/projects/apple" className="carousel-link">
            <div className="home-work-text-wrapper">
              <h3 className="home-work-work-title">Work #1</h3>
              <div className="home-work-work-description">
                This is some text inside of a div block.
              </div>
            </div>
            <div className="home-work-image-wrapper">
              <img
                src="https://cdn.prod.website-files.com/5e821153625dc77630c8cfd1/61707dabe3605933a3e3875f_work-protecto-thumbnail.webp"
                alt="Protecto brand identity cover"
                className="home-work-image"
              />
            </div>
          </a>
        </div>
        {/* Add more carousel items */}
      </Slider>
      <Slider {...settings}>
        <div className="carousel-item">
          <a href="/projects/apple" className="carousel-link">
            <div className="home-work-text-wrapper">
              <h3 className="home-work-work-title">Work #1</h3>
              <div className="home-work-work-description">
                This is some text inside of a div block.
              </div>
            </div>
            <div className="home-work-image-wrapper">
              <img
                src="https://cdn.prod.website-files.com/5e821153625dc77630c8cfd1/61707dabe3605933a3e3875f_work-protecto-thumbnail.webp"
                alt="Protecto brand identity cover"
                className="home-work-image"
              />
            </div>
          </a>
        </div>
        {/* Add more carousel items */}
      </Slider>
      <Slider {...settings}>
        <div className="carousel-item">
          <a href="/projects/apple" className="carousel-link">
            <div className="home-work-text-wrapper">
              <h3 className="home-work-work-title">Work #1</h3>
              <div className="home-work-work-description">
                This is some text inside of a div block.
              </div>
            </div>
            <div className="home-work-image-wrapper">
              <img
                src="https://cdn.prod.website-files.com/5e821153625dc77630c8cfd1/61707dabe3605933a3e3875f_work-protecto-thumbnail.webp"
                alt="Protecto brand identity cover"
                className="home-work-image"
              />
            </div>
          </a>
        </div>
        {/* Add more carousel items */}
      </Slider>
    </div>
  );
};

export default Carousel;
