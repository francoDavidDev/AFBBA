import React from "react";
import mag from '../../imgs/sponsors/mag.svg';
import mega_mass_bikini from '../../imgs/sponsors/mega_mass_bikini.png';
import mega_mass from '../../imgs/sponsors/mega_mass.jpg';
import panteraFitness from '../../imgs/sponsors/panteraFitness.svg';
import augeFitt from '../../imgs/sponsors/augeFitt.svg';
import fox from '../../imgs/sponsors/fox.jpeg';
import americaForce2 from '../../imgs/sponsors/americanforce2.jpg';

const SPONSORS = [
  {
    img: mag,
    alt: "Mag",
    url: "https://www.instagram.com/magsuplementos.oficial"
  },
  {
    img: mega_mass_bikini,
    alt: "Mega Mass Bikini",
    url: "https://www.instagram.com/neodsign.ar"
  },
  {
    img: panteraFitness,
    url: "https://www.instagram.com/panterafitness.ok",
    alt: "Pantera Fitness"
  },
  {
    img: augeFitt,
    url: "https://www.instagram.com/augefactoryfitness",
    alt: "Auge Fitt"
  },
  {
    img: fox,
    url: "https://www.instagram.com/equipamientosfox",
    alt: "Equipamientos Fox"
  },
  {
    img: americaForce2,
    url: "https://www.instagram.com/equipamientosfox",
    alt: "Equipamientos Fox"
  }
];

const Sponsors = () => {
  return (
    <section
      className="banner"
      style={{
        padding: '40px 20px',
        textAlign: 'center',
        backgroundColor: '#f8f9fa'
      }}
    >
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
          gap: '24px',
          justifyItems: 'center'
        }}
      >
        {SPONSORS.map((sponsor, index) => (
          <a
            key={index}
            href={sponsor.url}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              width: '100%',
              maxWidth: '200px',
              height: '200px',
              backgroundColor: '#fff',
              borderRadius: '12px',
              boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'transform 0.3s ease',
              textDecoration: 'none'
            }}
            onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.05)'}
            onMouseLeave={e => e.currentTarget.style.transform = 'scale(1.0)'}
          >
            <img
              src={sponsor.img}
              alt={sponsor.alt}
              style={{
                maxWidth: '100%',
                maxHeight: '100%',
                objectFit: 'contain',
                padding: '10px'
              }}
            />
          </a>
        ))}
      </div>
      <div className="content" style={{ marginTop: '40px' }}>
        <h1
          data-content="SPONSORS"
          style={{
            fontFamily: 'sans-serif',
            fontSize: '3em',
            color: '#252838',
            position: 'relative'
          }}
        >
          SPONSORS
        </h1>
      </div>
    </section>
  );
};

export default Sponsors;
