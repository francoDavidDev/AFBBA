import React from "react";
import { motion } from "framer-motion";

import Photographer from "../../components/About/Photographer";
import GalleryAbout from "../../components/About/GalleryAbout";
import AssociationsAbout from "../../components/About/AssociationsAbout";
import Info from "../../components/About/Info";
import CarrouselAbout from "../../components/About/CarrouselAbout";
import { SPONSORS } from "../../data/sponsors";

const About = () => {
  return (
    <section className="w-full h-auto flex flex-col justify-center items-center gap-y-10 ">
      <div className="w-[90%] min-h-screen m-auto mt-[100px] gap-y-10">
        {/* Sponsors con animación */}
        <motion.div
          className="flex flex-wrap justify-center items-center gap-8 my-10  "
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          {SPONSORS.map((sponsor, index) => (
            <motion.a
              key={index}
              href={sponsor.link}
              target="_blank"
              rel="noopener noreferrer"
              className="relative w-40 h-auto  "
              whileHover={{ scale: 1.1 }}
            >
              <motion.img
                src={sponsor.image}
                alt={sponsor.alt}
                className="w-full h-auto object-contain"
                whileHover={{ filter: "brightness(1.5)" }}
                transition={{ duration: 0.3 }}
              />
            </motion.a>
          ))}
        </motion.div>

        {/* Animación del div */}
        <motion.div
          className="h-[1px] bg-white flex justify-center"
          initial={{ width: 0, transformOrigin: "center" }}
          animate={{ width: "100%" }}
          transition={{ duration: 1 }}
        ></motion.div>

        <div className="flex justify-center flex-col text-center mt-10">
          <h2 className="text-[60px] font-bold tracking-widest">FAMF</h2>
          <p className="text-[30px] text-primary-400/80 mb-4">
            FEDERACION ARGENTINA DE MUSCULACION Y FITNESS
          </p>
        </div>

        <CarrouselAbout />
        {/* Nuevas secciones */}
        <Info />

        <Photographer />
        <GalleryAbout />
      </div>
    </section>
  );
};

export default About;
