// hooks/useInscriptionForm.js
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import axios from "axios";
import { toast } from "react-toastify";
import { createInscription } from "../../api/django.api";
import { formatDate } from "../../assets/utils/form/formatDate";
import { validateForm } from "../../assets/utils/form/validateForm";

export const useInscriptionForm = (initialForm) => {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const fileInputRef = useRef();
  const formRef = useRef();

  const CLOUD_NAME = "dvsyvhqym";
  const UPLOAD_PRESET = "Presents_Foto_Carnet";
  const SERVICE_ID = "service_zlwh8pp";
  const TEMPLATE_ID = "template_2b1petm";
  const TEMPLATE_ID_CONFIRMATION = "template_vunrnaa";
  const PUBLIC_KEY = "i_NVru_5O1nhFJ0re";

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const tempErrors = validateForm(form);
    setErrors(tempErrors);

    // Mostrar toast y scrollear al primer error
    if (Object.keys(tempErrors).length > 0) {
      const firstErrorKey = Object.keys(tempErrors)[0];
      toast.error(tempErrors[firstErrorKey], {
        position: "top-center",
        autoClose: 4000,
      });

      const field = document.querySelector(`[name="${firstErrorKey}"]`);
      if (field) field.scrollIntoView({ behavior: "smooth", block: "center" });

      setLoading(false);
      return;
    }

    try {
      const formattedBirthDate = formatDate(form.birthDate);

      // Subir foto a Cloudinary
      const formData = new FormData();
      formData.append("file", form.photo);
      formData.append("upload_preset", UPLOAD_PRESET);

      const res = await axios.post(
        `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`,
        formData
      );

      const photoUrl = res.data.secure_url;

      const templateParams = {
        form_name: form.fullName,
        to_name: form.fullName,
        to_email: form.email,
        to_birthDate: formattedBirthDate,
        to_dni: form.dni,
        to_locality: form.locality,
        to_country: form.country,
        to_province: form.province,
        to_modality: form.modality,
        to_category: form.category,
        to_competitionWeight: form.competitionWeight,
        to_height: form.height,
        to_phone: form.phone,
        to_trainer: form.trainer,
        photo_url: photoUrl,
        to_instagram: form.instagram,

        message: "Formulario de Inscripción",
      };

      const apiData = {
        ...form,
        birthDate: formattedBirthDate,
        photoUrl,
      };

      await createInscription(apiData);

      await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY);
      await emailjs.send(SERVICE_ID, TEMPLATE_ID_CONFIRMATION, templateParams, PUBLIC_KEY);

      setModalOpen(true);
      setForm(initialForm);
      fileInputRef.current.value = "";
    } catch (error) {
      console.error("Error en el proceso de inscripción:", error);
      toast.error("Hubo un error al procesar la inscripción.");
    }

    setLoading(false);
  };

  return {
    form,
    setForm,
    errors,
    loading,
    modalOpen,
    setModalOpen,
    fileInputRef,
    formRef,
    handleSubmit,
  };
};
