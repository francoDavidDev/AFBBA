import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaTiktok, FaInstagram } from "react-icons/fa";
import "../../../styles/trainersCards/index.css";
import { TRAINERS } from "../../data/trainers";
import CarrouselSponsors from "../../components/CarrouselSponsors";

const Trainers = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedProvince, setSelectedProvince] = useState("Todas");

  // Filtra los entrenadores según el término de búsqueda y la provincia seleccionada
  const filteredTrainers = TRAINERS.filter((trainer) =>
    (selectedProvince === "Todas" || trainer.province === selectedProvince) &&
    trainer.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Lista de provincias para el filtro
  const provinces = [
    "Todas", "Buenos Aires", "CABA", "Córdoba", "Santa Fe", "Mendoza", 
    "Tucumán", "Salta", "Entre Ríos", "Chaco", "Corrientes", "San Juan", 
    "San Luis", "La Pampa", "La Rioja", "Catamarca", "Santiago del Estero", 
    "Formosa", "Jujuy", "Río Negro", "Neuquén", "Chubut", "Santa Cruz", 
    "Tierra del Fuego"
  ];

  return (
    <section className="w-full h-auto flex flex-col justify-center items-center gap-y-10">
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
          className="flex flex-col text-center mt-10"
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.5 }}
        >
          <motion.h2
            className="text-[32px] sm:text-[40px] md:text-[50px] lg:text-[60px] font-bold tracking-widest"
            whileInView={{ opacity: 1, scale: 1 }}
            initial={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.5 }}
          >
            ENTRENADORES AFBBA
          </motion.h2>
          <motion.p
            className="text-[30px] text-primary-400 mb-4"
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
          >
            CONOCE A NUESTROS ENTRENADORES
          </motion.p>
        </motion.div>

        <div className="w-[90%] flex flex-col sm:flex-row justify-center items-center gap-y-4 mb-8">
          {/* Buscador */}
          <div className="inputBox py-20 mx-auto">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              required="required"
            />
            <span>Buscar</span>
          </div>

          {/* Filtro de Provincias */}
          <select
            value={selectedProvince}
            onChange={(e) => setSelectedProvince(e.target.value)}
            className="w-full sm:w-1/4 p-2 bg-[#1d2b3a] border border-gray-300 text-white rounded-lg outline-none transition duration-500 ease-in-out focus:border-[#00dfc4] hover:scale-[110%] mx-auto"
            style={{
              padding: "10px",
              border: "1px solid rgba(255, 255, 255, 0.25)",
              background: "#1d2b3a",
              borderRadius: "5px",
              color: "#fff",
              fontSize: "1em",
              transition: "0.5s",
            }}
          >
            {provinces.map((province) => (
              <option key={province} value={province}>
                {province}
              </option>
            ))}
          </select>
        </div>

        <div className="flex flex-wrap justify-center gap-6 mt-10">
          {filteredTrainers.length > 0 ? (
            filteredTrainers.map((trainer) => (
              <motion.article
                key={trainer.id}
                className="bg-white p-4 rounded-lg shadow-lg w-72 h-auto flex flex-col items-center"
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 50 }}
                transition={{ duration: 0.5 }}
              >
                <div className="w-20 h-20 mb-4 flex items-center justify-center">
                  <img
                    src={trainer.profileImage}
                    alt={trainer.name}
                    className="w-full h-full rounded-full object-cover"
                  />
                </div>

                <div className="text-center">
                  <h2 className="text-lg font-bold text-gray-800 mb-1">
                    {trainer.name}
                  </h2>
                  <h3 className="text-gray-500 mb-4">
                    {trainer.province}
                  </h3>
                  <div className="flex justify-center gap-3 mb-4">
                    {trainer.socialLinks.linkedin && (
                      <a
                        href={trainer.socialLinks.linkedin}
                        target="_blank"
                        rel="noreferrer"
                        className="text-blue-600 hover:text-blue-800"
                      >
                        <FaLinkedin className="text-xl" />
                      </a>
                    )}
                    {trainer.socialLinks.tiktok && (
                      <a
                        href={trainer.socialLinks.tiktok}
                        target="_blank"
                        rel="noreferrer"
                        className="text-black hover:text-gray-800"
                      >
                        <FaTiktok className="text-xl" />
                      </a>
                    )}
                    {trainer.socialLinks.instagram && (
                      <a
                        href={trainer.socialLinks.instagram}
                        target="_blank"
                        rel="noreferrer"
                        className="text-pink-600 hover:text-pink-800"
                      >
                        <FaInstagram className="text-xl" />
                      </a>
                    )}
                  </div>
                  <a
                    href="#"
                    className="bg-blue-600 text-white px-4 py-2 rounded-full flex items-center justify-center gap-2 hover:bg-blue-700 transition-all"
                  >
                    <span>Enviar Mensaje</span>
                  </a>
                </div>
              </motion.article>
            ))
          ) : (
            <p>No se encontraron entrenadores.</p>
          )}
        </div>
      </motion.div>
      <CarrouselSponsors />
    </section>
  );
};

export default Trainers;