import React, { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "@emailjs/browser";
import axios from 'axios';
import { LOCALITIES, MODALITIES, CATEGORIES } from "../../data/form";
import { Link } from "react-router-dom";
import { validateForm } from "../../utils/form/validateForm.jsx";
import { formatDate } from "../../utils/form/formatDate.jsx";
import { handleChange } from "../../utils/form/handleChange.jsx"


const Form = () => {
  // Credenciales emailJS
  const TEMPLATE_ID = 'template_2b1petm';
  const SERVICE_ID = 'service_zlwh8pp';
  const PUBLIC_KEY = 'i_NVru_5O1nhFJ0re';

  // Credenciales Cloudinary
  const CLOUD_NAME = 'dvsyvhqym';
  const UPLOAD_PRESET = 'Presents_Foto_Carnet';

  const [form, setForm] = useState({
    email: "",
    fullName: "",
    birthDate: "",
    dni: "",
    locality: "",
    modality: "",
    category: "",
    competitionWeight: "",
    height: "",
    phone: "",
    trainer: "",
    photo: '',
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const fileInputRef = useRef(); 
  const formRef = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Validaciones
    const tempErrors = validateForm(form);
    setErrors(tempErrors);

    // Si no hay errores, proceder con el envío del formulario
    if (Object.keys(tempErrors).length === 0) {
      try {
        if (form.photo) {
          const formattedBirthDate = formatDate(form.birthDate);

          // Subir la imagen a Cloudinary
          const formData = new FormData();
          formData.append('file', form.photo);
          formData.append('upload_preset', `${UPLOAD_PRESET}`);

          const response = await axios.post(
            `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`,
            formData
          );

          const photoUrl = response.data.secure_url;

          // Parámetros para emailJS
          const templateParams = {
            form_name: form.fullName,
            to_name: form.fullName,
            to_email: form.email,
            to_birthDate: formattedBirthDate,
            to_dni: form.dni,
            to_locality: form.locality,
            to_modality: form.modality,
            to_category: form.category,
            to_competitionWeight: form.competitionWeight,
            to_height: form.height,
            to_phone: form.phone,
            to_trainer: form.trainer,
            photo_url: photoUrl,
            message: "Formulario de Inscripción",
          };

          // Enviar correo con emailJS
          emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY)
            .then((response) => {
              console.log('Correo enviado!', response.status, response.text);
              setLoading(false);
              setModalOpen(true);
              // Resetear el formulario
              setForm({
                email: "",
                fullName: "",
                birthDate: "",
                dni: "",
                locality: "",
                modality: "",
                category: "",
                competitionWeight: "",
                height: "",
                phone: "",
                trainer: "",
                photo: '',
              });
            })
            .catch((err) => {
              console.error('Error al enviar el correo:', err);
              setLoading(false);
            });
        }
      } catch (error) {
        console.error('Error al subir la imagen:', error);
        setLoading(false);
      }
    } else {
      setLoading(false);
    }
  };

  return (
    <section className="w-full h-auto flex flex-col items-center text-gray-800 py-12 bg-primary-300">
      <div className="w-full h-auto max-w-5xl mx-auto flex flex-col justify-between items-start">
        <div className="w-full h-auto flex flex-col bg-white p-8 rounded-lg shadow-lg">
          <h3 className="h3 text-primary-100 text-2xl font-semibold mb-6 text-center">
            PREINSCRIPCIÓN A LA NOCHE DE CAMPEONES
          </h3>
          <form
            className="flex flex-col items-start space-y-6"
            ref={formRef}
            onSubmit={handleSubmit}
            encType="multipart/form-data"
            method="post"
          >
            {/* Correo Electrónico */}
            <div className="flex flex-col w-full">
              <label htmlFor="email" className="text-sm font-medium text-gray-600">
                Correo Electrónico
              </label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={(e) => handleChange(e, form, setForm)}
                className="p-2 border border-gray-300 rounded"
                placeholder="ejemplo@gmail.com"
              />
              {errors.email && <span className="text-red-500">{errors.email}</span>}
            </div>

            {/* Nombre Completo */}
            <div className="flex flex-col w-full">
              <label htmlFor="fullName" className="text-sm font-medium text-gray-600">
                Nombre Completo
              </label>
              <input
                type="text"
                name="fullName"
                value={form.fullName}
                onChange={(e) => handleChange(e, form, setForm)}
                className="p-2 border border-gray-300 rounded"
                placeholder="Juan Pérez"
              />
              {errors.fullName && <span className="text-red-500">{errors.fullName}</span>}
            </div>

            {/* Fecha de Nacimiento */}
            <div className="flex flex-col w-full">
              <label htmlFor="birthDate" className="text-sm font-medium text-gray-600">
                Fecha de Nacimiento
              </label>
              <input
                type="date"
                name="birthDate"
                value={form.birthDate}
                onChange={(e) => handleChange(e, form, setForm)}
                className="p-2 border border-gray-300 rounded"
              />
              {errors.birthDate && <span className="text-red-500">{errors.birthDate}</span>}
            </div>

            {/* DNI */}
            <div className="flex flex-col w-full">
              <label htmlFor="dni" className="text-sm font-medium text-gray-600">
                DNI
              </label>
              <input
                type="text"
                name="dni"
                value={form.dni}
                onChange={(e) => handleChange(e, form, setForm)}
                className="p-2 border border-gray-300 rounded"
                placeholder="123456789"
              />
              {errors.dni && <span className="text-red-500">{errors.dni}</span>}
            </div>

            {/* Localidad */}
            <div className="flex flex-col w-full">
              <label htmlFor="locality" className="text-sm font-medium text-gray-600">
                Localidad
              </label>
              <select
                name="locality"
                value={form.locality}
                onChange={(e) => handleChange(e, form, setForm)}
                className="p-2 border border-gray-300 rounded"
              >
                <option value="">Seleccionar Localidad</option>
                {LOCALITIES.map((locality) => (
                  <option key={locality} value={locality}>{locality}</option>
                ))}
              </select>
              {errors.locality && <span className="text-red-500">{errors.locality}</span>}
            </div>

            {/* Modalidad */}
            <div className="flex flex-col w-full">
              <label htmlFor="modality" className="text-sm font-medium text-gray-600">
                Modalidad
              </label>
              <select
                name="modality"
                value={form.modality}
                onChange={(e) => handleChange(e, form, setForm)}
                className="p-2 border border-gray-300 rounded"
              >
                <option value="">Seleccionar Modalidad</option>
                {MODALITIES.map((modality) => (
                  <option key={modality} value={modality}>{modality}</option>
                ))}
              </select>
              {errors.modality && <span className="text-red-500">{errors.modality}</span>}
            </div>

            {/* Categoría */}
            <div className="flex flex-col w-full">
              <label htmlFor="category" className="text-sm font-medium text-gray-600">
                Categoría
              </label>
              <select
                name="category"
                value={form.category}
                onChange={(e) => handleChange(e, form, setForm)}
                className="p-2 border border-gray-300 rounded"
              >
                <option value="">Seleccionar Categoría</option>
                {CATEGORIES.map((category) => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
              {errors.category && <span className="text-red-500">{errors.category}</span>}
            </div>

            {/* Peso de Competencia */}
            <div className="flex flex-col w-full">
              <label htmlFor="competitionWeight" className="text-sm font-medium text-gray-600">
                Peso de Competencia
              </label>
              <input
                type="text"
                name="competitionWeight"
                value={form.competitionWeight}
                onChange={(e) => handleChange(e, form, setForm)}
                className="p-2 border border-gray-300 rounded"
                placeholder="Ej: 80.6"
              />
              {errors.competitionWeight && <span className="text-red-500">{errors.competitionWeight}</span>}
            </div>

            {/* Altura */}
            <div className="flex flex-col w-full">
              <label htmlFor="height" className="text-sm font-medium text-gray-600">
                Altura
              </label>
              <input
                type="text"
                name="height"
                value={form.height}
                onChange={(e) => handleChange(e, form, setForm)}
                className="p-2 border border-gray-300 rounded"
                placeholder="Ej: 175"
              />
              {errors.height && <span className="text-red-500">{errors.height}</span>}
            </div>

            {/* Número de Teléfono */}
            <div className="flex flex-col w-full">
              <label htmlFor="phone" className="text-sm font-medium text-gray-600">
                Número de Teléfono
              </label>
              <input
                type="text"
                name="phone"
                value={form.phone}
                onChange={(e) => handleChange(e, form, setForm)}
                className="p-2 border border-gray-300 rounded"
                placeholder="1123456789"
              />
              {errors.phone && <span className="text-red-500">{errors.phone}</span>}
            </div>

            {/* Entrenador */}
            <div className="flex flex-col w-full">
              <label htmlFor="trainer" className="text-sm font-medium text-gray-600">
                Entrenador
              </label>
              <input
                type="text"
                name="trainer"
                value={form.trainer}
                onChange={(e) => handleChange(e, form, setForm)}
                className="p-2 border border-gray-300 rounded"
                placeholder="Entrenador"
              />
              {errors.trainer && <span className="text-red-500">{errors.trainer}</span>}
            </div>

            {/* Foto Carnet */}
            <div className="flex flex-col w-full">
              <label htmlFor="photo" className="text-sm font-medium text-gray-600">
                Foto Carnet
              </label>
              <input
                type="file"
                name="photo"
                accept="image/*"
                onChange={(e) => handleChange(e, form, setForm)}
                ref={fileInputRef}
                className="p-2 border border-gray-300 rounded"
              />
              {errors.photo && <span className="text-red-500">{errors.photo}</span>}
            </div>

            {/* Botón de Enviar */}
            <div className="flex justify-center w-full">
              <motion.button
                type="submit"
                className="bg-primary-100 text-white font-bold py-2 px-4 rounded hover:bg-primary-200"
                disabled={loading}
                whileHover={{ scale: 1.05 }}
              >
                {loading ? "Enviando..." : "Enviar"}
              </motion.button>
            </div>
          </form>

          {/* Modal de confirmación */}
          <AnimatePresence>
            {modalOpen && (
              <motion.div
                className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <div className="bg-white p-6 rounded-lg">
                  <h2 className="text-xl font-bold mb-4">¡Formulario Enviado!</h2>
                  <p>Se ha enviado correctamente tu preinscripción.</p>
                  <div className="flex justify-center mt-4">
                    <Link to="/results" className="text-primary-300 hover:underline">
                      Ver Resultados
                    </Link>
                  </div>
                  <div className="flex justify-center mt-4">
                    <motion.button
                      className="bg-primary-100 text-white font-bold py-2 px-4 rounded hover:bg-primary-200"
                      onClick={() => setModalOpen(false)}
                    >
                      Cerrar
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Form;
