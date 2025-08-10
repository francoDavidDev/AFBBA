import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Hero from '../components/Home/Hero';
import Info from '../components/Home/Info';
import Sponsors from '../components/Home/Sponsors';
import Banner from '../components/Home/Banner';
import Newsletter from '../components/Home/Newsletter';
import CarrouselEvents from '../components/Home/CarrouselEvents';
import Associations from '../components/Home/Associations';
import Internationals from '../components/Home/Internationals';
import NationalTournaments from '../components/Home/NationalTournaments';
import Calendar from '../pages/Calendar.jsx';

import MUSUMECI_2025 from "../imgs/tournaments/nationals/flyers/2025/ARGENTINO.jpg";

import OscarInformation from '../components/Home/OscarInformation.jsx';
import EventosInscripcion from '../components/EventosInscripcion.jsx';

const Home = () => {
  const [showModal, setShowModal] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowModal(false);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  const closeModal = () => {
    setShowModal(false);
  };

  const handlePreinscripcion = () => {
    setShowModal(false);
    navigate('/inscripcion/campeonato-argentino');
  };

  return (
    <div>
      {showModal && (
        <motion.div 
          className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50"
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 100 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            className="bg-white rounded-lg shadow-lg overflow-hidden w-[90%] max-w-md relative"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <img 
              src={MUSUMECI_2025} 
              alt="MUSUMECI 2025" 
              className="w-full h-48 object-cover"
            />
            <div className="p-6 text-center space-y-4">
              <motion.h2 
                className="text-xl font-bold text-gray-900"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5 }}
              >
                ¡YA ESTÁN ABIERTAS LAS PREINSCRIPCIONES!
              </motion.h2>
              <motion.button
                onClick={handlePreinscripcion}
                className="bg-black text-white font-semibold px-6 py-2 rounded-full hover:bg-gray-800 transition"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.4, delay: 0.2 }}
              >
                PREINSCRIBIRSE
              </motion.button>
            </div>
            <button 
              onClick={closeModal} 
              className="absolute top-2 right-2 text-white bg-red-500 w-8 h-8 flex items-center justify-center rounded-full hover:bg-red-600"
            >
              ×
            </button>
          </motion.div>
        </motion.div>
      )}

      <motion.div whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: 50 }} transition={{ duration: 0.5 }}>
        <Hero />
      </motion.div>

      <motion.div whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: 50 }} transition={{ duration: 0.5 }}>
        <OscarInformation />
      </motion.div>

      <motion.div whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: 50 }} transition={{ duration: 0.5 }}>
        <EventosInscripcion />
      </motion.div>

      <motion.div whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: 50 }} transition={{ duration: 0.5 }}>
        <Info />
      </motion.div>

      <motion.div whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: 50 }} transition={{ duration: 0.5 }}>
        <Internationals />
      </motion.div>

      <motion.div whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: 50 }} transition={{ duration: 0.5 }}>
        <NationalTournaments />
      </motion.div>

      <motion.div whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: 50 }} transition={{ duration: 0.5 }}>
        <Calendar />
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
