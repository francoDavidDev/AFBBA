// src/utils/formValidation.js
export const validateForm = (form) => {
    let tempErrors = {};
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!form.email) {
        tempErrors.email = "Correo Electrónico es requerido";
    } else if (!emailPattern.test(form.email)) {
        tempErrors.email = "Correo Electrónico no es válido";
    }

    if (!form.fullName) tempErrors.fullName = "Nombre y Apellido es requerido";

    if (!/^\d{4}-\d{2}-\d{2}$/.test(form.birthDate)) {
        tempErrors.birthDate = "Fecha inválida. Use el selector de fecha.";
    }

    if (!form.dni) {
        tempErrors.dni = "DNI es requerido";
    }

    if (!form.locality) tempErrors.locality = "Localidad es requerida";

    if (!form.modality) tempErrors.modality = "Modalidad es requerida";

    if (!form.category) tempErrors.category = "Categoría es requerida";

    if (!form.competitionWeight) {
        tempErrors.competitionWeight = "Peso de Competencia es requerido";
    }

    if (!form.height) {
        tempErrors.height = "Altura es requerida";
    }

    if (!form.phone) {
        tempErrors.phone = "Teléfono es requerido";
    }

    if (!form.trainer) tempErrors.trainer = "Entrenador es requerido";

    // 🚫 Ya no validamos `photo`

    return tempErrors;
};
