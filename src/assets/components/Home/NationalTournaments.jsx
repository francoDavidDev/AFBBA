import React, { useState } from 'react';
import { motion } from 'framer-motion';
import '../../../styles/nationalTournaments/index.css'; // Asegúrate de que los estilos estén configurados
import { TOURNAMENTS_DATA } from '../../data/tournaments';
import { Link } from 'react-router-dom'; // Importa Link de react-router-dom

const NationalTournaments = () => {
  const [searchTerm, setSearchTerm] = useState(""); // Estado para el filtro

  // Filtra los torneos internacionales y aplica el filtro por título
  const filteredTournaments = TOURNAMENTS_DATA.filter(tournament =>
    tournament.tag === 'internacional' &&
    tournament.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section className='container__body flex justify-center flex-col items-center w-full h-auto py-10 mb-20'>
      {/* Campo de búsqueda */}
    <div className='flex justify-center items-center pt-20  '>
       <h2 className='text-3xl font-bold mb-6 m-auto '>TORNEOS INTERNACIONALES</h2>
       </div>

      <div className='container__acordeon m-auto'>
        {filteredTournaments.length > 0 ? (
          filteredTournaments.map(tournament => (
            <motion.div
              key={tournament.id}
              className='card'
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
               <Link to={'/#'}>
          { /*   <Link to={tournament.path}>*/}
                <img src={tournament.flyer} alt={tournament.title} className='image' />
              </Link>
              <Link to={'/#'}>
              { /*   <Link to={tournament.path}>*/}
                <img src={tournament.flyer} alt={`${tournament.title} Background`} className='background' />
              </Link>
              <div className='layer'>
                <div className='info'>
                  {/* Solo se muestran las imágenes, la información no es necesaria */}
                </div>
              </div>
            </motion.div>
          ))
        ) : (
          <p className='text-white'>No se encontraron torneos con ese título.</p>
        )}
      </div>
    </section>
  );
};

export default NationalTournaments;
