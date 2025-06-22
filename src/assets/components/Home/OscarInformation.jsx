import React, { useState, useEffect } from 'react';
import { Tilt } from 'react-tilt';
import { IoShareSocial } from 'react-icons/io5';
import { BsInstagram, BsWhatsapp } from 'react-icons/bs';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { useAnimate } from 'framer-motion';
import { Link } from 'react-router-dom';
import OscarPhoto from '../../imgs/about/members/oscar.png';

const OscarInformation = () => {
  const [hovered, setHovered] = useState(false);
  const [scope, animate] = useAnimate();
  const [scope2, animate2] = useAnimate();

  useEffect(() => {
    animate(scope.current, { opacity: hovered ? 1 : 0, x: hovered ? 0 : 10 });
    animate2(scope2.current, { opacity: hovered ? 1 : 0 });
  }, [hovered]);

  const iconOptions = [
    {
      icon: <BsInstagram />,
      href: 'https://www.instagram.com/rubenoscar.villarreal2?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==',
    },
    {
      icon: <BsWhatsapp />,
      href: 'https://wa.me/5491121736846',
    },
  ];

  return (
    <section className="w-full bg-[#091225] py-16 px-6 flex flex-col lg:flex-row items-center justify-center gap-10">
      {/* Card a la izquierda */}
      <Tilt options={{ max: 10, scale: 1.01, speed: 350 }}>
        <div
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          className="w-[300px] h-[400px] rounded-2xl overflow-hidden bg-cover bg-center relative shadow-md transition-all duration-300"
          style={{ backgroundImage: `url(${OscarPhoto})` }}
        >
          {/* Redes sociales */}
          <div
            ref={scope2}
            className="absolute top-4 right-4 flex gap-2 items-center z-10"
          >
            <div ref={scope} className="flex gap-2">
              {iconOptions.map((item, i) => (
                <a
                  key={i}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 flex justify-center items-center rounded-full bg-neutral-400 text-primary-200 hover:text-primary-400 transition-transform hover:scale-110"
                >
                  {item.icon}
                </a>
              ))}
            </div>
            <div className="w-9 h-9 flex justify-center items-center rounded-full bg-neutral-400 text-primary-200">
              <IoShareSocial className={`text-xl ${hovered ? 'text-primary-400' : ''}`} />
            </div>
          </div>
        </div>
      </Tilt>

      {/* Texto a la derecha */}
      <div className="max-w-xl text-center lg:text-left">
        <h2 className="text-primary-300 text-4xl sm:text-5xl font-bold mb-3">
          Ruben Oscar Villarreal
        </h2>
        <h3 className="text-primary-400 text-lg sm:text-xl font-semibold mb-5">
          Presidente de la Federación Argentina de Musculación y Fitness
        </h3>
        <p className="text-white/90 text-base sm:text-lg leading-8">
          Dirigente comprometido con el crecimiento del fisicoculturismo y fitness en todo el país. 
          Su gestión se caracteriza por la cercanía, el trabajo en equipo y una fuerte vocación de servicio. 
          Promotor del desarrollo deportivo, la formación y la unidad nacional dentro de la disciplina.
        </p>

        {/* Botón */}
        <div className="mt-8">
          <Link
            to="/about"
            className="inline-flex items-center gap-2 text-primary-400 hover:text-primary-200 text-lg font-medium group transition-all duration-300"
          >
            Ver todos los miembros de la FAMF
            <HiArrowNarrowRight className="transition-transform duration-300 group-hover:translate-x-1 text-2xl" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default OscarInformation;
