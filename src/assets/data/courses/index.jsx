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
import nutricion_deportiva_flyer from "../../imgs/courses/nutricion_deportiva/NUTRICION_DEPORTIVA.png";
import nutricion_deportiva_programa from "../../imgs/courses/nutricion_deportiva/PROGRAMA.png";


//curso de nutricion_fit_lvl_1
import nutricion_fit_lvl_1_informacion from "../../imgs/courses/nutricion_fit_lvl_1/INFORMACION.png";
import nutricion_fit_lvl_1_flyer from "../../imgs/courses/nutricion_fit_lvl_1/NUTRICIÓN_FIT_LVL_1.png";
import nutricion_fit_lvl_1_programa from "../../imgs/courses/nutricion_fit_lvl_1/PROGRAMA.png";


//curso de personal_trainer
import personal_trainer_informacion from "../../imgs/courses/personal_trainer/INFORMACION.jpeg";
import personal_trainer_flyer from "../../imgs/courses/personal_trainer/PORTADA.jpeg";
import personal_trainer_temario1 from "../../imgs/courses/personal_trainer/TEMARIO_1.jpeg";
import personal_trainer_temario2 from "../../imgs/courses/personal_trainer/TEMARIO_2.jpeg";

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
    title: "NUTRICIÓN DEPORTIVA",
    category: "Salud y Nutrición",  // Categoría añadida
    price: "Informacion en el flyer",
    duration: "16 clases",
    instructor: "Jorge Asp",
    schedule: "Lunes y Miercoles",
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
      "Hola, estoy interesado en el curso de NUTRICIÓN DEPORTIVA. ¿Podrías darme más información?",
  },
  {
    id: 3,
    title: "NUTRICIÓN FIT LEVEL 1",
    category: "Salud y Nutrición",  // Categoría añadida
    price: "Informacion en el flyer",
    duration: "6 Clases",
    instructor: "Jorge Asp",
    schedule: "Lunes, Miercoles y Viernes",
    imageMain: nutricion_fit_lvl_1_flyer,
    images: [
      {
        image: nutricion_fit_lvl_1_programa,
      },
      {
        image: nutricion_fit_lvl_1_informacion,
      },],
    whatsappMessage:
      "Hola, estoy interesado en el curso NUTRICIÓN FIT LEVEL 1. ¿Podrías darme más información?",
  },
  {
    id: 4,
    title: "PERSONAL TRAINER",
    category: "Entrenamiento",  // Categoría añadida
    price: "Informacion en el flyer",
    duration: "26 Clases",
    instructor: "Jorge Asp",
    schedule: "Martes y Jueves",
    imageMain: personal_trainer_flyer,
    images: [
      {
        image: personal_trainer_informacion,
      },
      {
        image: personal_trainer_temario1,
      },
      {
        image: personal_trainer_temario2,
      },
    ],
    whatsappMessage:
      "Hola, estoy interesado en el curso PERSONAL TRAINER. ¿Podrías darme más información?",

  },
];

