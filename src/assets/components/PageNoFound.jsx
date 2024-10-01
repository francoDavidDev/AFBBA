import React from 'react';
import { Link } from 'react-router-dom';

const PageNoFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen  p-6">
      <h1 className="text-3xl font-bold mb-2">La asociación no posee web</h1>
      <p className="text-lg mb-4">
        Pero estamos trabajando en ello para que los deportistas tengan la mejor experiencia de usuario.
      </p>
      <div className="text-sm text-gray-600 mb-4">
        Presidencia de FAMF
      </div>
      <Link to="/" className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-700 transition">
        Volver al inicio
      </Link>
    </div>
  );
};

export default PageNoFound;
