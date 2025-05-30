import React from "react";
import '../../../styles/VerticalWrapper/index.css';
import mag from '../../imgs/sponsors/mag.svg';
import mega_mass_bikini from '../../imgs/sponsors/mega_mass_bikini.png';
import mega_mass from '../../imgs/sponsors/mega_mass.jpg';
import panteraFitness from '../../imgs/sponsors/panteraFitness.svg';
import augeFitt from '../../imgs/sponsors/augeFitt.svg';

import fox from '../../imgs/sponsors/fox.jpeg'
import americaForce2 from '../../imgs/sponsors/americanforce2.jpg'

const SPONSORS = [
  {
    img: mag,
    alt: "Mag",
    url: "https://www.instagram.com/magsuplementos.oficial?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
  },

  {
    img: mega_mass_bikini,
    alt: "Mega Mass Bikini",
    url: "https://www.instagram.com/neodsign.ar"
  }
  ,
  {
    img: panteraFitness,
    url: "https://www.instagram.com/panterafitness.ok?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
    alt: "pantera fitness",
  },
  {
    img: augeFitt,
    url: "https://www.instagram.com/augefactoryfitness?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
    alt: "Mag",
  },
  {
    img: fox,
    url: "https://www.instagram.com/equipamientosfox?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
    alt: "equipamientos fox",
  },
  {
    img: americaForce2,
    url: "https://www.instagram.com/equipamientosfox?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
    alt: "equipamientos fox",
  },
];

const Sponsors = () => {
  return (
    <section className="banner mb-20">
      <div className="slider-container">
        <div className="slider">
          {Array.from({ length: 10 }).map((_, index) => {
            const sponsor = SPONSORS[index % SPONSORS.length];
            return (
              <a
                key={index}
                href={sponsor.url}
                target="_blank"
                rel="noopener noreferrer"
                className="item"
                style={{ '--position': index + 1 }}
              >
                <img src={sponsor.img} alt={sponsor.alt} />
              </a>
            );
          })}
        </div>
      </div>
      <div className="content">
        <h1 data-content='SPONSORS'>
          SPONSORS
        </h1>
      </div>
    </section>
  );
};

export default Sponsors;
