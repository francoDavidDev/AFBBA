import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

import ARGENTINO_BANNER from '../../imgs/tournaments/nationals/banners/ARGENTINO.jpg'
import ARGENTINO_FLYER from '../../imgs/tournaments/nationals/flyers/ARGENTINO.jpg'

import NOCHE_CAMPEONES_BANNER from '../../imgs/tournaments/internationals/flyers/nocheDeCampeones.jpg'

import PROV_UNIDAS_BANNER from '../../imgs/tournaments/nationals/banners/PROV_UNIDAS.jpg'
import PROV_UNIDAS_FLYER from '../../imgs/tournaments/nationals/flyers/PROV_UNIDAS.jpg'


import PATAGONICO_BANNER from '../../imgs/tournaments/nationals/banners/PATAGONICO_TRELEW.jpg'
import PATAGONICO_FLYER from '../../imgs/tournaments/nationals/flyers/PATAGONICO_TRELEW.jpg'


import MERCOSUR_FLYER from '../../imgs/tournaments/internationals/flyers/mercosur.jpg'

export const TOURNAMENTS_DATA = [
  {
    id: 1,
    flyer: ARGENTINO_FLYER,
    banner: ARGENTINO_BANNER,
    title: "CAMPEONATO ARGENTINO",
    tag: "nacional",
    address: "TEATRO ENRIQUE SANTOS DICEPOLO",
    date: "2024-08-24",
    formattedDate: "2024-08-24", // Considera poner una fecha válida o eliminarla si no es aplicable
    locality: "Merlo",
    hour_inscription: "Sábado 09:00 a 12:00 hs",
    start_competition: "Sábado 15:00 hs - Domingo 10:00 hs",
    social_networks: [
      {
        facebook: <FaFacebook />,
        name: "Omar Esteban",
        href: "https://www.facebook.com/share/k2z91GEYim3n6YRd/?mibextid=LQQJ4d",
      },
      {
        instagram: <FaInstagram />,
        name: "Omar Bignon",
        href: "https://www.instagram.com/famf_argentina?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
      },
    ],
  },
  {
    id: 2,
    flyer: NOCHE_CAMPEONES_BANNER,
    banner: null,
    tag: "internacional",
    title: "NOCHE DE CAMPEONES",
    address: "CORDOBA",
    locality: "CARLOS PAZ",
    date: "2 y 3 de Noviembre",
    formattedDate: "2024-11-02", // Formato estandarizado
    hour_inscription: "Sábado 09:00 a 12:00 hs",
    start_competition: "Sábado 15:00 hs - Domingo 10:00 hs",
    more_info: null,
    social_networks: null,
  },
  {
    id: 3,
    flyer: PROV_UNIDAS_FLYER,
    banner: PROV_UNIDAS_BANNER,
    tag: "nacional",
    title: "COPA PROVINCIAS UNIDAS",
    address: "CINE TEATRO AMERICA 25 DE MAYO Y ESPAÑA",
    locality: "SALTA CAPITAL",
    date: "21 de Septiembre",
    formattedDate: "2024-09-21", // Formato estandarizado
    hour_inscription: "inscripción y pesaje de 9 a 11 hs",
    start_competition: "inicio de competencia 13:00hs",
    more_info: [{ name: "Osvaldo Medina ", contact: "+54 9 3875 702885" }],
    social_networks: [
      {
        facebook: <FaFacebook />,
        name: "Omar Esteban",
        href: "https://www.facebook.com/share/QyZvRyyUd62dei5W/?mibextid=LQQJ4d",
      },
      {
        instagram: <FaInstagram />,
        name: "Omar Bignon",
        href: "https://www.instagram.com/omar_bignon?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
      },
    ],
  },
  {
    id: 4,
    flyer: PATAGONICO_FLYER,
    banner: PATAGONICO_BANNER,
    tag: "nacional",
    title: "SUPER PATAGONICO 'FISICOCULTURISMO Y FITNESS",
    address: null,
    locality: null,
    date: "Sabado 5 de Octubre",
    formattedDate: "2024-10-05", // Formato estandarizado
    hour_inscription: "inscripción Sábado 10:00hs a 12:00hs",
    start_competition: "inicio de competencia 15:00hs",
    more_info: [
      {
        name: "Adrian Ledesma Presidente AF CHUBUT",
        contact: "+54 9 280 4415450",
      },
      { name: "Secretario FAMF", contact: "+54 9 3794076303" },
    ],
    social_networks: [
      {
        facebook: <FaFacebook />,
        name: "Omar Esteban",
        href: "https://www.facebook.com/share/QyZvRyyUd62dei5W/?mibextid=LQQJ4d",
      },
      {
        instagram: <FaInstagram />,
        name: "Omar Bignon",
        href: "https://www.instagram.com/omar_bignon?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
      },
    ],
  },
  {
    id: 5,
    flyer: MERCOSUR_FLYER,
    banner: null,
    tag: "internacional",
    title: "COPA MERCOSUR 2024",
    address: 'MENDOZA',
    locality: 'ARGENTINA',
    date: "4 Y 5 DE MAYO",
    formattedDate: "2024-05-04", // Formato estandarizado
    hour_inscription: null,
    start_competition: null,
    more_info: [
      {
        name: "Dario Dominguez Promotor",
        contact: "+54 9 261 515 6689",
      },
      { name: "Osvaldo Medina Secretario", contact: "+54 9 379 407 6303" },
    ],
    social_networks: null
  },
];

