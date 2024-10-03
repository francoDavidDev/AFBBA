import React, { useEffect, useState } from "react";
import CardLarge from "../components/Calendar/CardLarge";
import CardSmall from "../components/Calendar/CardSmall";
import file from "../../files/rules.pdf";
import { TOURNAMENTS_DATA } from "../data/tournaments";

import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom"; // 1. Importa useNavigate

const ElitePro = () => {
  const [w, setW] = useState(window.innerWidth);
  const [filteredTournaments, setFilteredTournaments] = useState(TOURNAMENTS_DATA);
  const [filteredPastTournaments, setFilteredPastTournaments] = useState([]); // Para eventos pasados
  const [sortOrder, setSortOrder] = useState("newest"); // "newest" or "oldest"
  const [filterType, setFilterType] = useState("all"); // "all", "nacional", or "internacional"
  const [showPreinscriptionOnly, setShowPreinscriptionOnly] = useState(false); // Estado para mostrar solo los torneos con preinscripción

  const navigate = useNavigate(); // 2. Inicializa el hook useNavigate

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
    const today = new Date();

    // Filtrar eventos futuros
    let futureTournaments = TOURNAMENTS_DATA.filter(tournament => {
      const tournamentDate = new Date(tournament.date.split('/').reverse().join('-')); // Convertir a formato "YYYY-MM-DD"
      return tournamentDate >= today;
    });

    // Aplicar filtro por tipo para eventos futuros
    if (filterType !== "all") {
      futureTournaments = futureTournaments.filter(tournament => tournament.tag === filterType);
    }

    // Filtrar por preinscripción para eventos futuros
    if (showPreinscriptionOnly) {
      futureTournaments = futureTournaments.filter(tournament => tournament.preinscription === true);
    }

    // Ordenar los eventos futuros
    const sortedFuture = futureTournaments.sort((a, b) => {
      const dateA = new Date(a.date.split('/').reverse().join('-'));
      const dateB = new Date(b.date.split('/').reverse().join('-'));
      return sortOrder === "newest" ? dateB - dateA : dateA - dateB;
    });

    setFilteredTournaments(sortedFuture);

    // Filtrar eventos pasados
    let pastTournaments = TOURNAMENTS_DATA.filter(tournament => {
      const tournamentDate = new Date(tournament.date.split('/').reverse().join('-')); // Convertir a formato "YYYY-MM-DD"
      return tournamentDate < today;
    });

    // Aplicar filtro por tipo para eventos pasados
    if (filterType !== "all") {
      pastTournaments = pastTournaments.filter(tournament => tournament.tag === filterType);
    }

    // Filtrar por preinscripción para eventos pasados
    if (showPreinscriptionOnly) {
      pastTournaments = pastTournaments.filter(tournament => tournament.preinscription === true);
    }

    // Ordenar los eventos pasados
    const sortedPast = pastTournaments.sort((a, b) => {
      const dateA = new Date(a.date.split('/').reverse().join('-'));
      const dateB = new Date(b.date.split('/').reverse().join('-'));
      return sortOrder === "newest" ? dateB - dateA : dateA - dateB;
    });

    setFilteredPastTournaments(sortedPast);

  }, [sortOrder, filterType, showPreinscriptionOnly]);

  const toggleSortOrder = () => {
    setSortOrder(prevOrder => (prevOrder === "newest" ? "oldest" : "newest"));
  };

  const filterTournaments = (type) => {
    setFilterType(type);
  };

  const togglePreinscriptionFilter = () => {
    setShowPreinscriptionOnly(prev => !prev);
  };

  // 3. Función para redirigir si es el torneo "NOCHE DE CAMPEONES"
  const handleImageClick = (tournament) => {
    if (tournament.title === "NOCHE DE CAMPEONES") {
      navigate("/nocheDeCampeonesInfo");
    }
  };

  return (
    <section className="w-full h-auto flex flex-col mb-20 justify-center gap-y-10">
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

        {/* Botón para filtrar por preinscripción */}
        <button
          onClick={togglePreinscriptionFilter}
          className={`mt-4 p-2 ${showPreinscriptionOnly ? "bg-primary-400 text-white" : "bg-gray-200 text-black"} rounded`}
        >
          {showPreinscriptionOnly ? "Mostrar Todos los Torneos" : "Mostrar Solo Torneos con Preinscripción"}
        </button>
      </div>

      {/* Info sobre las imágenes */}
      <p className="text-center text-lg text-primary-400 font-semibold my-6">
        Haz click en la imagen para poder ver más información sobre el torneo
      </p>

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
                onClick={() => handleImageClick(item)} // 4. Agrega el evento onClick
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
                onClick={() => handleImageClick(item)} // 4. Agrega el evento onClick
              />
            )
          )}
        </div>
      </div>

      {/* Eventos pasados */}
      <div className="h-[auto] w-[98%] m-auto flex lg:flex-row flex-col justify-center gap-y-5 items-start">
        <div className="md:w-[100%] w-[100%] h-[auto] gap-y-5 flex flex-col justify-center items-center">
          <h3 className="text-[30px] text-primary-400 mb-4">Eventos Pasados</h3>
          {filteredPastTournaments.map((item, index) =>
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
                onClick={() => handleImageClick(item)} // 4. Agrega el evento onClick para eventos pasados
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
                onClick={() => handleImageClick(item)} // 4. Agrega el evento onClick para eventos pasados
              />
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default ElitePro;
