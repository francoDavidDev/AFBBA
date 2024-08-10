import React, { useEffect, useState, useRef } from "react";
import { delay, motion, useAnimate } from "framer-motion";
import image from "../imgs/calendar/wheyProtein.jpg";
import banner from "../imgs/calendar/bannerMain2.png";
import poweradeVideo from "../videos/powerade.mp4";
import { CALENDAR } from "../../data";
import CardLarge from "../components/Calendar/CardLarge";
import CardSmall from "../components/Calendar/CardSmall";
import file from "../../files/rules.pdf";
import bsn from '../imgs/sponsors/bsn.jpg';
import sansongym from '../imgs/sponsors/sansongym.jpg';
import vees from '../imgs/sponsors/vees.jpg';

const SPONSORS = [
  { image: bsn },
  { image: sansongym },
  { image: vees },
];

const ElitePro = () => {
  const [w, setW] = useState(window.innerWidth);
  const [dropdown, setDropdown] = useState("");
  const videoRef = useRef();

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
    <section className="w-full h-auto bg-gradient-to-t from-primary-300 to-primary-100 flex flex-col justify-center">
      <div
        className="w-full h-[100vh] flex flex-col-reverse bg-center bg-no-repeat bg-cover"
        style={{ backgroundImage: `url('${banner}')` }}
      ></div>

      <div className="w-full h-auto flex">
        <div className="w-full h-full flex flex-col justify-center">
          <div className="text-center my-10 flex flex-col gap-y-10">
            <h1 className="h1 text-primary-400">CALENDARIO</h1>
            <p className="w-[90%] md:w-[70%] text-lg md:text-2xl text-left m-auto tracking-[4px] leading-loose font-light">
              <span className="text-primary-400">
                La Federación de Fisicoculturismo
              </span>{" "}
              El calendario es una herramienta indispensable para los
              aficionados y competidores de todo el país. Aquí, los usuarios
              pueden explorar y acceder a información detallada sobre los
              próximos torneos, incluyendo fechas, ubicaciones y detalles sobre
              las categorías de competición. Además, el calendario proporciona
              información sobre las reglas y regulaciones de cada torneo,
              garantizando así que los participantes estén debidamente
              informados y preparados para competir. Ya sea que se trate de un
              culturista experimentado o un novato entusiasta.
            </p>
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center flex-col text-center gap-y-6 py-10">
        <h2 className="h3 uppercase text-primary-400 w-[90%]">
          ENTERATE DE LOS ULTIMOS EVENTOS
        </h2>
        <h5 className="h5 w-[90%] md:w-[70%] text-left text-lg tracking-[4px] font-light">
          Podes ver en nuestro calendario los últimos eventos, no te quedes
          afuera, anotate como competidor o como visitante. Lee bien las reglas
          y las fechas de los eventos.
        </h5>
      </div>

      <div className="h-[auto] w-[98%] m-auto flex lg:flex-row flex-col justify-center gap-y-5 items-start">
        <div className="md:w-[100%] w-[100%] h-[auto] gap-y-5 flex flex-col justify-center items-center">
          {CALENDAR.map((item, index) =>
            w <= 640 ? (
              <CardSmall
                key={index}
                date={item.date}
                title={item.title}
                subtitle={item.subtitle}
                hour={item.hour}
                hours={item.hours}
                zone={item.zone}
                rules={item.rules}
                file={file}
              />
            ) : (
              <CardLarge
                key={index}
                date={item.date}
                title={item.title}
                subtitle={item.subtitle}
                hour={item.hour}
                hours={item.hours}
                zone={item.zone}
                rules={item.rules}
                file={file}
              />
            )
          )}
        </div>

        <div className="h-[full] md:h-[auto] w-full lg:w-[30%] flex flex-row gap-5 lg:flex-col justify-center items-center flex-wrap">
          <img src={image} alt="" className="w-full h-full sm:w-[300px] sm:h-[200px]" />
          <img src={image} alt="" className="w-full h-full sm:w-[300px] sm:h-[200px]" />
        </div>
      </div>

      <div className="w-full h-[auto] py-5 justify-center items-center">
        <div className="w-[90%] flex justify-start items-center m-auto py-10">
          <h5 className="h5 text-primary-400">EVENT SPONSORS</h5>
        </div>
        <div className="w-[90%] m-auto">
          <div className="flex flex-row justify-start items-center m-auto gap-x-10">
            {SPONSORS.map((item, index) => (
              <div key={index} className="w-[200px] h-[100px]">
                <img src={item.image} alt="" className="w-full h-full" />
              </div>
            ))}
            <div className="w-[500px] h-[200px] flex-grow">
              <video
                className="pointer-events-none w-full h-full scale"
                playsInline
                preload="none"
                muted
                autoPlay
                loop
              >
                <source src={poweradeVideo} ref={videoRef} type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ElitePro;
