// results.js
import campeonato_argentino from "../../imgs/tournaments/nationals/flyers/ARGENTINO.jpg";
// sabado
import pdf_sabado_campeonato_argentino from "../../pdf/campeonato_argentino/sabado.pdf";
import pdf_domingo_campeonato_argentino from "../../pdf/campeonato_argentino/domingo.pdf";

// PROVINCIAS UNIDAS 2024
import pdf_provincias_unidas from "../../pdf/results/provincias_unidas_2024/resultados.pdf";
import img_provincias_unidas from "../../imgs/tournaments/nationals/flyers/PROV_UNIDAS.jpg";

// SUPERPATAGONICO 2024
import pdf_superpatagonico from "../../pdf/results/superpatagonico_2024/resultados_superparagonico.pdf";
import superpatagonico_img from "../../imgs/tournaments/nationals/flyers/PATAGONICO_TRELEW.jpg";

// NOCHE DE CAMPEONES 2024
import img_noche_de_campeones from "../../imgs/tournaments/internationals/flyers/nocheDeCampeones.jpg";
import excel_noche_de_campeones from "../../pdf/results/noche_de_campeones_2024/resultados.pdf";

// CAMPEONATO NACIONAL 2024
import img_campeonato_nacional_2024 from "../../imgs/tournaments/nationals/flyers/CAMPEONATO_NACIONAL.jpg";
import pdf_campeonato_nacional_2024 from "../../pdf/results/campeonato_nacional_2024/resultados.xlsx";

// 2025
// pdf
import SUPER_PATAGONICO_RESULTADOS from "../../pdf/results/2025/super_patagonico_resultados.pdf";
import MUSUMECI_2025_RESULTADOS from "../../pdf/results/RESULTADOS_MUSUMECI_2025.pdf";
import RESULTADO_ARGENTINO_2025 from "../../pdf/results/argentino_2025/CAMPEONATO_ARGENTINO_2025.pdf";
import PROVINCIAS_UNIDAS_2025 from "../../pdf/results/argentino_2025/PROVINCIAS_UNIDA_2025.pdf";

// images
import SUPER_PATAGONICO from "../../imgs/tournaments/nationals/flyers/2025/SUPER_PATAGONICO.jpg";
import MUSUMECI_2025 from "../../imgs/tournaments/nationals/flyers/2025/MUSUMECI_2025.jpg";
import PROVINCIAS_UNIDAS from "../../imgs/tournaments/nationals/flyers/2025/COPA_PROVINCIAS_UNIDAS.jpg";
import ARGENTINO_CHALLENGE_2025_img from "../../imgs/tournaments/nationals/flyers/2025/CAMPEONATO_ARGENTINO.jpg";

/**
 * Orden: cronológico descendente (más reciente → más viejo).
 * Para 2025 ponemos primero el Súper Patagónico (25/10/2025).
 * El resto de 2025 quedan a continuación; 2024 al final.
 */
export const RESULTS = [
  // === 2025 ===
  {
    title: "SUPER PATAGONICO 2025",
    year: 2025,
    pdf: SUPER_PATAGONICO_RESULTADOS,
    image: SUPER_PATAGONICO,
    path: "/campeonatoArgentinoResults",
    dia_1: SUPER_PATAGONICO_RESULTADOS,
    dia_2: null,
  },
  {
    title: "Musumeci 2025",
    year: 2025,
    pdf: "path/to/national_tournament_2024.pdf",
    image: MUSUMECI_2025,
    path: "/campeonatoArgentinoResults",
    dia_1: MUSUMECI_2025_RESULTADOS,
    dia_2: null,
  },
  {
    title: "CAMPEONATO ARGENTINO 2025",
    year: 2025,
    pdf: "path/to/national_tournament_2024.pdf",
    image: ARGENTINO_CHALLENGE_2025_img,
    path: "/campeonatoArgentinoResults",
    dia_1: RESULTADO_ARGENTINO_2025,
    dia_2: null,
  },
  {
    title: "PROVINCIAS UNIDAS 2025",
    year: 2025,
    pdf: "path/to/national_tournament_2024.pdf",
    image: PROVINCIAS_UNIDAS,
    path: "/campeonatoArgentinoResults",
    dia_1: PROVINCIAS_UNIDAS_2025,
    dia_2: null,
  },

  // === 2024 ===
  {
    title: "Campeonato Nacional 2024",
    year: 2024,
    pdf: pdf_campeonato_nacional_2024,
    image: img_campeonato_nacional_2024,
    path: "/campeonatoArgentinoResults",
    dia_1: pdf_campeonato_nacional_2024,
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
    title: "Copa Provincias Unidas",
    year: 2024,
    pdf: "path/to/national_tournament_2024.pdf",
    image: img_provincias_unidas,
    path: "/campeonatoArgentinoResults",
    dia_1: pdf_provincias_unidas,
    dia_2: null,
  },
  {
    title: "Campeonato Argentino",
    year: 2024,
    pdf: "path/to/national_tournament_2024.pdf",
    image: campeonato_argentino,
    path: "/campeonatoArgentinoResults",
    dia_1: pdf_sabado_campeonato_argentino,
    dia_2: pdf_domingo_campeonato_argentino,
  },
];
