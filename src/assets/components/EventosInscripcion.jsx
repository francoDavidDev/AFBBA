import React from "react";
import { motion } from "framer-motion";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-router-dom";

import FlyerMusumeci from "../imgs/tournaments/nationals/flyers/2025/MUSUMECI_2025.jpg";
import FlyerCampeonato from "../imgs/tournaments/nationals/flyers/2025/MUSUMECI_2025.jpg";
import FlyerCopaArgentina from "../imgs/tournaments/nationals/flyers/2025/MUSUMECI_2025.jpg";

const events = [
  {
    title: "Musumeci Classic International",
    flyer: FlyerMusumeci,
    link: "/inscripcion/musumeci",
    description: "Uno de los eventos más grandes del fisicoculturismo argentino. ¡Sumate a la experiencia que define una carrera!",
  },
  {
    title: "Campeonato Nacional",
    flyer: FlyerCampeonato,
    link: "/inscripcion/campeonato-nacional",
    description: "El evento oficial a nivel nacional. ¡Mostrá tu mejor versión frente a los mejores del país!",
  },
  {
    title: "Copa Argentina",
    flyer: FlyerCopaArgentina,
    link: "/inscripcion/copa-argentina",
    description: "Competencia abierta para todos los niveles. ¡Viví la emoción de la Copa Argentina!",
  },
];

const EventosInscripcion = () => {
  return (
    <section className="w-full min-h-screen bg-[#060b16] py-20 px-6 flex flex-col items-center justify-center gap-12">
      <motion.div
        className="max-w-5xl w-full flex flex-col items-center text-center gap-6"
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <h2 className="text-primary-300 text-4xl sm:text-5xl font-bold mb-8">
          ¡Inscripciones Abiertas!
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <motion.div
              key={index}
              className="bg-[#0f172a] p-4 rounded-2xl shadow-2xl flex flex-col items-center text-center gap-4"
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.3 * index, duration: 0.8 }}
            >
              <div className="relative w-64 h-96 rounded-2xl overflow-hidden shadow-xl">
                <img
                  src={event.flyer}
                  alt={`Flyer ${event.title}`}
                  className="w-full h-full object-cover rounded-2xl"
                />
                <div className="absolute inset-0 rounded-2xl border border-primary-400/40 shadow-[0_0_30px_#6ee7b7] pointer-events-none" />
              </div>
              <h3 className="text-primary-300 text-2xl font-bold">{event.title}</h3>
              <p className="text-white/90 text-base">{event.description}</p>
              <Link
                to={event.link}
                className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-primary-400 text-[#091225] text-lg font-semibold hover:shadow-[0_0_20px_#6ee7b7] transition-all duration-300"
              >
                Inscribirme
                <HiArrowNarrowRight className="text-2xl" />
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default EventosInscripcion;
