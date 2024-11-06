import React, { useState } from 'react';
import { motion } from 'framer-motion'; // Importing motion from framer-motion
import { CAMPEONATO_NACIONAL } from '../../data/campeonatoNacional';
import { Link } from 'react-router-dom';

const CampeonatoNacional = () => {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  const renderDescription = (descripcion) => {
    if (descripcion.includes('-')) {
      const items = descripcion.split('-').map((item, index) => <li key={index}>{item.trim()}</li>);
      return <ul className="list-disc pl-5">{items}</ul>;
    }
    return <p>{descripcion}</p>;
  };

  return (
    <div className="container mx-auto p-4 h-auto">
      {CAMPEONATO_NACIONAL.map((evento, index) => (
        <motion.div
          key={index}
          className="mb-8  rounded-lg p-6"
          initial={{ opacity: 0, scale: 0.95 }} // Initial animation state
          animate={{ opacity: 1, scale: 1 }} // Animate to these values
          transition={{ duration: 0.3 }} // Duration of the animation
        >
          {/* Encabezado del evento */}
          <div className="text-center mb-4 flex flex-col">
            {/* Image at the top */}
            <img 
              src={evento.image} // Replace with the actual image URL/path
              alt={evento.descripcion}
               className="w-[50%] sm:w-[30%] h-[20%] mb-4 rounded-lg m-auto"
            />
            <h1 className="text-3xl font-bold text-white mb-2">{evento.descripcion}</h1>
            <p className="text-lg text-[#FFB11B]">{evento.localidad} {evento.provincia}</p>
            <p className="text-lg text-[#FFB11B]">{evento.fecha}</p>
            {/* Download Button */}
         
            <Link
                to={'/formInscription'}
              
                rel="noopener noreferrer"
                className="mt-4 inline-block bg-[#FFB11B] text-[#033667] font-semibold py-2 px-4 rounded-lg"
              >
                Preinscripción
              </Link>
          </div>

          {/* Secciones interactivas */}
          <div>
            {/* Inscripción */}
            <motion.div className="mb-4">
              <button
                onClick={() => toggleSection('inscripcion')}
                className="w-full bg-[#033667] text-[#FFB11B] font-semibold py-2 px-4 rounded-lg"
              >
                {openSection === 'inscripcion' ? 'Cerrar Inscripción' : 'Ver Inscripción'}
              </button>
              {openSection === 'inscripcion' && (
                <motion.div
                  className="mt-2 text-white"
                  initial={{ height: 0 }} // Initial height for the collapsing animation
                  animate={{ height: 'auto' }} // Animate to auto height
                  transition={{ duration: 0.3 }} // Duration for height transition
                >
                  <p><strong>Inscripción:</strong> {evento.inscripcion}</p>
                  <p><strong>Inicio del evento:</strong> {evento.inicio_evento}</p>
                </motion.div>
              )}
            </motion.div>

            {/* Información adicional de inscripciones */}
            <motion.div className="mb-4">
              <button
                onClick={() => toggleSection('informacion')}
                className="w-full bg-[#033667] text-[#FFB11B] font-semibold py-2 px-4 rounded-lg"
              >
                {openSection === 'informacion' ? 'Cerrar Información Importante' : 'Información Importante'}
              </button>
              {openSection === 'informacion' && (
                <motion.div
                  className="mt-2 text-white"
                  initial={{ height: 0 }}
                  animate={{ height: 'auto' }}
                  transition={{ duration: 0.3 }}
                >
                  <p><strong>Información sobre inscripciones:</strong></p>
                  <ul className="list-disc pl-5">
                    {[
                      'Para abrir categorías debe haber tres atletas.',
                      'Todos los atletas deben presentar DNI, Pasaporte o Documentación de su país.',
                      'Durante el pesaje, cada atleta debe presentar un USB que contenga la música de competencia en formato MP3, con el tiempo establecido en el reglamento. El uso de lenguaje profano, vulgar y ofensivo está estrictamente prohibido para la música de posar.',
                      'Todos los medios de comunicación deben tener acreditación de prensa para el mismo, otorgada por la comisión organizadora del torneo.',
                      'El acceso al área de calentamiento y vestidores estará controlado por pulseras/precintos.'
                    ].map((dato, idx) => (
                      <li key={idx}>{dato}</li>
                    ))}
                  </ul>
                </motion.div>
              )}
            </motion.div>

            {/* Contacto */}
            <motion.div className="mb-4">
              <button
                onClick={() => toggleSection('contacto')}
                className="w-full bg-[#033667] text-[#FFB11B] font-semibold py-2 px-4 rounded-lg"
              >
                {openSection === 'contacto' ? 'Cerrar Contacto' : 'Ver Contacto'}
              </button>
              {openSection === 'contacto' && (
                <motion.div
                  className="mt-2 text-white"
                  initial={{ height: 0 }}
                  animate={{ height: 'auto' }}
                  transition={{ duration: 0.3 }}
                >
                  {evento.contacto.map((contacto, idx) => (
                    <p key={idx}><strong>{contacto.organizador || 'Secretaría'}:</strong> {contacto.numero}</p>
                  ))}
                  <a
                    href={evento.redes_sociales}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary-400 hover:underline mt-2 block"
                  >
                    Instagram Oficial
                  </a>
                </motion.div>
              )}
            </motion.div>

       

       


            <a 
              href={evento.pdf} // Replace with the actual PDF URL/path
              download // This attribute triggers a download
              className="mt-4 w-full text-center   inline-block italic font-semibold py-2 px-4 rounded-lg"
            >
              Descargar toda la información
            </a>
          </div>
       
        </motion.div>
      ))}
      
    </div>
  );
};

export default CampeonatoNacional;
