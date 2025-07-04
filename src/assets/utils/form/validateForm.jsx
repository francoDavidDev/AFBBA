export const validateForm = (form) => {
  const tempErrors = {};
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const numberPattern = /^[0-9]+([.,][0-9]+)?$/;
  const phonePattern = /^[0-9+\-()\s]+$/;

  if (!form.email) tempErrors.email = "Correo Electrónico es requerido";
  else if (!emailPattern.test(form.email)) tempErrors.email = "Correo Electrónico no es válido";

  if (!form.fullName) tempErrors.fullName = "Nombre y Apellido es requerido";

  if (!form.birthDate) tempErrors.birthDate = "Fecha de Nacimiento es requerida";

  if (!form.dni) tempErrors.dni = "DNI / Pasaporte es requerido";

  if (!form.country) tempErrors.country = "País es requerido";
  if (!form.province) tempErrors.province = "Provincia es requerida";
  if (!form.locality) tempErrors.locality = "Localidad es requerida";

  if (!form.modality) tempErrors.modality = "Modalidad es requerida";
  if (!form.category) tempErrors.category = "Categoría es requerida";

  if (!form.competitionWeight) {
    tempErrors.competitionWeight = "Peso de Competencia es requerido";
  } else if (!numberPattern.test(form.competitionWeight)) {
    tempErrors.competitionWeight = "Debe ser un número válido (ej. 80 o 80.5)";
  }

  if (!form.height) {
    tempErrors.height = "Altura es requerida";
  } else if (!numberPattern.test(form.height)) {
    tempErrors.height = "Debe ser un número válido (ej. 175 o 1.75)";
  }

  // Teléfono opcional, pero con validación si se completa
  if (form.phone && !phonePattern.test(form.phone)) {
    tempErrors.phone = "Teléfono no es válido";
  }

  // Instagram opcional, sin validar el @

  // Entrenador opcional

  return tempErrors;
};
