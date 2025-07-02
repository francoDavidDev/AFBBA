export const validateForm = (form) => {
  let tempErrors = {};
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phonePattern = /^\+?[\d\s]+$/;
  const numberPattern = /^\d+(\.\d+)?$/; // enteros o decimales

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

  if (!form.competitionWeight) tempErrors.competitionWeight = "Peso de Competencia es requerido";
  else if (!numberPattern.test(form.competitionWeight)) tempErrors.competitionWeight = "Debe ser un número válido (ej. 80 o 80.5)";

  if (!form.height) tempErrors.height = "Altura es requerida";
  else if (!numberPattern.test(form.height)) tempErrors.height = "Debe ser un número válido (ej. 175 o 1.75)";

  if (!form.phone) tempErrors.phone = "Teléfono es requerido";
  else if (!phonePattern.test(form.phone)) tempErrors.phone = "Teléfono no es válido";

  if (!form.trainer) tempErrors.trainer = "Entrenador es requerido";
  if (form.instagram && !form.instagram.startsWith("@")) {
  tempErrors.instagram = "Debe comenzar con '@'";
}


  if (!form.photo) tempErrors.photo = "Foto carnet es requerida";
  else {
    const validTypes = ["image/jpeg", "image/jpg", "image/png"];
    if (!validTypes.includes(form.photo.type)) tempErrors.photo = "La foto debe ser JPG, JPEG o PNG";
  }

  return tempErrors;
};
