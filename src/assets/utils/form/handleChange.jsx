export const handleChange = (e) => {
  const { name, value, files } = e.target;
  const formattedValue = value.replace(",", ".");

  if (name === "photo") {
    const file = files[0];
    if (
      file &&
      (file.type === "image/png" ||
        file.type === "image/jpeg" ||
        file.type === "image/jpg")
    ) {
      setForm({ ...form, [name]: file });
    } else {
      alert("Seleccioná una imagen PNG, JPG o JPEG.");
      fileInputRef.current.value = "";
    }
  } else {
    setForm({ ...form, [name]: formattedValue });
  }
};
