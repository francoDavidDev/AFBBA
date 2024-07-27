import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { CARROUSEL_ABOUT } from "../../data/about";

import  image from  '../../imgs/about/members/oscar.png'
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
         {/* Sección del carrusel */}
         <div className=" h-[300px] w-full flex">
          <div className="w-[60%] overflow-hidden rounded-2xl">
            <Slider {...settings}>
              {CARROUSEL_ABOUT.map((item, index) => (
                <div key={index}>
                  <img
                    src={item.image}
                    alt={`Imagen ${index + 1}`}
                    className="w-full h-full object-cover rounded-2xl"
                  />
                </div>
              ))}
            </Slider>
          </div>
          <div className="w-[40%] flex justify-center items-center">
            <div className="w-[95%] h-[95%]  border-[1px] rounded-xl bg-cover bg-top flex justify-between items-start flex-col" 
                 style={{ backgroundImage: `url(${image})` }}>
              <div className="flex justify-start items-start py-2 gap-y-6 px-4 flex-col">
                <p className="text-xl ml-10">MAS DE 30 AÑOS</p>
                <p className="text-left font-normal">
                  AFFB se creó en 1993 por Oscar Villareal, con el objetivo de
                  que nuestro deporte llegue a más personas.
                </p>
              </div>
              <div className="flex px-3">
                <button className="flex items-center gap-1 justify-center font-light mb-5 border-[1px] rounded-full py-1 px-3">
                  Hablemos <span><MdOutlineArrowOutward /></span>
                </button>
              </div>
            </div>
          </div>
        </div> 
    </div>
  )
}

export default CarrouselAbout
