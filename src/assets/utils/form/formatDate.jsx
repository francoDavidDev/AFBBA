// src/utils/dateUtils.js
export const formatDate = (dateString) => {
  if (!dateString) return "";
  const [year, month, day] = dateString.split("-");
  return `${day}/${month}/${year}`; // "27/06/1992"
};
