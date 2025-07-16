import React from "react";

const ModalInstagramWarning = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const openInBrowser = () => {
    window.open("https://famf.com.ar/", "_blank");
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg text-center max-w-md">
        <h2 className="text-xl font-bold mb-4">¡Atención!</h2>
        <p className="mb-4">
          Estás viendo este formulario desde Instagram.  
          Por favor, abrilo desde el navegador de tu dispositivo (Chrome o Safari) para completar correctamente la inscripción.
        </p>
        <button
          onClick={openInBrowser}
          className="bg-primary-100 text-white px-4 py-2 rounded mb-2 w-full"
        >
          Abrir en el navegador
        </button>
        <button
          onClick={onClose}
          className="border border-gray-300 text-gray-600 px-4 py-2 rounded w-full"
        >
          Cerrar
        </button>
      </div>
    </div>
  );
};

export default ModalInstagramWarning;
