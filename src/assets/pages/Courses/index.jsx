import React, { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";
import { COURSES_DATA } from "../../data/curses"; // Asegúrate de que la ruta sea correcta
import { Link } from "react-router-dom";

// Tarjeta de Curso con Popup
const CourseCard = ({ course }) => {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <motion.div
      className="relative bg-white p-4 shadow-md hover:shadow-lg transition-shadow duration-300"
      onMouseEnter={() => setShowPopup(true)}
      onMouseLeave={() => setShowPopup(false)}
      style={{ width: "calc(100% - 1rem)" }}
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
    >
      <motion.img
        src={course.image}
        alt={course.title}
        className="w-full h-64 object-cover mb-4 rounded-md"
        whileInView={{ scale: 1 }}
        initial={{ scale: 0.95 }}
        transition={{ duration: 0.5 }}
      />
      <motion.h3
        className="text-xl font-semibold mb-2"
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.5 }}
      >
        {course.title}
      </motion.h3>
      <motion.p
        className="text-gray-900 font-semibold mb-2"
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.5 }}
      >
        Duración: {course.duration}
      </motion.p>
      <motion.p
        className="text-gray-600 mb-2"
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.5 }}
      >
        Instructor: {course.instructor}
      </motion.p>
    
      {/* Popup */}
      {showPopup && (
        <motion.div
          className="absolute top-0 right-0 mr-4 w-56 bg-white p-2 rounded-lg shadow-lg flex flex-col z-50"
          style={{ transform: "translateY(10px)" }}
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <motion.h4
            className="px-2 text-sm font-semibold mb-2"
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
          >
            {course.title}
          </motion.h4>
          <motion.p
            className="text-xs text-gray-700 mb-2"
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
          >
            {course.description}
          </motion.p>
          <motion.p
            className="text-xs text-gray-900 font-semibold mb-2"
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
          >
            Precio: {course.price}
          </motion.p>
          <motion.p
            className="text-xs text-gray-600 mb-2"
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
          >
            Duración: {course.duration}
          </motion.p>
          <motion.p
            className="text-xs text-gray-600 mb-2"
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
          >
            Instructor: {course.instructor}
          </motion.p>
          <motion.p
            className="text-xs text-gray-600 mb-2"
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
          >
            Horario: {course.schedule}
          </motion.p>
          <motion.p
            className="text-xs text-gray-600 mb-2"
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
          >
            Ubicación: {course.location}
          </motion.p>
          <Link
            to={`/CourseDetails/${course.id}`}
            rel="noopener noreferrer"
            className="inline-flex items-center px-3 py-1 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-300 mt-2 text-xs"
          >
            Ir al curso
          </Link>
        </motion.div>
      )}
    </motion.div>
  );
};

const Courses = () => {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("Todos");

  // Filtrar cursos según la búsqueda y el filtro seleccionado
  const filteredCourses = COURSES_DATA.filter(
    (course) =>
      (filter === "Todos" || course.category === filter) &&
      course.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <motion.div
      className="w-full h-auto flex flex-col justify-center items-center gap-y-10 bg-gradient-to-b from-primary-300 to-black"
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: 50 }}
      transition={{ duration: 0.5 }}
    >
      {/* Banner */}
      <motion.div
        className="w-[90%] min-h-screen m-auto mt-[100px] gap-y-10"
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 50 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          className="h-[1px] bg-white flex justify-center"
          initial={{ width: 0, transformOrigin: "center" }}
          animate={{ width: "100%" }}
          transition={{ duration: 1 }}
        />
        <motion.div
          className="flex justify-center flex-col text-center mt-10"
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.5 }}
        >
          <motion.h2
            className="text-[60px] font-bold tracking-widest"
            whileInView={{ opacity: 1, scale: 1 }}
            initial={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.5 }}
          >
            AFFBA
          </motion.h2>
          <motion.p
            className="text-[30px] text-primary-400/80 mb-4"
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
          >
            FEDERACION ARGENTINA DE MUSCULACION Y FITNESS
          </motion.p>
        </motion.div>

        <motion.div
          className="container mx-auto p-6"
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.5 }}
        >
          {/* Buscador y Filtros */}
          <motion.div
            className="mb-4 flex flex-col md:flex-row gap-4"
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
          >
            <motion.input
              type="text"
              placeholder="Buscar cursos..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="p-2 border border-gray-300 rounded-lg w-full md:w-1/2 text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5 }}
            />
            <motion.select
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="p-2 border border-gray-300 rounded-lg w-full md:w-1/4 text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.5 }}
            >
              <option value="Todos">Todos</option>
              <option value="Atletismo">Atletismo</option>
              <option value="Natación">Natación</option>
              <option value="Ciclismo">Ciclismo</option>
              <option value="Yoga">Yoga</option>
              <option value="Artes Marciales">Artes Marciales</option>
              <option value="CrossFit">CrossFit</option>
              <option value="Pilates">Pilates</option>
            </motion.select>
          </motion.div>

          {/* Cursos */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6"
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.5 }}
          >
            {filteredCourses.length > 0 ? (
              filteredCourses.map((course) => (
                <CourseCard key={course.id} course={course} />
              ))
            ) : (
              <p className="text-center text-gray-700 col-span-full">
                No se encontraron cursos.
              </p>
            )}
          </motion.div>

          {/* Botón de Contacto */}
          <motion.div
            className="text-center mt-6"
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
          >
            <a
              href="https://wa.me/1234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors duration-300"
            >
              <FaWhatsapp className="mr-2" /> Contactar por WhatsApp
            </a>
          </motion.div>

          {/* Información Adicional */}
          <motion.div
            className="mt-8 p-6 bg-gray-100 rounded-lg"
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl font-semibold mb-4">
              Información Adicional
            </h2>
            <p className="text-gray-700">
              Para más información sobre nuestros cursos, horarios y precios,
              por favor no dudes en contactarnos. Estamos aquí para ayudarte a
              encontrar el curso perfecto para ti.
            </p>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Courses;
