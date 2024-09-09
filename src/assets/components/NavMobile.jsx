import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { NAV } from "../../data";
import { RiCloseFill } from "react-icons/ri";
import logo from "../imgs/logoFAMF.png"; // Importa la imagen del logo

const NavMobile = ({ navMobile, setNavMobile }) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    // Cierra el menú móvil si el ancho de pantalla supera los 768px (tablets y mayores)
    if (windowWidth > 768) {
      setNavMobile(false);
    }
  }, [windowWidth, setNavMobile]);

  return (
    <nav
      className={`${
        navMobile ? "h-screen" : "h-0"
      } fixed top-0 left-0 right-0 bg-primary-300 overflow-hidden transition-all duration-300 ease-in-out z-40 flex flex-col items-center justify-center`}
    >
      <div className="flex items-center justify-between w-full px-6 py-4">
        <img
          src={logo}
          alt="Logo"
          className="w-20 md:w-24 h-auto" // Ajusta el tamaño del logo para móviles y tablets
        />
        <RiCloseFill
          onClick={() => setNavMobile(false)}
          className="text-white text-2xl md:text-3xl cursor-pointer"
        />
      </div>
      <ul className="w-full flex flex-col items-center justify-center gap-y-6 md:gap-y-8">
        {NAV.map((item, index) => (
          <li
            key={index}
            className="text-white font-primary font-bold text-lg md:text-xl cursor-pointer hover:text-primary-400 duration-200 ease-in-out"
          >
            <Link
              onClick={() => setNavMobile(false)} // Cierra el menú cuando se hace clic en un elemento
              to={item.href}
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavMobile;
