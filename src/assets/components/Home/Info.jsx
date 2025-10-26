import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { IoMdFitness } from "react-icons/io";
import { PRESENT_HOME, ACTUALIDAD } from "../../../data";

/**
 * Detecta automáticamente la mejor ruta para "Resultados":
 * 1) Busca en ACTUALIDAD / PRESENT_HOME un item cuyo path o título contenga "resultado" o "clasific".
 * 2) Si no existe, cae en "/resultados".
 */
const getResultsPath = () => {
  const pools = [...(ACTUALIDAD || []), ...(PRESENT_HOME || [])];
  const byPath = pools.find(
    (i) => typeof i?.path === "string" && /resultado|clasificaci/i.test(i.path)
  );
  if (byPath) return byPath.path;

  const byTitle = pools.find(
    (i) => typeof i?.title === "string" && /resultado|clasificaci/i.test(i.title)
  );
  if (byTitle?.path) return byTitle.path;

  return "/resultados";
};

const RESULTS_PATH = getResultsPath();

const Info = () => {
  return (
    <section className="w-full bg-[#060b16] py-16 md:py-24 flex flex-col items-center">
      {/* Encabezado */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-[90%] max-w-5xl text-center"
      >
        <p className="text-primary-400 text-sm md:text-base uppercase tracking-wider">
          Últimos resultados y clasificaciones
        </p>
        <h2 className="text-primary-200 text-2xl md:text-3xl font-semibold uppercase mt-2">
          Resultados de Torneos
        </h2>
        <p className="text-primary-300/80 italic mt-2">
          Ingresá para ver clasificaciones, podios y detalles completos.
        </p>

        {/* ÚNICO BOTÓN / LINK A RESULTADOS */}
        <motion.div
          className="mt-8"
          initial={{ scale: 0.98, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.4, ease: "easeOut", delay: 0.1 }}
        >
          <Link
            to={RESULTS_PATH}
            aria-label="Ir a la página de resultados"
            className="inline-flex items-center gap-3 rounded-full bg-primary-400 text-[#091225] px-6 py-3 text-base md:text-lg font-semibold transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_24px_rgba(110,231,183,0.6)] focus:outline-none focus:ring-2 focus:ring-primary-400/70"
          >
            <IoMdFitness className="text-xl" />
            Ver resultados
          </Link>
        </motion.div>

        {/* Nota: eliminamos tarjetas/listados. Sólo queda el CTA a resultados. */}
      </motion.div>
    </section>
  );
};

export default Info;
