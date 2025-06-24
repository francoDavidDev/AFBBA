export const validateForm = () => {
  let tempErrors = {};
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const dniPattern = /^[0-9]+$/;
  const phonePattern = /^\+?[\d\s]+$/;
  const weightPattern = /^[0-9]+\.[0-9]+$/;
  const heightPattern = /^[0-9]+\.[0-9]+$/;

  if (!form.email) tempErrors.email = "Correo Electrónico es requerido";
  else if (!emailPattern.test(form.email))
    tempErrors.email = "Correo no válido";

  if (!form.fullName) tempErrors.fullName = "Nombre y Apellido es requerido";

  if (!form.birthDate) {
    tempErrors.birthDate = "Fecha de nacimiento requerida";
  } else {
    const birthDate = new Date(form.birthDate);
    const today = new Date();
    const age = today.getFullYear() - birthDate.getFullYear();
    if (age < 0 || age > 100)
      tempErrors.birthDate = "Debes tener entre 18 y 100 años";
  }

  if (!form.dni) tempErrors.dni = "DNI es requerido";
  else if (!dniPattern.test(form.dni))
    tempErrors.dni = "DNI debe contener solo números";

  if (!form.locality) tempErrors.locality = "Localidad es requerida";
  if (!form.country) tempErrors.country = "País es requerido";
  if (!form.province) tempErrors.province = "Provincia es requerida";
  if (!form.modality) tempErrors.modality = "Modalidad es requerida";
  if (!form.category) tempErrors.category = "Categoría es requerida";

  if (!form.competitionWeight)
    tempErrors.competitionWeight = "Peso es requerido";
  else if (!weightPattern.test(form.competitionWeight))
    tempErrors.competitionWeight = "Debe tener formato decimal (ej: 80.6)";

  if (!form.height) tempErrors.height = "Altura es requerida";
  else if (!heightPattern.test(form.height))
    tempErrors.height = "Debe tener formato decimal (ej: 1.80)";

  if (!form.phone) tempErrors.phone = "Teléfono es requerido";
  else if (!phonePattern.test(form.phone))
    tempErrors.phone = "Teléfono no válido";

  if (!form.trainer) tempErrors.trainer = "Entrenador es requerido";

  if (!form.photo)
    tempErrors.photo = "Foto carnet requerida (jpg, jpeg o png)";

  setErrors(tempErrors);
  return Object.keys(tempErrors).length === 0;
};
