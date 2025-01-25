import React, { useState } from "react";
import { motion } from "framer-motion";
import "../../../styles/resutlCards/index.css";
import { RESULTS } from "../../data/results";
import { Link } from "react-router-dom";
import { SPONSORS } from "../../data/sponsors";

const Results = () => {
  const [searchTerm, setSearchTerm] = useState("");

  // Filtra los resultados según el término de búsqueda
  const filteredResults = RESULTS.filter((result) =>
    result.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <motion.section
      className="w-full h-auto flex flex-col justify-center gap-y-10 items-center"
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: 50 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="w-[90%] h-auto m-auto mt-[100px] gap-y-10"
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 50 }}
        transition={{ duration: 0.5 }}
      >
         {/* Sponsors con animación */}
                <motion.div
                  className="flex flex-wrap justify-center items-center gap-8 my-10"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1 }}
                >
                  {SPONSORS.map((sponsor, index) => (
                    <motion.a
                      key={index}
                      href={sponsor.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative w-40 h-auto"
                      whileHover={{ scale: 1.1 }}
                    >
                      <motion.img
                        src={sponsor.image}
                        alt={sponsor.alt}
                        className="w-full h-auto object-contain"
                        whileHover={{ filter: "brightness(1.5)" }}
                        transition={{ duration: 0.3 }}
                      />
                    </motion.a>
                  ))}
                </motion.div>
        <motion.div
          className="h-[1px] bg-white flex justify-center mb-8"
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
            FAMF RESULTADOS
          </motion.h2>

          <motion.p
            className="text-[30px] text-primary-400/80 mb-4"
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
          >
            AQUÍ PODRÁS VER TODOS LOS RESULTADOS
          </motion.p>
        </motion.div>
      </motion.div>

      <div className="inputBox m-auto py-20">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          required="required"
        />
        <span>Filtrar</span>
      </div>

      <div className="w-full h-full flex justify-center items-center gap-10 flex-wrap my-20">
        {filteredResults.length > 0 ? (
          filteredResults.map((result, index) => (
            <div key={index} className="card__article">
              <div className="card__img rounded-xl">
                <img src={result.image} alt={result.title} className="rounded-xl" />
              </div>
              <div className="card__data">
                <h2 className="card__title">{result.title}</h2>
                
                {/* Mostrar texto pequeño si hay más de un día */}
                {result.dia_1 && result.dia_2 ? (
                  <p className="text-[10px] text-gray-500 mb-2">
                    Selecciona el día que quieres descargar
                  </p>
                ) : (
                  <p className="text-[10px] text-gray-500 mb-2">
                    Descargar resultado
                  </p>
                )}

                <div className="btns">
                  {/* Verificar si existen dia_1 y dia_2 */}
                  {result.dia_1 && (
                    <a
                      href={result.dia_1}
                      download
                      className="card__button"
                    >
                      {result.dia_2 ? "Sábado" : "Descargar Día"}
                    </a>
                  )}
                  {result.dia_2 && (
                    <a
                      href={result.dia_2}
                      download
                      className="card__button"
                    >
                      Domingo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>No se encontraron resultados.</p>
        )}
      </div>
    </motion.section>
  );
};

export default Results;
