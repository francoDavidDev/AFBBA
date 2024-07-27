import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ASSOCIATIONS } from '../../../constants';

const AssociationsAbout = () => {
    const [activeIndex, setActiveIndex] = useState(null);
    const [showAll, setShowAll] = useState(false);

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const handleShowAll = () => {
        setShowAll(true);
    };

    const handleHideAll = () => {
        setShowAll(false);
    };

    // Display only 5 associations if not showing all
    const displayedAssociations = showAll ? ASSOCIATIONS : ASSOCIATIONS.slice(0, 5);

    return (
        <div className="w-full h-auto my-10 py-10">
            <h2 className="text-3xl font-bold text-center mb-4">
                ASOCIACIONES QUE ORGANIZAMOS
            </h2>
            
            <AnimatePresence>
                {displayedAssociations.map((item, index) => (
                    <motion.div
                        key={index}
                        className="mb-4 py-1"
                        onClick={() => toggleAccordion(index)}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 20 }}
                        transition={{ duration: 0.3 }}
                        whileHover={{ y: -5 }} // Move up slightly on hover
                    >
                        <div className="cursor-pointer overflow-hidden rounded-2xl transition-transform duration-300 ease-in-out">
                            <div className="relative">
                                <img
                                    src={item.icon}
                                    alt={item.title}
                                    className="w-full h-20 object-cover rounded-t-2xl"
                                />
                                <div className="absolute inset-0 flex items-center justify-center text-white text-xl font-bold bg-black bg-opacity-50 rounded-t-2xl">
                                    {item.title}
                                </div>
                            </div>
                        </div>
                        <AnimatePresence initial={false}>
                            {activeIndex === index && (
                                <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: 'auto', opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.3 }}
                                    className="overflow-hidden"
                                >
                                    <div className="p-4">
                                        <p className="text-lg font-bold mb-2">{item.company_name}</p>
                                        <p>{item.date}</p>
                                        <p className="text-lg font-bold mb-2">Historia y Logros</p>
                                        <p>
                                            La Federación Argentina de Fisicoculturismo y Fitness (FAFF)
                                            ha sido un pilar fundamental en el desarrollo del
                                            fisicoculturismo en el país. Desde su fundación en 1993,
                                            hemos trabajado incansablemente para promover el deporte y
                                            apoyar a nuestros atletas en su búsqueda de la excelencia.
                                            Nuestra misión es fomentar el crecimiento del
                                            fisicoculturismo y el fitness, proporcionando las mejores
                                            plataformas para que nuestros atletas puedan competir y
                                            destacar a nivel nacional e internacional.
                                        </p>
                                        <div className="mt-4">
                                            <a
                                                href={item.instagram[0]}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-blue-500 underline"
                                            >
                                                Instagram
                                            </a>
                                        </div>
                                        {item.web[0] && (
                                            <div className="mt-2">
                                                <a
                                                    href={item.web[0]}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="text-blue-500 underline"
                                                >
                                                    Website
                                                </a>
                                            </div>
                                        )}
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.div>
                ))}
            </AnimatePresence>

            <div className="text-center mt-4">
                <AnimatePresence>
                    {!showAll && ASSOCIATIONS.length > 5 && (
                        <motion.button
                            onClick={handleShowAll}
                            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 10 }}
                            transition={{ duration: 0.3 }}
                        >
                            Ver todas
                        </motion.button>
                    )}
                    {showAll && (
                        <motion.button
                            onClick={handleHideAll}
                            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 10 }}
                            transition={{ duration: 0.3 }}
                        >
                            Ocultar
                        </motion.button>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
};

export default AssociationsAbout;
