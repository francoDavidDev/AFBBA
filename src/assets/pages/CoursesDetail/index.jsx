import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useParams } from 'react-router-dom';
import { COURSES_DATA } from '../../data/curses';

const CourseDetails = () => {
  const { courseId } = useParams();
  const course = COURSES_DATA.find(course => course.id === parseInt(courseId));

  if (!course) {
    return <p className="text-center text-gray-400">Curso no encontrado.</p>;
  }

  return (
    <div className="w-full h-auto flex flex-col items-center gap-y-10 bg-gradient-to-b from-gray-900 to-black text-white py-20">
      <div className="w-[90%] max-w-7xl mx-auto mt-8 gap-y-10">
        
        {/* Línea blanca animada */}
        <motion.div
          className="h-[1px] bg-white flex justify-center mb-8"
          initial={{ width: 0, transformOrigin: "center" }}
          animate={{ width: "100%" }}
          transition={{ duration: 1 }}
        />

        <motion.div
          className="flex flex-col items-center text-center"
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.5 }}
        >
          <motion.h2
            className="text-4xl md:text-6xl font-bold tracking-widest"
            whileInView={{ opacity: 1, scale: 1 }}
            initial={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.5 }}
          >
            {course.title}
          </motion.h2>
          <motion.p
            className="text-lg md:text-2xl text-primary-400 mb-4"
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
          >
            {course.category}
          </motion.p>
        </motion.div>

        <motion.div
          className="flex flex-col lg:flex-row gap-8 bg-gray-800 rounded-lg shadow-lg p-6"
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.5 }}
        >
          <motion.img
            src={course.image}
            alt={course.title}
            className="w-full lg:w-2/3 h-[400px] object-cover rounded-lg"
            whileInView={{ scale: 1 }}
            initial={{ scale: 0.95 }}
            transition={{ duration: 0.5 }}
          />
          <motion.div
            className="flex flex-col gap-4"
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
          >
            <motion.h3
              className="text-2xl font-semibold mb-2"
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.5 }}
            >
              Detalles del Curso
            </motion.h3>
            <motion.p
              className="text-lg"
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.5 }}
            >
              <strong>Duración:</strong> {course.duration}
            </motion.p>
            <motion.p
              className="text-lg"
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.5 }}
            >
              <strong>Instructor:</strong> {course.instructor}
            </motion.p>
            <motion.p
              className="text-lg"
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.5 }}
            >
              <strong>Precio:</strong> {course.price}
            </motion.p>
            <motion.p
              className="text-lg"
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.5 }}
            >
              <strong>Horario:</strong> {course.schedule}
            </motion.p>
            <motion.p
              className="text-lg"
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.5 }}
            >
              <strong>Ubicación:</strong> {course.location}
            </motion.p>
            <motion.p
              className="text-lg"
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.5 }}
            >
              <strong>Descripción:</strong> {course.description}
            </motion.p>
          </motion.div>
        </motion.div>

        <motion.div
          className="text-center mt-8"
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.5 }}
        >
          <a
            href={`https://wa.me/541121736846?text=Hola,%20estoy%20interesado%20en%20el%20curso%20de%20${course.title}.%20¿Podrías%20darme%20más%20información?`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors duration-300"
          >
            <FaWhatsapp className="mr-2" /> Contactar por WhatsApp
          </a>
        </motion.div>

        <motion.div
          className="mt-8 p-6 bg-gray-800 rounded-lg"
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-semibold mb-4">Información Adicional</h2>
          <p className="text-gray-300">Para más información sobre este curso, horarios y precios, por favor no dudes en contactarnos. Estamos aquí para ayudarte a encontrar el curso perfecto para ti.</p>
        </motion.div>
      </div>
    </div>
  );
};

export default CourseDetails;
