import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MODALITIES, CATEGORIES, PROVINCES, SOUTH_AMERICAN_COUNTRIES } from "../../data/form";
import { handleChange } from "../../utils/form/handleChange";
import { useInscriptionForm } from "../../../hooks/form/useInscriptionForm";

import FormInput from "../../components/form/FormInput";
import FormSelect from "../../components/form/FormSelect";
import HelpWhatsApp from "../../components/form/HelpWhatsApp";
import SubmitButton from "../../components/SubmitButton";
import SuccessModal from "../../components/SuccessModal";
import DateInput from "../../components/form/DateInput";
import ModalInstagramWarning from "../../components/ModalInstagramWarning";

const FormPage = () => {
  const { eventName } = useParams();

  const initialForm = {
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
    instagram: "",
    event: eventName || "",
  };

  const {
    form,
    setForm,
    errors,
    loading,
    modalOpen,
    setModalOpen,
    fileInputRef,
    formRef,
    handleSubmit,
  } = useInscriptionForm(initialForm);

  const [showInstagramWarning, setShowInstagramWarning] = useState(false);

  useEffect(() => {
    if (navigator.userAgent.toLowerCase().includes("instagram")) {
      setShowInstagramWarning(true);
    }
  }, []);

  return (
    <section className="w-full h-auto flex flex-col items-center text-gray-800 py-12 bg-primary-300">
      <ModalInstagramWarning
        isOpen={showInstagramWarning}
        onClose={() => setShowInstagramWarning(false)}
      />
      <div className="w-full h-auto max-w-5xl mx-auto flex flex-col justify-between items-start">
        <div className="w-full h-auto flex flex-col bg-white p-8 rounded-lg shadow-lg">
          <h3 className="h3 text-primary-100 text-2xl font-semibold mb-6 text-center">
            PREINSCRIPCIÓN PARA {eventName?.toUpperCase() || "EVENTO"}
          </h3>

          <form
            className="flex flex-col items-start space-y-6"
            ref={formRef}
            onSubmit={handleSubmit}
            encType="multipart/form-data"
          >
            <FormInput label="Correo Electrónico" name="email" type="email" value={form.email} onChange={(e) => handleChange(e, form, setForm)} error={errors.email} placeholder="ejemplo@gmail.com" />
            <FormInput label="Nombre Completo" name="fullName" value={form.fullName} onChange={(e) => handleChange(e, form, setForm)} error={errors.fullName} placeholder="Juan Pérez" />
            <DateInput label="Fecha de Nacimiento" selectedDate={form.birthDate ? new Date(form.birthDate) : null} onChange={(date) => setForm({ ...form, birthDate: date.toISOString().split('T')[0] })} error={errors.birthDate} />
            <FormInput label="DNI / Pasaporte" name="dni" value={form.dni} onChange={(e) => handleChange(e, form, setForm)} error={errors.dni} placeholder="123456789" />
            <FormSelect label="País" name="country" value={form.country} onChange={(e) => handleChange(e, form, setForm)} options={SOUTH_AMERICAN_COUNTRIES} error={errors.country} />
            <FormInput label="Provincia" name="province" value={form.province} onChange={(e) => handleChange(e, form, setForm)} error={errors.province} placeholder="Ej: Buenos Aires" />
            <FormInput label="Localidad / Ciudad" name="locality" value={form.locality} onChange={(e) => handleChange(e, form, setForm)} error={errors.locality} placeholder="Tu ciudad" />
            <FormSelect label="Modalidad" name="modality" value={form.modality} onChange={(e) => handleChange(e, form, setForm)} options={MODALITIES} error={errors.modality} />
            <FormSelect label="Categoría" name="category" value={form.category} onChange={(e) => handleChange(e, form, setForm)} options={CATEGORIES} error={errors.category} />
            <FormInput label="Peso de Competencia" name="competitionWeight" value={form.competitionWeight} onChange={(e) => handleChange(e, form, setForm)} error={errors.competitionWeight} placeholder="Ej: 80.6" />
            <FormInput label="Altura" name="height" value={form.height} onChange={(e) => handleChange(e, form, setForm)} error={errors.height} placeholder="Ej: 1.75" />
            <FormInput label="Número de Teléfono (con código de país)" name="phone" value={form.phone} onChange={(e) => handleChange(e, form, setForm)} error={errors.phone} placeholder="+54 1123456789" />
            <FormInput label="Entrenador" name="trainer" value={form.trainer} onChange={(e) => handleChange(e, form, setForm)} error={errors.trainer} placeholder="Nombre de su entrenador" />
            <FormInput label="Tu Instagram" name="instagram" value={form.instagram} onChange={(e) => handleChange(e, form, setForm)} error={errors.instagram} placeholder="Usuario de Instagram" />
            <div className="flex justify-center w-full">
              <SubmitButton loading={loading} text="Enviar" />
            </div>
            <HelpWhatsApp />
          </form>

          <SuccessModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
        </div>
      </div>
    </section>
  );
};

export default FormPage;
