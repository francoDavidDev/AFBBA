import React, { useEffect, useState, useRef } from "react";
import CardLarge from "../components/Calendar/CardLarge";
import CardSmall from "../components/Calendar/CardSmall";
import file from "../../files/rules.pdf";
import { TOURNAMENTS_DATA } from "../data/tournaments";
import CarrouselSponsors from "../components/CarrouselSponsors";
import { motion } from "framer-motion";

const ElitePro = () => {
  const [w, setW] = useState(window.innerWidth);
  const [filteredTournaments, setFilteredTournaments] = useState(TOURNAMENTS_DATA);
  const [pastTournaments, setPastTournaments] = useState([]);
  const [sortOrder, setSortOrder] = useState("newest"); // "newest" or "oldest"
  const [filterType, setFilterType] = useState("all"); // "all", "nacional", or "internacional"
  const videoRef = useRef();

  useEffect(() => {
    const handleResize = () => {
      setW(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    // Obtener la fecha actual
    const today = new Date().toISOString().split('T')[0]; // Formato YYYY-MM-DD

    // Filtrar eventos pasados
    const pastEvents = TOURNAMENTS_DATA.filter(tournament => tournament.date < today);
    setPastTournaments(pastEvents);

    // Aplicar filtro y orden a los eventos futuros
    let tournaments = TOURNAMENTS_DATA.filter(tournament => tournament.date >= today);

    // Aplicar filtro por tipo
    if (filterType !== "all") {
      tournaments = tournaments.filter(tournament => tournament.tag === filterType);
    }

    // Ordenar los torneos
    const sorted = tournaments.sort((a, b) => {
      const dateA = new Date(a.formattedDate);
      const dateB = new Date(b.formattedDate);
      return sortOrder === "newest" ? dateB - dateA : dateA - dateB;
    });

    setFilteredTournaments(sorted);
  }, [sortOrder, filterType]);

  // Cambiar el orden de los eventos entre "Más Nuevo" y "Más Viejo"
  const toggleSortOrder = () => {
    setSortOrder((prevOrder) => (prevOrder === "newest" ? "oldest" : "newest"));
  };

  // Filtrar eventos por tipo
  const filterTournaments = (type) => {
    setFilterType(type);
  };

  return (
    <section className="w-full h-auto flex flex-col justify-center gap-y-10">
      <motion.div
        className="w-[90%] h-auto m-auto mt-[100px]"
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 50 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          className="h-[1px] bg-white flex justify-center"
          initial={{ width: 0, transformOrigin: "center" }}
          animate={{ width: "100%" }}
          transition={{ duration: 1 }}
        />

        <motion.div
          className="flex justify-center flex-col text-center mt-10"
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.5 }}
        >
          <motion.h2
            className="text-[32px] sm:text-[40px] md:text-[50px] lg:text-[60px] font-bold tracking-widest"
            whileInView={{ opacity: 1, scale: 1 }}
            initial={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.5 }}
          >
            ENTERATE DE LOS ULTIMOS EVENTOS
          </motion.h2>

          <motion.p
            className="text-[30px] text-primary-400/80 mb-4"
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
          >
            TODOS LOS EVENTOS DISPONIBLES
          </motion.p>
        </motion.div>
      </motion.div>

      <div className="flex flex-col items-center gap-y-4">
        <button
          onClick={toggleSortOrder}
          className="mt-4 p-2 bg-primary-400 text-white rounded"
        >
          Ordenar por {sortOrder === "newest" ? "Más Viejo" : "Más Nuevo"}
        </button>

        <div className="flex gap-4">
          <button
            onClick={() => filterTournaments("all")}
            className={`p-2 rounded ${filterType === "all" ? "bg-primary-400 text-white" : "bg-gray-200 text-black"}`}
          >
            Todos
          </button>
          <button
            onClick={() => filterTournaments("nacional")}
            className={`p-2 rounded ${filterType === "nacional" ? "bg-primary-400 text-white" : "bg-gray-200 text-black"}`}
          >
            Nacionales
          </button>
          <button
            onClick={() => filterTournaments("internacional")}
            className={`p-2 rounded ${filterType === "internacional" ? "bg-primary-400 text-white" : "bg-gray-200 text-black"}`}
          >
            Internacionales
          </button>
        </div>
      </div>

      {/* Eventos futuros */}
      <div className="h-[auto] w-[98%] m-auto flex lg:flex-row flex-col justify-center gap-y-5 items-start">
        <div className="md:w-[100%] w-[100%] h-[auto] gap-y-5 flex flex-col justify-center items-center">
          {filteredTournaments.map((item, index) =>
            w <= 640 ? (
              <CardSmall
                key={index}
                date={item.date}
                title={item.title}
                subtitle={item.locality}
                hour={item.hour_inscription}
                hours={item.start_competition}
                zone={item.address}
                formattedDate={item.formattedDate}
                file={file}
                flyer={item.flyer}
              />
            ) : (
              <CardLarge
                key={index}
                date={item.date}
                title={item.title}
                subtitle={item.locality}
                hour={item.hour_inscription}
                hours={item.start_competition}
                zone={item.address}
                formattedDate={item.formattedDate}
                file={file}
                flyer={item.flyer}
              />
            )
          )}
        </div>
      </div>

      {/* Eventos pasados */}
      <div className="h-[auto] w-[98%] m-auto flex lg:flex-row flex-col justify-center gap-y-5 items-start mt-10">
        <h3 className="text-[24px] font-bold m-auto h3 text-primary-400">EVENTOS TERMINADOS</h3>
        <div className="md:w-[100%] w-[100%] h-[auto] gap-y-5 flex flex-col justify-center items-center">
          {pastTournaments.map((item, index) =>
            w <= 640 ? (
              <CardSmall
                key={index}
                date={item.date}
                title={item.title}
                subtitle={item.locality}
                hour={item.hour_inscription}
                hours={item.start_competition}
                zone={item.address}
                formattedDate={item.formattedDate}
                file={file}
                flyer={item.flyer}
              />
            ) : (
              <CardLarge
                key={index}
                date={item.date}
                title={item.title}
                subtitle={item.locality}
                hour={item.hour_inscription}
                hours={item.start_competition}
                zone={item.address}
                formattedDate={item.formattedDate}
                file={file}
                flyer={item.flyer}
              />
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default ElitePro;
