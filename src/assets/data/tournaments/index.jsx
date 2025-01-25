import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

import ARGENTINO_BANNER from "../../imgs/tournaments/nationals/banners/ARGENTINO.jpg";
import ARGENTINO_FLYER from "../../imgs/tournaments/nationals/flyers/ARGENTINO.jpg";

import NOCHE_CAMPEONES_BANNER from "../../imgs/tournaments/internationals/flyers/nocheDeCampeones.jpg";

import PROV_UNIDAS_BANNER from "../../imgs/tournaments/nationals/banners/PROV_UNIDAS.jpg";
import PROV_UNIDAS_FLYER from "../../imgs/tournaments/nationals/flyers/PROV_UNIDAS.jpg";

import PATAGONICO_BANNER from "../../imgs/tournaments/nationals/banners/PATAGONICO_TRELEW.jpg";
import PATAGONICO_FLYER from "../../imgs/tournaments/nationals/flyers/PATAGONICO_TRELEW.jpg";

import MERCOSUR_FLYER from "../../imgs/tournaments/internationals/flyers/mercosur.jpg";

import CAMPEONATO_NACIONAL from "../../imgs/tournaments/nationals/banners/CAMPEONATO_NACIONAL.jpg";

import MISS_ARGENTINA from "../../imgs/tournaments/internationals/flyers/missArgentina.jpg";

import FECHAS_PROXIMAMENTE from "../../imgs/tournaments/FECHAS_PROXIMAMENTE.svg";



export const TOURNAMENTS_DATA = [
  {
    id: 5,
    flyer: FECHAS_PROXIMAMENTE,
    banner: null,
    tag: "internacional",
    path: null,
    title: "COPA MERCOSUR 2024",
    address: "MENDOZA",
    locality: "ARGENTINA",
    date: "04/05/2024",
    hour_inscription: "Más información próximamente",
    start_competition: "Más información próximamente",
    more_info: [
      {
        name: "Dario Dominguez Promotor",
        contact: "+54 9 261 515 6689"
      },
      {
        name: "Osvaldo Medina Secretario",
        contact: "+54 9 379 407 6303"
      }
    ],
    social_networks: null,
    preinscription: false
  },
  {
    id: 1,
    flyer: FECHAS_PROXIMAMENTE,
    banner: FECHAS_PROXIMAMENTE,
    tag: "nacional",
    title: "CAMPEONATO ARGENTINO",
    address: "TEATRO ENRIQUE SANTOS DICEPOLO",
    date: "24/08/2024",
    locality: "Merlo",
    hour_inscription: "Sábado 09:00 a 12:00 hs",
    start_competition: "Sábado 15:00 hs - Domingo 10:00 hs",
    social_networks: [
      {
        facebook: FaFacebook,
        name: "Omar Esteban",
        href: "https://www.facebook.com/share/k2z91GEYim3n6YRd/?mibextid=LQQJ4d"
      },
      {
        instagram: FaInstagram,
        name: "Omar Bignon",
        href: "https://www.instagram.com/famf_argentina?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
      }
    ],
    preinscription: false
  },
  {
    id: 7,
    flyer: FECHAS_PROXIMAMENTE,
    banner: null,
    path: null,
    tag: "internacional",
    title: "MISS Y MISTER",
    address: "CORDOBA",
    locality: "ARGENTINA",
    date: "02/11/2024",
    hour_inscription: "Más información próximamente",
    start_competition: "Más información próximamente",
    more_info: "Más información próximamente",
    social_networks: null,
    preinscription: false
  },
  {
    id: 3,
    flyer: FECHAS_PROXIMAMENTE,
    banner: FECHAS_PROXIMAMENTE,
    tag: "nacional",
    title: "COPA PROVINCIAS UNIDAS",
    address: "CINE TEATRO AMERICA 25 DE MAYO Y ESPAÑA",
    locality: "SALTA CAPITAL",
    date: "21/09/2024",
    hour_inscription: "inscripción y pesaje de 9 a 11 hs",
    start_competition: "inicio de competencia 13:00hs",
    more_info: [
      {
        name: "Osvaldo Medina",
        contact: "+54 9 3875 702885"
      }
    ],
    social_networks: [
      {
        facebook: FaFacebook,
        name: "Omar Esteban",
        href: "https://www.facebook.com/share/QyZvRyyUd62dei5W/?mibextid=LQQJ4d"
      },
      {
        instagram: FaInstagram,
        name: "Omar Bignon",
        href: "https://www.instagram.com/omar_bignon?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
      }
    ],
    preinscription: false
  },
  {
    id: 4,
    flyer: FECHAS_PROXIMAMENTE,
    banner: FECHAS_PROXIMAMENTE,
    tag: "nacional",
    title: "SUPER PATAGONICO FISICOCULTURISMO Y FITNESS",
    address: "Más información próximamente",
    locality: "Más información próximamente",
    date: "05/10/2024",
    hour_inscription: "inscripción Sábado 10:00hs a 12:00hs",
    start_competition: "inicio de competencia 15:00hs",
    more_info: [
      {
        name: "Adrian Ledesma Presidente AF CHUBUT",
        contact: "+54 9 280 4415450"
      },
      {
        name: "Secretario FAMF",
        contact: "+54 9 3794076303"
      }
    ],
    social_networks: [
      {
        facebook: FaFacebook,
        name: "Omar Esteban",
        href: "https://www.facebook.com/share/QyZvRyyUd62dei5W/?mibextid=LQQJ4d"
      },
      {
        instagram: FaInstagram,
        name: "Omar Bignon",
        href: "https://www.instagram.com/omar_bignon?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
      }
    ],
    preinscription: false
  },
  {
    id: 2,
    path: '/nocheDeCampeonesInfo',
    flyer: FECHAS_PROXIMAMENTE,
    banner: null,
    tag: "internacional",
    title: "NOCHE DE CAMPEONES",
    address: "CORDOBA",
    locality: "CARLOS PAZ",
    date: "02/11/2024",
    hour_inscription: "Sábado 09:00 a 12:00 hs",
    start_competition: "Sábado 15:00 hs - Domingo 10:00 hs",
    more_info: "Más información próximamente",
    social_networks: null,
    preinscription: true
  },

  {
    id: 8,
    path: '/nocheDeCampeonesInfo',
    flyer: FECHAS_PROXIMAMENTE,
    banner: FECHAS_PROXIMAMENTE,
    tag: "nacional",
    title: "CAMPEONATO NACIONAL",
    address: "ROSARIO",
    locality: "ROSARIO",
    date: "30/11/2024",
    hour_inscription: "Sábado 17:00 a 19:00 hs",
    start_competition: "Domingo 18:00 hs",
    more_info: "Mas informacion en este link",
    social_networks: 'null',
    preinscription: true
  },

];
