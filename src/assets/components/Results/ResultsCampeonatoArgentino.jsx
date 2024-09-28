import React, { useState } from "react";
import { motion } from "framer-motion";
import { RESULTS } from "../../data/results";

const ResultsCampeonatoArgentino = () => {
  const [popupVisible, setPopupVisible] = useState(false);

  // Función para normalizar cadenas eliminando acentos
  const normalizeString = (str) => {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  };

  const campeonatoArgentino = RESULTS.find((result) =>
    normalizeString(result.title).includes(
      normalizeString("Campeonato Argentino")
    )
  );

  const handleDownload = () => {
    setPopupVisible(true);
    setTimeout(() => {
      setPopupVisible(false);
    }, 3000); // Oculta el popup después de 3 segundos
  };

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
            className="text-[60px] font-bold tracking-widest"
            whileInView={{ opacity: 1, scale: 1 }}
            initial={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.5 }}
          >
            Seleccione el día
          </motion.h2>
        </motion.div>
      </motion.div>

      <div className="w-full flex justify-center items-center gap-10 mt-20">
        <a
          href={campeonatoArgentino.sabado}
          download
          className="px-8 py-4 bg-primary-400 text-white text-lg font-bold rounded-lg hover:bg-primary-500 transition duration-300"
          onClick={handleDownload}
        >
          Sábado
        </a>
        <a
          href={campeonatoArgentino.domingo}
          download
          className="px-8 py-4 bg-primary-400 text-white text-lg font-bold rounded-lg hover:bg-primary-500 transition duration-300"
          onClick={handleDownload}
        >
          Domingo
        </a>
      </div>

      {popupVisible && (
        <motion.div
          className="fixed bottom-10 right-10 bg-green-500 text-white py-3 px-6 rounded-lg shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.3 }}
        >
          PDF descargado
        </motion.div>
      )}
    </motion.section>
  );
};

export default ResultsCampeonatoArgentino;
