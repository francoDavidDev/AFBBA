import React from "react";
import sportcenter from '../../imgs/sponsors/sportcenter.jpg';
import bsn from '../../imgs/sponsors/bsn.jpg';
import sansongym from '../../imgs/sponsors/sansongym.jpg';
import vees from '../../imgs/sponsors/vees.jpg';
//import styles
import '../../../styles/VerticalWrapper/index.css';

const Sponsors = () => {
  return (
    <section className="banner mb-20">
      <div className="slider-container">
        <div className="slider">
          <a href='https://www.veesfitness.net/en' target="_blank" className="item" style={{ '--position': 1 }}><img src={vees} alt="Vees Fitness" /></a>
          <a href="https://www.instagram.com/bsnpharmacordoba?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" className="item" style={{ '--position': 2 }}><img src={bsn} alt="BSN" /></a>
          <a href="https://www.instagram.com/sansongym_oficial/" target="_blank" className="item" style={{ '--position': 3 }}><img src={sansongym} alt="Sansongym" /></a>
          <a href="https://www.instagram.com/fitness_sportcenter23?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" className="item" style={{ '--position': 4 }}><img src={sportcenter} alt="Sportcenter" /></a>
          <a href='https://www.veesfitness.net/en' target="_blank" className="item" style={{ '--position': 5 }}><img src={vees} alt="Vees Fitness" /></a>
          <a href="https://www.instagram.com/bsnpharmacordoba?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" className="item" style={{ '--position': 6 }}><img src={bsn} alt="BSN" /></a>
          <a href="https://www.instagram.com/sansongym_oficial/" target="_blank" className="item" style={{ '--position': 7 }}><img src={sansongym} alt="Sansongym" /></a>
          <a href="https://www.instagram.com/fitness_sportcenter23?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" className="item" style={{ '--position': 8 }}><img src={sportcenter} alt="Sportcenter" /></a>
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
