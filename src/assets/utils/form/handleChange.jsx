export const handleChange = (e, form, setForm) => {
  const { name, value, files } = e.target;

  // Reemplazar comas por puntos
  const formattedValue = value.replace(/,/g, '.');

  if (name === "photo") {
      const file = files[0];
      
      // Verificar la extensión del archivo
      const validExtensions = ['jpg', 'jpeg', 'png'];
      const fileExtension = file?.name.split('.').pop().toLowerCase();

      if (file && !validExtensions.includes(fileExtension)) {
          alert('Formato no soportado, por favor suba otra imagen o conviértalo.');
      } else {
          setForm({ ...form, [name]: file });
      }
  } else {
      setForm({ ...form, [name]: formattedValue });
  }
};
