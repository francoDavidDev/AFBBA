import React from "react";
// import icon
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaClock } from "react-icons/fa";
import { IoIosArrowRoundForward } from "react-icons/io";
import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";



const CardLarge = ({ title, subtitle, zone, hours, rules, hour,date, file }) => {

  const RULES_PDF = file

  const downloadFileAtURL=(url)=>{
    fetch(url).then(response => response.blob()).then(blob=>{
      const blobURL = window.URL.createObjectURL(new Blob([blob]))
      const fileName = url.split('/').pop()
      const aTag = document.createElement('a')
      aTag.href = blobURL
      aTag.setAttribute('download', fileName)
      document.body.appendChild(aTag)
      aTag.click()
      aTag.remove();
    })
   
  }

  return (
    <div className="w-[95%] bg-[#282728] rounded-lg text-primary-200   md:h-[110px] sm:h-[140px] lg:h-[100px] flex flex-col sm:flex-row justify-between items-center hover:-translate-y-2  transition-all duration-300  hover:rounded-xl  hover:shadow-primary-400 hover:shadow-md  shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]    ">
      <div className="h-full w-[150px] sm:w-[90px] p-3  ">
        <h6 className="h5 text-primary-200">{date}</h6>
      </div>
      <div className=" h-full w-[100%]   flex flex-col sm:flex-row justify-between  text-left ">
        <div className="p-2 w-[65%]  flex  flex-col justify-start gap-y-2 ">
          <h6 className="text-primary-200 font-bold h6 sm:text-xl  ">
            {" "}
            {title}
          </h6>
          <p className="font-light text-sm sm:text-lg ">{subtitle}</p>
        </div>
        <div className="h-full flex flex-row  sm:flex-col p-2 w-[30%]  text-sm md:text text-primary-400 flex-grow gap-3">
          <p className="flex flex-row gap-2  items-center ">
            {" "}
            <FaMapMarkerAlt /> {zone}
          </p>
          <p className="flex flex-row gap-2   items-center">
            {" "}
            <FaClock />
            {hour}
          </p>
          <p className="flex flex-row gap-2   items-center">
            {" "}
            <FaClock />
            {hours}
          </p>
        </div>
      </div>

      <div className="h-full p-2 bg-neutral-400 rounded-r-lg md:w-[350px] w-[200px] flex flex-col justify-between ">
        <h6 className="h6 text-primary-200 ">
          <span className="text-primary-400  ">{rules.split(" ")[0]}</span>{" "}
          {rules.substring(rules.indexOf(" ") + 1)}
        </h6>
        <div className="flex justify-around items-end">
          <p onClick={()=>{downloadFileAtURL(RULES_PDF)}  }  className="text-sm hover:text-primary-400 transition-all duration-200 cursor-pointer hover:scale-105  ">
          VER REGLAS</p>
          <p className="text-sm  hover:text-primary-400 hover:scale-105 transition-all duration-200 cursor-pointer  ">INSCRIPCIONES</p>
        
        </div>

      </div>
     
    </div>
  );
};

export default CardLarge;
