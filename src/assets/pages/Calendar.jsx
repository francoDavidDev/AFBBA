import React, { useState } from "react";
import { TOURNAMENTS_DATA } from "../data/tournaments";
import { motion, AnimatePresence } from "framer-motion";
import { FaInstagram } from "react-icons/fa";

const TournamentCalendar = () => {
  const [selectedMonth, setSelectedMonth] = useState(null);

  const handleMonthClick = (month) => {
    if (TOURNAMENTS_DATA[month] && TOURNAMENTS_DATA[month].length > 0) {
      setSelectedMonth(selectedMonth === month ? null : month);
    }
  };

  const monthNames = [
    "ENERO", "FEBRERO", "MARZO", "ABRIL",
    "MAYO", "JUNIO", "JULIO", "AGOSTO",
    "SEPTIEMBRE", "OCTUBRE", "NOVIEMBRE", "DICIEMBRE"
  ];

  return (
    <section className="w-full max-w-7xl mx-auto py-12 px-4 bg-[#0f172a] text-white">
      <h2 className="text-center text-4xl font-bold mb-10 text-yellow-400 tracking-wide">
        🗓️ CALENDARIO FAMF 2025
      </h2>

      {/* GRID DE MESES */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mb-12">
        {monthNames.map((month) => {
          const tournaments = TOURNAMENTS_DATA[month];
          const tournamentCount = tournaments?.length || 0;
          const hasTournaments = tournamentCount > 0;

          return (
            <motion.div
              key={month}
              whileHover={hasTournaments ? { scale: 1.03 } : {}}
              onClick={() => handleMonthClick(month)}
              className={`cursor-pointer border-2 rounded-xl p-6 text-center shadow-md transition-all duration-300 ${
                hasTournaments
                  ? selectedMonth === month
                    ? "bg-yellow-400 text-black border-yellow-500"
                    : "bg-[#1f2937] border-yellow-300 hover:bg-yellow-300 hover:text-black"
                  : "bg-[#2c2c2c] border-gray-700 text-gray-500 cursor-not-allowed"
              }`}
            >
              <h3 className="text-xl font-bold">{month}</h3>
              <p className="text-sm mt-2">
                {hasTournaments ? `${tournamentCount} torneos` : "Sin torneos"}
              </p>
            </motion.div>
          );
        })}
      </div>

      {/* SECCIÓN TORNEOS DEL MES */}
      <AnimatePresence>
        {selectedMonth && TOURNAMENTS_DATA[selectedMonth]?.length > 0 && (
          <motion.div
            key={selectedMonth}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="bg-[#1f2937] rounded-lg p-6 border border-yellow-300 shadow-lg"
          >
            <h3 className="text-2xl font-bold text-yellow-400 mb-6 text-center">
              {selectedMonth} — {TOURNAMENTS_DATA[selectedMonth].length} torneo(s)
            </h3>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {TOURNAMENTS_DATA[selectedMonth].map((tournament, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="bg-[#111827] border border-yellow-200 rounded-lg p-5 shadow-md flex flex-col justify-between"
                >
                  <h4 className="text-lg font-bold text-yellow-300 mb-2">{tournament.name}</h4>
                  <p className="text-sm text-gray-300">📅 {tournament.date}</p>
                  <p className="text-sm text-gray-300">📍 {tournament.location}</p>
                  <p className="text-sm text-gray-400">🎤 {tournament.organizer}</p>

                  {tournament.link && (
                    <a
                      href={tournament.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 text-sm inline-flex items-center gap-2 text-yellow-200 hover:text-yellow-400 transition-colors"
                    >
                      <FaInstagram /> Ver en Instagram
                    </a>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default TournamentCalendar;
