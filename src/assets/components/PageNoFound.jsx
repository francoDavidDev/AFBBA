import React from "react";
import { Link, useLocation } from "react-router-dom";

const PageNoFound = () => {
  const location = useLocation();
  const { title, image } = location.state || {}; // Accede a los parámetros

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 py-10 px-4 md:px-8 lg:px-16">
      <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4 text-center">
        La asociación <span className="text-primary-400">{title}</span> no cuenta con una página web en este momento.
      </h1>
      <p className="text-lg md:text-xl text-primary-400 mb-6 text-center uppercase">
        Estamos trabajando arduamente para ofrecer a nuestros deportistas la mejor experiencia posible.
      </p>
      {image && (
        <img
          src={image}
          alt={title}
          className="w-full max-w-xs md:max-w-md lg:max-w-lg rounded-lg shadow-xl mb-8"
        />
      )}
      <p className="text-base md:text-lg text-gray-500 mb-4 text-center">
        Presidencia de FAMF
      </p>
      <Link to="/" className="mt-4 bg-blue-600 hover:bg-blue-500 text-white font-semibold py-2 px-4 rounded transition duration-300">
        Regresar a la página de inicio
      </Link>
    </div>
  );
};

export default PageNoFound;
