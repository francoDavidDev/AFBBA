import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { CARROUSEL_ABOUT } from "../../data/about";
import image from "../../imgs/about/members/oscar.png";
import { MdOutlineArrowOutward } from "react-icons/md";

const CarrouselAbout = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
  };

  return (
    <div>
  

      {/* Sección de tarjetas */}
      <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
        {CARROUSEL_ABOUT.map((item, index) => (
          <div
            key={index}
            className="border rounded-lg shadow-md flex flex-col items-center"
          >
            <div
              className="w-full h-60 bg-cover bg-top rounded-lg"
              style={{ backgroundImage: `url(${item.image})` }}
            >
              {/* Si quieres que el contenido esté sobre la imagen, agrega esto dentro del div */}
            </div>
            <div className="w-full flex flex-col items-center p-4">
              <h3 className="text-lg font-semibold mb-2">{item.name}</h3>
              <p className="text-sm text-gray-600">{item.tag}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CarrouselAbout;
