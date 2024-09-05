import React from "react";

export const NAV = [
  { name: "INICIO", href: "/" },
  { name: "NOSOTROS", href: "/about" },
  { name: "REGLAMENTOS", href: "/reglaments" },
  { name: "RESULTADOS", href: "/results" },
  { name: "CURSOS", href: "/courses" },
  { name: "CALENDARIO", href: "/calendar" },
  { name: "ENRTENADORES", href: "/trainers" },
  {
    /*   { name: "Reglamentos", href: "contact" },
  { name: "Resultados", href: "contact" },
{ name: "Contacto", href: "contact" },*/
  },
];

//HOME DATA
// aqui esta la informacion de banner main
import bannerMain from "./assets/imgs/present/main/event1.jpg";
export const ACTUALIDAD = [
  {
    title: "COPA MENDOZA ARGENTINA",
    subtitle: "Forjando Leyendas en el Corazón del Fisicoculturismo",
    image: bannerMain,
    description:
      "En el escenario titánico del fisicoculturismo argentino, la Copa Mendoza emerge como un faro de grandeza. Aquí, en el corazón de la competencia, los músculos se convierten en pinceles y el cuerpo es el lienzo donde se escribe la epopeya de la fuerza y la dedicación.  Este evento trasciende la mera contienda; es un festival de determinación donde cada pose cuenta una historia de sacrificio y superación. Desde los debutantes que se adentran en el reino de la musculatura hasta los veteranos que han labrado su legado con sudor y esfuerzo, todos se unen en un santuario común donde la pasión se entrelaza con la gloria. En resumen, la Copa Mendoza Argentina no es solo una competencia; es una odisea, un viaje donde los límites se desafían y las leyendas se forjan en el fragor del combate físico. Es el escenario donde los cuerpos se convierten en obras maestras y donde los sueños se elevan hacia el firmamento de la eternidad.",
  },
];

import other1 from "./assets/imgs/present/others/paraguay.jpg";

export const PRESENT_HOME = [
  {
    id:'1',
    title: "Resultados T. Femenino | Cordoba",
    image: other1,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    id:'2',
    title: "Resultados Competencia de Hombres | Córdoba",
    image: other1,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    id:'3',
    title: "Resultados T. FemeninoS | Cordoba",
    image: other1,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    id:'4',
    title: "Resultados Torneo de Varones | Córdoba",
    image: other1,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
];




export const CALENDAR = [
  {
    date: "23-04",
    hour: "09:00",
    title: "Competencia de CrossFit",
    subtitle: "Desafío de circuito de alta intensidad",
    zone: "Buenos Aires, ARG",
    hours: "3",
    rules: "Inscripción previa requerida",
    clarification: "Premios para los primeros tres lugares",
  },
  {
    date: "24-04",
    hour: "14:30",
    title: "Torneo de Levantamiento de Pesas",
    subtitle: "Competición de levantamiento de pesas olímpico",
    zone: "Cordoba, ARG",
    hours: "2.5",
    rules: "Categorías por peso corporal",
    clarification: "Entrada gratuita para espectadores",
  },
  {
    date: "25-04",
    hour: "10:00",
    title: "Maratón de Carrera de Obstáculos",
    subtitle: "Recorrido con múltiples obstáculos",
    zone: "Jujuy, ARG",
    hours: "5",
    rules: "Registro en equipo requerido",
    clarification: "Premio especial para el equipo más rápido",
  },
  {
    date: "26-04",
    hour: "17:00",
    title: "Competencia de Bodybuilding",
    subtitle: "Desfile de físicos musculosos",
    zone: "Buenos Aires, ARG",
    hours: "4",
    rules: "Categorías por peso y altura",
    clarification: "Presentaciones coreografiadas",
  },
  {
    date: "27-04",
    hour: "18:00",
    title: "Torneo de Escalada en Roca",
    subtitle: "Desafío de escalada cronometrada",
    zone: "Rosario, ARG",
    hours: "3",
    rules: "Equipamiento de seguridad obligatorio",
    clarification: "Premio para el mejor tiempo",
  },
  {
    date: "28-04",
    hour: "16:30",
    title: "Mister Olimpia",
    subtitle: "Sesión de yoga en grupo",
    zone: "Puerto Madero, ARG",
    hours: "2",
    rules: "Traer tu propia esterilla",
    clarification: "Apto para todos los niveles",
  },
  {
    date: "24-09",
    hour: "12:00",
    title: "Torneo de Boxeo",
    subtitle: "Combates de boxeo amateur",
    zone: "Pinamar, ARG",
    hours: "4.5",
    rules: "Guantes y protector bucal requeridos",
    clarification: "Clasificación por categorías de peso",
  },
];

// Definimos un array de objetos que contienen iconos de redes sociales
import { BsInstagram, BsWhatsapp, BsFacebook, BsYoutube } from "react-icons/bs";

import oscar from "./assets/imgs/about/members/oscar.png";
import maria from "./assets/imgs/about/members/maria.png";

export const MEMBERS = [
  {
    name: "OSCAR",
    tag: "PRESIDENTE",
    image: oscar,
    icon_options: [
      { icon: <BsInstagram /> },
      { icon: <BsWhatsapp /> },
      { icon: <BsFacebook /> },
      { icon: <BsYoutube /> },
    ],
  },
  /* {
    name: "MARIA MERNES",
    tag: "PRESIDENTE",
    image: maria,
    icon_options: [{ icon: <BsInstagram /> }, { icon: <BsYoutube /> }],
  },*/
];
