import React from "react";
import { motion } from 'framer-motion';

import Photographer from "../../components/About/Photographer";
import GalleryAbout from "../../components/About/GalleryAbout";
import AssociationsAbout from "../../components/About/AssociationsAbout";
import Info from "../../components/About/Info";
import CarrouselAbout from "../../components/About/CarrouselAbout";

const About = () => {

  return (
    <section className="w-full h-auto flex flex-col justify-center items-center gap-y-10  bg-gradient-to-b from-primary-300 to-black">
      <div className="w-[90%] min-h-screen m-auto mt-[100px] gap-y-10">
        {/* Animación del div */}
        <motion.div
          className="h-[1px] bg-white flex justify-center"
          initial={{ width: 0, transformOrigin: "center" }}
          animate={{ width: '100%' }}
          transition={{ duration: 1 }} // Puedes ajustar la duración de la animación
        >
        </motion.div>
        
        <div className="flex justify-center flex-col text-center mt-10 ">
          <h2 className="text-[60px] font-bold tracking-widest">AFFBA</h2>
          <p className="text-[30px] text-primary-400/80 mb-4">
            FEDERACION ARGENTINA DE MUSCULACION Y FITNESS
          </p>
        </div>

     
        <CarrouselAbout/>
        {/* Nuevas secciones */}
        <Info/>
        <AssociationsAbout/>
        <Photographer/>
        <GalleryAbout/>
      </div>
    </section>
  );
};

export default About;
