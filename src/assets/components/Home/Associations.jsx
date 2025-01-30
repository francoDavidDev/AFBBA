import React, { useState } from "react";
import { FaInstagram, FaGlobe, FaWhatsapp } from "react-icons/fa";
import "../../../styles/associationCards/index.css";
import { ASSOCIATIONS } from "../../../constants";
import { Link, useNavigate } from "react-router-dom";

const ConditionalLink = ({ title, img_original }) => {
  const navigate = useNavigate();

  const handleNavigation = () => {
    if (title === "Asociacion Bonaerense de Fisicoculturismo") {
      window.open("https://afibaoficial.com.ar", "_blank", "noopener,noreferrer");
    } else {
      navigate("/pageNoFound", { state: { title, image: img_original } });
    }
  };

  return (
    <button
      onClick={handleNavigation}
      className="bg-gray-700 hover:bg-gray-600 text-white py-2 px-4 rounded flex items-center gap-2 transition-all duration-300"
    >
      {title === "Asociacion Bonaerense de Fisicoculturismo" ? "Ir a AFIBA" : "Web"}
    </button>
  );
};

const Associations = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedProvince, setSelectedProvince] = useState("Todas las provincias");
  const [searchField, setSearchField] = useState("all"); // Nuevo filtro avanzado
  const [showAll, setShowAll] = useState(false);

  const provinces = ["Todas las provincias", ...new Set(ASSOCIATIONS.map((association) => association.date))];

  const filteredAssociations = ASSOCIATIONS.filter((association) => {
    const matchesProvince = selectedProvince === "Todas las provincias" || association.date === selectedProvince;

    const matchesSearchTerm =
      searchField === "all"
        ? association.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          association.letters.toLowerCase().includes(searchTerm.toLowerCase()) ||
          association.date.toLowerCase().includes(searchTerm.toLowerCase())
        : association[searchField]?.toLowerCase().includes(searchTerm.toLowerCase());

    return matchesProvince && matchesSearchTerm;
  });

  const visibleAssociations = showAll ? filteredAssociations : filteredAssociations.slice(0, 4);

  return (
    <section className="w-full h-auto my-20">
      <div className="maincontainer w-full m-auto flex flex-col items-center">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center m-auto my-10">
          ASOCIACIONES PROVINCIALES
        </h2>

        <div className="w-[80%] flex gap-10 flex-wrap justify-center items-center mb-8">
          <div className="inputBox py-20 mx-auto w-full sm:w-[60%]">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              required
              placeholder="Filtrar nombre de asociacion"
              className="w-full p-2 border rounded-md border-gray-300 focus:outline-none focus:ring focus:ring-blue-500"
            />
          </div>

    

          <select
            value={selectedProvince}
            onChange={(e) => setSelectedProvince(e.target.value)}
            className="w-full sm:w-[30%] p-2 bg-[#1d2b3a] border border-gray-300 text-white rounded-lg outline-none transition duration-500 ease-in-out focus:border-[#00dfc4] mx-auto"
          >
            {provinces.map((province, index) => (
              <option key={index} value={province}>
                {province}
              </option>
            ))}
          </select>
        </div>

        <div className="w-full flex gap-10 flex-wrap justify-center items-center">
          {visibleAssociations.length > 0 ? (
            visibleAssociations.map((association, index) => (
              <div className="thecard-container" key={index}>
                <div className="thecard">
                  <img src={association.img_original} alt={association.title} />

                  <div className="overlay">
                    <h3>{association.title}</h3>
                    <p className="text-gray-300">Letters: {association.letters || "No disponible"}</p>

                    <div className="mt-4 bg-gray-700 text-white py-2 px-4 rounded text-center">
                      <p>Presidente: {association.president_name || "Información no disponible"}</p>

                      <div className="flex justify-center py-2">
                        {association.contact ? (
                          <a href={`https://wa.me/${association.contact.replace(/[^0-9]/g, '')}`} target="_blank" rel="noopener noreferrer">
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
                      <ConditionalLink title={association.title} img_original={association.img_original} />

                      {association.instagram && association.instagram.length > 0 && association.instagram[0] !== "" ? (
                        <a href={association.instagram[0]} target="_blank" rel="noopener noreferrer">
                          <button className="bg-gray-700 hover:bg-gray-600 text-white py-2 px-4 rounded flex items-center gap-2 transition-all duration-300">
                            <FaInstagram /> Instagram
                          </button>
                        </a>
                      ) : (
                        <p className="bg-gray-700 hover:bg-gray-600 text-white py-2 px-4 rounded flex items-center gap-2 transition-all duration-300">No disponible</p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p>No se encontraron asociaciones para la provincia seleccionada y el término de búsqueda.</p>
          )}
        </div>

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
