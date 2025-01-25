import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

// Import banner
import banner from "../../imgs/hero/bannerFAMF.png";

// Sponsors
import { SPONSORS } from "../../data/sponsors";

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
      className="relative text-white bg-cover bg-no-repeat bg-center "
      style={{
        backgroundImage: `url('${banner}')`,
        backgroundSize: "cover",
        backgroundPosition: "top",
        height: isMobile ? "20vh" : "100vh",
      }}
    >
      {/* Columnas con imágenes de sponsors */}
      <div className="absolute inset-0 flex items-center justify-between">
        {/* Columna izquierda */}
        <div 
           className={`flex flex-col ${
            isMobile ? "space-y-4 pl-4": "space-y-10 pl-4 z-10 "
          }`}
        
        >



          {SPONSORS.slice(0, 2).map((sponsor, index) => (
            <motion.a
              key={index}
              href={sponsor.link}
              className="block cursor-pointer"
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ scale: 1.1, rotate: 2 }}
            >
              <img
                src={sponsor.image}
                alt={`sponsor-${index}`}
                className={`rounded-lg shadow-lg transition-all duration-300 ease-in-out ${
                  isMobile ? "w-20 h-12" : "w-30 h-32"
                }`}
              />
            </motion.a>
          ))}
        </div>

        {/* Columna derecha */}
        <div  className={`flex flex-col  ${
            isMobile ? "space-y-4 pl-4": "space-y-10 pr-4"
          }`}>
          {SPONSORS.slice(-2).map((sponsor, index) => (
            <motion.a
              key={index}
              href={sponsor.link}
              className="block cursor-pointer"
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ scale: 1.1, rotate: -2 }}
            >
              <img
                src={sponsor.image}
                alt={`sponsor-${index + 2}`}
                className={`rounded-lg shadow-lg transition-all  duration-300 ease-in-out ${
                  isMobile ? "w-20 h-12" : "w-30 h-32"
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
