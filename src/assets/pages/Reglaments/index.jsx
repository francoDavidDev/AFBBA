import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import "../../../styles/reglametCards/index.css";
import { REGLAMETS } from "../../data/reglaments";

const Reglaments = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const handleSetIndex = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const filteredReglaments = Object.values(REGLAMETS).filter((reglament) =>
    reglament.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section className="w-full h-auto">
      <div className="w-full h-[100vh] text-center flex justify-start pt-36 items-center flex-col">
        <h2 className="xl:text-[140px] lg:text-[100px] md:text-[80px] text-[50px] w-full h-auto">
          AFBBA REGLAMENTOS
        </h2>
        <p className="xl:text-[50px] lg:text-[40px] md:text-[30px] text-[20px] text-primary-400">
          AQUI PODRAS VER TODOS LOS REGLAMENTOS
        </p>
      </div>
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
    </section>
  );
};

export default Reglaments;
