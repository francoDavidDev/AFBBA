import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
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

import MUSUMECI_2025 from "../imgs/tournaments/nationals/flyers/2025/MUSUMECI_2025.jpg";

const Home = () => {
  // Estado para manejar la visibilidad del modal
  const [showModal, setShowModal] = useState(true);

  // Efecto para ocultar el modal después de un tiempo o al hacer clic en el modal
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowModal(false); // Cerrar modal después de 5 segundos
    }, 5000); // 5000 ms = 5 segundos

    return () => clearTimeout(timer); // Limpiar el temporizador si el componente se desmonta
  }, []);

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div>
      {/* Modal */}
      {showModal && (
        <motion.div 
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
          initial={{ opacity: 0, y: -100 }} // Inicia fuera de la vista
          animate={{ opacity: 1, y: 0 }} // Entra desde arriba
          exit={{ opacity: 0, y: 100 }} // Sale hacia abajo
          transition={{ duration: 0.5 }}
        >
          <motion.div
            className="w-3/4 max-w-lg relative"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <img 
              src={MUSUMECI_2025} 
              alt="MUSUMECI 2025" 
              className="w-full h-auto object-cover rounded-lg" 
            />
            <div className="absolute inset-0 flex justify-center items-center ">
              <motion.h2 
                className="text-white text-xl font-bold"
                initial={{ opacity: 0, scale: 0.8 }} // Empieza pequeño
                animate={{ opacity: 1, scale: 1 }} // Escala a tamaño normal
                exit={{ opacity: 0, scale: 0.8 }} // Desaparece
                transition={{ duration: 0.5 }}
              >
                ¡PRÓXIMAMENTE INFORMACIÓN!
              </motion.h2>
            </div>
            <button 
              onClick={closeModal} 
              className="absolute top-2 right-2 text-white bg-red-500 py-2 px-4 rounded-full hover:bg-red-600"
            >
              X
            </button>
          </motion.div>
        </motion.div>
      )}

      {/* Resto del contenido de la página */}
      <motion.div 
        whileInView={{ opacity: 1, y: 0 }} 
        initial={{ opacity: 0, y: 50 }} 
        transition={{ duration: 0.5 }}
      >
        <Hero />
      </motion.div>

      <motion.div 
        whileInView={{ opacity: 1, y: 0 }} 
        initial={{ opacity: 0, y: 50 }} 
        transition={{ duration: 0.5 }}
      >
        <Info />
      </motion.div>

      <motion.div 
        whileInView={{ opacity: 1, y: 0 }} 
        initial={{ opacity: 0, y: 50 }} 
        transition={{ duration: 0.5 }}
      >
        <Internationals />
      </motion.div>

      <motion.div 
        whileInView={{ opacity: 1, y: 0 }} 
        initial={{ opacity: 0, y: 50 }} 
        transition={{ duration: 0.5 }}
      >
        <NationalTournaments />
      </motion.div>
       
      <motion.div 
        whileInView={{ opacity: 1, y: 0 }} 
        initial={{ opacity: 0, y: 50 }} 
        transition={{ duration: 0.5 }}
      >
        <Calendar />
      </motion.div>

      <motion.div 
        whileInView={{ opacity: 1, y: 0 }} 
        initial={{ opacity: 0, y: 50 }} 
        transition={{ duration: 0.5 }}
      >
        <Associations />
      </motion.div>

      <motion.div 
        whileInView={{ opacity: 1, y: 0 }} 
        initial={{ opacity: 0, y: 50 }} 
        transition={{ duration: 0.5 }}
      >
        <Sponsors />
      </motion.div>

      <motion.div 
        whileInView={{ opacity: 1, y: 0 }} 
        initial={{ opacity: 0, y: 50 }} 
        transition={{ duration: 0.5 }}
      >
        <Banner />
      </motion.div>
    </div>
  );
};

export default Home;
