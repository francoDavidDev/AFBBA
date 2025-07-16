import React from "react";

const ModalInstagramWarning = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg text-center max-w-md">
        <h2 className="text-xl font-bold mb-4">¡Atención!</h2>
        <p className="mb-4">
          Estás viendo este formulario desde Instagram.  
          Por favor, copiá este enlace y abrilo desde tu navegador:
        </p>

        <div className="bg-gray-100 p-2 rounded text-blue-600 font-mono mb-4 break-words">
          https://famf.com.ar/
        </div>

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
