import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import { REGLAMETS } from '../../data/reglaments'; // Asegúrate de que la ruta sea correcta

const Reglaments = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleSetIndex = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className='w-full h-full'>
      <div className='w-full h-[100vh] text-center flex justify-start pt-36 items-center flex-col'>
        <h2 className='xl:text-[140px] lg:text-[100px] md:text-[80px] text-[50px] w-full h-auto'>
          AFBBA REGLAMENTOS
        </h2>
        <p className='xl:text-[50px] lg:text-[40px] md:text-[30px] text-[20px] text-primary-400'>
          AQUI PODRAS VER TODOS LOS REGLAMENTOS
        </p>
      </div>
      <div className='w-full lg:w-3/4 xl:w-2/3 mx-auto mt-12 px-4'>
        {Object.entries(REGLAMETS).map(([key, modality]) => (
          <div key={key} className="border-b border-gray-200">
            <button
              onClick={() => handleSetIndex(activeIndex === key ? null : key)}
              className="w-full text-left py-4 px-6 focus:outline-none flex justify-between items-center"
            >
              <span className="text-lg font-medium text-primary-400">
                {modality.title}
              </span>
              <span>
                {activeIndex === key ? <FaChevronUp /> : <FaChevronDown />}
              </span>
            </button>
            <AnimatePresence>
              {activeIndex === key && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  {modality.sections.map((item, index) => (
                    <div key={index} className="py-4 px-6 text-gray-500">
                      <h3 className="font-semibold text-lg">{item.title}</h3>
                      <p>{item.content}</p>
                    </div>
                  ))}
                  {modality.pdf && (
                    <div className="py-4 px-6">
                      <a 
                        href={modality.pdf} 
                        className="text-blue-500 underline mt-2 inline-block"
                        download
                      >
                        Descargar Reglamento Completo
                      </a>
                    </div>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Reglaments;
