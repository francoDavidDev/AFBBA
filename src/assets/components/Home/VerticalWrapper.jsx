import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ASSOCIATIONS } from "../../../constants"; // Asegúrate de que esta ruta es correcta

const VerticalWrapper = () => {
  const [showIcon, setShowIcon] = useState(true);
  const [expandedIndex, setExpandedIndex] = useState(null);
  const [webPopupIndex, setWebPopupIndex] = useState(null);
  const popupRef = useRef(null);
  const webPopupRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 640) {
        setShowIcon(false);
      } else {
        setShowIcon(true);
      }
    };

    handleResize(); // Check initial screen size
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        popupRef.current &&
        !popupRef.current.contains(event.target) &&
        webPopupRef.current &&
        !webPopupRef.current.contains(event.target)
      ) {
        setExpandedIndex(null); // Close the Instagram popup if clicked outside
        setWebPopupIndex(null); // Close the Web popup if clicked outside
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleInstagramClick = (e, index) => {
    e.stopPropagation(); // Prevent the click event from bubbling up
    setExpandedIndex(index === expandedIndex ? null : index);
    setWebPopupIndex(null); // Ensure Web popup is closed
  };

  const handleWebClick = (e, index) => {
    e.stopPropagation(); // Prevent the click event from bubbling up
    setWebPopupIndex(index === webPopupIndex ? null : index);
    setExpandedIndex(null); // Ensure Instagram popup is closed
  };

  return (
    <section className="w-full h-auto flex flex-wrap">
      {ASSOCIATIONS.map((experience, index) => (
        <motion.div
          key={index}
          className="w-full h-[300px] flex"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.2 }}
        >
          <motion.div
            className="sm:w-[60%] md:w-1/2 h-full flex flex-col justify-center items-center"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <motion.div
              className="flex flex-col gap-y-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 + 0.2 }}
            >
              <motion.h2
                className="text-xl m-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 + 0.4 }}
              >
                {experience.date}
              </motion.h2>
              <motion.div
                className="w-[90%] sm:w-[90%] md:w-[400px] h-[200px] overflow-hidden bg-blue-600 flex flex-col m-auto justify-center items-start rounded-lg"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 + 0.6 }}
              >
                <motion.div
                  className="w-full h-[50%] px-2 flex justify-start items-center gap-5"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.2 + 0.8 }}
                >
                  <motion.img
                    src={experience.icon}
                    alt="icon"
                    className="w-[60px] rounded-full"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.2 + 1 }}
                  />
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.2 + 1.2 }}
                  >
                    <p className="text-xl">{experience.title}</p>
                  </motion.div>
                </motion.div>
                <motion.div
                  className="w-full h-[60%] px-3 flex justify-start flex-col gap-y-3"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.2 + 1.4 }}
                >
                  <motion.h5
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.2 + 1.6 }}
                  >
                    PRESIDENTE: {experience.company_name}
                  </motion.h5>
                  <motion.div
                    className="flex"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.2 + 1.8 }}
                  >
                    <ul className="list-disc list-inside">
                      {experience.instagram.map((link, idx) => (
                        <motion.li
                          key={idx}
                          className="py-1 relative flex items-center"
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.5, delay: index * 0.2 + 2 }}
                        >
                          <button
                            onClick={(e) => handleInstagramClick(e, index)}
                            className="text-primary-100 "
                          >
                            Instagram
                          </button>
                          <AnimatePresence>
                            {expandedIndex === index && (
                              <motion.div
                                ref={popupRef}
                                className="ml-2 bg-white border border-gray-300 p-2 rounded-lg shadow-lg"
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.8 }}
                                transition={{ duration: 0.3 }}
                              >
                                <p className="text-sm">
                                  <a
                                    href={link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-500 "
                                  >
                                    Ir al Instagram
                                  </a>
                                </p>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </motion.li>
                      ))}
                      {experience.web.map(
                        (link, idx) =>
                          link && (
                            <motion.li
                              key={idx}
                              className="py-1 relative flex items-center"
                              initial={{ opacity: 0, x: -10 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.5, delay: index * 0.2 + 2.2 }}
                            >
                              <button
                                onClick={(e) => handleWebClick(e, index)}
                                   className="text-primary-100 "
                              >
                                Página Web
                              </button>
                              <AnimatePresence>
                                {webPopupIndex === index && (
                                  <motion.div
                                    ref={webPopupRef}
                                    className="ml-2 bg-white border border-gray-300 p-2 rounded-lg shadow-lg"
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.8 }}
                                    transition={{ duration: 0.3 }}
                                  >
                                    <p className="text-sm">
                                      <a
                                        href={link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-blue-500 "
                                      >
                                        Ir a la Página Web
                                      </a>
                                    </p>
                                  </motion.div>
                                )}
                              </AnimatePresence>
                            </motion.li>
                          )
                      )}
                    </ul>
                  </motion.div>
                </motion.div>
                <motion.div
                  className="w-full h-[5px] bg-primary-400"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.2 + 2.4 }}
                />
              </motion.div>
            </motion.div>
          </motion.div>

          {showIcon && (
            <motion.div
              className="sm:w-[40%] md:w-1/2 h-full flex justify-center items-center"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
            >
              <motion.img
                src={experience.icon}
                alt="icon"
                className="w-[400px] h-[300px]"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 + 0.6 }}
              />
            </motion.div>
          )}
        </motion.div>
      ))}
    </section>
  );
};

export default VerticalWrapper;
