import React, { useState, useEffect } from 'react';
import { GALLERY_ABOUT } from '../../data/about';
import Modal from 'react-modal';
import { FaChevronLeft, FaChevronRight, FaTimes } from 'react-icons/fa';

const GalleryAbout = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    // Deshabilita el desplazamiento al abrir el modal
    if (modalIsOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    
    // Limpia el estilo al desmontar el componente
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [modalIsOpen]);

  const openModal = (index) => {
    setCurrentImageIndex(index);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const handlePreviousImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? GALLERY_ABOUT.length - 1 : prevIndex - 1
    );
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === GALLERY_ABOUT.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="w-full h-auto mt-10 py-10">
      <h2 className="text-3xl font-bold text-center mb-4">
        Galería de Imágenes
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 auto-rows-fr">
        {GALLERY_ABOUT.map((item, index) => (
          <div
            key={index}
            className="relative cursor-pointer"
            onClick={() => openModal(index)}
          >
            <img
              src={item.image}
              alt={`Imagen ${index + 1}`}
              className="w-full h-full object-cover transition-transform transform hover:scale-105"
            />
          </div>
        ))}
      </div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Imagen Modal"
        className="fixed inset-0 flex items-center justify-center bg-transparent"
        overlayClassName="fixed inset-0 bg-black bg-opacity-75"
        shouldCloseOnOverlayClick={true}
      >
        <div
          className="relative max-w-lg mx-auto"
          onClick={(e) => e.stopPropagation()} // Esto evita que el clic en la imagen cierre el modal
        >
          <button
            onClick={closeModal}
            className="absolute top-4 right-4 text-4xl text-white bg-gray-800 rounded-full p-2 hover:bg-gray-600 transition-colors z-50"
            aria-label="Close modal" // Añadido para accesibilidad
          >
            <FaTimes />
          </button>
          <div className="relative w-full h-auto">
            <button
              onClick={handlePreviousImage}
              className="absolute left-2 top-1/2 transform -translate-y-1/2 text-white text-3xl bg-gray-800 rounded-full p-2 hover:bg-gray-600 transition-colors z-40"
            >
              <FaChevronLeft />
            </button>
            <img
              src={GALLERY_ABOUT[currentImageIndex].image}
              alt="Imagen Ampliada"
              className="w-auto max-w-full max-h-[80vh] object-contain"
            />
            <button
              onClick={handleNextImage}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 text-white text-3xl bg-gray-800 rounded-full p-2 hover:bg-gray-600 transition-colors z-40"
            >
              <FaChevronRight />
            </button>
            <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 text-white text-sm bg-gray-800 rounded-full p-2 z-40">
              {currentImageIndex + 1} de {GALLERY_ABOUT.length}
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default GalleryAbout;
