import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";

const Modal = ({ course, onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-20">
      <div className="bg-gray-900 bg-opacity-50 w-full h-full flex items-center justify-center transition-opacity duration-300 ease-in-out">
        <div className="bg-white rounded-md shadow-lg p-4 max-w-xs w-full relative">
          <button
            onClick={onClose}
            className="absolute top-1 right-1 text-gray-500 hover:text-gray-700"
          >
            &times;
          </button>
          <img
            src={course.image}
            alt={course.title}
            className="w-full h-24 object-cover rounded-md"
          />
          <h2 className="text-lg font-semibold text-gray-900 mt-3">
            {course.title}
          </h2>
          <p className="mt-2 text-xs text-gray-700">{course.description}</p>
          <p className="mt-2 text-xs text-gray-700">
            <strong>Instructor:</strong> {course.instructor}
          </p>
          <p className="mt-2 text-xs text-gray-700">
            <strong>Horario:</strong> {course.schedule}
          </p>
          <p className="mt-2 text-xs text-gray-700">
            <strong>Requisitos:</strong> {course.requirements}
          </p>
          <p className="mt-2 text-xs text-gray-700">
            <strong>Precio:</strong> {course.price}
          </p>
          <Link
            to={`https://api.whatsapp.com/send?phone=5491121736846&text=${encodeURIComponent(
              course.whatsappMessage
            )}`}
            target="_blank"
            className="flex items-center mt-3 text-green-600 hover:text-green-800 text-sm"
          >
            <FaWhatsapp className="mr-2 text-lg" />
            Contactar por WhatsApp
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Modal;
