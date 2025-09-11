import React from "react";
import { motion } from "framer-motion";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-router-dom";
import FlyerCopaProvincias from "../imgs/tournaments/nationals/flyers/2025/COPA_PROVINCIAS_UNIDAS.jpg";

// NUEVOS FLYERS
import FlyerNocheDeCampeones from "../imgs/tournaments/nationals/flyers/2025/NOCHE_CAMPEONES.jpg";
import FlyerCampeonatoNacional from "../imgs/tournaments/nationals/flyers/2025/CAMPEONATO_NACIONAL.jpg";
import FlyerSuperPatagonico from "../imgs/tournaments/nationals/flyers/2025/SUPER_PATAGONICO.jpg";

// Agregar startDate (YYYY-MM-DD) para ordenar por fecha
const events = [
  {
    title: "Copa Provincias Unidas",
    flyer: FlyerCopaProvincias,
    link: "/inscripcion/copa-provincias-unidas-2025",
    description:
      "Competencia nacional por provincias. ¡Representá a tu región y viví la experiencia!",
    closed: false,
    startDate: null, // ⚠️ fecha no confirmada: se mostrará al final
  },
  {
    title: "Súper Patagónico",
    flyer: FlyerSuperPatagonico,
    link: "/inscripcion/super-patagonico-2025",
    description:
      "Sábado 25 de octubre – Gimnasio Municipal N°1, Puerto Madryn (Chubut). Inscripción 9–12 hs; competencia 15 hs.",
    closed: false,
    startDate: "2025-10-25",
  },
  {
    title: "IFBB Noche de Campeones",
    flyer: FlyerNocheDeCampeones,
    link: "/inscripcion/noche-de-campeones-2025",
    description:
      "Rosario – Hotel Ariston. Inscripción: sáb 8/11 15 hs. Competencia: dom 9/11 10 hs.",
    closed: false,
    startDate: "2025-11-08",
  },
  {
    title: "Campeonato Nacional FAMF",
    flyer: FlyerCampeonatoNacional,
    link: "/inscripcion/campeonato-nacional-2025",
    description:
      "6 y 7 de diciembre – Domo del Centenario (Resistencia, Chaco). Copa Natural Shop.",
    closed: false,
    startDate: "2025-12-06",
  },
];

const EventosInscripcion = () => {
  // Ordena por fecha ascendente; los que no tienen fecha van al final
  const sortedEvents = [...events].sort((a, b) => {
    const aTime = a.startDate ? new Date(a.startDate).getTime() : Infinity;
    const bTime = b.startDate ? new Date(b.startDate).getTime() : Infinity;
    return aTime - bTime;
  });

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
          {sortedEvents.map((event, index) => (
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
              {event.closed ? (
                <span className="px-4 py-2 rounded-full bg-neutral-500 text-white/80 text-lg font-semibold cursor-not-allowed opacity-60">
                  Inscripción cerrada
                </span>
              ) : (
                <Link
                  to={event.link}
                  className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-primary-400 text-[#091225] text-lg font-semibold hover:shadow-[0_0_20px_#6ee7b7] transition-all duration-300"
                >
                  Inscribirme
                  <HiArrowNarrowRight className="text-2xl" />
                </Link>
              )}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default EventosInscripcion;
