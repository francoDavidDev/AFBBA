import React, { useState } from "react";
import { FaMapMarkerAlt, FaClock, FaArrowRight } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom"; // Agrega useNavigate

const CardSmall = ({
  title,
  subtitle,
  zone,
  hours,
  rules,
  hour,
  date,
  file,
  flyer, // Asegúrate de que el flyer se pase como prop
  isPastEvent // Nueva prop
}) => {
  const [hover, setHover] = useState(false);
  const navigate = useNavigate(); // Hook para redirigir

  const RULES_PDF = file;

  const downloadFileAtURL = (url) => {
    fetch(url)
      .then((response) => response.blob())
      .then((blob) => {
        const blobURL = window.URL.createObjectURL(new Blob([blob]));
        const fileName = url.split("/").pop();
        const aTag = document.createElement("a");
        aTag.href = blobURL;
        aTag.setAttribute("download", fileName);
        document.body.appendChild(aTag);
        aTag.click();
        aTag.remove();
      });
  };

  // Función para manejar el clic en la imagen del torneo
  const handleImageClick = () => {
    if (title === "NOCHE DE CAMPEONES") {
      navigate('/nocheDeCampeonesInfo'); // Redirige a esta URL si es "Noche de Campeones"
    } else {
      navigate(`/tournament/${title}`); // Redirige a la URL estándar para otros torneos
    }
  };

  return (
    <div
      className={`relative w-[90%] bg-cover bg-center bg-[#282728] p-5 rounded-lg text-primary-200 sm:h-[120px] lg:h-[100px] flex flex-col sm:flex-row justify-between items-center hover:-translate-y-2 transition-all duration-300 hover:rounded-xl hover:shadow-primary-400 hover:shadow-md shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] ${isPastEvent ? 'grayscale' : ''}`} // Aplicar clase grayscale si es evento pasado
      style={{ backgroundImage: `url(${flyer})` }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={handleImageClick} // Agrega la lógica para redirigir al hacer clic
    >
      <div className="h-full w-full p-3 bg-black bg-opacity-70 rounded-lg flex flex-col justify-between">
        <div className="flex flex-col gap-y-2">
          <h4 className="h4 text-primary-200 font-light text-2xl">{title}</h4>
          <div className="flex justify-start items-start gap-10 py-5 font-bold">
            <p
              onClick={() => {
                downloadFileAtURL(RULES_PDF);
              }}
              className="text-md hover:text-primary-400 transition-all duration-200 cursor-pointer hover:scale-105"
            >
              VER REGLAS
            </p>
            <p className="text-md hover:text-primary-400 hover:scale-105 transition-all duration-200 cursor-pointer">
              INSCRIPCIONES
            </p>
          </div>
          <h3 className="h3 text-primary-200">{date}</h3>
        </div>
        <div className="flex flex-col gap-y-2 mt-4 text-primary-200">
          <p className="flex flex-row gap-2 items-center">
            <FaMapMarkerAlt /> {zone}
          </p>
          <p className="flex flex-row gap-2 items-center">
            <FaClock /> {hour}
          </p>
        </div>
      </div>
      {hover && (
        <div className="absolute bottom-2 right-2 p-2 bg-primary-400 rounded-full">
          <FaArrowRight className="text-white text-2xl" />
        </div>
      )}
    </div>
  );
};

export default CardSmall;
