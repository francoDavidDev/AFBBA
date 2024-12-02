import image1 from "../../imgs/courses/image1.jpg"; //main
import image2 from "../../imgs/courses/image2.jpg";
import image3 from "../../imgs/courses/image3.jpg";
import image4 from "../../imgs/courses/image4.jpg"; // main 2
import image5 from "../../imgs/courses/image5.jpg";
import image6 from "../../imgs/courses/image6.jpg";
import image7 from "../../imgs/courses/image7.jpg";


//curso de musculacion
import musculacion_informacion from "../../imgs/courses/musculacion/INFORMACION.png";
import musculacion_flyer from "../../imgs/courses/musculacion/MUSCULACION_2025.png";
import musculacion_programa from "../../imgs/courses/musculacion/PROGRAMA.png";

//curso de nutricion_deportiva
import nutricion_deportiva_informacion from "../../imgs/courses/nutricion_deportiva/INFORMACION.png";
import nutricion_deportiva_flyer from "../../imgs/courses/nutricion_deportiva/NUTRICION_DEPORTIVA .png";
import nutricion_deportiva_programa from "../../imgs/courses/nutricion_deportiva/PROGRAMA.png";


export const COURSES_DATA = [
  {
    id: 1,
    title: "MUSCULACION 2025",
    category: "Entrenamiento",  // Categoría añadida
    price: "Informacion en el Flyer",
    duration: "12 Clases",
    instructor: "Jorge Asp",
    schedule: "Lunes, Miercoles y Viernes",
    imageMain: musculacion_flyer,
    images: [
      {
        image: musculacion_informacion,
      },
      {
        image: musculacion_programa,
      },
    ],
    whatsappMessage:
      "Hola, estoy interesado en el curso de MUSCULACION 2025. ¿Podrías darme más información?",
  },
  {
    id: 2,
    title: "NUTRICIÓN DEPROTIVA",
    category: "Salud y Nutrición",  // Categoría añadida
    price: "Por Privado",
    duration: "4 clases",
    instructor: "María Sol Jaimes",
    schedule: "Miercoles y Viernes  a las 19:00hs",
    imageMain: nutricion_deportiva_flyer,
    images: [
      {
        image: nutricion_deportiva_programa,
      },
      {
        image: nutricion_deportiva_informacion,
      },
    ],
    whatsappMessage:
      "Hola, estoy interesado en el curso de NUTRICIÓN DEPROTIVA. ¿Podrías darme más información?",
  },
  {
    id: 3,
    title: "ARMADO DE RUTINAS",
    category: "Planificación de Entrenamientos",  // Categoría añadida
    price: "Por Privado",
    duration: "3 Clases",
    instructor: "Por privado",
    schedule: "Lunes 19, miercoles 21 y viernes 23 de Agosto, 19:00 PM",
    imageMain: image7,
    images: null,
    whatsappMessage:
      "Hola, estoy interesado en el curso ARMADO DE RUTINAS. ¿Podrías darme más información?",
  },
];
