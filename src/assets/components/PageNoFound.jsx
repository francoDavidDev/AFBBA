import React from 'react';

const PageNoFound = ({ associationName, imageUrl }) => {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center">
      <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
        Página No Encontrada
      </h1>
      <img src={imageUrl} alt={associationName} className="mb-4 w-48 h-48 object-cover rounded" />
      <p className="text-lg mx-4">
        La asociación <strong>{associationName}</strong> no tiene página por el momento.
        <br />
        Estamos trabajando en ello para que los deportistas cuenten con una mejor experiencia.
      </p>
    </div>
  );
};

export default PageNoFound;
