import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

// Import banner
import banner from "../../imgs/hero/bannerFAMF.png";

// Sponsors
import sportcenter from "../../imgs/sponsors/sportcenter.jpg";
import bsn from "../../imgs/sponsors/bsn.jpg";
import sansongym from "../../imgs/sponsors/sansongym.jpg";
import vees from "../../imgs/sponsors/vees.jpg";

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

  const isMobile = w < 768;

  return (
    <div
      className="relative text-white bg-cover bg-no-repeat bg-center -z-10 "
      style={{
        backgroundImage: `url('${banner}')`,
        backgroundSize: "cover",
        backgroundPosition: "top",
        height: isMobile ? "30vh" : "100vh",
      }}
    >
      {/* Columnas con imágenes de sponsors */}
       {/* Columnas con imágenes de sponsors */}
       <div className="absolute inset-0 flex items-center justify-between ">
        {/* Columna izquierda */}
        <div className="flex flex-col space-y-6 pl-10">
          {[sportcenter, bsn, sansongym].map((img, index) => (
            <motion.a
              key={index}
              href="#"
              className="block"
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ scale: 1.1, rotate: 2 }}
            >
              <img
                src={img}
                alt={`sponsor-${index}`}
                className={`rounded-lg shadow-lg transition-all duration-300 ease-in-out ${
                  isMobile ? "w-16 h-16" : "w-32 h-32"
                }`}
              />
            </motion.a>
          ))}
        </div>

        {/* Columna derecha */}
        <div className="flex flex-col space-y-6 pr-10">
          {[vees, sportcenter, sansongym].map((img, index) => (
            <motion.a
              key={index}
              href="#"
              className="block"
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ scale: 1.1, rotate: -2 }}
            >
              <img
                src={img}
                alt={`sponsor-${index + 3}`}
                className={`rounded-lg shadow-lg transition-all duration-300 ease-in-out ${
                  isMobile ? "w-16 h-16" : "w-32 h-32"
                }`}
              />
            </motion.a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Hero;
