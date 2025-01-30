import React, { useState } from 'react';
import { TOURNAMENTS_DATA } from '../data/tournaments';

import bg_calendario from '../imgs/calendar/calendario.jpg';
import goldTexture from '../imgs/calendar/textura_dorada.jpg';
import goldTexture2 from '../imgs/calendar/textura_dorada_meses.jpg';

const MONTHS_MAP = {
  FEBRUARY: 'Febrero',
  MARCH: 'Marzo',
  APRIL: 'Abril',
  MAY: 'Mayo',
  JUNE: 'Junio',
  JULY: 'Julio',
  AUGUST: 'Agosto',
  SEPTEMBER: 'Septiembre',
  OCTOBER: 'Octubre',
  NOVEMBER: 'Noviembre',
  DECEMBER: 'Diciembre'
};

const TournamentCalendar = () => {
  // Inicializar el mes como null
  const [selectedMonth, setSelectedMonth] = useState(null);

  const months = Object.keys(TOURNAMENTS_DATA);

  const handleMonthChange = (event) => {
    setSelectedMonth(event.target.value);
  };

  return (
    <div
      className="max-w-4xl mx-auto px-3 sm:px-4 py-6 sm:py-8 bg-cover mt-10 sm:mt-20 bg-center rounded-lg h-auto flex flex-col justify-between"
      style={{ backgroundImage: `url(${bg_calendario})` }}
    >
      {/* Título agregado */}
      <div className="text-center mb-6">
        <h1
          className="text-4xl sm:text-5xl font-bold text-transparent bg-clip-text"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url(${goldTexture})`,
            WebkitBackgroundClip: 'text',
          }}
        >
          CALENDARIO FAMF 2025
        </h1>
      </div>

      <div className="mb-4 sm:mb-6">
        <label htmlFor="month-select" className="text-lg sm:text-2xl uppercase font-medium text-white-700">
          Selecciona el mes:
        </label>
        <select
          id="month-select"
          value={selectedMonth || ''}
          onChange={handleMonthChange}
          className="mt-1 sm:mt-2 block w-full px-3 sm:px-4 py-2 sm:py-3 border text-primary-100 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
        >
          <option value=""   disabled>SELECCIONA UN MES</option>
          {months.map((month) => (
            <option key={month} value={month}>
              {MONTHS_MAP[month] || month}
            </option>
          ))}
        </select>
      </div>

      {selectedMonth && (
        <div className="space-y-4 sm:space-y-6">
          <div className="flex justify-center text-primary-1">
            <div
              className="bg-cover bg-center p-2 sm:px-6 rounded-full"
              style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.2)), url(${goldTexture2})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                boxShadow: '0 0 25px rgba(255, 223, 0, 0.6)',
                backdropFilter: 'blur(10px)',
              }}
            >
              <h2 className="text-xl sm:text-3xl font-bold text-white">
                {MONTHS_MAP[selectedMonth] || selectedMonth}
              </h2>
            </div>
          </div>

          {TOURNAMENTS_DATA[selectedMonth]?.length > 0 ? (
            TOURNAMENTS_DATA[selectedMonth].map((tournament, index) => (
              <div
                key={index}
                className="bg-primary-200 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 flex flex-col p-3 sm:p-5"
              >
                <div className="rounded-lg flex flex-col justify-between h-full">
                  <div className="flex flex-col sm:flex-row justify-between items-center sm:items-start mb-3 sm:mb-4">
                    <h3
                      className="text-2xl sm:text-4xl font-semibold text-transparent bg-clip-text text-center sm:text-left"
                      style={{
                        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url(${goldTexture})`,
                        WebkitBackgroundClip: 'text',
                      }}
                    >
                      {tournament.name}
                    </h3>
                    <div className="text-black text-sm sm:text-lg font-medium space-y-1 sm:text-right text-center sm:lex sm:flex-col sm:items-center">
                      <p className="text-gray-800">{tournament.date}</p>
                      <p className="text-gray-800">{tournament.location}</p>
                      <p className="text-gray-900 font-semibold">
                        <a
                          target="_blank"
                          href={tournament.link}
                          className="text-blue-600 hover:text-blue-400 transition-colors duration-300 underline"
                        >
                          {tournament.organizer}
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-500 text-sm sm:text-base">No hay torneos para este mes.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default TournamentCalendar;
