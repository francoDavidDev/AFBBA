import React from "react";
import image1 from "../../imgs/about/info/image_1.jpg";
import image2 from "../../imgs/about/info/image_2.jpg";
import image3 from "../../imgs/about/info/image_3.jpg";

const Info = () => {
  return (
    <div className="flex flex-col w-full h-auto py-10 text-white">
      {/* Sección de título y descripción */}
      <div className="flex flex-col w-full px-5">
        <div className="w-full flex flex-col items-center text-center mb-8">
          <h2 className="text-3xl font-bold mb-4">SOBRE NOSOTROS</h2>
          <h2 className="text-2xl font-bold mb-4">
            Federación Argentina de Musculación y Fitness
          </h2>
        </div>

        <div className="text-white text-left">
          <p className="mb-6 text-white/60">
            Bienvenidos a la FEDERACIÓN ARGENTINA DE MUSCULACIÓN Y FITNESS,
            FAMF, fundada en 2003, con el propósito de promover, las prácticas
            del fisicoculturismo y fitness en Argentina. Desde su fundación,
            FAMF cuenta con un estatuto que la estructura e hizo posible la
            adhesión de 23 asociaciones provinciales que hoy la conforman,
            consolidándose como la principal entidad nacional, afiliada a la
            INTERNATIONAL FEDERATION OF BODYBUILDING (IFBB) y a la Confederación
            Sudamericana IFBB. Promovemos estándares de calidad y normativas
            claras dentro del deporte del fisicoculturismo argentino, además de
            tener en nuestro calendario más de 50 competencias anuales en todo
            el país.
            <br />
            <br />
            El deporte de la musculación y el fitness no solo fomenta la salud
            física, sino que también inculca valores fundamentales como
            disciplina, constancia, respeto y superación. Estos valores son
            esenciales para el desarrollo integral de los jóvenes y adultos,
            contribuyendo positivamente a la sociedad mediante la promoción de
            un estilo y hábitos de vida saludables.
          </p>
          <p className="mb-6 text-white/60">
            Nuestra misión es brindar un espacio de entrenamiento y crecimiento
            para atletas que practiquen el fisicoculturismo y el fitness, de
            todos los niveles, desde principiantes hasta profesionales. En FAMF,
            creemos en el poder del culturismo para transformar vidas y mejorar
            la salud física y mental.
            <br />
            <br />
            Hoy, somos una institución líder en el impulso de la musculación y
            el fitness, con una comunidad creciente de atletas y seguidores. En
            nuestra página web, encontrarás información sobre nuestros programas
            de entrenamiento, educación, eventos, competencias y actualidad.
          </p>
        </div>
      </div>

      {/* Sección de imágenes */}
      <div className="w-full px-5 mt-4">
        <div className="grid grid-cols-1 gap-4">
          <div key="1" className="relative cursor-pointer">
            <img
              src={image1}
              alt="Imagen 1"
              className="w-full h-auto object-cover rounded-xl shadow-lg transition-transform transform hover:scale-105"
            />
          </div>
          <div key="2" className="relative cursor-pointer">
            <img
              src={image2}
              alt="Imagen 2"
              className="w-full h-auto object-cover rounded-xl shadow-lg transition-transform transform hover:scale-105"
            />
          </div>
          <div key="3" className="relative cursor-pointer">
            <img
              src={image3}
              alt="Imagen 3"
              className="w-full h-auto object-cover rounded-xl shadow-lg transition-transform transform hover:scale-105"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
