import React, { useState, useRef } from "react";
import video from '../../videos/oscar.mp4';
import videoPoster from '../../imgs/home/famf-bg-video-banner.svg'; // Imagen de fondo cuando el video no está en play

const Banner = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  // Función para manejar el play/pause del video
  const handlePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <section className="w-full lg:h-[90vh] h-auto flex lg:flex-row flex-col-reverse relative">
      {/* container text */}
      <div className="w-full h-full bg-black flex">
        <div className="w-[90%] m-auto h-[250px] lg:h-full flex flex-col justify-center">
          <h6 className="h6 text-primary-400">
            SEPTIEMBRE 14, 2023 | ASUNCION, PARAGUAY
          </h6>
          <h4 className="h4 text-primary-300">OSCAR VILLARREAL PRESIDENTE FAMF IFBB ARGENTINA</h4>
          <p className="h6 font-normal text-primary-200 mt-5">
            Reconocimiento a Oscar Villarreal, en la noche de campeones IFBB en Asunción, Paraguay.
          </p>
        </div>
      </div>
      
      {/* Video Container */}
      <div className="w-full h-full flex justify-center items-center">
        <video
          ref={videoRef}
          src={video}
          poster={videoPoster}  // Imagen estática de fondo
          loop
          muted
          playsInline
          className="w-[90%] h-[90vh] object-cover cursor-pointer"
          onClick={handlePlayPause}  // Permite hacer click para pausar/reproducir
        />
        {/* Botón Play sobre el video */}
        {!isPlaying && (
          <button
            onClick={handlePlayPause}
            className="absolute text-white text-4xl bg-black bg-opacity-50 p-4 rounded-full cursor-pointer"
          >
            ▶️
          </button>
        )}
      </div>
    </section>
  );
};

export default Banner;
