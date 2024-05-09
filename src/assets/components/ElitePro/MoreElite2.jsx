import React, { useEffect, useState } from "react";

import { motion, useAnimate } from "framer-motion";
//importamos imagenes del comite 
import banner from "../../imgs/elitePro/torneos/banner.png";

import image1 from '../../imgs/elitePro/torneos/torneo1.png'
import image2 from '../../imgs/elitePro/IA_2.png'
import image3 from '../../imgs/elitePro/IA_2.png'

//import image
import card1 from "../../imgs/elitePro/banner1.jpeg";
import card2 from "../../imgs/elitePro/banner2.jpeg";
import card3 from "../../imgs/elitePro/banner3.jpg";



import { ReactTyped } from "react-typed";
import { useParams } from "react-router-dom";


const MoreElite2 = () => {
  const BANNERS = [
    { img: card1, title: "ELITE PRO", name: "TORNEO SUDAMERICANO" },
    { img: card2, title: "ELITE PRO", name: "TORNEO INTERNACIONAL" },
    { img: card3, title: "ELITE PRO", name: "TORNEO ARAGENTINO" },
  ];

  const [w, setW] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setW(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const [dropdown, setDropdown] = useState(false);


  return (
    <section className="w-full h-auto  bg-gradient-to-t from-primary-300 to-primary-100 flex flex-col justify-center gap-y-10">
      <div
        className="w-full h-[100vh]   flex flex-col-reverse bg-top bg-no-repeat bg-cover "
        style={{ backgroundImage: `url('${banner}')` }}
      ></div>

      {/* Contenedor de texto/ */}
      <div className="w-full h-auto  flex">
        {/* Contenido de texto/ */}
        <div className="w-full h-full   flex flex-col justify-center">
          {/* Texto */}
          <div className="text-center my-10 flex flex-col gap-y-10">
            <h1 className="h1 w-[90%] md:w-[full] m-auto text-primary-400">ELITE PRO TORNEOS</h1>
            <p className=" w-[90%] md:w-[70%]  text-md md:text-2xl text-left m-auto leading-relaxed tracking-[4px] font-light">
              <span className="text-primary-400 ">
              El Comité Directivo
              </span>{" "}
               de la Asociación de Fisicoculturismo en
            Argentina es el cuerpo de liderazgo encargado de establecer la
            dirección estratégica y las políticas que guían el desarrollo y la
            promoción del fisicoculturismo en el país.
            </p>
          </div>
          {/* Texto animado */}
          <h5 className="h5 text-start w-[90%] m-auto py-5 tracking-widest text-primary-400 ">
            INFORMACION
          </h5>
          <div className="w-full p-10 h-[auto] m-auto  flex flex-col md:flex-row justify-center gap-y-5 md:gap-5 items-center md:items-start ">
            <div className="w-[70%]  m-auto">
              <img src={image1} alt="image-info" className="w-full h-full" />
            </div>
            <div className=" w-[100%] md:w-[50%]  text-center sm:text-left justify-end  m-auto  md:text-left px-5 gap-5 flex flex-col">
              <h2 className=" h3  text-primary-400 ">TORNEOS</h2>
              <p className=" w-[90%]  m-auto sm:m-0 text-sm lg:text-lg xl:text-xl tracking-wider  ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
          </div>
       
        </div>
      </div>
      
      {/* CARDS */}

      <div className=" w-full py-10 h-[auto]  ">
        <h2 className=" h3 text-primary-400 m-auto flex justify-center py-10 ">
          TORNEOS
        </h2>
        {/* card */}
        <div className="w-full px-5 h-[auto] m-auto flex py-10 flex-row  flex-wrap justify-center items-center gap-5">
          {BANNERS.map((item, index) => (
            <div
              key={index}
              onMouseEnter={() => setDropdown(true)}
              onMouseLeave={() => setDropdown(false)}
              className="overflow-hidden w-[400px] h-[80vh]  bg-red-500  flex flex-col items-center  justify-between  cursor-pointer"
            >
              <div className="w-full h-[80%]  hover:scale-110 transition-all duration-300   ">
                <div className='flex h-full w-full relative '>
                  <img src={item.img} alt="" className="w-full h-full   " />
                </div>

                <div className={`${dropdown ?'z-20':'-z-20'} w-full h-full bg-black/60 flex  transition-all duration-300 relative  bottom-full`}  ></div>
              </div>
              <div className="bg-neutral-400 w-full h-[20%] flex flex-col justify-center items-start z-10 p-5">
                <h5 className="h5">{item.title} </h5>
                <p
                  className={`${
                    dropdown ? " underline  underline-offset-8" : ""
                  } text-lg  text-primary-400 tracking-widest font-light transition-all duration-300`}
                >
                 /  Ver mas
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MoreElite2;
