import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";



import CAMPEONATO_ARGENTINO_2025 from "../../imgs/tournaments/nationals/flyers/2025/CAMPEONATO_ARGENTINO.jpg";
import CAMPEONATO_NACIONAL_2025 from "../../imgs/tournaments/nationals/flyers/2025/CAMPEONATO_NACIONAL.jpg";
import SUPER_PATAGONICO_2025 from "../../imgs/tournaments/nationals/flyers/2025/SUPER_PATAGONICO.jpg";

import MUSUMECI_2025 from "../../imgs/tournaments/nationals/flyers/2025/MUSUMECI_2025.jpg";
import NOCHE_CAMPEONES_2025 from "../../imgs/tournaments/nationals/flyers/2025/NOCHE_CAMPEONES.jpg";
import COPA_PROVINCIAS_UNIDAS from "../../imgs/tournaments/nationals/flyers/2025/COPA_PROVINCIAS_UNIDAS.jpg";


export const TOURNAMENTS_NATIONALS = [
  {
    id: 1,
    flyer: CAMPEONATO_ARGENTINO_2025,
    banner: null,
    tag: "nacional",
    path: null,
    title: "CAMPEONATO ARGENTINO 2025",
    address: "CORDOBA",
    locality: "ARGENTINA",
    date: "23-24 AGOSTO",
    hour_inscription: "Más información próximamente",
    start_competition: "Más información próximamente",
    more_info: [
      {
        name: "Claudio Nieto",
        contact: "+54 9 3515104601"
      },

    ],
    social_networks: null,
    preinscription: false
  },
  {
    id: 2,
    flyer: COPA_PROVINCIAS_UNIDAS,
    banner: null,
    path: null,
    tag: "nacional",
    title: "COPA PROVINCIAS UNIDAS",
    address: "ROSARIO",
    locality: "ARGENTINA",
    date: "25 DE OCTUBRE",
    hour_inscription: "",
    start_competition: "",
    more_info: "",
    social_networks: [
      {
        name: "Adrian Ledesma",
        contact: "+54 9 280 4415450"
      },

    ],
    preinscription: false
  },
  {
    id: 3,
    flyer: SUPER_PATAGONICO_2025,
    banner: null,
    path: null,
    tag: "nacional",
    title: "SUPER PATAGONICO",
    address: "CHUBUT",
    locality: "ARGENTINA",
    date: "25 DE OCTUBRE",
    hour_inscription: "09:00HS  12:00hs",
    start_competition: "Inicio a las 15:00hs",
    more_info: "Más información próximamente",
    social_networks: [
      {
        name: "Adrian Ledesma",
        contact: "+54 9 280 4415450"
      },

    ],
    preinscription: false
  },
  {
    id: 4,
    flyer: CAMPEONATO_NACIONAL_2025,
    banner: null,
    tag: "nacional",
    title: "CAMPEONATO NACIONAL",
    address: "CHACO",
    date: "6 Y 7 DE DICIEMBRE",
    locality: "CHACO",
    hour_inscription: "Informacion Proximamente",
    start_competition: "Informacion Proximamente",
    social_networks: [
      {
        name: "Matias Nievas",
        contact: "362 4568947"
      },

    ],
    preinscription: false
  },

  {
    id: 5,
    flyer: MUSUMECI_2025,
    banner: null,
    tag: "internacional",
    title: "MUSUMECI CLASSIC INTERNACIONAL",
    address: "BUENOS AIRES",
    date: "2 & 3 DE AGOSTO",
    locality: "BUENOS AIRES",
    hour_inscription: "Informacion Proximamente",
    start_competition: "Informacion Proximamente",
    social_networks: null,
    preinscription: false
  },
  {
    id: 5,
    flyer: MUSUMECI_2025,
    banner: null,
    tag: "internacional",
    title: "MUSUMECI CLASSIC INTERNACIONAL",
    address: "BUENOS AIRES",
    date: "2 & 3 DE AGOSTO",
    locality: "BUENOS AIRES",
    hour_inscription: "Informacion Proximamente",
    start_competition: "Informacion Proximamente",
    social_networks: null,
    preinscription: false
  },

  {/*  {
    id: 5,
    flyer: NOCHE_CAMPEONES_2025,
    banner: null,
    tag: "internacional",
    title: "NOCHE DE CAMPEONES",
    address: "ROSARIO ARGENTINA",
    date: "8 & 9 DE AGOSTO",
    locality: "ROSARIO",
    hour_inscription: "Informacion Proximamente",
    start_competition: "Informacion Proximamente",
    social_networks: [
      {
        name: "Miguel Luna",
        contact: "-54 1158061674"
      },

    ],
    preinscription: false
  },*/}

];

