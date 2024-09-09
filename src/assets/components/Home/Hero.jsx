import React, { useEffect, useRef, useState } from "react";

//import logo
import logo from "../../imgs/logo.png";
//import banner
import banner from "../../imgs/hero/BANNER FAMF.png";

function Hero() {
  const videoRef = useRef();
  const [w, setW] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setW(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      className="text-white pt-auto bg-cover bg-no-repeat bg-center"
      style={{
        backgroundImage: `url('${banner}')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: w < 768 ? '50vh' : '100vh', // Ajusta la altura para móviles y tablets
      }}
    >
      {/* Puedes agregar contenido aquí, si es necesario */}
    </div>
  );
}

export default Hero;
