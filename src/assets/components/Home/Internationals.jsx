import React, { useRef, useState, useEffect } from "react";
import Slider from "react-slick";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { TOURNAMENTS_NATIONALS } from "../../data/tournaments";
import { motion } from "framer-motion";

import informacion_musumecci from "../../pdf/informacion_musumecci.pdf";

const Internationals = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isMobile, setIsMobile] = useState(false);
  const sliderRef = useRef(null);

  const next = () => {
    sliderRef.current.slickNext();
  };

  const previous = () => {
    sliderRef.current.slickPrev();
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 5000,
    cssEase: "linear",
  };

  const tournamentWithId6 = TOURNAMENTS_NATIONALS.find(
    (tournament) => tournament.id === 6
  );

  const filteredTournaments = TOURNAMENTS_NATIONALS.filter(
    (tournament) =>
      tournament.tag === "internacional" &&
      tournament.id !== 6 &&
      tournament.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section className="w-full h-auto">
      <div className="w-full h-auto">
        {/* Título */}
        <h1 className="text-center text-3xl text-primary-400 font-bold mt-5">
          TORNEOS INTERNACIONALES 2025
        </h1>

        {/* Botón de descarga animado */}
        <div className="text-center mt-3">
          <motion.a
            href={informacion_musumecci}
            download="informacion_evento_musumecci.pdf"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-block px-4 py-2 bg-primary-400 text-white font-semibold rounded-lg shadow-md hover:bg-primary-300 transition-colors duration-200"
          >
            Información del evento
          </motion.a>
        </div>

        {/* Descripción */}
        <p className="text-center text-lg text-primary-200/40 italic mb-8">
          o puedes hacer click en el Flyer para descargar la información
        </p>

        {/* Slider */}
        <div className="flex justify-center items-center gap-8">
          {!isMobile && (
            <button
              className="text-3xl ml-5 text-primary-400 hover:text-primary-200 transition-all duration-150"
              onClick={previous}
            >
              <FaArrowLeft />
            </button>
          )}

          <div className={`${isMobile ? "w-full" : "w-[80%]"} m-auto`}>
            <Slider ref={sliderRef} {...settings} className="slick-slide_themes">
              {filteredTournaments.map((item, i) => (
                <div key={i} className="w-full flex items-center justify-center h-auto relative">
                  {/* Imagen que descarga el PDF */}
                  <a
                    href={informacion_musumecci}
                    download="informacion_evento_musumecci.pdf"
                    className="flex justify-center items-center w-full"
                  >
                    <img
                      src={item.banner || item.flyer}
                      alt={`Torneo ${item.title}`}
                      className={`${
                        item.banner
                          ? "w-full h-auto object-cover"
                          : "w-2/3 h-auto object-contain mx-auto"
                      } cursor-pointer`}
                    />
                  </a>
                </div>
              ))}
            </Slider>
          </div>

          {!isMobile && (
            <button
              className="text-3xl mr-5 text-primary-400 hover:text-primary-200 transition-all duration-150"
              onClick={next}
            >
              <FaArrowRight />
            </button>
          )}
        </div>

        {/* Torneo con ID 6 */}
        {tournamentWithId6 && (
          <div className="w-full h-auto mt-10">
            <h2 className="text-center h2 text-primary-400 mb-5">
              {tournamentWithId6.title}
            </h2>
            <div className="w-full flex justify-center items-center">
              <a
                href={informacion_musumecci}
                download="informacion_evento_musumecci.pdf"
              >
                <img
                  src={tournamentWithId6.banner || tournamentWithId6.flyer}
                  alt={`Torneo ${tournamentWithId6.title}`}
                  className="w-1/2 h-auto object-contain mx-auto cursor-pointer"
                />
              </a>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Internationals;