export const TOURNAMENTS_DATA = {
  FEBRERO: [
    {
      date: "15 FEBRERO",
      name: "SUMMER CUP",
      location: "Carlos Paz (Cordoba)",
      organizer: "ACORFFI - Claudio Nieto",
      date_2: "15/02/25",
      link: "https://www.instagram.com/acorffi_2021?igsh=Y21iNWJkN3VveHRp",

    },
    {
      date: "15 FEBRERO",
      name: "FITNESS VERANO",
      location: "Salta (Capital)",
      organizer: "ASFFL - Omar Bignon",
      date_2: "15/02/25",
      link: "https://www.instagram.com/omar_bignon?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",

    },
    {
      date: "22 FEBRERO",
      name: "FLORIDA SUMMER CUP",
      location: "Rosario (Santa Fe)",
      organizer: "ASFF - ASFF",
      date_2: "22/02/25",
      link: "https://www.instagram.com/asff_2024?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",

    }
  ],
  MARZO: [
    {
      date: "8 MARZO",
      name: "SANSON CUP",
      location: "Mar Del Plata",
      organizer: "AFIBA - Jose Lombardo",
      date_2: "08/03/25",
      link: "https://www.instagram.com/afibaoficial/"
    }
  ],
  ABRIL: [
    {
    date: "20 ABRIL",
    name: "COPA FENIX",
    location: "CABA",
    organizer: "AFIC - AFIC",
    date_2: "08/03/25",
    link: "https://www.instagram.com/afic_argentina?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",

  }],
  MAYO: [
    {
      date: "4 MAYO",
      name: "COPA VENDIMIA",
      location: "Mendoza",
      organizer: "AMFIM - AMFIM",
      date_2: "04/05/25",
      link: "https://www.instagram.com/amfimmendoza?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",

    },
    {
      date: "11 MAYO",
      name: "CAMPEONATO APERTURA",
      location: "Merlo",
      organizer: "AFIBA - Gabriel Casado",
      date_2: "11/05/25",
      link: "https://www.instagram.com/afibaoficial/"
    },
    {
      date: "25 MAYO",
      name: "COPA NOVA",
      location: "CABA",
      organizer: "AFIC - AFIC",
      date_2: "25/05/25",
      link: "https://www.instagram.com/afic_argentina?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",

    },
    {
      date: "31 MAYO",
      name: "COPA JAAUKANIGAS RECONQUISTA",
      location: "Santa Fe",
      organizer: "ASFF - Delia Silvia",
      date_2: "31/05/25",
      link: "https://www.instagram.com/asff_2024?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",

    }
  ],
  JUNIO: [

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
      link: "https://www.instagram.com/asff_2024?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",


    },
    {
      date: '6 JULIO',
      name: 'CAMPEONATO INDEPENDENCIA',
      location: 'MERLO',
      organizer: 'AFIBA - ALEJANDRO MAIDANA',
      link: "https://www.instagram.com/afibaoficial/",

    },
    {
      date: '6 JULIO',
      name: 'COPA SUPLEMENTO NORDESTE',
      location: 'CHACO',
      organizer: 'AMUCH - Matias Nievas',
      link: "https://www.instagram.com/amuch_chaco?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",

    },
    {
      date: '27 JULIO',
      name: 'COPA CIUDAD RECONQUISTA',
      location: 'RECONQUISTA',
      organizer: 'ASFF - Ariel Caballero',
      link: "https://www.instagram.com/asff_2024/?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw%3D%3D#",

    },
    {
      date: '27 JULIO',
      name: 'LA PAMPA CUP IFBB',
      location: 'LA PAMPA',
      organizer: 'ASFF - Pablo Roldan',
      link: "https://www.instagram.com/roldanpabloalejandro?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",

    },
  ],
  AGOSTO: [

    {
      date: "2 & 3 AGOSTO",
      name: "OPEN INTERNACIONAL MUSUMECI IFBB",
      location: "BUENOS AIRES",
      organizer: "FAMF - Oscar Villareal",
      date_2: "07/06/25  & 08/06/2025",
      link: "https://www.instagram.com/famf_argentina?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
    },
    {
      date: '9 AGOSTO',
      name: 'FIT CUP',
      location: 'LAGUNA LARGA (Cordoba)',
      organizer: 'CLAUDIO NIETO - promotor',
      link: "https://www.instagram.com/acorffi_2021?igsh=Y21iNWJkN3VveHRp",


    },
    {
      date: '9 AGOSTO',
      name: 'TUCUMAN IFBB CUP',
      location: 'TUCUMAN',
      organizer: 'OSCAR VILLAREAL - promotor',
      link: 'https://www.instagram.com/rubenoscar.villarreal2?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=='
    },
    {
      date: '10 AGOSTO',
      name: 'COPA TNT CORRIENTES 3RA EDICION',
      location: 'CORRIENTES',
      organizer: 'German Guirotane',
      link: "https://www.instagram.com/acomfi.ifbb?igsh=aDRnYWs3anM0dzYz",

    },
    {
      date: '10 AGOSTO',
      name: 'COPA HERCULES',
      location: 'CABA',
      organizer: 'AFIC - AFIC (promotor)',
      link: "https://www.instagram.com/afic_argentina?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",

    },


    {
      date: '10 AGOSTO',
      name: 'COPA DE LOS ANDES',
      location: 'MENDOZA',
      organizer: 'AMFIM - AMFIM (promotor)',
      link: "https://www.instagram.com/amfimmendoza?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",

    },
    {
      date: '16 AGOSTO',
      name: 'MONUMENTO A LA BANDERA',
      location: 'ROSARIO',
      organizer: 'ASFF - ASFF (promotor)',
      link: "https://www.instagram.com/asff_2024?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",

    },
    {
      date: '23 Y 24 AGOSTO',
      name: 'CAMPEONATO ARGENTINO FAMF',
      location: 'CORDOBA',
      organizer: 'ACORFFI - CLAUDIO NIETO (promotor)',
      link: "https://www.instagram.com/acorffi_2021?igsh=Y21iNWJkN3VveHRp",

    },

  ],
  SEPTIEMBRE: [
    {
      date: 'A CONFIRMAR',
      name: 'JUEGOS UFEDEM',
      location: 'CABA',
      organizer: 'AFIC - AFIC (promotor)',
      link: "https://www.instagram.com/afic_argentina?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",

    },
    {
      date: '6 SEPTIEMBRE',
      name: 'COPA IFBB JUJUY',
      location: 'JUJUY',
      organizer: 'AJUFF - VICTOR ORTUNO (promotor)',
      link: '#'
    },

    {
      date: '18 AL 22 DE SEPTIEMBRE',
      name: 'CAMPEONATO SUDAMERICANO IFBB',
      location: 'ECUADOR',
      organizer: 'PROMOTOR CONFEDERACION SUDAMERICANA',
      link: 'https://www.instagram.com/famf_argentina?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=='
    },

    {
      date: '27 SEPTIEMBRE',
      name: 'COPA MISIONES IFBB',
      location: 'MISIONES',
      organizer: 'ACMUFIM - JORGE BOTHNER (promotor)',
      link: "https://www.instagram.com/acufim_ifbb.misiones?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",

    },
    {
      date: '27 SEPTIEMBRE',
      name: 'CAMPEONATO SANTAFESINO',
      location: 'SANTA FE',
      organizer: 'ASFF - MAXI CANTERO (promotor)',
      link: "https://www.instagram.com/asff_2024?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",

    },
    {
      date: '28 SEPTIEMBRE',
      name: 'COPA CIUDAD DE SAN JUAN',
      location: 'SAN JUAN',
      organizer: 'ACEFIS - MARTIN PAREDES (promotor)',
      link: "https://www.instagram.com/acefissanjuan?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",

    },
  ],
  OCTUBRE: [
    {
      date: '4 Y 5 DE OCTUBRE',
      name: 'PROVINCIAS UNIDAS',
      location: 'A CONFIRMAR',
      organizer: 'ASFF - MIGUEL LUNA (promotor)',
      link: "https://www.instagram.com/asff_2024?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",

    },
    {
      date: '11 OCTUBRE',
      name: 'COPA DOS CIUDADES - 7MA EDICION',
      location: 'VIEDMA',
      organizer: 'AR.DECF - JAVIER LINARES (promotor)',
      link: '#'
    },

    {
      date: '11 OCTUBRE',
      name: 'COPA FOX Show Muscular',
      location: 'SALTA',
      organizer: 'ASFFLYPO - OMAR BIGNON (promotor)',
      link: "https://www.instagram.com/omar_bignon?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",

    },


    {
      date: '18 OCTUBRE',
      name: 'COPA CIUDAD DE ROSARIO',
      location: 'ROSARIO',
      organizer: 'ASFF - LEONELL GABRIELLI (promotor)',
      link: "https://www.instagram.com/asff_2024?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",

    },
    {
      date: '18 OCTUBRE',
      name: 'SANTIAGO DEL ESTERO CLASSIC - 4TA EDICION',
      location: 'SANTIAGO DEL ESTERO',
      organizer: 'JUAN NUNO - promotor',
      link: "https://www.instagram.com/ifbb.santiagodelestero?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",

    },

    {
      date: '19 OCTUBRE',
      name: 'FORMOSA FITNESS CUP - 3ERA EDICION',
      location: 'FORMOSA',
      organizer: 'AFORMF -ARMANDO BOGADO (promotor)',
      link: "https://www.instagram.com/formosa.ifbbarg?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",

    },
    {
      date: '24 Y 25 DE OCTUBRE',
      name: 'SUPER PATAGONICO',
      location: 'CHUBUT',
      organizer: 'AFCHF - EMILIANO NOVOA (promotor)',
      link: '#'
    },
    {
      date: '26 OCTUBRE',
      name: 'CAMPEONATO BONAERENSE',
      location: 'LA PLATA',
      organizer: 'AFIBA - PABLO ROLDAN (promotor)',
      link: "https://www.instagram.com/afibaoficial/",

    },
  ],
  NOVIEMBRE: [
    {
      date: '2 NOVIEMBRE',
      name: 'COPA MERCEDES - 3RA EDICION',
      location: 'VILLA MERCEDES (San Luis)',
      organizer: 'AFFSL - BRUNO VARGAS (promotor)',
      link: "https://www.instagram.com/affsl.2021?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",

    },
    {
      date: '2 NOVIEMBRE',
      name: 'NEA OPEN CLASSIC',
      location: 'CORRIENTES',
      organizer: 'BOTHNER Y GUIROTANE - promotor',
      link: "https://www.instagram.com/acomfi.ifbb?igsh=aDRnYWs3anM0dzYz",

    },
        {
      date: '2 NOVIEMBRE',
      name: 'VICTORY CLASSIC 2025',
      location: 'ENTRE RIOS',
      organizer: 'OSCAR VILLAREAL - promotor',
      link: "https://www.instagram.com/rubenoscar.villarreal2?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
    },

    {
      date: '8 Y 9 DE NOVIEMBRE',
      name: 'NOCHE DE CAMPEONES',
      location: 'ROSARIO',
      organizer: 'ASFF - MIGUEL LUNA - promotor',
      link: "https://www.instagram.com/asff_2024?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",

    },

    {
      date: '15 NOVIEMBRE',
      name: 'GIGANTES DEL VALLE',
      location: 'RIO NEGRO',
      organizer: 'A.N.FF - CLAUDIO BORGIA (promotor)',
      link: "https://www.instagram.com/claudio.borgia75?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
    },

    {
      date: '16 NOVIEMBRE',
      name: 'COPA PROVINCIA',
      location: 'San Andres de Giles',
      organizer: 'Sebastian Barrientos',
      link: "#"
    },
    {
      date: '22 NOVIEMBRE',
      name: 'CAMPEONATO CORDOBES',
      location: 'CORDOBA',
      organizer: 'ACORFFI - CLAUDIO NIETO (promotor)',
      link: "https://www.instagram.com/acorffi_2021?igsh=Y21iNWJkN3VveHRp",

    },
    
   {
      date: '23 NOVIEMBRE',
      name: 'CORDON INDUSTRIAL',
      location: 'SAN LORENZO',
      organizer: 'ASFF - WALTER CEBRERA (promotor)',
      link: "https://www.instagram.com/asff_2024?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",

    },
    {
      date: '29 NOVIEMBRE',
      name: 'CAMPEONATO RIOJANO',
      location: 'LA RIOJA',
      organizer: 'ARIFFI - ERNESTINA SEGOVIA (promotor)',
      link: "https://www.instagram.com/ariffi_larioja?igsh=bGFudncxcXNhZGF6",

    },
 
    {
      date: '30 NOVIEMBRE',
      name: 'COPA ACONCAGUA',
      location: 'MENDOZA',
      organizer: 'AMFIM - AMFIM (promotor)',
      link: "https://www.instagram.com/amfimmendoza?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",

    },
    {
      date: '30 NOVIEMBRE',
      name: 'CAMEONATO METROPOLINATO',
      location: 'CABA',
      organizer: 'AFIC - AFIC (promotor)',
      link: "https://www.instagram.com/afic_argentina?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",

    },
  ],
  DICIEMBRE: [
    {
      date: '6 Y 7 DE DICIEMBRE',
      name: 'CAMPEONATO NACIONAL FAMF',
      location: 'CHACO',
      organizer: 'AMUCH - MATIAS NIEVAS (promotor)',
      link: "https://www.instagram.com/amuch_chaco?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",

    },
    {
      date: 'A 13 DICIEMBRE',
      name: 'COPA IFBB SANTA CRUZ',
      location: 'SANTA CRUZ',
      organizer: 'ASFYC - JOSE LOMBARDO (promotor)',
      link: "https://www.instagram.com/asfyc_fitclub?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",

    },
        {
      date: '13 DICIEMBRE',
      name: 'COPA METAN',
      location: 'A CONFIRMAR',
      organizer: 'ASFFLYPO - TEL 3875603100',
      link: "https://www.instagram.com/omar_bignon?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",

    },

    {
      date: '14 DICIEMBRE',
      name: 'CAMPEONATO CLAUSURA',
      location: 'A CONFIRMAR',
      organizer: 'AFIBA - MARIA MERNES - promotor',
      link: "https://www.instagram.com/afibaoficial/",

    },
  ]
}



