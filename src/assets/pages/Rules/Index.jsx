import React from "react";
import banner from '../../imgs/rules/rules2.png'

const Rules = () => {
  return (
    <section className=' className="w-full h-auto  bg-gradient-to-t from-primary-300 to-primary-100 flex flex-col justify-center '>
          <div
        className="w-full  h-[100vh] flex flex-col-reverse bg-center bg-no-repeat bg-cover "
        style={{ backgroundImage: `url('${banner}')` }}
      ></div>
        {/* Contenedor de texto/banner */}
        <div className="w-full h-auto  flex">
        {/* Contenido de texto/banner */}
        <div className="w-full h-full   flex flex-col justify-center">
          {/* Texto */}
          <div className="text-center my-10 flex flex-col gap-y-10">
            <h1 className="h1 text-primary-400">REGLAS</h1>
            <p className=" w-[90%] md:w-[70%]  text-md md:text-2xl text-left m-auto leading-relaxed tracking-[4px] font-light">
              <span className="text-primary-400 ">
                La Federación de Fisicoculturismo
              </span>{" "}
              es una organización dedicada al desarrollo y promoción del deporte
              del fisicoculturismo en nuestra comunidad y más allá. Como la
              autoridad líder en el fisicoculturismo en nuestra región, nos
              esforzamos por fomentar un ambiente inclusivo y accesible para
              atletas de todos los niveles de experiencia y habilidad.
            </p>
          </div>
          {/* Texto animado */}
          <h4 className="text-center py-5 tracking-widest">
            SOMOS EL EJEMPLO DE...
          </h4>
          <h4 className="h4 text-primary-400 text-center">
         
          </h4>
        </div>
      </div>
    </section>
  );
};

export default Rules;
