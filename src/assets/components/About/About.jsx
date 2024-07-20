import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section className="w-full h-auto  bg-gradient-to-t from-primary-300 to-primary-100 flex flex-col justify-center gpy">
      {/* div padre*/}

      <div className="w-[90%] bg-red-500 h-[800px] m-auto mt-[100px]  ">
        {/* LINEA BLANCA DE ARRIBA*/}
        <div className="w-full h-[1px] bg-white flex justify-center"> </div>
        {/* TITULO*/}
        <div className="flex justify-center flex-col text-center bg-blue-500">
          <h2 className="text-[100px] font-bold tracking-widest">AFFBA</h2>
          <p className="text-[40px] text-gray-400/60 ">
            FEDERACION ARGENTINA DE MUSCULACION Y FITNESS
          </p>
        </div>
        {/* CUADROS*/}
       
        <div className="bg-blue-500 h-[300px] w-full flex ">
          {/* CUADRO 1 izquierda*/}
          <div 
          className="w-[60%] bg-yellow-300 h-full "
          > carrousel</div>
          {/* CUADRO 1 derecha*/}
          <div   className="w-[40%] bg-orange-300 h-full "></div>
        </div>
      </div>
    </section>
  );
};

export default About;
