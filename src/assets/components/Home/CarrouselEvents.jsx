import React from "react";
// Import react-slick
import Slider from "react-slick";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { EVENTS } from "../../data/home";
import { Link } from "react-router-dom";

const CarrouselEvents = () => {
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
    <section className=" h-auto py-10 ">
      <div className="p-5 ">
        <h4 className="h4 text-primary-400">IFBB EVENTOS</h4>
      </div>
      <div>
        <Slider {...settings} className="slick-slide_themes">
          {EVENTS.map((item, i) => (
            <Link  to={`/EventsViews/${item.id}`} key={i}>
              <div
                className="rounded-xl m-1 overflow-hidden w-[90%] h-[350px] cursor-pointer bg-no-repeat bg-cover bg-center  duration-200  hover:rounded-xl  hover:shadow-primary-400 hover:shadow-md  shadow-[0_35px_60px_-15px_rgba(0,0,0,0.0)] "
                style={{ backgroundImage: `url('${item.image}')` }}
              ></div>
              <div className="w-[90%] ">
                <p className="line-clamp-1">{item.title} </p>
              </div>
            </Link>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default CarrouselEvents;
