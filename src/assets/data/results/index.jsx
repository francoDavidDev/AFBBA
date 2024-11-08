// results.js
import campeonato_argentino from "../../imgs/tournaments/nationals/flyers/ARGENTINO.jpg";
// sabado
import pdf_sabado_campeonato_argentino from "../../pdf/campeonato_argentino/sabado.pdf";
import pdf_domingo_campeonato_argentino from "../../pdf/campeonato_argentino/domingo.pdf";

// PROVINCIAS UNIDAS
//pdf
import pdf_provincias_unidas from "../../pdf/results/provincias_unidas_2024/resultados.pdf";
//img
import img_provincias_unidas from "../../imgs/tournaments/nationals/flyers/PROV_UNIDAS.jpg";


//SUPERPATAGONICO
import pdf_superpatagonico from "../../pdf/results/superpatagonico_2024/resultados_superparagonico.pdf";
import superpatagonico_img from "../../imgs/tournaments/nationals/flyers/PATAGONICO_TRELEW.jpg";

//NOCHE DE CAMPEONES
import img_noche_de_campeones from "../../imgs/tournaments/internationals/flyers/nocheDeCampeones.jpg";
// EXCEL
import excel_noche_de_campeones from "../../pdf/results/noche_de_campeones_2024/resultados.pdf";



export const RESULTS = [
  {
    title: "Campeonato Argentino",
    year: 2024,
    pdf: "path/to/national_tournament_2024.pdf",
    image: campeonato_argentino,
    path: "/campeonatoArgentinoResults",
    dia_1: pdf_sabado_campeonato_argentino,
    dia_2: pdf_domingo_campeonato_argentino,
  },

  {
    title: "Copa Provincias Unidas",
    year: 2024,
    pdf: "path/to/national_tournament_2024.pdf",
    image: img_provincias_unidas,
    path: "/campeonatoArgentinoResults",
    dia_1: pdf_provincias_unidas,
    dia_2: null,
  },

  {
    title: "Campeonato Nacional Super Patagonico",
    year: 2024,
    pdf: pdf_superpatagonico,
    image: superpatagonico_img,
    path: "/campeonatoArgentinoResults",
    dia_1: pdf_superpatagonico,
    dia_2: null,
  },
  {
    title: "Noche de Campeones",
    year: 2024,
    pdf: excel_noche_de_campeones,

    image: img_noche_de_campeones,
    path: "/campeonatoArgentinoResults",
    dia_1: excel_noche_de_campeones,
    dia_2: null,
  },
];
