import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { TOURNAMENTS_NATIONALS } from '../../data/tournaments';
import '../../../styles/nationalTournaments/index.css';

const NationalTournaments = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredTournaments = TOURNAMENTS_NATIONALS.filter(tournament =>
    tournament.tag === 'nacional' &&
    tournament.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section className="w-full px-4 py-12 bg-[#111827] text-white">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold mb-6">🏆 Torneos Nacionales 2025</h2>
        <input
          type="text"
          placeholder="Buscar torneo por título..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="px-4 py-2 rounded-md w-full max-w-md text-black shadow-md"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {filteredTournaments.length > 0 ? (
          filteredTournaments.map(tournament => (
            <motion.div
              key={tournament.id}
              className="relative rounded-lg overflow-hidden shadow-xl group transition-transform transform hover:scale-105"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <Link to={tournament.path || '/#'}>
                <img
                  src={tournament.flyer}
                  alt={tournament.title}
                  className="w-full h-[650px] object-cover"
                />
                <div className="absolute bottom-0 w-full bg-black bg-opacity-60 text-white p-3 text-center">
                  <h3 className="text-lg font-semibold">{tournament.title}</h3>
                </div>
              </Link>
            </motion.div>
          ))
        ) : (
          <p className="text-center col-span-3 text-gray-300">No se encontraron torneos con ese título.</p>
        )}
      </div>
    </section>
  );
};

export default NationalTournaments;
