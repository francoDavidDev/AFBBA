import image1 from "../../imgs/courses/image1.jpg"; //main
import image2 from "../../imgs/courses/image2.jpg";
import image3 from "../../imgs/courses/image3.jpg";
import image4 from "../../imgs/courses/image4.jpg"; // main 2
import image5 from "../../imgs/courses/image5.jpg";
import image6 from "../../imgs/courses/image6.jpg";
import image7 from "../../imgs/courses/image7.jpg";

export const COURSES_DATA = [
  {
    id: 1,
    title: "ENTRENADOR EN CROSS PRO FITNESS",
    category: "Entrenamiento Funcional",  // Categoría añadida
    price: "Informacion en el Flyer",
    duration: "10 Clases",
    instructor: "Ana Romero",
    schedule: "Lunes, Miercoles y Viernes",
    imageMain: image1,
    images: [
      {
        image: image5,
      },
      {
        image: image6,
      },
    ],
    whatsappMessage:
      "Hola, estoy interesado en el curso de Entrenador en CROSS PRO FITNESS. ¿Podrías darme más información?",
  },
  {
    id: 2,
    title: "OBESIDAD Y RECOMPOSICION CORPORAL",
    category: "Salud y Nutrición",  // Categoría añadida
    price: "Por Privado",
    duration: "4 clases",
    instructor: "María Sol Jaimes",
    schedule: "Miercoles y Viernes  a las 19:00hs",
    imageMain: image4,
    images: [
      {
        image: image2,
      },
      {
        image: image3,
      },
      {
        image: image2,
      },
    ],
    whatsappMessage:
      "Hola, estoy interesado en el curso de OBESIDAD Y RECOMPOSICION CORPORAL. ¿Podrías darme más información?",
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
