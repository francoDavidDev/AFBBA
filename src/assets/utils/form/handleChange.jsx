export const handleChange = (e, form, setForm) => {
  const { name, value, files } = e.target;

  // Reemplazar comas por puntos (útil para campos numéricos)
  const formattedValue = value.replace(/,/g, ".");

  if (name === "photo") {
    const file = files[0];

    if (!file) return;

    // Verificar la extensión
    const validExtensions = ["jpg", "jpeg", "png"];
    const fileExtension = file.name.split(".").pop().toLowerCase();

    if (!validExtensions.includes(fileExtension)) {
      alert("Formato no soportado, por favor suba una imagen JPG, JPEG o PNG.");
      return;
    }

    setForm({ ...form, [name]: file });
  } else {
    setForm({ ...form, [name]: formattedValue });
  }
};
