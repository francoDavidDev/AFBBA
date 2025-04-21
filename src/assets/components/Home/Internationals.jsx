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

  const next = () => sliderRef.current.slickNext();
  const previous = () => sliderRef.current.slickPrev();

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 5000,
    cssEase: "ease-in-out",
  };

  const tournamentWithId6 = TOURNAMENTS_NATIONALS.find(t => t.id === 6);

  const filteredTournaments = TOURNAMENTS_NATIONALS.filter(
    t =>
      t.tag === "internacional" &&
      t.id !== 6 &&
      t.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="w-full h-auto bg-[#0f172a] text-white py-10">
      {/* Título */}
      <motion.h1
        className="text-center text-4xl md:text-5xl font-bold text-primary-400 tracking-wide mb-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        🌍 Torneos Internacionales 2025 🌍
      </motion.h1>

      {/* Botón de descarga */}
      <div className="text-center mb-2">
        <motion.a
          href={informacion_musumecci}
          download="informacion_evento_musumecci.pdf"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="inline-block px-6 py-3 bg-primary-400 text-white font-semibold rounded-lg  hover:bg-primary-300 transition-colors duration-200"
        >
          📄 Descargar información del evento
        </motion.a>
      </div>

      {/* Subtítulo */}
      <p className="text-center text-sm italic text-primary-200/50 mb-8">
        o hacé click en los flyers para más info
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
              <div
                key={i}
                className="w-full flex items-center justify-center h-auto relative"
              >
                <motion.a
                  href={informacion_musumecci}
                  download="informacion_evento_musumecci.pdf"
                  className="flex justify-center items-center w-full"
                  whileHover={{ scale: 1.02 }}
                >
                  <img
                    src={item.banner || item.flyer}
                    alt={`Torneo ${item.title}`}
                    className={`${
                      item.banner
                        ? "w-full max-h-[700px] object-cover"
                        : "w-3/4 max-h-[650px] object-contain mx-auto"
                    } rounded-xl transition-all duration-500`}
                  />
                </motion.a>
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

      {/* Torneo destacado ID 6 */}
      {tournamentWithId6 && (
        <div className="w-full h-auto mt-14 px-4">
          <h2 className="text-center text-3xl font-bold text-primary-400 mb-5">
            {tournamentWithId6.title}
          </h2>
          <div className="w-full flex justify-center items-center">
            <a
              href={informacion_musumecci}
              download="informacion_evento_musumecci.pdf"
              className="w-full md:w-1/2"
            >
              <img
                src={tournamentWithId6.banner || tournamentWithId6.flyer}
                alt={`Torneo ${tournamentWithId6.title}`}
                className="w-full max-h-[650px] object-contain mx-auto rounded-lg s cursor-pointer"
              />
            </a>
          </div>
        </div>
      )}
    </section>
  );
};

export default Internationals;
