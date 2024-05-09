import React from 'react'
import Hero from '../components/Home/Hero'
import Info from '../components/Home/Info'
import Sponsors from '../components/Home/Sponsors'
import Banner from '../components/Home/Banner'
import Newsletter from '../components/Home/Newsletter'
import CarrouselEvents from '../components/Home/CarrouselEvents'

const Home = () => {
  return (
    <div>
        <Hero/>
        <Info />
        <CarrouselEvents/>
        <Banner/>
        <Sponsors/>
        <Newsletter/>
    </div>
  )
}

export default Home