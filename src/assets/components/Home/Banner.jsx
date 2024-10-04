import React, { useEffect, useRef } from "react";
import video from '../../videos/oscar.mp4';

const Banner = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  }, []);

  return (
    <section className="w-full lg:h-[300px] h-auto flex lg:flex-row flex-col-reverse">
      {/* container text */}
      <div className="w-full h-full bg-black flex">
        <div className="w-[90%] m-auto h-[250px] lg:h-full flex flex-col justify-center">
          <h6 className="h6 text-primary-400">
            SEPTIEMBRE 14, 2023 | ASUNCION, PARAGUAY
          </h6>
          <h4 className="h4 text-primary-300">OSCAR VILLARREAL PRESIDENTE FAMF IFBB ARGENTINA</h4>
          <p className="h6 font-normal text-primary-200 mt-5">
            Reconocimiento a Oscar Villarreal, en la noche de campeones IFBB en Asunción, Paraguay.
          </p>
        </div>
      </div>
      <div className="w-full h-full bg-cover bg-no-repeat bg-center">
        <video
          ref={videoRef}
          src={video}
          loop
          muted
          autoPlay
          playsInline
          className="w-full h-full object-cover pointer-events-none"
        />
      </div>
    </section>
  );
};

export default Banner;
