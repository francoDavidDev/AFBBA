import React, { useState } from "react";
import { FaInstagram, FaGlobe, FaWhatsapp } from "react-icons/fa"; // Importa los íconos de react-icons
import "../../../styles/associationCards/index.css";
import { ASSOCIATIONS } from "../../../constants";

const Associations = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedProvince, setSelectedProvince] = useState("Todas las provincias");
  const [showAll, setShowAll] = useState(false);

  // Crear un conjunto de provincias únicas, tomando el campo 'date' como la provincia.
  const provinces = ["Todas las provincias", ...new Set(ASSOCIATIONS.map((association) => association.date))];

  // Filtrar asociaciones según el término de búsqueda y la provincia seleccionada
  const filteredAssociations = ASSOCIATIONS.filter((association) => {
    const matchesProvince = selectedProvince === "Todas las provincias" || association.date === selectedProvince;
    const matchesSearchTerm =
      association.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      association.icon.toLowerCase().includes(searchTerm.toLowerCase()) ||
      association.date.toLowerCase().includes(searchTerm.toLowerCase());

    return matchesProvince && matchesSearchTerm;
  });

  // Mostrar solo las primeras 4 asociaciones, o todas si showAll está habilitado
  const visibleAssociations = showAll ? filteredAssociations : filteredAssociations.slice(0, 4);

  return (
    <section className="w-full h-auto my-20">
      <div className="maincontainer w-full m-auto flex flex-col items-center">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center m-auto my-10">
          ASOCIACIONES PROVINCIALES
        </h2>

        <div className="w-[80%] flex gap-10 flex-wrap justify-center items-center mb-8">
          {/* Campo de búsqueda */}
          <div className="inputBox py-20 mx-auto">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              required
              placeholder="Filtrar..."
              className="w-full p-2 border rounded-md border-gray-300 focus:outline-none focus:ring focus:ring-blue-500"
            />
          </div>

          {/* Seleccionar provincia */}
          <select
            value={selectedProvince}
            onChange={(e) => setSelectedProvince(e.target.value)}
            className="w-full sm:w-1/4 p-2 bg-[#1d2b3a] border border-gray-300 text-white rounded-lg outline-none transition duration-500 ease-in-out focus:border-[#00dfc4] mx-auto"
          >
            {provinces.map((province, index) => (
              <option key={index} value={province}>
                {province}
              </option>
            ))}
          </select>
        </div>

        {/* Mostrar asociaciones filtradas */}
        <div className="w-full flex gap-10 flex-wrap justify-center items-center">
          {visibleAssociations.length > 0 ? (
            visibleAssociations.map((association, index) => (
              <div className="thecard-container" key={index}>
                <div className="thecard">
                  <img src={association.img_original} alt={association.title} />

                  <div className="overlay">
                    <h3>{association.title}</h3>

                    {/* Nombre del presidente con el fondo de los botones */}
                    <div className="mt-4 bg-gray-700 text-white py-2 px-4 rounded text-center">
                      <p>Presidente: {association.president_name || "Información no disponible"}</p>

                      {/* Botón de contacto con ícono de WhatsApp */}
                      <div className="flex justify-center py-2">
                        {association.contact_info ? (
                          <a href={`https://wa.me/543755688062`} target="_blank" rel="noopener noreferrer">
                            <button className="bg-gray-700 hover:bg-gray-600 text-white py-2 px-4 rounded flex items-center gap-2 transition-all duration-300">
                              <FaWhatsapp /> Contacto
                            </button>
                          </a>
                        ) : (
                          <p className="text-white">Información no disponible</p>
                        )}
                      </div>
                    </div>

                    <div className="flex justify-center gap-4 pt-2">
                      <button
                        onClick={() => {
                          const isAfiba = association.title === "Asociacion Bonaerense de Fisicoculturismo";
                          if (isAfiba) {
                            window.open("https://afibaoficial.com.ar/", "_blank");
                          } else if (association.web[0] === "https://afibaoficial.com.ar/") {
                            window.open(association.web[0], "_blank");
                          } else {
                            window.location.href = "#/pageNoFound";
                          }
                        }}
                        className="bg-gray-700 hover:bg-gray-600 text-white py-2 px-4 rounded flex items-center gap-2 transition-all duration-300"
                      >
                        <FaGlobe /> Web
                      </button>
                      <a href={association.instagram[0]} target="_blank" rel="noopener noreferrer">
                        <button className="bg-gray-700 hover:bg-gray-600 text-white py-2 px-4 rounded flex items-center gap-2 transition-all duration-300">
                          <FaInstagram /> Instagram
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p>No se encontraron asociaciones para la provincia seleccionada y el término de búsqueda.</p>
          )}
        </div>

        {/* Botón para ver todas las asociaciones */}
        {filteredAssociations.length > 4 && (
          <button
            onClick={() => setShowAll(!showAll)}
            className="mt-6 px-4 py-2 text-white bg-gray-700 rounded shadow-lg hover:bg-gray-600 transition-all duration-300"
          >
            {showAll ? "Ocultar" : "Ver todas"}
          </button>
        )}
      </div>
    </section>
  );
};

export default Associations;
