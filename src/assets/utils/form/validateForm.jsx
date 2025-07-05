// src/utils/formValidation.js
export const validateForm = (form) => {
    let tempErrors = {};
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const weightPattern = /^[0-9]*\.[0-9]+$/; // número decimal flexible
    const heightPattern = /^[0-9]*\.[0-9]+$/; // número decimal flexible

    if (!form.email) {
        tempErrors.email = "Correo Electrónico es requerido";
    } else if (!emailPattern.test(form.email)) {
        tempErrors.email = "Correo Electrónico no es válido";
    }

    if (!form.fullName) tempErrors.fullName = "Nombre y Apellido es requerido";

    if (!form.birthDate) {
        tempErrors.birthDate = "Fecha de Nacimiento es requerida";
    }

    if (!form.dni) {
        tempErrors.dni = "DNI es requerido";
    }

    if (!form.locality) tempErrors.locality = "Localidad es requerida";

    if (!form.modality) tempErrors.modality = "Modalidad es requerida";

    if (!form.category) tempErrors.category = "Categoría es requerida";

    if (!form.competitionWeight) {
        tempErrors.competitionWeight = "Peso de Competencia es requerido";
    } else if (!weightPattern.test(form.competitionWeight)) {
        tempErrors.competitionWeight = "Debe ser un número decimal (por ejemplo, 80.6)";
    }

    if (!form.height) {
        tempErrors.height = "Altura es requerida";
    } else if (!heightPattern.test(form.height)) {
        tempErrors.height = "Debe ser un número decimal (por ejemplo, 1.80)";
    }

    if (!form.phone) {
        tempErrors.phone = "Teléfono es requerido";
    }

    if (!form.trainer) tempErrors.trainer = "Entrenador es requerido";

    // 🚫 Ya no validamos `photo`

    return tempErrors;
};
