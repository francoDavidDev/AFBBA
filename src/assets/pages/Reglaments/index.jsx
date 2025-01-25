import React, { useState } from "react";
import { motion } from "framer-motion";
import "../../../styles/reglametCards/index.css";
import { REGLAMETS } from "../../data/reglaments";
import { SPONSORS } from "../../data/sponsors";

const Reglaments = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredReglaments = Object.values(REGLAMETS).filter((reglament) =>
    reglament.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <motion.section
      className="w-full h-auto flex flex-col justify-center items-center gap-y-10"
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
                  className="flex flex-wrap justify-center items-center gap-8 my-10  "
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
                      className="relative w-40 h-auto -z-10"
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
          className="flex flex-col text-center mt-10"
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
  FAMF REGLAMENTOS
</motion.h2>
          <motion.p
            className="text-[30px] text-primary-400 mb-4"
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
          >
            AQUÍ PODRÁS VER TODOS LOS REGLAMENTOS
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

      <div className="w-full h-full flex justify-center items-center gap-10 flex-wrap">
        {filteredReglaments.length > 0 ? (
          filteredReglaments.map((reglament, index) => (
            <div key={index} className="wrapper">
              <div className="content">
                <div className="profile_pic">
                  <img src={reglament.image} alt={reglament.title} />
                </div>
                <h2>{reglament.title}</h2>
                <div className="btns">
                  <a
                    href={reglament.pdf}
                    className="f-btn"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Ver reglamento
                  </a>
                  <a
                    href={reglament.pdf}
                    download
                    className="f-btn"
                  >
                    Descargar Reglamento
                  </a>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>No se encontraron reglamentos.</p>
        )}
      </div>
    </motion.section>
  );
};

export default Reglaments;
