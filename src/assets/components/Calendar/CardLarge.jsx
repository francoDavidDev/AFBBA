import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaClock } from "react-icons/fa";
import { Link } from "react-router-dom";

const CardLarge = ({ title, subtitle, zone, hours, hour, date, file, formattedDate, image, flyer }) => {

  const RULES_PDF = file;

  const downloadFileAtURL = (url) => {
    fetch(url).then(response => response.blob()).then(blob => {
      const blobURL = window.URL.createObjectURL(new Blob([blob]));
      const fileName = url.split('/').pop();
      const aTag = document.createElement('a');
      aTag.href = blobURL;
      aTag.setAttribute('download', fileName);
      document.body.appendChild(aTag);
      aTag.click();
      aTag.remove();
    });
  }

  return (
    <div className="w-[95%] bg-[#282728] rounded-lg text-primary-200 md:h-[110px] sm:h-[140px] lg:h-[100px] flex flex-col sm:flex-row justify-between items-center hover:-translate-y-2 transition-all duration-300 hover:rounded-xl hover:shadow-primary-400 hover:shadow-md shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]">
      <div className="h-full w-[150px] sm:w-[90px] p-3">
        <h6 className="h6 text-primary-200">{formattedDate}</h6>
      </div>
      <div className="h-full w-[100%] flex flex-col sm:flex-row justify-between text-left">
        <div className="p-2 w-[65%] flex flex-col justify-start gap-y-2">
          <h6 className="text-primary-200 font-bold h6 sm:text-xl">{title}</h6>
          <p className="font-light text-sm sm:text-lg">{subtitle}</p>
        </div>
        <div className="h-full flex flex-row sm:flex-col p-2 w-[30%] text-sm md:text text-primary-400 flex-grow gap-3">
          <p className="flex flex-row gap-2 items-center">
            <FaMapMarkerAlt /> {zone}
          </p>
          <p className="flex flex-row gap-2 items-center">
            <FaClock />
            {hour}
          </p>
        </div>
      </div>
      <div
        className="h-full p-2 bg-cover bg-center rounded-r-lg md:w-[350px] w-[200px] flex flex-col justify-between"
        style={{ backgroundImage: `url(${flyer})` }}
      >
        {/* Additional content can be added here if needed */}
      </div>
    </div>
  );
};

export default CardLarge;
