import axios from "axios";

// Configura el baseURL dependiendo del entorno (producción o desarrollo)
const InscriptionApi = axios.create({
  baseURL: process.env.NODE_ENV === 'production' 
  ? 'https://famfapiadjango.up.railway.app/famf/api/v1/PreRegistrationView/'  // URL de producción 
  : 'https://famfapiadjango.up.railway.app/famf/api/v1/PreRegistrationView/',  // URL de desarrollo
});

export const getAllInscription = () => {
  return InscriptionApi.get("/"); // Realiza la solicitud GET a la URL configurada
};

export const getInscription = (id) => {
  return InscriptionApi.get(`/${id}/`); // Realiza la solicitud GET para obtener una tarea por ID
};

export const createInscription = (inscription) => {
  return InscriptionApi.post("/", inscription); // Realiza la solicitud POST para crear una tarea
};

export const deleteInscription = (id) => {
  return InscriptionApi.delete(`/${id}/`); // Realiza la solicitud DELETE para eliminar una tarea
};

export const updateInscription = (id, inscription) => {
  return InscriptionApi.put(`/${id}/`, inscription); // Realiza la solicitud PUT para actualizar una tarea
};
