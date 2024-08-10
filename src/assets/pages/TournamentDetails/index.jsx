import React from 'react';
import { useParams } from 'react-router-dom';
import { TOURNAMENTS_DATA } from '../../data/tournaments'; // Ajusta la ruta según tu estructura
import { motion } from 'framer-motion';
import { FaFacebook, FaInstagram } from 'react-icons/fa'; // Asegúrate de instalar react-icons

const TournamentDetails = () => {
  const { title } = useParams();
  // Encuentra todos los torneos que coinciden con el título
  const tournaments = TOURNAMENTS_DATA.filter(t => t.title.toLowerCase().includes(title.toLowerCase()));

  if (tournaments.length === 0) {
    return <div>Torneo no encontrado</div>;
  }

  return (
    <motion.div
      className="w-full h-auto flex flex-col justify-center items-center gap-y-10"
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: 50 }}
      transition={{ duration: 0.5 }}
    >
      {/* Banner */}
      <motion.div
        className="w-[90%] min-h-screen m-auto mt-[100px] gap-y-10"
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 50 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          className="h-[1px] bg-white flex justify-center"
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
            className="text-[60px] font-bold tracking-widest text-white"
            whileInView={{ opacity: 1, scale: 1 }}
            initial={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.5 }}
          >
            Detalles de Torneos
          </motion.h2>
        </motion.div>

        {tournaments.map(tournament => (
          <motion.div
            key={tournament.id}
            className="w-full mb-10"
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.5 }}
          >
            <motion.img
              src={tournament.flyer}
              alt={tournament.title}
              className="w-full h-64 object-cover mb-4 rounded-md"
              whileInView={{ scale: 1 }}
              initial={{ scale: 0.95 }}
              transition={{ duration: 0.5 }}
            />
            <motion.p
              className="text-white font-semibold mb-2"
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.5 }}
            >
              <strong>Dirección:</strong> {tournament.address}
            </motion.p>
            <motion.p
              className="text-white mb-2"
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.5 }}
            >
              <strong>Localidad:</strong> {tournament.locality}
            </motion.p>
            <motion.p
              className="text-white mb-2"
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.5 }}
            >
              <strong>Fecha:</strong> {tournament.date}
            </motion.p>
            <motion.p
              className="text-white mb-2"
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.5 }}
            >
              <strong>Horario de Inscripción:</strong> {tournament.hour_inscription}
            </motion.p>
            <motion.p
              className="text-white mb-2"
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.5 }}
            >
              <strong>Inicio de Competencia:</strong> {tournament.start_competition}
            </motion.p>

            {tournament.more_info && (
              <motion.div
                className="mt-8 p-6 bg-gray-100 rounded-lg"
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 50 }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-2xl font-semibold mb-4 text-white">Más Información</h2>
                {tournament.more_info.map((info, index) => (
                  <p key={index} className="text-white mb-2">
                    <strong>{info.name}:</strong> {info.contact}
                  </p>
                ))}
              </motion.div>
            )}

            {tournament.social_networks && (
              <motion.div
                className="mt-8 flex flex-col items-center gap-4"
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 50 }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-2xl font-semibold mb-4 text-white">Síguenos en Redes Sociales</h2>
                <div className="flex gap-4">
                  {tournament.social_networks.map((network, index) => (
                    <div key={index} className="flex items-center">
                      {network.facebook && (
                        <a
                          href={network.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center text-white bg-blue-600 p-2 rounded-full hover:bg-blue-700 transition"
                        >
                          <FaFacebook className="text-xl" />
                        </a>
                      )}
                      {network.instagram && (
                        <a
                          href={network.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center text-white bg-pink-600 p-2 rounded-full hover:bg-pink-700 transition ml-2"
                        >
                          <FaInstagram className="text-xl" />
                        </a>
                      )}
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default TournamentDetails;
