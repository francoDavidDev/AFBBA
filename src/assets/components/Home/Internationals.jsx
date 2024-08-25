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
    cssEase: "linear"
  };

  // Filtra los torneos para obtener solo aquellos con banners y tag nacional
  // También aplica el filtro por título
  const filteredTournaments = TOURNAMENTS_DATA.filter(tournament =>
    tournament.banner &&
    tournament.tag === "nacional" &&
    tournament.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section className="w-full h-auto">
     
      <div className="w-full h-full">
        <Slider
          ref={sliderRef}
          {...settings}
          className="slick-slide_themes"
        >
          {filteredTournaments.map((item, i) => (
            <div
              key={i}
              className="w-full h-full bg-blue-400 flex items-center justify-center"
            >
              <Link to={`/tournament/${item.title}`}>
                <img
                  src={item.banner}
                  alt={`Banner ${i}`}
                  className="w-full h-full object-cover cursor-pointer"
                />
              </Link>
            </div>
          ))}
        </Slider>
        <div className="w-full mt-5 flex justify-center items-center gap-8">
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
      </div>
    </section>
  );
};

export default Internationals;
