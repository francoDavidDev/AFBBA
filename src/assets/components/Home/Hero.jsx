import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

// Import banner
import banner from "../../imgs/hero/bannerFAMF.png";

// Sponsors
import sportcenter from '../../imgs/sponsors/sportcenter.jpg';
import bsn from '../../imgs/sponsors/bsn.jpg';
import sansongym from '../../imgs/sponsors/sansongym.jpg';
import vees from '../../imgs/sponsors/vees.jpg';

function Hero() {
  const videoRef = useRef();
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

  return (
    <div
      className="relative text-white bg-cover bg-no-repeat bg-center"
      style={{
        backgroundImage: `url('${banner}')`,
        backgroundSize: 'cover',
        backgroundPosition: 'top',
        height: w < 768 ? '50vh' : '100vh', // Altura responsiva
      }}
    >
      {/* Columnas con imágenes de sponsors (no se muestran en móviles) */}
      <div className="absolute inset-0 flex items-center justify-between flex-col sm:flex-row">
        {/* Columna izquierda */}
        <div className={`flex flex-col space-y-6 pl-10 sm:order-1 ${w < 768 ? 'hidden' : ''}`}>
          {[sportcenter, bsn, sansongym].map((img, index) => (
            <motion.a
              key={index}
              href="#"
              className="block"
              initial={{ x: -100, opacity: 0 }} // Animación inicial
              animate={{ x: 0, opacity: 1 }} // Animación final
              transition={{ duration: 0.5, delay: index * 0.2 }} // Transición escalonada
              whileHover={{ scale: 1.1, rotate: 2 }} // Animación hover
            >
              <img
                src={img}
                alt={`sponsor-${index}`}
                className="w-32 h-32 rounded-lg shadow-lg transition-all duration-300 ease-in-out"
              />
            </motion.a>
          ))}
        </div>

        {/* Columna derecha */}
        <div className={`flex flex-col space-y-6 pr-10 sm:order-2 ${w < 768 ? 'hidden' : ''}`}>
          {[vees, sportcenter, sansongym].map((img, index) => (
            <motion.a
              key={index}
              href="#"
              className="block"
              initial={{ x: 100, opacity: 0 }} // Animación inicial
              animate={{ x: 0, opacity: 1 }} // Animación final
              transition={{ duration: 0.5, delay: index * 0.2 }} // Transición escalonada
              whileHover={{ scale: 1.1, rotate: -2 }} // Animación hover
            >
              <img
                src={img}
                alt={`sponsor-${index + 3}`}
                className="w-32 h-32 rounded-lg shadow-lg transition-all duration-300 ease-in-out"
              />
            </motion.a>
          ))}
        </div>
      </div>

      {/* Columnas con imágenes de sponsors para celular */}
      <div className={`absolute inset-0  flex items-center justify-between flex-col ${w < 768 ? 'flex-col-reverse' : 'hidden'}`}>
        <div className="flex justify-center items-center flex-row  pl-10 sm:order-1">
          {[sportcenter, bsn, sansongym].map((img, index) => (
            <motion.a
              key={index}
              href="#"
              className="flex gap-y-10 mx-5"
              initial={{ x: -100, opacity: 0 }} // Animación inicial
              animate={{ x: 0, opacity: 1 }} // Animación final
              transition={{ duration: 0.5, delay: index * 0.2 }} // Transición escalonada
              whileHover={{ scale: 1.1, rotate: 2 }} // Animación hover
            >
              <img
                src={img}
                alt={`sponsor-${index}`}
                className="w-16 h-16 sm:w-32px sm:h-32px rounded-lg shadow-lg transition-all duration-300 ease-in-out"
              />
            </motion.a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Hero;
