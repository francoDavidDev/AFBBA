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
    const handleScroll = () => {
      setIsActive(window.scrollY > 80);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`${
        isActive
          ? "bg-primary-300/90 shadow-md py-4 backdrop-blur-[2px]" // Fondo translúcido cuando está activo
          : "bg-primary-300/40 py-1 backdrop-blur-[2px]" // Fondo translúcido más claro cuando está arriba
      } fixed top-[-10px] w-full flex items-center justify-between transition-all duration-300 z-50`}
    >
      <Link to="/" className="flex items-center m-1">
        <img
          src={image}
          alt="logo"
          className={`${
            isActive ? "w-[45px]" : "w-[65px]"
          } transition-all duration-300`}
        />
      </Link>

      {/* Nav for desktop */}
      <Nav className="hidden md:flex" isActive={isActive} />

      {/* Toggle buttons for mobile */}
      <div
        onClick={() => setNavMobile(!navMobile)}
        className="md:hidden flex items-center justify-center p-2"
      >
        {navMobile ? (
          <RiCloseFill className="text-white text-3xl cursor-pointer" />
        ) : (
          <RiMenu4Fill className="text-white text-3xl cursor-pointer" />
        )}
      </div>

      {/* Mobile nav menu */}
      <NavMobile navMobile={navMobile} setNavMobile={setNavMobile} />
    </header>
  );
};

export default Header;
