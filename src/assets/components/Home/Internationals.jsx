import React, { useRef, useState, useEffect } from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { TOURNAMENTS_NATIONALS } from "../../data/tournaments";

const Internationals = () => {
  const [searchTerm, setSearchTerm] = useState(""); // Estado para el filtro
  const [isMobile, setIsMobile] = useState(false); // Estado para el tamaño de la ventana
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

  // Obtener el torneo con id '6'
  const tournamentWithId6 = TOURNAMENTS_NATIONALS.find(
    (tournament) => tournament.id === 6
  );

  // Filtrar los torneos, excluyendo el torneo con id '6'
  const filteredTournaments = TOURNAMENTS_NATIONALS.filter(
    (tournament) =>
      tournament.tag === "internacional" &&
      tournament.id !== 6 && // Excluir el torneo con id '6'
      tournament.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Efecto para ajustar el estado 'isMobile' según el tamaño de la ventana
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Consideramos móvil si la pantalla es menor a 768px
    };

    // Escuchar cambios en el tamaño de la ventana
    window.addEventListener("resize", handleResize);

    // Ajustar al montar el componente
    handleResize();

    // Limpiar el listener al desmontar
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section className="w-full h-auto">
      <div className="w-full h-auto">
        {/* Título y descripción */}
        <h1 className="text-center text-3xl text-primary-400 font-bold mt-5">
          TORNEOS INTERNACIONALES 2025
        </h1>
        <p className=" text-center text-lg text-primary-200/40 italic mb-8">
          Haz click en las imágenes para ver más información
        </p>

        {/* Contenedor de Slider con las flechas de navegación */}
        <div className="flex justify-center items-center gap-8">
          {/* Botón de navegación "Previous" */}
          {!isMobile && (
            <button
              className="text-3xl ml-5 text-primary-400 hover:text-primary-200 transition-all duration-150"
              onClick={previous}
            >
              <FaArrowLeft />
            </button>
          )}

          {/* Slider */}
          <div className={`${isMobile ? "w-full" : "w-[80%]"} m-auto`}>
            <Slider ref={sliderRef} {...settings} className="slick-slide_themes">
              {filteredTournaments.map((item, i) => (
                <div
                  key={i}
                  className="w-full flex items-center justify-center h-auto"
                >
                  <Link
                   to={`/#`}
                    //to={`/tournament/${item.title}`}
                    className="flex justify-center items-center w-full"
                  >
                    <img
                      src={item.banner || item.flyer} // Si no hay banner, se muestra el flyer
                      alt={`Torneo ${item.title}`}
                      className={`${
                        item.banner
                          ? "w-full h-auto object-cover"
                          : "w-2/3 h-auto object-contain mx-auto"
                      } cursor-pointer`}
                    />
                  </Link>
                </div>
              ))}
            </Slider>
          </div>

          {/* Botón de navegación "Next" */}
          {!isMobile && (
            <button
              className="text-3xl  mr-5 text-primary-400 hover:text-primary-200 transition-all duration-150"
              onClick={next}
            >
              <FaArrowRight />
            </button>
          )}
        </div>

        {/* Renderizar el torneo con id '6' abajo del slider */}
        {tournamentWithId6 && (
          <div className="w-full h-auto mt-10">
            <h2 className="text-center  h2 text-primary-400 mb-5">
              {tournamentWithId6.title}
            </h2>
            <div className="w-full flex justify-center items-center">
                 <Link to={`/#`}>
         {/*    </Link> <Link to={`/tournament/${tournamentWithId6.title}`}>*/}
                <img
                  src={tournamentWithId6.banner || tournamentWithId6.flyer}
                  alt={`Torneo ${tournamentWithId6.title}`}
                  className="w-1/2 h-auto object-contain mx-auto" // Cambié el tamaño a w-1/2
                />
              </Link>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Internationals;
