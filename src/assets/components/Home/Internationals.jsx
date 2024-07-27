import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

import flyer_1 from "../../imgs/internationals/flyers/image5.jpg";
import bannerVideo from "../../videos/internationals/bannerroro2.mp4";
import flyer_2 from "../../imgs/internationals/flyers/image2.jpg";
import banner from "../../imgs/internationals/banners/large/image3.jpg";

import { IoIosArrowDroprightCircle, IoIosArrowDropleftCircle } from "react-icons/io";
import { FaVolumeMute, FaVolumeUp } from "react-icons/fa";

const Internationals = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 742);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const INTERNATIONALS = [
    {
      titulo: "TITULO 3",
      description: "asdsadsadadsadjsakdjlsakjklsajldjskadjlkadjslakdjs",
      image: flyer_1,
      video: bannerVideo,
      banner: null,
      backgroundColor: "bg-green-500",
    },
    {
      titulo: "TITULO 3",
      description: "asdsadsadadsadjsakdjlsakjklsajldjskadjlkadjslakdjs",
      image: flyer_2,
      video: null,
      banner: banner,
      backgroundColor: "bg-green-500",
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === INTERNATIONALS.length - 1 ? 0 : prevIndex + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? INTERNATIONALS.length - 1 : prevIndex - 1));
  };

  const toggleMute = () => {
    setIsMuted((prevMuted) => !prevMuted);
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
    }
  };

  return (
    <section className="w-full h-[80vh] relative overflow-hidden">
      {INTERNATIONALS[currentIndex].video ? (
        <video
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
          src={INTERNATIONALS[currentIndex].video}
          autoPlay
          loop
          muted={isMuted}
          ref={videoRef}
        />
      ) : (
        <img
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
          src={INTERNATIONALS[currentIndex].banner}
          alt="Banner"
        />
      )}
      <div
        className={`relative w-full h-full flex flex-col sm:flex-row items-center justify-center ${INTERNATIONALS[currentIndex].backgroundColor} ${isMobile ? "mt-[-50px]" : ""}`}
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.3)",
          backgroundBlendMode: "darken",
        }}
      >
        <div className="absolute top-4 right-4 z-10">
          <button
            onClick={toggleMute}
            className="text-3xl text-white px-4 py-2 rounded-lg transition-colors duration-300"
          >
            {isMuted ? <FaVolumeMute /> : <FaVolumeUp />}
          </button>
        </div>
        <div className="w-full sm:w-1/2 h-[80%] flex items-center justify-center"></div>
        <div className={`backdrop-blur-md w-[400px] border-[1px] border-white/10 shadow-2xl rounded-lg sm:w-1/2 ml-56 mr-10 m-56 flex items-center justify-center ${isMobile ? "mt-8" : ""}`}>
          <div className="max-w-sm w-[70%] mx-auto flex items-center justify-center">
            <button
              className="left-0 text-4xl text-white px-4 py-2 rounded-lg transition-colors duration-300 z-10"
              onClick={prevSlide}
            >
              <IoIosArrowDropleftCircle />
            </button>
            <div className="w-[300px] h-[350px] flex justify-center items-center">
              <AnimatePresence initial={false} custom={currentIndex}>
                {INTERNATIONALS.map((item, index) =>
                  index === currentIndex ? (
                    <motion.div
                      key={index}
                      className="flex items-center justify-center"
                      initial={{ x: 100, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      exit={{ x: -100, opacity: 0 }}
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    >
                      <img src={item.image} alt="" className="rounded-xl h-full w-full" />
                    </motion.div>
                  ) : null
                )}
              </AnimatePresence>
            </div>
            <button
              className="left-0 text-4xl text-white px-4 py-2 rounded-lg transition-colors duration-300 z-10"
              onClick={nextSlide}
            >
              <IoIosArrowDroprightCircle />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Internationals;
