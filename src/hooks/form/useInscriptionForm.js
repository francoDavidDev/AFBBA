import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import { createInscription } from "../../api/django.api";
import { formatDate } from "../../assets/utils/form/formatDate";
import { validateForm } from "../../assets/utils/form/validateForm";

export const useInscriptionForm = (initialForm) => {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const formRef = useRef();

  const SERVICE_ID = "service_soiecur";
  const TEMPLATE_ID = "template_2b1petm";
  const TEMPLATE_ID_CONFIRMATION = "template_vunrnaa";
  const PUBLIC_KEY = "i_NVru_5O1nhFJ0re";

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const tempErrors = validateForm(form);
    setErrors(tempErrors);

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
        to_instagram: form.instagram,
        to_event: form.event,
        message: "Formulario de Inscripción",
      };

      const apiData = {
        email: form.email,
        fullName: form.fullName,
        birthDate: form.birthDate,
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
        instagram: form.instagram,
        event: form.event,
      };

      await createInscription(apiData);

      await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY);
      await emailjs.send(SERVICE_ID, TEMPLATE_ID_CONFIRMATION, templateParams, PUBLIC_KEY);

      setModalOpen(true);
      setForm(initialForm);
    } catch (error) {
      console.error("Error en el proceso de inscripción:", error);
      if (error.response) {
        console.error("Detalle del error:", error.response.data);
      }
      toast.error("Hubo un error al procesar la inscripción.", {
        position: "top-center",
        autoClose: 5000,
      });
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
    formRef,
    handleSubmit,
  };
};
