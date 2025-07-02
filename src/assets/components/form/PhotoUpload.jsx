import React from "react";
import imgCarnet1 from "../../imgs/form/imgCarnet1.jpg";
import imgCarnet2 from "../../imgs/form/imgCarnet2.jpg";
import imgCarnet3 from "../../imgs/form/imgCarnet3.jpg";
import imgCarnet4 from "../../imgs/form/imgCarnet4.webp";
import imgCarnet5 from "../../imgs/form/imgCarnet5.webp";

const PhotoUpload = ({ onChange, error, inputRef }) => (
  <div className="flex flex-col w-full">
    <label htmlFor="photo" className="text-sm font-medium text-gray-600">
      Foto 'estilo' Carnet
      <span className="text-red-500"> (solo se aceptan archivos jpg, jpeg y png)</span>
    </label>

    <div className="w-full h-30 flex justify-center flex-col gap-y-4 items-center rounded p-2 border border-gray-300 mb-4">
      <span>
        La fotografía debe ser tomada de frente, asegurando que el rostro sea claramente visible.
      </span>
      <span>
        Si se envía una imagen incorrecta o inapropiada, no se podrá continuar con el proceso de preinscripción.
      </span>
      <span className="text-sm font-bold text-gray-600">Ejemplos</span>
      <div className="w-full flex justify-around items-center">
        {[imgCarnet1, imgCarnet2, imgCarnet3, imgCarnet4, imgCarnet5].map((img, idx) => (
          <div
            key={idx}
            className={`w-16 h-16 rounded-full border border-gray-300 bg-cover bg-center ${idx > 2 ? "hidden sm:block" : ""}`}
            style={{ backgroundImage: `url(${img})` }}
          ></div>
        ))}
      </div>
    </div>

    <input
      type="file"
      name="photo"
      accept="image/*"
      onChange={onChange}
      ref={inputRef}
      className="p-2 border border-gray-300 rounded"
    />
    {error && <span className="text-red-500">{error}</span>}
  </div>
);

export default PhotoUpload;