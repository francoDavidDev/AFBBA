import React from "react";
import { motion } from "framer-motion";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-router-dom";
import FlyerMusumeci from '../../../assets/imgs/tournaments/nationals/flyers/2025/MUSUMECI_2025.jpg';

const MusumeciInscripcion = () => {
  return (
    <section className="w-full min-h-screen bg-[#060b16] py-20 px-6 flex items-center justify-center">
      <motion.div
        className="max-w-5xl w-full flex flex-col items-center text-center gap-12"
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        {/* Flyer con animación glow */}
        <motion.div
          className="relative w-[320px] h-[450px] rounded-2xl overflow-hidden shadow-2xl"
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          <img
            src={FlyerMusumeci}
            alt="Flyer Musumeci"
            className="w-full h-full object-cover rounded-2xl"
          />
          <div className="absolute inset-0 rounded-2xl border border-primary-400/40 shadow-[0_0_30px_#6ee7b7] pointer-events-none" />
        </motion.div>

        {/* Título y descripción */}
        <motion.div
          className="max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <h2 className="text-primary-300 text-4xl sm:text-5xl font-bold mb-4">
            ¡Inscripciones Abiertas!
          </h2>
          <p className="text-white/90 text-lg sm:text-xl mb-6 leading-relaxed">
            Ya podés registrarte para el <strong>MUSUMECI CLASSIC INTERNATIONAL</strong>, 
            uno de los eventos más grandes del fisicoculturismo argentino. <br />
            ¡Sumate a la experiencia que define una carrera!
          </p>
        </motion.div>

        {/* Botón con nueva ruta */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          className="inline-flex"
        >
          <Link
            to="/opciones-musumeci"
            className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-primary-400 text-[#091225] text-lg font-semibold hover:shadow-[0_0_20px_#6ee7b7] transition-all duration-300"
          >
            Inscribirme ahora
            <motion.span
              className="text-2xl"
              initial={{ x: 0 }}
              whileHover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <HiArrowNarrowRight />
            </motion.span>
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default MusumeciInscripcion;
