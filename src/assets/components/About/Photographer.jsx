import React from 'react';
import { PHOTOGRAPHER } from '../../data/about';

const Photographer = () => {
  // Asegúrate de que el objeto PHOTOGRAPHER contenga la URL de Instagram
  const instagramUrl = "https://www.instagram.com/santiagocastrofeijoofotografo?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="; // Usa la URL proporcionada directamente

  return (
    <div className="w-full h-auto py-10 my-10 px-3">
      <h2 className="text-4xl font-bold text-center mb-4">
        Capturando cada momento de las competiciones
      </h2>
      <p className="text-lg text-center mb-8">
      Santiago es nuestro fotógrafo principal, especializado en capturar con precisión y elegancia cada momento significativo de las competiciones a través de su aguda visión fotográfica.
      </p>
      <div className="flex justify-center items-center space-x-4">
        {PHOTOGRAPHER.map((item, index) => (
          <div
            key={item.id}
            className={`${
              index === 2
                ? 'h-96 w-2/5'  // Aumentado el tamaño de la imagen central
                : 'h-72 w-1/5'  // Aumentado el tamaño de las imágenes laterales
            }`}
          >
            <img
              src={item.image}
              alt={`Competición ${item.id + 1}`}
              className="w-full h-full object-cover rounded-2xl"
            />
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-8">
        <a
          href={instagramUrl} // Usa la URL proporcionada directamente
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-500 text-white py-2 px-4 rounded-lg shadow-lg hover:bg-blue-600 transition duration-300"
        >
          Síguelo en Instagram
        </a>
      </div>
    </div>
  );
};

export default Photographer;
