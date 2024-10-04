import React, { useRef, useState } from "react";
import { PRESENT_HOME } from "../../../data";
import { ACTUALIDAD } from "../../../data";
import { IoMdFitness } from "react-icons/io";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Info = () => {
  const [dropdown, setDropdown] = useState(false);
  const [dropdown2, setDropdown2] = useState(false);
  const videoRef = useRef();

  return (
    <div className="h-[auto] w-full flex flex-col justify-start items-center py-10 xl:py-[150px] gap-y-10">
      {/* Title Section */}
      <div className="w-[90%] text-primary-400 flex flex-col items-center">
  <span className="text-lg md:text-xl uppercase">
    Preinscripción Obligatoria
  </span>
  <h2 className="text-2xl md:text-3xl uppercase text-center ">
    Noche de Campeones
  </h2>
  <span className="text-lg md:text-xl uppercase ">Amateur</span>
  <span className="italic text-base md:text-lg text-primary-200">
    Hacer click en el flyer del torneo
  </span>
</div>


      <div className="w-[90%] h-[auto] flex flex-col lg:flex-row items-start justify-between gap-5">
        {/* Card BANER MAIN */}
        {ACTUALIDAD.map((item, index) => (
          <motion.div
            key={index}
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="w-[100%] lg:w-[50%] flex flex-col gap-y-3 cursor-pointer"
          >
            <Link to={item.path}>
              <div
                onMouseEnter={() => setDropdown(true)}
                onMouseLeave={() => setDropdown(false)}
                className="w-full h-[650px] overflow-hidden rounded-xl flex flex-col justify-end cursor-pointer hover:-translate-y-1 duration-200 hover:rounded-xl hover:shadow-primary-400 hover:shadow-md shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]"
              >
                <div
                  className="h-full w-full flex bg-cover bg-top transition-all duration-200 hover:scale-110 justify-center items-center cursor-pointer"
                  style={{ backgroundImage: `url('${item.image}')` }}
                ></div>
              </div>
            </Link>
            <h4 className="h4 text-primary-200">{item.title}</h4>
            <div className="flex gap-3 items-center">
              <IoMdFitness className="text-primary-400 text-3xl" />
              <Link to={"/nocheDeCampeonesInfo"}>
                <p className="text-lg text-primary-400 font-bold hover:underline ">
                  ¡NOCHE DE CAMPEONES, HAS CLIK E INSCRIBITE!
                </p>
              </Link>
            </div>
          </motion.div>
        ))}

        {/* OTHERS OTRAS NOTICIAS */}
        <div className="w-full lg:w-[50%] my-10 md:my-0 flex gap-0 lg:gap-4 gap-y-4 justify-around lg:justify-center items-center flex-wrap">
          {PRESENT_HOME.map((item, index) => (
            <motion.div
              key={index}
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.5 }}
              onMouseEnter={() => setDropdown2(true)}
              onMouseLeave={() => setDropdown2(false)}
              className="w-full md:w-[45%] lg:w-full h-[190px] overflow-hidden rounded-xl flex flex-col justify-center cursor-pointer hover:-translate-y-1 duration-200 hover:rounded-xl hover:shadow-primary-400 hover:shadow-md shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]"
            >
              <Link
                to={`${item.path}`}
                className="h-full w-full flex bg-cover bg-top transition-all duration-200 justify-between items-center cursor-pointer"
              >
                <div className="h-full w-full">
                  <div className="h-full w-full bg-gradient-to-r from-gray-900 to-gray-600 flex flex-row justify-center items-center text-center">
                    <div className="h-full w-full">
                      <h4 className="text-md sm:text-xl uppercase p-5 flex flex-col justify-center items-start md:items-center w-full h-full truncate whitespace-normal tracking-wider">
                        {item.title}
                      </h4>
                    </div>

                    <img
                      src={item.image}
                      alt="banner"
                      className={`relative w-[40%] h-[100%] md:w-[50%] rounded-xl`}
                    />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Info;
