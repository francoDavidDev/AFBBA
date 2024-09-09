import React, { useRef, useState } from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { TOURNAMENTS_DATA } from "../../data/tournaments";

const Internationals = () => {
  const [searchTerm, setSearchTerm] = useState(""); // Estado para el filtro
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

  // Filtra los torneos para obtener solo aquellos con tag nacional
  // También aplica el filtro por título
  const filteredTournaments = TOURNAMENTS_DATA.filter(
    (tournament) =>
      tournament.tag === "nacional" &&
      tournament.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section className="w-full h-auto">
      <div className="w-full h-auto">
        {/* Botones de navegación arriba */}
        <div className="w-full mb-5 flex justify-center items-center gap-8">
          <button
            className="btn-lg bg-primary-200 text-primary-300 hover:text-primary-200 hover:bg-primary-300 transition-all duration-150"
            onClick={previous}
          >
            Previous
          </button>
          <button
            className="btn-lg bg-primary-200 text-primary-300 hover:text-primary-200 hover:bg-primary-300 transition-all duration-150"
            onClick={next}
          >
            Next
          </button>
        </div>

        {/* Slider */}
        <Slider ref={sliderRef} {...settings} className="slick-slide_themes">
          {filteredTournaments.map((item, i) => (
            <div
              key={i}
              className="w-full flex items-center justify-center h-auto"
            >
              <Link to={`/tournament/${item.title}`} className="flex justify-center items-center w-full">
                <img
                  src={item.banner || item.flyer} // Si no hay banner, se muestra el flyer
                  alt={`Torneo ${item.title}`}
                  className={`${
                    item.banner ? "w-full h-auto object-cover" : "w-2/3 h-auto object-contain mx-auto"
                  } cursor-pointer`} // Diferentes estilos según sea banner o flyer
                />
              </Link>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Internationals;
