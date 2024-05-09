import React, { useEffect, useState } from "react";

import { motion, useAnimate } from "framer-motion";
//importamos imagenes del comite 
import banner from '../../imgs/about/info/image1.jpg'
import image1 from '../../imgs/about/staff/image2.png'
import image2 from '../../imgs/about/staff/image1.png'



import { ReactTyped } from "react-typed";
import { useParams } from "react-router-dom";


const MoreComite = () => {
{ /* const { titleParams } = useParams();
  const item = PRESENT_HOME.find((item) => item.title === titleParams);
const { title, description, image } = item;*/}

  return (
    <section className="w-full h-auto  bg-gradient-to-t from-primary-300 to-primary-100 flex flex-col justify-center gap-y-10">
      <div
        className="w-full h-[100vh]   flex flex-col-reverse bg-center bg-no-repeat bg-cover "
        style={{ backgroundImage: `url('${banner}')` }}
      ></div>

      {/* Contenedor de texto/ */}
      <div className="w-full h-auto  flex">
        {/* Contenido de texto/ */}
        <div className="w-full h-full   flex flex-col justify-center">
          {/* Texto */}
          <div className="text-center my-10 flex flex-col gap-y-10">
            <h1 className="h1 w-[90%] md:w-[full] text-primary-400">COMITE DIRECTIVO</h1>
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
              <h2 className=" h3  text-primary-400 ">COMITE COMPLETO </h2>
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
          {/* parrafo 2 */}
          <div className="w-full p-10 h-[auto] m-auto  flex flex-col-reverse md:flex-row justify-center gap-y-5 md:gap-5 items-center md:items-start ">
            <div className=" w-[100%] md:w-[50%]  text-center sm:text-left justify-end  m-auto  md:text-left px-5 gap-5 flex flex-col">
              <h2 className=" h3 text-primary-400 ">TOMANDO DECISIONES</h2>
              <p className=" w-[90%] m-auto sm:m-0 text-sm lg:text-lg xl:text-xl tracking-wider  ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
            <div className="w-[70%]  m-auto">
              <img src={image2} alt="image-info" className="w-full h-full" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MoreComite;
