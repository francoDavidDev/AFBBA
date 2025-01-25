import React from "react";
import { motion } from "framer-motion";
import "../../../styles/footer/index.css";
import { NAV } from "../../../data";
import {
  FaInstagram,
  FaFacebookF,
  FaYoutube,
  FaWhatsapp,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { SPONSORS } from "../../data/sponsors/index";

const Footer = () => {
  const sponsorVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (index) => ({
      opacity: 1,
      y: 0,
      transition: { delay: index * 0.2 },
    }),
  };

  const footerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5 } },
  };

  return (
    <motion.footer
      className="relative pb-20 -z-10"
      variants={footerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Waves */}
      <div className="waves">
        <div className="wave" id="wave1"></div>
        <div className="wave" id="wave2"></div>
        <div className="wave" id="wave3"></div>
        <div className="wave" id="wave4"></div>
      </div>

      {/* Sponsors */}
      <div className="flex flex-col items-center mt-8 sm:flex-row sm:justify-between sm:px-4">
        {SPONSORS.map((sponsor, index) => (
          <motion.a
            key={index}
            href={sponsor.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 mx-2 my-2 hover:scale-110 transition-transform"
            custom={index}
            initial="hidden"
            animate="visible"
            variants={sponsorVariants}
          >
            <img
              src={sponsor.image}
              alt={sponsor.alt}
              className="w-28 h-auto object-contain rounded-md"
            />
          </motion.a>
        ))}
      </div>

      {/* Redes sociales */}
      <ul className="social_icon flex justify-center space-x-4 sm:space-x-6 md:space-x-8 lg:space-x-10">
        <li>
          <a
            href="https://www.instagram.com/famf_argentina?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl sm:text-3xl lg:text-4xl text-yellow-400"
          >
            <FaInstagram />
          </a>
        </li>
        <li>
          <a
            href="https://www.facebook.com/profile.php?id=61555560761729"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl sm:text-3xl lg:text-4xl text-yellow-400"
          >
            <FaFacebookF />
          </a>
        </li>
        <li>
          <a
            href="https://www.youtube.com/@ifbbargentinacanaloficial6221"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl sm:text-3xl lg:text-4xl text-yellow-400"
          >
            <FaYoutube />
          </a>
        </li>
        <li>
          <a
            href="https://wa.me/541121736846"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl sm:text-3xl lg:text-4xl text-yellow-400"
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
                className="text-base sm:text-lg lg:text-xl hover:text-gray-400 transition-colors duration-300 text-yellow-400"
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
                className="text-base sm:text-lg lg:text-xl hover:text-gray-400 transition-colors duration-300 text-yellow-400"
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
          className="hover:text-gray-400 transition-colors duration-300 text-yellow-400"
        >
          rubenoscarvillareal1963@gmail.com
        </a>
      </p>

      <p className="text-center text-sm sm:text-base mt-2">
        © 2024 FAMF PÁGINA WEB. Todos los derechos reservados.
      </p>
    </motion.footer>
  );
};

export default Footer;
