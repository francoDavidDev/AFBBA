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

import bannerMain from "./assets/imgs/home/famf-bg-video.svg";

export const ACTUALIDAD = [
  {
    title: "MUY PRONTO NOTICIAS",
    subtitle: "Haz click en la imagen para poder informarte e inscribirte al Torneo",
    image: bannerMain,
    path: "/#",
    description:
      "El Campeonato Nacional de fisicoculturismo es el pináculo de excelencia en el ámbito deportivo, un evento que reúne a los mejores atletas de toda la nación en una exhibición de fuerza, estética y resistencia. En este torneo, cada competidor demuestra no solo su habilidad física, sino también su perseverancia y compromiso con este estilo de vida. Es una jornada donde el trabajo incansable y la disciplina se celebran, y donde cada pose y flexión reflejan años de esfuerzo y dedicación. El Campeonato Nacional es más que una competencia; es un homenaje a aquellos que viven y respiran el deporte, una plataforma donde los sueños de gloria se convierten en realidad, y el espíritu deportivo alcanza su máxima expresión.",
  },
];


import image_1 from "./assets/imgs/tournaments/nationals/flyers/CAMPEONATO_NACIONAL.jpg";
import provinciasUnidas from "./assets/imgs/tournaments/nationals/flyers/PROV_UNIDAS.jpg";
import logo from "./assets/imgs/logo.jpg";

import superpatagonico_img from './assets/imgs/tournaments/nationals/flyers/PATAGONICO_TRELEW.jpg'
import nocheDeCampeones from './assets/imgs/tournaments/internationals/flyers/nocheDeCampeones.jpg'




export const PRESENT_HOME = [
  {
    id: "1",
    title: "Resultados de CAMPEONATO NACIONAL",
    image: image_1,
    path: "/results",
    description: "Haz click para poder ver los resultados",
  },
  {
    id: "2",
    title: "Resultados de Noche de Campeones",
    image: nocheDeCampeones,
    path: "/results",
    description: "Haz click para poder ver los resultados",
  },

  {
    id: "3",
    title: "Resultados Campeonato Nacional Super Patagonico",
    image: superpatagonico_img,
    path: "/results",
    description: "Haz click para poder ver los resultados",
  },



];


