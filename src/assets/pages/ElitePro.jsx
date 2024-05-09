import React, { useEffect, useState } from "react";
//import logo
import { delay, motion, useAnimate } from "framer-motion";
// Importamos motion y useAnimate de la biblioteca framer-motion, que nos permite crear animaciones en React
import banner from "../imgs/elitePro/bannerMain.png";


//import info image
import imageInfo from "../imgs/elitePro/IA_1.png";
import imageInfo2 from "../imgs/elitePro/IA_2.png";

//import sponsorts
import { SPONSORS } from "../../data";
// import video powerade
import poweradeVideo from "../videos/powerade.mp4";
import { useRef } from "react";
import { Link } from "react-router-dom";

const ElitePro = () => {


  return (
    <section className="w-full h-auto  bg-gradient-to-t from-primary-300 to-primary-100 flex flex-col justify-center ">
      <div
        className="w-full  h-[100vh] flex flex-col-reverse bg-center bg-no-repeat bg-cover "
        style={{ backgroundImage: `url('${banner}')` }}
      ></div>
      {/* Contenedor de texto/banner */}
      <div className="w-full h-[full]  flex">
        {/* Contenido de texto/banner */}
        <div className="w-full h-auto  flex flex-col justify-center">
          {/* Texto */}
          <div className="text-center my-20 flex flex-col gap-y-20">
            <h1 className="h1 text-primary-400">¿QUE ES LA ELITE PRO?</h1>
            <p className="w-[60%] text-2xl text-left m-auto leading-relaxed tracking-[4px] font-light ">
              <span className="text-primary-400 ">IFBB Elite PRO</span> es la
              división profesional de la federación internacional de Fitness y
              Culturismo (IFBB) y es la máxima categoría donde podrás competir a
              nivel internacional.
            </p>
          </div>
        </div>
      </div>

      {/* INFO informacion */}
      <div className="w-full p-10 h-[auto] m-auto  flex flex-col md:flex-row justify-center gap-y-5 md:gap-5 items-center md:items-start ">
        <div className="w-[70%]  m-auto">
          <img src={imageInfo} alt="image-info" className="w-full h-full" />
        </div>
        <div className=" w-[100%] md:w-[50%]  text-center justify-end  m-auto  md:text-left px-5 gap-5 flex flex-col">
          <h2 className=" h3 text-primary-400 ">ELITE PRO</h2>
          <p className=" w-[90%] text-sm lg:text-lg xl:text-xl tracking-wider  ">
            Compitiendo en IFBB Elite PRO te enfrentarás a los mejores atletas
            del mundo de IFBB en tu especialidad y tendrás la posibilidad de
            obtener premios en metálico si te clasificas dentro del top 5 en las
            competiciones
          </p>
          <Link to={'/moreElite1'} >
          <button className="btn-lg  bg-neutral-400 border-none tracking-[3px] font-light hover:bg-primary-300 hover:text-primary-400  hover:rounded-md hover:scale-110 transition-all duration-100 hover:font-bold hover:text-md  ">
            {" "}
             VER MAS
          </button>
          </Link>
        </div>
      </div>
      {/* INFO informacion 2  */}
      <div className="w-full p-10 h-[auto] m-auto  flex flex-col-reverse md:flex-row justify-center gap-y-5 md:gap-5 items-center md:items-start  ">
        <div className=" w-[100%] md:w-[50%]  text-center justify-end  m-auto  md:text-left px-5 gap-5 flex flex-col">
          <h2 className=" h3 text-primary-400 ">TORNEOS </h2>
          <p className=" w-[90%] text-sm lg:text-lg xl:text-xl tracking-wider  ">
            Compitiendo en IFBB Elite PRO te enfrentarás a los mejores atletas
            del mundo de IFBB en tu especialidad y tendrás la posibilidad de
            obtener premios en metálico si te clasificas dentro del top 5 en las
            competiciones
          </p>
          <Link to={'/moreElite2'} >
          <button className="btn-lg  bg-neutral-400 border-none tracking-[3px] font-light hover:bg-primary-300 hover:text-primary-400  hover:rounded-md hover:scale-110 transition-all duration-100 hover:font-bold hover:text-md  ">
            {" "}
             VER MAS
          </button>
          </Link>
        </div>
        <div className="w-[70%]  m-auto">
          <img src={imageInfo2} alt="image-info" className="w-full h-full" />
        </div>
      </div>

      {/* sponsors */}
      <div className="w-full h-[auto] py-5 justify-center items-center ">
        <div className="w-[90%] flex justify-start items-center m-auto py-10 ">
          <h5 className="h5 text-primary-400 "> EVENT SPONSORS</h5>
        </div>
        <div className="w-[90%] m-auto  ">
          <div className="flex flex-row justify-start items-center  m-auto gap-x-10 ">
            {SPONSORS.map((item, index) => (
              <div key={index} className="w-[200px]  h-[100px]  ">
                <img src={item.image} alt="" className="w-full h-full" />
              </div>
            ))}
        
          </div>
        </div>
      </div>
    </section>
  );
};

export default ElitePro;
{
  /*   <div
                onMouseEnter={() => setDropdown(item.img)}
                onMouseLeave={() => setDropdown(index)}
                key={index}
                className="  w-[250px] md:w-[350px]  lg:w-[300px] hover:scale-150 cursor-pointer transition-all  h-[400px]   gap-y-5 bg-cover bg-no-repeat bg-center  "
                style={{ backgroundImage: `url('${item.img}')` }}
              >
                <div className="h-full w-full flex-grow overflow-hidden   ">
                  <div
                    className={`${
                      dropdown === item.img ? "opacity-1" : "opacity-0"
                    } bg-primary-300/70 px-1 flex flex-col justify-center items-center text-center gap-y-5 w-full h-full transition-all delay-75 duration-200 `}
                  >
                    <h5 className="h5 text-primary-100   scale-50  ">
                      {item.name}{" "}
                    </h5>
                    <h4 className="h4 text-primary-200   scale-50  ">
                      {" "}
                      CAMPEONATO{" "}
                    </h4>
                    <button className="btn-lg   scale-50  bg-primary-100 border-none tracking-[3px] font-light hover:bg-primary-200 hover:text-primary-300  hover:rounded-md hover:scale-75 transition-all duration-100 hover:font-bold hover:text-md  ">
                      {" "}
                      VER MAS
                    </button>
                  </div>
                </div>

                <div className="flex justify-center items-center relative bottom-[90%] "></div>
              </div>*/
}
