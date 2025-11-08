import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

import Hero from '../components/Home/Hero';
import Info from '../components/Home/Info';
import Sponsors from '../components/Home/Sponsors';
import Banner from '../components/Home/Banner';
import Associations from '../components/Home/Associations';

import OscarInformation from '../components/Home/OscarInformation.jsx';

/** Flyer único: Campeonato Nacional 2025 */
import CAMPEONATO_NACIONAL_2025 from '../imgs/tournaments/nationals/flyers/2025/CAMPEONATO_NACIONAL.jpg';

const Home = () => {
  // Único modal: Campeonato Nacional
  const MODALES = [
    {
      title: '¡Nacional 2025 – Acreditaciones abiertas!',
      slug: 'nacional-2025',
      img: CAMPEONATO_NACIONAL_2025,
      cta: 'Anotarme ya',
    },
  ];

  const [showModal, setShowModal] = useState(true);
  const [idx, setIdx] = useState(0);

  // Auto-cierre del modal a los 5s
  useEffect(() => {
    if (!showModal) return;
    const timer = setTimeout(() => avanzar(), 5000);
    return () => clearTimeout(timer);
  }, [showModal, idx]);

  const avanzar = () => {
    if (idx < MODALES.length - 1) {
      setIdx((i) => i + 1);
    } else {
      setShowModal(false);
    }
  };

  // Cerrar = siguiente (con uno solo, cierra)
  const closeModal = () => avanzar();

  const actual = MODALES[idx];

  return (
    <div>
      {showModal && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50"
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 100 }}
          transition={{ duration: 0.4 }}
        >
          <motion.div
            className="bg-white rounded-2xl shadow-2xl overflow-hidden w-[95%] max-w-xl relative"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.3 }}
          >
            <img
              src={actual.img}
              alt={actual.title}
              className="w-full h-80 sm:h-96 object-cover object-center"
            />

            <div className="p-6 sm:p-8 text-center space-y-5">
              <motion.h2
                className="text-xl sm:text-2xl font-bold text-gray-900"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
              >
                {actual.title}
              </motion.h2>

              {/* Indicador (1/1) */}
              <div className="flex items-center justify-center gap-2">
                {MODALES.map((_, i) => (
                  <span
                    key={i}
                    className={`h-2 rounded-full ${i === idx ? 'w-6 bg-primary-400' : 'w-2 bg-neutral-300'}`}
                  />
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.25, delay: 0.05 }}
                className="flex items-center justify-center"
              >
                <Link
                  to={`/inscripcion/${actual.slug}`}
                  className="px-8 sm:px-10 py-4 sm:py-5 rounded-full bg-primary-400 text-neutral-200 font-semibold text-lg sm:text-xl shadow hover:shadow-lg transition hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-primary-400 min-w-[220px]"
                >
                  {actual.cta}
                </Link>
              </motion.div>
            </div>

            {/* Botón cerrar */}
            <button
              onClick={closeModal}
              aria-label="Cerrar"
              className="absolute top-2 right-2 text-white bg-red-500 w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center rounded-full hover:bg-red-600"
              title="Cerrar"
            >
              ×
            </button>
          </motion.div>
        </motion.div>
      )}

      {/* CONTENIDO HOME (sin listados de otros eventos) */}
      <motion.div whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: 50 }} transition={{ duration: 0.5 }}>
        <Hero />
      </motion.div>

      <motion.div whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: 50 }} transition={{ duration: 0.5 }}>
        <OscarInformation />
      </motion.div>

      <motion.div whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: 50 }} transition={{ duration: 0.5 }}>
        <Info />
      </motion.div>

      <motion.div whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: 50 }} transition={{ duration: 0.5 }}>
        <Associations />
      </motion.div>

      <motion.div whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: 50 }} transition={{ duration: 0.5 }}>
        <Sponsors />
      </motion.div>

      <motion.div whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: 50 }} transition={{ duration: 0.5 }}>
        <Banner />
      </motion.div>
    </div>
  );
};

export default Home;
