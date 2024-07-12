import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import image1 from "../../imgs/internationals/image1.jpg";
import image2 from "../../imgs/internationals/image2.jpg";
import image3 from "../../imgs/internationals/image3.png";

//small images
import imageSmall1 from "../../imgs/internationals/smalls/image11.jpg";
import imageSmall2 from "../../imgs/internationals/smalls/image2.jpg";
import imageSmall3 from "../../imgs/internationals/smalls/image3.jpg";

const Internationals = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 742);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const INTERNATIONALS = [
    {
      titulo: "TITULO 1",
      description: "asdsadsadadsadjsakdjlsakjklsajldjskadjlkadjslakdjs",
      image: image1,
      image2: imageSmall1,
      backgroundColor: "bg-red-500",
    },
    {
      titulo: "TITULO 2",
      description: "asdsadsadadsadjsakdjlsakjklsajldjskadjlkadjslakdjs",
      image: image2,
      image2: imageSmall2,
      backgroundColor: "bg-blue-500",
    },
    {
      titulo: "TITULO 3",
      description: "asdsadsadadsadjsakdjlsakjklsajldjskadjlkadjslakdjs",
      image: image3,
      image2: imageSmall3,
      backgroundColor: "bg-green-500",
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === INTERNATIONALS.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? INTERNATIONALS.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="w-full h-[100vh]">
      <div
        className={`w-full h-full bg-no-repeat bg-center px-10 bg-cover flex flex-col sm:flex-row items-center justify-center ${
          INTERNATIONALS[currentIndex].backgroundColor
        } ${isMobile ? "mt-[-50px]" : ""}`}
        style={{
          backgroundImage: `url('${
            isMobile
              ? INTERNATIONALS[currentIndex].image
              : INTERNATIONALS[currentIndex].image
          }')`,
          backgroundColor: "rgba(0, 0, 0, 0.7)", // Ajusta el nivel de oscuridad cambiando el último valor
          backgroundBlendMode: "darken",
        }}
      >
        <div
          className={`w-full sm:w-1/2 h-[80%] bg-no-repeat bg-center bg-cover flex items-center justify-center`}
        >
          <motion.div
            className="text-white h-full text-center flex flex-col items-center justify-start gap-10 "
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl font-bold">TITULO DEL TORNEO</h2>
            <p className="mt-4">
              | tetx | text | teaxt en en html para mi codigo
            </p>{" "}
            <p className="mt-4">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Obcaecati voluptatum quaerat sint similique temporibus amet, vitae
              quae, labore dolor optio voluptates, accusantium doloremque
              laboriosam sit est! Impedit soluta minus animi!
            </p>
            <button className="mt-4 bg-white text-red-500 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors duration-300">
              Ver mas
            </button>
          </motion.div>
        </div>
        <div
          className={`w-1/2 flex items-center justify-center ${
            isMobile ? "mt-8" : ""
          }`}
        >
          <div className="max-w-sm w-full mx-auto relative bottom-44 sm:bottom-60 ">
            <AnimatePresence>
              {INTERNATIONALS.map((item, index) =>
                index === currentIndex ? (
                  <motion.div
                    key={index}
                    className="absolute inset-0"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <img
                      src={isMobile ? item.image2 : item.image}
                      alt=""
                      className="rounded-xl"
                    />
                  </motion.div>
                ) : null
              )}
            </AnimatePresence>
            <button
              className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white text-red-500 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors duration-300"
              onClick={prevSlide}
            >
              Anterior
            </button>
            <button
              className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white text-red-500 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors duration-300"
              onClick={nextSlide}
            >
              Siguiente
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Internationals;
