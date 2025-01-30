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



{/*export const TOURNAMENTS_DATA = [
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

];*/}

export const TOURNAMENTS_DATA = {
  FEBRERO: [
    {
      date: "15 FEBRERO",
      name: "SUMMER CUP",
      location: "Carlos Paz (Cordoba)",
      organizer: "ACORFFI - Claudio Nieto",
      date_2: "15/02/25",
      link:  "https://www.instagram.com/acorffi_2021?igsh=Y21iNWJkN3VveHRp",

    },
    {
      date: "15 FEBRERO",
      name: "FITNESS VERANO",
      location: "Salta (Capital)",
      organizer: "ASFFL - Omar Bignon",
      date_2: "15/02/25",
      link:      "https://www.instagram.com/omar_bignon?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",

    },
    {
      date: "22 FEBRERO",
      name: "FLORIDA SUMMER CUP",
      location: "Rosario (Santa Fe)",
      organizer: "ASFF - ASFF",
      date_2: "22/02/25",
      link:      "https://www.instagram.com/asff_2024?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",

    }
  ],
  MARZO: [
    {
      date: "8 MARZO",
      name: "SANSON CUP",
      location: "Mar Del Plata",
      organizer: "AFIBA - Jose Lombardo",
      date_2: "08/03/25",
      link:"https://www.instagram.com/afibaoficial/"
    }
  ],
  ABRIL: [   {
    date: "20 ABRIL",
    name: "COPA FENIX",
    location: "CABA",
    organizer: "AFIC - AFIC",
    date_2: "08/03/25",
    link:      "https://www.instagram.com/afic_argentina?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",

  }],
  MAYO: [
    {
      date: "4 MAYO",
      name: "COPA VENDIMIA",
      location: "Mendoza",
      organizer: "AMFIM - AMFIM",
      date_2: "04/05/25",
      link:      "https://www.instagram.com/amfimmendoza?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",

    },
    {
      date: "11 MAYO",
      name: "CAMPEONATO APERTURA",
      location: "Merlo",
      organizer: "AFIBA - Gabriel Casado",
      date_2: "11/05/25",
            link:"https://www.instagram.com/afibaoficial/"
    },
    {
      date: "25 MAYO",
      name: "COPA NOVA",
      location: "CABA",
      organizer: "AFIC - AFIC",
      date_2: "25/05/25",
      link:      "https://www.instagram.com/afic_argentina?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",

    },
    {
      date: "31 MAYO",
      name: "COPA JAAUKANIGAS RECONQUISTA",
      location: "Santa Fe",
      organizer: "ASFF - Delia Silvia",
      date_2: "31/05/25",
      link:      "https://www.instagram.com/asff_2024?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",

    }
  ],
  JUNIO: [
    {
      date: "7 & 8 JUNIO",
      name: "OPEN INTERNACIONAL MUSUMECI IFBB",
      location: "BUENOS AIRES",
      organizer: "FAMF - Oscar Villareal",
      date_2: "07/06/25  & 08/06/2025",
      link:"https://www.instagram.com/famf_argentina?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
    },
    {
      date: "15 JUNIO",
      name: "CLORINDA OPEN - 7MA EDICION",
      location: "Formosa",
      organizer: "AFORMF - AFORMF",
      date_2: "15/06/25",
     link: "https://www.instagram.com/formosa.ifbbarg?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",

    }
  ],
  JULIO: [
    {
      date: '5 JULIO',
      name: 'PERLA DEL OESTE - 1ERA EDICION',
      location: 'RAFAELA',
      organizer: 'ASFF - Marianela Astrada',
      link:      "https://www.instagram.com/asff_2024?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
    

    },
    {
      date: '6 JULIO',
      name: 'CAMPEONATO INDEPENDENCIA',
      location: 'MERLO',
      organizer: 'AFIBA - ALEJANDRO MAIDANA',
      link:      "https://www.instagram.com/afibaoficial/",

    },
    {
      date: '6 JULIO',
      name: 'COPA SUPLEMENTO NORDESTE',
      location: 'CHACO',
      organizer: 'AMUCH - Matias Nievas',
      link:      "https://www.instagram.com/amuch_chaco?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",

    },
    {
      date: '27 JULIO',
      name: 'LA PAMPA CUP IFBB',
      location: 'LA PAMPA',
      organizer: 'ASFF - Pablo Roldan',
      link:   "https://www.instagram.com/asff_2024?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",

    },
  ],
  AGOSTO: [
    {
      date: '3 AGOSTO',
      name: 'COPA TNT CORRIENTES 3RA EDICION',
      location: 'CORRIENTES',
      organizer: 'German Guirotane',
      link:"https://www.instagram.com/acomfi.ifbb?igsh=aDRnYWs3anM0dzYz",

    },
    {
      date: '3 AGOSTO',
      name: 'COPA PROVINCIA',
      location: 'San Andres de Giles',
      organizer: 'Sebastian Barrientos',
      link:"#"
    },
    {
      date: '9 AGOSTO',
      name: 'FIT CUP',
      location: 'LAGUNA LARGA (Cordoba)',
      organizer: 'CLAUDIO NIETO - promotor',
      link:  "https://www.instagram.com/acorffi_2021?igsh=Y21iNWJkN3VveHRp",

      
    },
    {
      date: '9 AGOSTO',
      name: 'TUCUMAN IFBB CUP',
      location: 'TUCUMAN',
      organizer: 'OSCAR VILLAREAL - promotor',
      link:'https://www.instagram.com/rubenoscar.villarreal2?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=='
    },

    {
      date: '10 AGOSTO',
      name: 'COPA HERCULES',
      location: 'CABA',
      organizer: 'AFIC - AFIC (promotor)',
      link:      "https://www.instagram.com/afic_argentina?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",

    },
    {
      date: '10 AGOSTO',
      name: 'COPA DE LOS ANDES',
      location: 'MENDOZA',
      organizer: 'AMFIM - AMFIM (promotor)',
      link:      "https://www.instagram.com/amfimmendoza?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",

    },
    {
      date: '16 AGOSTO',
      name: 'MONUMENTO A LA BANDERA',
      location: 'ROSARIO',
      organizer: 'ASFF - ASFF (promotor)',
      link:      "https://www.instagram.com/asff_2024?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",

    },
    {
      date: '23 Y 24 AGOSTO',
      name: 'CAMPEONATO ARGENTINO FAMF',
      location: 'CORDOBA',
      organizer: 'ACORFFI - CLAUDIO NIETO (promotor)',
      link:      "https://www.instagram.com/acorffi_2021?igsh=Y21iNWJkN3VveHRp",

    },
  ],
  SEPTIEMPRE: [
    {
      date: 'A CONFIRMAR',
      name: 'JUEGOS UFEDEM',
      location: 'CABA',
      organizer: 'AFIC - AFIC (promotor)',
      link:      "https://www.instagram.com/afic_argentina?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",

    },
    {
      date: '6 SEPTIEMBRE',
      name: 'COPA IFBB JUJUY',
      location: 'JUJUY',
      organizer: 'AJUFF - VICTOR ORTUNO (promotor)',
      link:'#'
    },
   
    {
      date: '11 AL 15 DE SEPTIEMBRE',
      name: 'CAMPEONATO SUDAMERICANO IFBB',
      location: 'ECUADOR',
      organizer: 'PROMOTOR CONFEDERACION SUDAMERICANA',
      link:'https://www.instagram.com/famf_argentina?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=='
    },

    {
      date: '20 SEPTIEMBRE',
      name: 'COPA MISIONES IFBB',
      location: 'MISIONES',
      organizer: 'ACMUFIM - JORGE BOTHNER (promotor)',
      link:      "https://www.instagram.com/acufim_ifbb.misiones?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",

    },
    {
      date: '27 SEPTIEMBRE',
      name: 'CAMPEONATO SANTAFESINO',
      location: 'SANTA FE',
      organizer: 'ASFF - MAXI CANTERO (promotor)',
      link:      "https://www.instagram.com/asff_2024?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",

    },
    {
      date: '28 SEPTIEMBRE',
      name: 'COPA CIUDAD DE SAN JUAN',
      location: 'SAN JUAN',
      organizer: 'ACEFIS - MARTIN PAREDES (promotor)',
      link:      "https://www.instagram.com/acefissanjuan?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",

    },
  ],
  OCTUBRE: [
    {
      date: '4 Y 5 DE OCTUBRE',
      name: 'PROVINCIAS UNIDAS',
      location: 'A CONFIRMAR',
      organizer: 'ASFF - MIGUEL LUNA (promotor)',
      link:      "https://www.instagram.com/asff_2024?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",

    },
    {
      date: '11 OCTUBRE',
      name: 'COPA DOS CIUDADES - 7MA EDICION',
      location: 'VIEDMA',
      organizer: 'AR.DECF - JAVIER LINARES (promotor)',
      link:'#'
    },
   
    {
      date: '11 OCTUBRE',
      name: 'MS Y MR SALTA',
      location: 'SALTA',
      organizer: 'ASFFLYPO - OMAR BIGNON (promotor)',
      link:      "https://www.instagram.com/omar_bignon?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",

    },

    {
      date: '12 OCTUBRE',
      name: 'VICTORY CLASSIC 2025',
      location: 'ENTRE RIOS',
      organizer: 'OSCAR VILLAREAL - promotor',
      link:"https://www.instagram.com/rubenoscar.villarreal2?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
    },
    {
      date: '18 OCTUBRE',
      name: 'COPA CIUDAD DE ROSARIO',
      location: 'ROSARIO',
      organizer: 'ASFF - LEONELL GABRIELLI (promotor)',
      link:      "https://www.instagram.com/asff_2024?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",

    },
    {
      date: '18 OCTUBRE',
      name: 'SANTIAGO DEL ESTERO CLASSIC - 4TA EDICION',
      location: 'SANTIAGO DEL ESTERO',
      organizer: 'JUAN NUNO - promotor',
      link:      "https://www.instagram.com/ifbb.santiagodelestero?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",

    },
    
    {
      date: '19 OCTUBRE',
      name: 'FORMOSA FITNESS CUP - 3ERA EDICION',
      location: 'FORMOSA',
      organizer: 'AFORMF -ARMANDO BOGADO (promotor)',
      link:      "https://www.instagram.com/formosa.ifbbarg?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",

    },
    {
      date: '24 Y 25 DE OCTUBRE',
      name: 'SUPER PATAGONICO',
      location: 'CHUBUT',
      organizer: 'AFCHF - EMILIANO NOVOA (promotor)',
      link:'#'
    },
    {
      date: '26 OCTUBRE',
      name: 'CAMPEONATO BONAERENSE',
      location: 'LA PLATA',
      organizer: 'AFIBA - PABLO ROLDAN (promotor)',
      link:      "https://www.instagram.com/afibaoficial/",

    },
  ],
  NOVIEMBRE: [
    {
      date: '2 NOVIEMBRE',
      name: 'COPA MERCEDES - 3RA EDICION',
      location: 'VILLA MERCEDES (San Luis)',
      organizer: 'AFFSL - BRUNO VARGAS (promotor)',
      link:      "https://www.instagram.com/affsl.2021?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",

    },
    {
      date: '2 NOVIEMBRE',
      name: 'NEA OPEN CLASSIC',
      location: 'CORRIENTES',
      organizer: 'BOTHNER Y GUIROTANE - promotor',
      link:      "https://www.instagram.com/acomfi.ifbb?igsh=aDRnYWs3anM0dzYz",

    },
   
    {
      date: '8 Y 9 DE NOVIEMBRE',
      name: 'NOCHE DE CAMPEONES',
      location: 'ROSARIO',
      organizer: 'ASFF - MIGUEL LUNA - promotor',
      link:      "https://www.instagram.com/asff_2024?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",

    },

    {
      date: '15 NOVIEMBRE',
      name: 'GIGANTES DEL VALLE',
      location: 'RIO NEGRO',
      organizer: 'A.N.FF - CLAUDIO BORGIA (promotor)',
      link:"https://www.instagram.com/claudio.borgia75?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
    },
    {
      date: '15 NOVIEMBRE',
      name: 'COPA CENTENARIO',
      location: 'TARTAGAL (Salta)',
      organizer: 'ASFFLYPO - OMAR BIGNON (promotor)',
      link:      "https://www.instagram.com/omar_bignon?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",

    },
    {
      date: '22 NOVIEMBRE',
      name: 'CAMPEONATO CORDOBES',
      location: 'CORDOBA',
      organizer: 'ACORFFI - CLAUDIO NIETO (promotor)',
      link:      "https://www.instagram.com/acorffi_2021?igsh=Y21iNWJkN3VveHRp",

    },
    
    {
      date: '29 NOVIEMBRE',
      name: 'CAMPEONATO RIOJANO',
      location: 'LA RIOJA',
      organizer: 'ARIFFI - ERNESTINA SEGOVIA (promotor)',
      link:      "https://www.instagram.com/ariffi_larioja?igsh=bGFudncxcXNhZGF6",

    },
    {
      date: '29 NOVIEMBRE',
      name: 'CORDON INDUSTRIAL',
      location: 'SAN LORENZO',
      organizer: 'ASFF - WALTER CEBRERA (promotor)',
      link:      "https://www.instagram.com/asff_2024?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",

    },
    {
      date: '30 NOVIEMBRE',
      name: 'COPA ACONCAGUA',
      location: 'MENDOZA',
      organizer: 'AMFIM - AMFIM (promotor)',
      link:      "https://www.instagram.com/amfimmendoza?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",

    },
    {
      date: '30 NOVIEMBRE',
      name: 'CAMEONATO METROPOLINATO',
      location: 'CABA',
      organizer: 'AFIC - AFIC (promotor)',
      link:      "https://www.instagram.com/afic_argentina?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",

    },
  ],
  DICIEMBRE: [
    {
      date: '6 Y 7 DE DICIEMBRE',
      name: 'CAMPEONATO NACIONAL FAMF',
      location: 'CHACO',
      organizer: 'AMUCH - MATIAS NIEVAS (promotor)',
      link:      "https://www.instagram.com/amuch_chaco?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",

    },
    {
      date: 'A 13 DICIEMBRE',
      name: 'COPA IFBB SANTA CRUZ',
      location: 'SANTA CRUZ',
      organizer: 'ASFYC - JOSE LOMBARDO (promotor)',
      link:      "https://www.instagram.com/asfyc_fitclub?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",

    },
   
    {
      date: '14 DICIEMBRE',
      name: 'CAMPEONATO CLAUSURA',
      location: 'A CONFIRMAR',
      organizer: 'AFIBA - MARIA MERNES - promotor',
      link:      "https://www.instagram.com/afibaoficial/",

    },
  ]
}



