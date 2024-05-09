import React from "react";
//import image
import banner from "../../imgs/banners/arnold.jpeg";

const Banner = () => {
  return (
    <section className="w-full lg:h-[300px] h-auto flex lg:flex-row  flex-col-reverse ">
        {/* container text */}
      <div className="w-full h-full  bg-black flex   ">
        <div className=" w-[90%] m-auto  h-[250px] lg:h-full flex flex-col justify-center ">
          <h6 className="h6 text-primary-200">
            MARZO 9-12, 2024 | BUENOS AIRES, ARG
          </h6>
          <h4 className="h4 text-primary-300"> 2024 CAMPEONATO IFBB ARGENTINO</h4>
          <p className= " h6 font-normal text-primary-200 mt-5">CHEKEA NUESTRAS REDES</p>
        </div>
      </div>
      <div className="w-full h-full bg-cover bg-no-repeat bg-center  ">
        <img src={banner} alt="banner" className="w-full  h-full  " />
      </div>
    </section>
  );
};

export default Banner;
