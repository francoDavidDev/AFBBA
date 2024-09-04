import React, { useState, useEffect } from "react";
// Import react-slick
import Slider from "react-slick";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { Link } from "react-router-dom";
import { SPONSORS } from "../data/sponsors";

const CarrouselSponsors = () => {
  const [randomBanner, setRandomBanner] = useState(null);

  useEffect(() => {
    // Seleccionar una imagen aleatoria
    const randomSponsor = SPONSORS[Math.floor(Math.random() * SPONSORS.length)];
    setRandomBanner(randomSponsor.image);
  }, []);

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    centerMode: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        },
      },

      {
        breakpoint: 650,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="w-full my-10 ">
      <Slider {...settings} className="slick-slide_themes">
        {SPONSORS.map((item, i) => (
          <Link key={i} to={item.link || "#"} target="_blank" rel="noopener noreferrer">
            <div
              className="rounded-xl m-1 overflow-hidden w-[70%] h-[150px] cursor-pointer bg-no-repeat bg-cover bg-center duration-200 hover:rounded-xl hover:shadow-primary-400 hover:shadow-md shadow-[0_35px_60px_-15px_rgba(0,0,0,0.0)]"
              style={{ backgroundImage: `url('${item.image}')` }}
            ></div>
          </Link>
        ))}
      </Slider>

      {/* Sección del banner con imagen aleatoria */}
      <div className="w-full mt-10 flex justify-center items-center">
        {randomBanner && (
          <div
            className="w-full h-[200px] md:h-[400px] bg-repeat-x bg-center rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            style={{ backgroundImage: `url('${randomBanner}')` }}
          ></div>
        )}
      </div>
    </div>
  );
};

export default CarrouselSponsors;
