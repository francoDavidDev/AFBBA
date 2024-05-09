import React, { useEffect, useState } from "react";
// Importamos el componente Tilt de la biblioteca react-tilt, para aplicar efectos de inclinación a elementos DOM
import { Tilt } from "react-tilt";
// Importamos la imagen de un miembro del comité desde su ruta

import { IoShareSocial } from "react-icons/io5";
import { GiBiceps } from "react-icons/gi";
// Definimos un array de objetos que contienen iconos de redes sociales
import { BsInstagram, BsWhatsapp, BsFacebook, BsYoutube } from "react-icons/bs";
import { MEMBERS } from "../../../data";
import { useAnimate } from "framer-motion";

const Members = () => {
  const [scope, animate] = useAnimate();
  const [scope2, animate2] = useAnimate();
  // Definimos dos variables de estado "scope" y "scope2" utilizando el hook useAnimate de framer-motion

  const [dropdown, setDropdown] = useState("");
  const [dropdownOption, setDropdownOption] = useState(false);
  // Definimos dos variables de estado "dropdown" y "dropdownOption" utilizando el hook useState de React

  useEffect(() => {
    const handleAnimate = async () => {
      dropdownOption
        ? await animate(scope.current, { opacity: 1, x: 0 })
        : await animate(scope.current, { opacity: 0, x: 10 });
    };
    // Definimos un efecto secundario que se ejecuta cuando dropdownOption cambia
    handleAnimate();
  }, [dropdownOption]);

  useEffect(() => {
    const handleAnimate = async () => {
      dropdown
        ? await animate2(scope2.current, { opacity: 1 })
        : await animate2(scope2.current, { opacity: 0 });
    };
    // Definimos un efecto secundario que se ejecuta cuando dropdown cambia
    handleAnimate();
  }, [dropdown]);
  return (
    <div className="w-full h-[auto] flex-col flex justify-center items-center  py-20">
      <h4 className=" w-[90%] h4 uppercase py-10 text-primary-400  flex items-center gap-5">
        IFBB INTEGRANTES <GiBiceps className="h4" />
      </h4>
      {/* Contenedor de tarjeta */}
      <div className="w-full h-[400px]  flex justify-center items-center">
        {MEMBERS.map((item, index) => (
          <Tilt key={index} option={{ max: 45, scale: 1, speed: 450 }}>
            <div
              onMouseEnter={() => setDropdown("OSCAR")}
              onMouseLeave={() => setDropdown("")}
              className="w-[300px] h-[350px] bg-blue-500 rounded-2xl overflow-hidden  transition-all duration-300 hover:text-primary-400   hover:shadow-primary-400 hover:shadow-md  shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]"
            >
              {/* Imagen */}
              <div
                className="object-cover w-full h-full py-2 bg-cover bg-center bg-no-repeat flex flex-col justify-end items-center"
                style={{ backgroundImage: `url('${item.image}')` }}
              >
                {/* Iconos de redes sociales */}
                <div
                  ref={scope2}
                  onMouseEnter={() => setDropdownOption(true)}
                  onMouseLeave={() => setDropdownOption(false)}
                  className="relative bottom-[67%] right-3 cursor-pointer w-full duration-200 h-10 flex justify-end items-center rounded-full px-3"
                >
                  <div
                    ref={scope}
                    className="flex-row w-[80%] justify-center gap-3 flex relative"
                  >
                    {/* Mapeo de icon_options */}
                    {item.icon_options.map((item, i) => (
                      <div
                        key={i}
                        className="relative cursor-pointer w-10 h-10 hover:scale-110 flex hover:text-primary-400 text-primary-200 justify-center items-center bg-neutral-400 rounded-full"
                      >
                        {item.icon}
                      </div>
                    ))}
                  </div>
                  {/* Icono de compartir */}
                  <div className="w-10 h-10 text-primary-200 flex justify-center items-center bg-neutral-400 rounded-full">
                    <IoShareSocial
                      className={`${
                        dropdownOption ? "text-primary-400" : "text-primary-200"
                      } text-2xl`}
                    />
                  </div>
                </div>
                {/* Menú de opciones */}
                <h4 className="text-primary-200 h4">{item.name}</h4>
                <h6
                  className={`${
                    dropdown === "OSCAR"
                      ? "text-primary-400 scale-150 shadow-xl"
                      : "text-primary-200"
                  } h6 transition-all duration-200`}
                >
                  {item.tag}
                </h6>
              </div>
            </div>
          </Tilt>
        ))}
        {/* Tarjeta */}
      </div>
    </div>
  );
};

export default Members;
