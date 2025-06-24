import React, { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "@emailjs/browser";
import axios from "axios";
import { createInscription } from "../../../api/django.api.js";


import {
  LOCALITIES,
  PROVINCES,
  MODALITIES,
  CATEGORIES,
  SOUTH_AMERICAN_COUNTRIES,
} from "../../data/form";
import { Link } from "react-router-dom";
import { validateForm } from "../../utils/form/validateForm.jsx";
import { formatDate } from "../../utils/form/formatDate.jsx";
import { handleChange } from "../../utils/form/handleChange.jsx";

import imgCarnet1 from "../../imgs/form/imgCarnet1.jpg";
import imgCarnet2 from "../../imgs/form/imgCarnet2.jpg";
import imgCarnet3 from "../../imgs/form/imgCarnet3.jpg";
import imgCarnet4 from "../../imgs/form/imgCarnet4.webp";
import imgCarnet5 from "../../imgs/form/imgCarnet5.webp";

const Form = () => {
// Credenciales emailJS
const TEMPLATE_ID = "template_2b1petm";
const SERVICE_ID = "service_zlwh8pp";
const PUBLIC_KEY = "i_NVru_5O1nhFJ0re";

// Credenciales Cloudinary
const CLOUD_NAME = "dvsyvhqym";
const UPLOAD_PRESET = "Presents_Foto_Carnet";

const [form, setForm] = useState({
  email: "",
  fullName: "",
  birthDate: "",
  dni: "",
  country: "",
  province: "",
  locality: "",
  modality: "",
  category: "",
  competitionWeight: "",
  height: "",
  phone: "",
  trainer: "",
  photo: "",
});

const [errors, setErrors] = useState({});
const [loading, setLoading] = useState(false);
const [modalOpen, setModalOpen] = useState(false);
const fileInputRef = useRef();
const formRef = useRef();

const handleSubmit = async (e) => {
  e.preventDefault();
  setLoading(true);

  // Validar el formulario
  const tempErrors = validateForm(form);
  setErrors(tempErrors);

  const isValid = Object.keys(tempErrors).length === 0;

  if (isValid) {
    try {
      const formattedBirthDate = formatDate(form.birthDate);
      let photoUrl = "";

      if (form.photo) {
        const formData = new FormData();
        formData.append("file", form.photo);
        formData.append("upload_preset", UPLOAD_PRESET);

        const cloudinaryResponse = await axios.post(
          `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`,
          formData
        );

        photoUrl = cloudinaryResponse.data.secure_url;
      }

      const apiData = {
        email: form.email,
        fullName: form.fullName,
        birthDate: formattedBirthDate,
        dni: form.dni,
        country: form.country,
        province: form.province,
        locality: form.locality,
        modality: form.modality,
        category: form.category,
        competitionWeight: form.competitionWeight,
        height: form.height,
        phone: form.phone,
        trainer: form.trainer,
        photoUrl: photoUrl,
      };

      // Enviar datos a tu backend Django
      await createInscription(apiData);

      // Enviar correo con EmailJS
      const templateParams = {
        form_name: form.fullName,
        to_name: form.fullName,
        to_email: form.email,
        to_birthDate: formattedBirthDate,
        to_dni: form.dni,
        to_country: form.country,
        to_province: form.province,
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

      await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY);

      setModalOpen(true);
      setForm({
        email: "",
        fullName: "",
        birthDate: "",
        dni: "",
        country: "",
        province: "",
        locality: "",
        modality: "",
        category: "",
        competitionWeight: "",
        height: "",
        phone: "",
        trainer: "",
        photo: "",
      });
    } catch (error) {
      console.error("Error en el proceso de inscripción:", error);
    } finally {
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
            PREINSCRIPCIÓN PARA MUSUMECI CLASSIC INTERNATIONAL
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
              <label
                htmlFor="email"
                className="text-sm font-medium text-gray-600"
              >
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
              {errors.email && (
                <span className="text-red-500">{errors.email}</span>
              )}
            </div>

            {/* Nombre Completo */}
            <div className="flex flex-col w-full">
              <label
                htmlFor="fullName"
                className="text-sm font-medium text-gray-600"
              >
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
              {errors.fullName && (
                <span className="text-red-500">{errors.fullName}</span>
              )}
            </div>

            {/* Fecha de Nacimiento */}
            <div className="flex flex-col w-full">
              <label
                htmlFor="birthDate"
                className="text-sm font-medium text-gray-600"
              >
                Fecha de Nacimiento
              </label>
              <input
                type="date"
                name="birthDate"
                value={form.birthDate}
                onChange={(e) => handleChange(e, form, setForm)}
                className="p-2 border border-gray-300 rounded"
              />
              {errors.birthDate && (
                <span className="text-red-500">{errors.birthDate}</span>
              )}
            </div>

            {/* DNI */}
            <div className="flex flex-col w-full">
              <label
                htmlFor="dni"
                className="text-sm font-medium text-gray-600"
              >
                DNI / Pasaporte
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

            {/* País */}
            <div className="flex flex-col w-full">
              <label
                htmlFor="country"
                className="text-sm font-medium text-gray-600"
              >
                País
              </label>
              <select
                name="country"
                value={form.country}
                onChange={(e) => handleChange(e, form, setForm)}
                className="p-2 border border-gray-300 rounded"
              >
                <option value="">Seleccionar País</option>
                {SOUTH_AMERICAN_COUNTRIES.map((country) => (
                  <option key={country} value={country}>
                    {country}
                  </option>
                ))}
              </select>
              {errors.country && (
                <span className="text-red-500">{errors.country}</span>
              )}
            </div>

            {/* province - provincia */}
            <div className="flex flex-col w-full">
              <label
                htmlFor="province"
                className="text-sm font-medium text-gray-600"
              >
                Provincia
              </label>
              <select
                name="province"
                value={form.province}
                onChange={(e) => handleChange(e, form, setForm)}
                className="p-2 border border-gray-300 rounded"
              >
                <option value="">Seleccionar País</option>
                {PROVINCES.map((province) => (
                  <option key={province} value={province}>
                    {province}
                  </option>
                ))}
              </select>
              {errors.province && (
                <span className="text-red-500">{errors.province}</span>
              )}
            </div>
            {/* Localidad / Ciudad */}
            <div className="flex flex-col w-full">
              <label
                htmlFor="locality"
                className="text-sm font-medium text-gray-600"
              >
                Localidad / Ciudad
              </label>
              <input
                type="text"
                name="locality"
                value={form.locality}
                onChange={(e) => handleChange(e, form, setForm)}
                className="p-2 border border-gray-300 rounded"
                placeholder="Escriba su localidad o ciudad"
              />
              {errors.locality && (
                <span className="text-red-500">{errors.locality}</span>
              )}
            </div>

            {/* Modalidad */}
            <div className="flex flex-col w-full">
              <label
                htmlFor="modality"
                className="text-sm font-medium text-gray-600"
              >
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
                  <option key={modality} value={modality}>
                    {modality}
                  </option>
                ))}
              </select>
              {errors.modality && (
                <span className="text-red-500">{errors.modality}</span>
              )}
            </div>

            {/* Categoría */}
            <div className="flex flex-col w-full">
              <label
                htmlFor="category"
                className="text-sm font-medium text-gray-600"
              >
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
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
              {errors.category && (
                <span className="text-red-500">{errors.category}</span>
              )}
            </div>

            {/* Peso de Competencia */}
            <div className="flex flex-col w-full">
              <label
                htmlFor="competitionWeight"
                className="text-sm font-medium text-gray-600"
              >
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
              {errors.competitionWeight && (
                <span className="text-red-500">{errors.competitionWeight}</span>
              )}
            </div>

            {/* Altura */}
            <div className="flex flex-col w-full">
              <label
                htmlFor="height"
                className="text-sm font-medium text-gray-600"
              >
                Altura
              </label>
              <input
                type="text"
                name="height"
                value={form.height}
                onChange={(e) => handleChange(e, form, setForm)}
                className="p-2 border border-gray-300 rounded"
                placeholder="Ej: 1.75"
              />
              {errors.height && (
                <span className="text-red-500">{errors.height}</span>
              )}
            </div>

            {/* Número de Teléfono */}
            <div className="flex flex-col w-full">
              <label
                htmlFor="phone"
                className="text-sm font-medium text-gray-600"
              >
                Número de Teléfono (incluya el código de área de su país)
              </label>
              <input
                type="text"
                name="phone"
                value={form.phone}
                onChange={(e) => handleChange(e, form, setForm)}
                className="p-2 border border-gray-300 rounded"
                placeholder="+54 1123456789"
              />
              {errors.phone && (
                <span className="text-red-500">{errors.phone}</span>
              )}
            </div>

            {/* Entrenador */}
            <div className="flex flex-col w-full">
              <label
                htmlFor="trainer"
                className="text-sm font-medium text-gray-600"
              >
                Entrenador
              </label>
              <input
                type="text"
                name="trainer"
                value={form.trainer}
                onChange={(e) => handleChange(e, form, setForm)}
                className="p-2 border border-gray-300 rounded"
                placeholder="Coloque el nombre de su entrenador"
              />
              {errors.trainer && (
                <span className="text-red-500">{errors.trainer}</span>
              )}
            </div>

            {/* photo - foto carnet */}
            <div className="flex flex-col w-full">
              <label
                htmlFor="photo"
                className="text-sm font-medium text-gray-600"
              >
                Foto 'estilo' Carnet{" "}
                <span className="text-red-500">
                  {" "}
                  (solo se aceptan archivos jpg, jpeg y png)
                </span>
              </label>

              {/* imágenes de ejemplo */}
              <div className="w-full h-30 flex justify-center flex-col gap-y-4 items-center rounded p-2 border border-gray-300 mb-4">
                <span>
                  La fotografía debe ser tomada de frente, asegurando que el
                  rostro sea claramente visible.
                </span>{" "}
                <span>
                  Si se envía una imagen incorrecta o inapropiada, no se podrá
                  continuar con el proceso de preinscripción.
                </span>{" "}
                <span className="text-sm font-bold text-gray-600">
                  Ejemplos
                </span>
                <div className="w-full flex justify-around items-center">
                  <div
                    className="w-16 h-16 rounded-full border border-gray-300 bg-cover bg-center"
                    style={{ backgroundImage: `url(${imgCarnet1})` }}
                  ></div>
                  <div
                    className="w-16 h-16 rounded-full border border-gray-300 bg-cover bg-center"
                    style={{ backgroundImage: `url(${imgCarnet2})` }}
                  ></div>
                  <div
                    className="w-16 h-16 rounded-full border border-gray-300 bg-cover bg-center"
                    style={{ backgroundImage: `url(${imgCarnet3})` }}
                  ></div>
                  {/* Mostrar más imágenes en pantallas grandes */}
                  <div
                    className="hidden sm:block w-16 h-16 rounded-full border border-gray-300 bg-cover bg-center"
                    style={{ backgroundImage: `url(${imgCarnet4})` }}
                  ></div>
                  <div
                    className="hidden sm:block w-16 h-16 rounded-full border border-gray-300 bg-cover bg-center"
                    style={{ backgroundImage: `url(${imgCarnet5})` }}
                  ></div>
                </div>
              </div>

              <input
                type="file"
                name="photo"
                accept="image/*"
                onChange={(e) => handleChange(e, form, setForm)}
                ref={fileInputRef}
                className="p-2 border border-gray-300 rounded"
              />
              {errors.photo && (
                <span className="text-red-500">{errors.photo}</span>
              )}
            </div>

            {/* Botón de Enviar */}
            <div className="flex justify-center w-full">
              <motion.button
                type="submit"
                className="bg-primary-100 text-white font-bold py-2 px-4 rounded hover:bg-primary-300"
                disabled={loading}
                whileHover={{ scale: 1.05 }}
              >
                {loading ? "Enviando..." : "Enviar"}
              </motion.button>
            </div>
            <div className="m-auto flex flex-col justify-center items-center gap-y-5">
              {" "}
              <p>
                Si tenés algún problema o necesitás ayuda para completar el
                formulario, comunicate a este número por WhatsApp:
              </p>
              <div>
                <div className="flex justify-center items-center flex-col">
                  <p className="text-blue-500 hover:underline m-auto">
                    <a href="https://wa.me/541164235336" target="_blank">
                      +54 11 6423-5336
                    </a>

                  </p>
                  <p className="italic text-gray-600 text-sm">Hacer click en el numero para abrir WhatsApp</p>
                </div>
              </div>
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
                <div className="bg-primary-300 text-primary-200 p-6 rounded-lg">
                  <h2 className="text-xl text-primary-200 font-bold mb-4">
                    ¡Formulario Enviado!
                  </h2>
                  <p>Se ha enviado correctamente tu preinscripción.</p>
                  <div className="flex justify-center mt-4">
                    <Link
                      to="/"
                      className="text-primary-400 hover:underline bg-primary-100  font-bold py-2 px-4 rounded "
                    >
                      Volver al inicio
                    </Link>
                  </div>
                  <div className="flex justify-center mt-4">
                    <motion.button
                      className=" text-white font-bold py-2 px-4 rounded hover:bg-primary-200 hover:text-primary-300"
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
