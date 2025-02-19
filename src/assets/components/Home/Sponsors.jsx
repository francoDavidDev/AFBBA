import React from "react";
import '../../../styles/VerticalWrapper/index.css';
import mag from '../../imgs/sponsors/mag.svg';

const Sponsors = () => {
  return (
    <section className="banner mb-20">
      <div className="slider-container">
        <div className="slider">
          {[...Array(10)].map((_, index) => (
            <a 
              key={index} 
              href='https://www.instagram.com/magsuplementos.oficial?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==' 
              target="_blank" 
              className="item" 
              style={{ '--position': index + 1 }}
            >
              <img src={mag} alt="Mag" />
            </a>
          ))}
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
