import React from "react";
import "../../../styles/footer/index.css";
import { NAV } from "../../../data";
import {
  FaInstagram,
  FaFacebookF,
  FaYoutube,
  FaWhatsapp,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="pb-20">
      <div className="waves">
        <div className="wave" id="wave1"></div>
        <div className="wave" id="wave2"></div>
        <div className="wave" id="wave3"></div>
        <div className="wave" id="wave4"></div>
      </div>

      {/* Redes sociales */}
      <ul className="social_icon flex justify-center space-x-4 sm:space-x-6 md:space-x-8 lg:space-x-10">
        <li>
          <a
            href="https://www.instagram.com/famf_argentina?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl sm:text-3xl lg:text-4xl text-yellow-400" // Cambiar el color aquí
          >
            <FaInstagram />
          </a>
        </li>
        <li>
          <a
            href="https://www.facebook.com/profile.php?id=61555560761729"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl sm:text-3xl lg:text-4xl text-yellow-400" // Cambiar el color aquí
          >
            <FaFacebookF />
          </a>
        </li>
        <li>
          <a
            href="https://www.youtube.com/@ifbbargentinacanaloficial6221"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl sm:text-3xl lg:text-4xl text-yellow-400" // Cambiar el color aquí
          >
            <FaYoutube />
          </a>
        </li>
        <li>
          <a
            href="https://wa.me/541121736846"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl sm:text-3xl lg:text-4xl text-yellow-400" // Cambiar el color aquí
          >
            <FaWhatsapp />
          </a>
        </li>
      </ul>

      {/* Menú de navegación con dos filas */}
      <div className="flex flex-col items-center mt-8">
        {/* Fila superior (4 enlaces) */}
        <ul className="flex justify-center space-x-4">
          {NAV.slice(0, 4).map((item, index) => (
            <li key={index}>
              <Link
                to={item.href}
                className="text-base sm:text-lg lg:text-xl hover:text-gray-400 transition-colors duration-300 text-yellow-400" // Cambiar el color aquí
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Fila inferior (3 enlaces) */}
        <ul className="flex justify-center space-x-4 mt-2">
          {NAV.slice(4, 7).map((item, index) => (
            <li key={index}>
              <Link
                to={item.href}
                className="text-base sm:text-lg lg:text-xl hover:text-gray-400 transition-colors duration-300 text-yellow-400" // Cambiar el color aquí
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Contacto */}
      <p className="text-center text-sm sm:text-base mt-8">
        <a
          href="mailto:rubenoscarvillareal1963@gmail.com"
          className="hover:text-gray-400 transition-colors duration-300 text-yellow-400" // Cambiar el color aquí
        >
          rubenoscarvillareal1963@gmail.com
        </a>
      </p>

      <p className="text-center text-sm sm:text-base mt-2">
        © 2024 FAMF PÁGINA WEB. Todos los derechos reservados.
      </p>
    </footer>
  );
};

export default Footer;
