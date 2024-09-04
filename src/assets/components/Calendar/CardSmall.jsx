import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaClock } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";

const CardSmall = ({
  title,
  subtitle,
  zone,
  hours,
  rules,
  hour,
  date,
  file,
  formattedDate,
  flyer // Asegúrate de que el flyer se pase como prop
}) => {
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

  return (
    <div
      className="w-[90%] bg-cover bg-center bg-[#282728] p-5 rounded-lg text-primary-200 sm:h-[120px] lg:h-[100px] flex flex-col sm:flex-row justify-between items-center hover:-translate-y-2 transition-all duration-300 hover:rounded-xl hover:shadow-primary-400 hover:shadow-md shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]"
      style={{ backgroundImage: `url(${flyer})` }}
    >
      <div className="h-full w-full p-3 bg-black bg-opacity-50 rounded-lg flex flex-col justify-between">
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
          <h3 className="h3 text-primary-200">{formattedDate}</h3>
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
    </div>
  );
};

export default CardSmall;
