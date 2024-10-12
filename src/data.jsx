import React from "react";

export const NAV = [
  { name: "INICIO", href: "/" },
  { name: "NOSOTROS", href: "/about" },
  { name: "REGLAMENTOS", href: "/reglaments" },
  { name: "RESULTADOS", href: "/results" },
  { name: "CURSOS", href: "/courses" },
  { name: "CALENDARIO", href: "/calendar" },
  { name: "ENTRENADORES", href: "/trainers" },
  {
    /*   { name: "Reglamentos", href: "contact" },
  { name: "Resultados", href: "contact" },
{ name: "Contacto", href: "contact" },*/
  },
];

//HOME DATA
// aqui esta la informacion de banner main

import bannerMain from "./assets/imgs/tournaments/internationals/flyers/nocheDeCampeones.jpg";
export const ACTUALIDAD = [
  {
    title: "NOCHE DE CAMPEONES",
    subtitle:
      "Haz clik en la imagen para poder informarte e inscribirte al Torneo",
    image: bannerMain,
    path: "/nocheDeCampeonesInfo",
    description:
      "En el escenario titánico del fisicoculturismo argentino, la Copa Mendoza emerge como un faro de grandeza. Aquí, en el corazón de la competencia, los músculos se convierten en pinceles y el cuerpo es el lienzo donde se escribe la epopeya de la fuerza y la dedicación.  Este evento trasciende la mera contienda; es un festival de determinación donde cada pose cuenta una historia de sacrificio y superación. Desde los debutantes que se adentran en el reino de la musculatura hasta los veteranos que han labrado su legado con sudor y esfuerzo, todos se unen en un santuario común donde la pasión se entrelaza con la gloria. En resumen, la Copa Mendoza Argentina no es solo una competencia; es una odisea, un viaje donde los límites se desafían y las leyendas se forjan en el fragor del combate físico. Es el escenario donde los cuerpos se convierten en obras maestras y donde los sueños se elevan hacia el firmamento de la eternidad.",
  },
];

import campeotanoArgentino from "./assets/imgs/tournaments/nationals/flyers/ARGENTINO.jpg";
import provinciasUnidas from "./assets/imgs/tournaments/nationals/flyers/PROV_UNIDAS.jpg";
import logo from "./assets/imgs/logo.jpg";

import superpatagonico_img from './assets/imgs/tournaments/nationals/flyers/PATAGONICO_TRELEW.jpg'


export const PRESENT_HOME = [
  {
    id: "3",
    title: "Resultados de la Copa Provincias Unidas",
    image: provinciasUnidas,
    path: "/results",
    description: "Haz click para poder ver todos los cursos diponibles",
  },
  {
    id: "2",
    title: "Resultados del Campeonato Argentino",
    image: campeotanoArgentino,
    path: "/results",
    description: "Haz click para poder ver los resultados",
  },


  {
    id: "1",
    title: "Resultados Campeonato Nacional Super Patagonico",
    image: superpatagonico_img,
    path: "/results",
    description: "Haz click para poder ver los resultados",
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
