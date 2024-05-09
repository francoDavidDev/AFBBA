import React, { useEffect, useState } from "react";
// Importamos React y los hooks useEffect y useState del paquete "react"

import banner from "../../imgs/about/staff/bannerShadow.jpg";
// Importamos la imagen del banner desde su ruta



import { motion, useAnimate } from "framer-motion";
// Importamos motion y useAnimate de la biblioteca framer-motion, que nos permite crear animaciones en React

import { ReactTyped } from "react-typed";
// Importamos el componente ReactTyped, que nos permite mostrar texto con efectos de escritura




import { STAFF } from "../../../data";
import ModalPhoto from "./ModalPhoto";
import Info from "./Info";
import Members from "./Members";
// Importamos iconos de redes sociales desde las bibliotecas de iconos de React

const About = () => {
  // Definimos un componente de función llamado About

  

  return (
    <section className="w-full h-auto  bg-gradient-to-t from-primary-300 to-primary-100 flex flex-col justify-center gpy">
      <div
        className="w-full  h-[100vh] flex flex-col-reverse bg-center bg-no-repeat bg-cover "
        style={{ backgroundImage: `url('${banner}')` }}
      ></div>

      {/* Contenedor de texto/banner */}
      <div className="w-full h-auto  flex">
        {/* Contenido de texto/banner */}
        <div className="w-full h-full   flex flex-col justify-center">
          {/* Texto */}
          <div className="text-center my-10 flex flex-col gap-y-10">
            <h1 className="h1 text-primary-400">FAMF</h1>
            <p className=" w-[90%] md:w-[70%]  text-md md:text-2xl text-left m-auto leading-relaxed tracking-widest">
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
      <Info/>

      {/* Sección de miembros del comité */}
        <Members/>
      {/* Galería */}
      <div className="  w-full  max-w-5xl p-5 py-20 pb-10 mx-auto  mb-10 gap-1 columns-1 sm:columns-2 md:columns-3 space-y-1 ">
        {STAFF.map((item, index) => (
          <div className="overflow-hidden bg-neutral-400 ">
            <ModalPhoto image={item.image} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;
