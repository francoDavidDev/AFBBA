import React, { useEffect, useState } from "react";
// Importamos React y los hooks useEffect y useState del paquete "react"

import { motion, useAnimate } from "framer-motion";
// Importamos motion y useAnimate de la biblioteca framer-motion, que nos permite crear animaciones en React

import { ReactTyped } from "react-typed";
import { useParams } from "react-router-dom";
// Importamos el componente ReactTyped, que nos permite mostrar texto con efectos de escritura

// Importamos iconos de redes sociales desde las bibliotecas de iconos de React

const ViewPage = () => {
    const {title,image} = useParams()
    console.log('titulo: ', title)

  return (
    <section className="w-full h-auto  bg-gradient-to-t from-primary-300 to-primary-100 flex flex-col justify-center gpy">
     <div
        className="w-full  h-[100vh] flex flex-col-reverse bg-center bg-no-repeat bg-cover "
        style={{ backgroundImage: `url('${image}')` }}
      ></div>

      {/* Contenedor de texto/ */}
      <div className="w-full h-auto  flex">
        {/* Contenido de texto/ */}
        <div className="w-full h-full   flex flex-col justify-center">
          {/* Texto */}
          <div className="text-center my-10 flex flex-col gap-y-10">
            <h1 className="h1 text-primary-400">{title}</h1>
            <p className=" w-[90%] md:w-[70%]  text-md md:text-2xl text-left m-auto leading-relaxed tracking-[4px] font-light">
              <span className="text-primary-400 ">
                La Federación de Fisicoculturismo
              </span>{" "}
              es una organización dedicada al desarrollo y promoción del deporte
              del fisicoculturismo en nuestra comunidad y más allá. Como la
              autoridad líder en el fisicoculturismo en nuestra región, nos
              esforzamos por fomentar un ambiente inclusivo y accesible para
              atletas de todos los niveles de experiencia y habilidad.
            </p>
          </div>
          {/* Texto animado */}
          <h4 className="text-center py-5 tracking-widest">
            SOMOS EL EJEMPLO DE...
          </h4>
          <h4 className="h4 text-primary-400 text-center">
            <ReactTyped
              className="md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2"
              strings={["DEDICACION", "CONTANCIA", "DISCIPLINA"]}
              typeSpeed={120}
              backSpeed={70}
              loop
            />
          </h4>
        </div>
      </div>
    </section>
  );
};

export default ViewPage;
