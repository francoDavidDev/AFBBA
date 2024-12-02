import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";
import { COURSES_DATA } from "../../data/courses/index";
import flyer_1 from '../../imgs/courses/1.jpg'
import flyer_2 from '../../imgs/courses/2.jpg'
// Tarjeta de Curso con Popup
const CourseCard = ({ course }) => {

  const [showPopup, setShowPopup] = useState(false);

  return (
    <div
      className="relative group"
      onMouseEnter={() => setShowPopup(true)}
      onMouseLeave={() => setShowPopup(false)}
    >
      {/* Tarjeta del Curso */}
      <div className="relative bg-white border mb-20 border-gray-300 rounded-lg shadow-lg overflow-hidden transition-transform transform duration-300 group-hover:scale-105 h-auto">
        <Link to={`/courses/${course.id}`}>
          <img
            src={course.imageMain}
            alt={course.title}
            className="w-full h-[100%] object-cover"
          />
        </Link>
      </div>
    </div>
  );
};

// Componente principal que muestra todos los cursos
const Courses = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState("Todos");


  
  const flyers = [
    { img: flyer_1 },
    { img: flyer_2 },
  ]

  // Filtrar cursos según la búsqueda y el filtro seleccionado
  const filteredCourses = COURSES_DATA.filter(
    (course) =>
      (filter === "Todos" || course.category === filter) &&
      course.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Obtener categorías únicas de los cursos
  const categories = [
    "Todos",
    ...new Set(COURSES_DATA.map((course) => course.category)),
  ];

  return (
    <section className="w-full flex justify-center items-center flex-col gap-y-10 ">
      <motion.div
        className="w-[90%] h-auto m-auto mt-[100px]"
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
            className="text-[32px] sm:text-[40px] md:text-[50px] lg:text-[60px] font-bold tracking-widest"
            whileInView={{ opacity: 1, scale: 1 }}
            initial={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.5 }}
          >
            CURSOS
          </motion.h2>

          <motion.p
            className="text-[30px] text-primary-400/80 mb-4"
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
          >
            TODOS LOS CURSOS DISPONIBLES
          </motion.p>
        </motion.div>
      </motion.div>

      <div className=" w-[90%] h-[auto] flex items-center justify-center gap-10 flex-wrap">
      {flyers.map((item,i)=>{
        return(
          <img key={i} src={item.img} alt="" className="w-1/2 sm:w-1/4  lg:w-1/5 h-auto bg-red-400" />
        )
      
      })}
      </div>

   

      {/* Filtro y Buscador */}
      <div className="w-[90%] flex flex-col sm:flex-row justify-center items-center gap-y-4 mb-8">
        <div className="inputBox py-20 mx-auto">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            required="required"
          />
          <span>Filtrar</span>
        </div>

        {/* Filtro */}
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="w-full sm:w-1/4 p-2 bg-[#1d2b3a] border border-gray-300 text-white rounded-lg outline-none transition duration-500 ease-in-out focus:border-[#00dfc4]  mx-auto"
          style={{
            padding: "10px",
            border: "1px solid rgba(255, 255, 255, 0.25)",
            background: "#1d2b3a",
            borderRadius: "5px",
            color: "#fff",
            fontSize: "1em",
            transition: "0.5s",
          }}
        >
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      <div className="italic underline text-primary-400 text-center px-5">
        toca en las imagenes para ingresar a la informacion del curso
      </div>

      {/* Sección de tarjetas de curso */}
      <div className="w-[90%] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
        {filteredCourses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </section>
  );
};

export default Courses;
