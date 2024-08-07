import React from 'react';
import { motion } from 'framer-motion';
import Hero from '../components/Home/Hero';
import Info from '../components/Home/Info';
import Sponsors from '../components/Home/Sponsors';
import Banner from '../components/Home/Banner';
import Newsletter from '../components/Home/Newsletter';
import CarrouselEvents from '../components/Home/CarrouselEvents';
import Associations from '../components/Home/Associations';
import Internationals from '../components/Home/Internationals';
import VerticalWrapper from '../components/Home/VerticalWrapper';

const Home = () => {
  return (
    <div>
      <motion.div 
        whileInView={{ opacity: 1, y: 0 }} 
        initial={{ opacity: 0, y: 50 }} 
        transition={{ duration: 0.5 }}
      >
        <Hero />
      </motion.div>
      
      <motion.div 
        whileInView={{ opacity: 1, y: 0 }} 
        initial={{ opacity: 0, y: 50 }} 
        transition={{ duration: 0.5 }}
      >
        <Info />
      </motion.div>

      <motion.div 
        whileInView={{ opacity: 1, y: 0 }} 
        initial={{ opacity: 0, y: 50 }} 
        transition={{ duration: 0.5 }}
      >
        <Internationals />
      </motion.div>

      <motion.div 
        whileInView={{ opacity: 1, y: 0 }} 
        initial={{ opacity: 0, y: 50 }} 
        transition={{ duration: 0.5 }}
      >
             <VerticalWrapper />
      </motion.div>

      <motion.div 
        whileInView={{ opacity: 1, y: 0 }} 
        initial={{ opacity: 0, y: 50 }} 
        transition={{ duration: 0.5 }}
      >
        <Banner />
      </motion.div>
      
      {/* Agrega más secciones de manera similar si es necesario */}
    </div>
  );
};

export default Home;
