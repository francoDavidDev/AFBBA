import React, { useState } from "react";
import "react-vertical-timeline-component/style.min.css";
import "../../../styles/associationCards/index.css";
import { ASSOCIATIONS } from "../../../constants";

const Associations = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedProvince, setSelectedProvince] = useState("Todas las provincias");
  const [showAll, setShowAll] = useState(false);

  // Obtener provincias únicas para el selector
  const provinces = ["Todas las provincias", ...new Set(ASSOCIATIONS.map((association) => association.date))];

  // Filtrar asociaciones según la provincia seleccionada y el término de búsqueda
  const filteredAssociations = ASSOCIATIONS.filter(
    (association) =>
      (selectedProvince === "Todas las provincias" || association.date === selectedProvince) &&
      association.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Mostrar solo las primeras 4 asociaciones si showAll es false
  const visibleAssociations = showAll ? filteredAssociations : filteredAssociations.slice(0, 4);

  return (
    <section className="w-full h-[auto] my-20">
      <div className="maincontainer w-full m-auto flex flex-col items-center">
        <h2 className="h3 m-auto my-10">ASOCIACIONES PROVINCIALES</h2>

        {/* Campo de búsqueda y selector */}
        <div className="w-[80%] flex gap-10 flex-wrap justify-center items-center mb-8">
          <div className="inputBox py-20 mx-auto">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              required="required"
            />
            <span>Filtrar</span>
          </div>

          {/* Selector de provincias */}
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
              <div className="thecard" key={index}>
                <div className="thefront bg-gray-800 border-[1px] border-gray-500">
                  <img src={association.icon} alt={association.title} />
                  <h3 className="px-4">{association.title}</h3>
                </div>

                <div className="theback bg-primary-400/70 border-[2px] border-primary-400/70">
                  <img src={association.icon} alt={association.title} />
                  <div className="overlay">
                    <h3 className="text-sm">{association.title}</h3>
                    <div className="flex justify-center gap-10">
                      <a href={association.web[0]} target="_blank" rel="noopener noreferrer">
                        VISITAR WEB
                      </a>
                      <a href={association.instagram[0]} target="_blank" rel="noopener noreferrer">
                        INSTAGRAM
                      </a>
                    </div>
                    <p className="pt-4 text-primary-300 text-lg">{association.date}</p>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p>No se encontraron asociaciones para la provincia seleccionada.</p>
          )}
        </div>

        {/* Botón de ver todas / ocultar */}
        {filteredAssociations.length > 4 && (
          <button
            onClick={() => setShowAll(!showAll)}
            className="mt-6 px-4 py-2 text-white bg-blue-500 rounded shadow-lg hover:bg-blue-600"
          >
            {showAll ? "Ocultar" : "Ver todas"}
          </button>
        )}
      </div>
    </section>
  );
};

export default Associations;
