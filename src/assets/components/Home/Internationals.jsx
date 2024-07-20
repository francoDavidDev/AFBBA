import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import image1 from "../../imgs/internationals/image1.jpg";
import image2 from "../../imgs/internationals/image2.jpg";
import image3 from "../../imgs/internationals/image5.jpg";

//small images
import imageSmall1 from "../../imgs/internationals/smalls/image11.jpg";
import imageSmall2 from "../../imgs/internationals/smalls/image2.jpg";
import imageSmall3 from "../../imgs/internationals/smalls/image7.jpg";

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
    <section className="w-full h-[90vh]">
      <div
        className={`w-full h-full bg-no-repeat  px-10 bg-contain flex flex-col sm:flex-row items-center justify-center ${
          INTERNATIONALS[currentIndex].backgroundColor
        } ${isMobile ? "mt-[-50px]" : ""}`}
        style={{
          backgroundImage: `url('${
            isMobile
              ? INTERNATIONALS[currentIndex].image2
              : INTERNATIONALS[currentIndex].image2
          }')`,
          backgroundColor: "rgba(0, 0, 0, 0.3)", // Ajusta el nivel de oscuridad cambiando el último valor
          backgroundBlendMode: "darken",
        }}
      >
        <div className="w-full sm:w-1/2 h-[80%] bg-no-repeat bg-center bg-cover flex items-center justify-center">
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
        <div className={`w-full sm:w-1/2 flex items-center justify-center ${isMobile ? "mt-8" : ""}`}>
          <div className="max-w-sm w-full mx-auto relative flex items-center justify-between">
            <button
              className="absolute left-0 bg-white text-red-500 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors duration-300 z-10"
              onClick={prevSlide}
            >
              Anterior
            </button>
            <div className="relative w-[300px] h-[300px]">
              <AnimatePresence>
                {INTERNATIONALS.map((item, index) =>
                  index === currentIndex ? (
                    <motion.div
                      key={index}
                      className="absolute inset-0 flex items-center justify-center"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.5 }}
                    >
                      <img
                        src={isMobile ? item.image : item.image}
                        alt=""
                        className="rounded-xl h-full w-full "
                      />
                    </motion.div>
                  ) : null
                )}
              </AnimatePresence>
            </div>
            <button
              className="absolute right-0 bg-white text-red-500 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors duration-300 z-10"
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
