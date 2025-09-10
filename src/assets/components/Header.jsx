import React, { useEffect, useState } from "react";
import image from "../imgs/logoFAMF.png";
import Nav from "./Nav";
import { RiMenu4Fill, RiCloseFill } from "react-icons/ri";
import NavMobile from "./NavMobile";
import { Link } from "react-router-dom";

const Header = () => {
  const [isActive, setIsActive] = useState(false);
  const [navMobile, setNavMobile] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsActive(window.scrollY > 80);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`${
        navMobile
          ? "bg-primary-300/90 shadow-md py-4 backdrop-blur-[2px] fixed"
          : "bg-primary-300/40 py-1 backdrop-blur-[2px] static"
      } top-[-10px] w-full transition-all duration-300 z-50`}
    >
      {/* Grid 3 columnas: [logo][CENTRO NAV][acciones] */}
      <div className="mx-auto max-w-7xl grid grid-cols-[auto_1fr_auto] items-center px-4">
        {/* IZQ: Logo */}
        <Link to="/" className="flex items-center m-1">
          <img
            src={image}
            alt="logo"
            className={`${isActive ? "w-[45px]" : "w-[65px]"} transition-all duration-300`}
          />
        </Link>

        {/* CENTRO: Nav (solo desktop) SIEMPRE centrado geométricamente */}
        <div className="hidden md:flex justify-self-center h-16 items-center">
          <Nav className="h-full flex items-center" />
        </div>

        {/* DER: Toggle móvil */}
        <button
          onClick={() => setNavMobile(!navMobile)}
          className="md:hidden justify-self-end flex items-center justify-center p-2"
          aria-label={navMobile ? "Cerrar menú" : "Abrir menú"}
        >
          {navMobile ? (
            <RiCloseFill className="text-white text-3xl" />
          ) : (
            <RiMenu4Fill className="text-white text-3xl" />
          )}
        </button>
      </div>

      {/* Menú móvil */}
      <NavMobile navMobile={navMobile} setNavMobile={setNavMobile} />
    </header>
  );
};

export default Header;
