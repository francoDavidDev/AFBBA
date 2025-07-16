// utils/handlers.js

export const handleChange = (e, form, setForm) => {
  const { name, value, files, type } = e.target;

  if (name === "photo") {
    setForm({ ...form, [name]: files[0] });
    return;
  }

  if (name === "birthDate") {
    // Validar que venga en formato YYYY-MM-DD (lo hace el date input)
    setForm({ ...form, [name]: value });
    return;
  }

  const formattedValue = value.replace(',', '.');
  setForm({ ...form, [name]: formattedValue });
};
