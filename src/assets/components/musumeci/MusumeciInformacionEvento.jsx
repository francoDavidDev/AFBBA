import React, { useState } from "react";
import { motion } from "framer-motion";
import { HiChevronDown, HiChevronUp } from "react-icons/hi";

const Accordion = ({ title, children }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-white/20 py-4">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-center text-left text-primary-400 text-lg font-semibold"
      >
        {title}
        {open ? <HiChevronUp /> : <HiChevronDown />}
      </button>
      <motion.div
        initial={false}
        animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className={`overflow-hidden mt-2 text-white/90 text-base sm:text-lg leading-relaxed`}
      >
        {children}
      </motion.div>
    </div>
  );
};

const MusumeciInformacionEvento = () => {
  return (
    <section className="w-full bg-[#060b16] text-white py-20 px-6">
      <motion.div
        className="max-w-5xl mx-auto space-y-12"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="text-center">
          <h2 className="text-primary-300 text-4xl sm:text-5xl font-bold mb-3">
            Información del Evento
          </h2>
          <p className="text-white/80 text-lg">
            MUSUMECI CLASSIC INTERNATIONAL – 2 y 3 de agosto – Buenos Aires, Argentina
          </p>
        </div>

        <Accordion title="🗓 Fechas y Registro">
          <ul className="space-y-1">
            <li><strong>Registro:</strong> Sábado 2 de agosto, 15:00 a 19:00</li>
            <li><strong>Competencia:</strong> Domingo 3 de agosto, 10:00 a 19:00</li>
            <li><strong>Lugar:</strong> Hotel Marriott – Carlos Pellegrini 551</li>
            <li><strong>Arribo:</strong> Viernes 1 de agosto</li>
            <li><strong>Salida:</strong> Lunes 4 de agosto</li>
          </ul>
        </Accordion>

        <Accordion title="📍 Información General">
          <ul className="space-y-1">
            <li>Evento abierto para todas las federaciones de América</li>
            <li>Califica para 7 IFBB Pro Cards</li>
            <li>Califica para el ranking sudamericano CSFF</li>
            <li>No califica para ranking mundial IFBB</li>
          </ul>
        </Accordion>

        <Accordion title="💡 Requisitos para Competidores">
          <ul className="list-disc pl-6 space-y-2">
            <li>Vestimenta y bronceado según reglamento IFBB</li>
            <li>Atletas nacionales deben tener afiliación 2025 al día (AR$ 30.000)</li>
            <li>Bronceadores tipo crema están prohibidos</li>
            <li>No se permite pintarse en el establecimiento, solo retoques</li>
            <li>La música de poses debe estar en USB (formato MP3)</li>
            <li>Pulseras para coachs disponibles (USD 20)</li>
          </ul>
        </Accordion>

        <Accordion title="💰 Costos de Inscripción">
          <ul className="space-y-2">
            <li><strong>Internacionales:</strong> USD 100 + USD 20 por crossover</li>
            <li><strong>Nacionales:</strong> USD 50 + USD 20 por crossover</li>
          </ul>
          <p className="mt-2">La inscripción se paga en el registro. Es obligatorio presentar pasaporte o DNI.</p>
        </Accordion>

        <Accordion title="🏨 Hoteles Recomendados">
          <ul className="space-y-1">
            <li><strong>Hotel Marriott:</strong> Carlos Pellegrini 551, Tel: +54 9 11 4348-5000</li>
            <li><strong>Broadway Hotel & Suites:</strong> Av. Corrientes 1173, Tel: +54 9 11 4378-9300</li>
          </ul>
        </Accordion>

        <Accordion title="📬 Contacto e Inscripción">
          <p>
            Las federaciones deben enviar el formulario de inscripción final antes del <strong>23 de julio</strong> a:
          </p>
          <ul className="mt-2 space-y-1">
            <li>Email CSFF: <a href="mailto:csff.ifbb@gmail.com" className="text-primary-300">csff.ifbb@gmail.com</a></li>
            <li>Email IFBB Madrid: <a href="mailto:contact@ifbb.com" className="text-primary-300">contact@ifbb.com</a></li>
            <li>Comisión Técnica IFBB: <a href="mailto:amichalak5@gmail.com" className="text-primary-300">amichalak5@gmail.com</a></li>
            <li>Oscar Villarreal (Presidente FAMF): <a href="mailto:ruberoscarvillarreal1963@gmail.com" className="text-primary-300">ruberoscarvillarreal1963@gmail.com</a></li>
          </ul>
        </Accordion>

      </motion.div>
    </section>
  );
};

export default MusumeciInformacionEvento;
