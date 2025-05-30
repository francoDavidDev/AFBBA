import React from "react";
import { motion } from "framer-motion";

import mag from '../../imgs/sponsors/mag.svg';
import mega_mass_bikini from '../../imgs/sponsors/mega_mass_bikini.png';
import mega_mass from '../../imgs/sponsors/mega_mass.jpg';
import panteraFitness from '../../imgs/sponsors/panteraFitness.svg';
import augeFitt from '../../imgs/sponsors/augeFitt.svg';
import fox from '../../imgs/sponsors/fox.jpeg';
import americaForce2 from '../../imgs/sponsors/americanforce2.jpg';

const SPONSORS = [
  { img: mag, alt: "Mag", url: "https://www.instagram.com/magsuplementos.oficial" },
  { img: mega_mass_bikini, alt: "Mega Mass Bikini", url: "https://www.instagram.com/neodsign.ar" },
  { img: mega_mass, alt: "Mega Mass", url: "https://www.instagram.com/neodsign.ar" },
  { img: panteraFitness, alt: "Pantera Fitness", url: "https://www.instagram.com/panterafitness.ok" },
  { img: augeFitt, alt: "Auge Fitt", url: "https://www.instagram.com/augefactoryfitness" },
  { img: fox, alt: "Equipamientos Fox", url: "https://www.instagram.com/equipamientosfox" },
  { img: americaForce2, alt: "Equipamientos Fox", url: "https://www.instagram.com/equipamientosfox" }
];

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: "easeOut"
    }
  })
};

const Sponsors = () => {
  return (
    <section className="px-4 py-10">
      <h2 className="text-3xl md:text-5xl font-extrabold text-center text-white uppercase mb-10">
        Sponsors
      </h2>

      <div className="columns-2 sm:columns-3 md:columns-4 gap-4 space-y-4">
        {SPONSORS.map((sponsor, index) => (
          <motion.a
            key={index}
            href={sponsor.url}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full break-inside-avoid overflow-hidden rounded-lg"
            custom={index}
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            whileHover={{ scale: 1.03 }}
          >
            <img
              src={sponsor.img}
              alt={sponsor.alt}
              className="w-full h-auto object-cover rounded-md"
            />
          </motion.a>
        ))}
      </div>
    </section>
  );
};

export default Sponsors;
