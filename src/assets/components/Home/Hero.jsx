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
      className="text-white pt-auto h-[100vh] bg-cover bg-no-repeat bg-center"
      style={{ backgroundImage: `url('${banner}')` }}
    >
    

 

   
     
    </div>
  );
}

export default Hero;
