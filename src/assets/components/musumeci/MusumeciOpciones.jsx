import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { HiOutlineClipboardList, HiOutlinePencilAlt } from "react-icons/hi";

const MusumeciOpciones = () => {
  const navigate = useNavigate();

  return (
    <section className="w-full h-[100vh] bg-[#091225] py-20 px-6 flex items-center justify-center">
      <motion.div
        className="w-full max-w-3xl flex flex-col sm:flex-row gap-6 justify-center items-center"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Botón: Información del evento */}
        <motion.button
          onClick={() => navigate("/evento-musumeci")}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          className="w-full sm:w-1/2 bg-primary-400 text-[#091225] font-semibold py-4 px-6 rounded-2xl flex items-center justify-center gap-3 text-lg shadow-md hover:shadow-[0_0_20px_#6ee7b7] transition-all duration-300"
        >
          <HiOutlineClipboardList className="text-2xl" />
          Información del evento
        </motion.button>

        {/* Botón: Formulario de preinscripción */}
        <motion.button
          onClick={() => navigate("/formInscription")}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          className="w-full sm:w-1/2 bg-transparent border border-primary-400 text-primary-400 font-semibold py-4 px-6 rounded-2xl flex items-center justify-center gap-3 text-lg hover:bg-primary-400 hover:text-[#091225] shadow-md transition-all duration-300"
        >
          <HiOutlinePencilAlt className="text-2xl" />
          Formulario de preinscripción
        </motion.button>
      </motion.div>
    </section>
  );
};

export default MusumeciOpciones;
