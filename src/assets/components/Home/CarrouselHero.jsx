import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
//import carrousel hero
import { CARROUSEL_HERO } from "../../../data";
import Slider from "react-slick";

const CarrouselHero = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay:true,
    arrows:false
  };

  return (
    <div className="w-[80%] sm:w-[90%]  m-auto slider-container ">
      <Slider {...settings}>
        {CARROUSEL_HERO.map((item, index) => (
          <div
            key={index}
            className="flex justify-center items-center flex-col"
          >
            <img src={item.image} alt="logo" className="m-auto  w-[150px]  " />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CarrouselHero;
