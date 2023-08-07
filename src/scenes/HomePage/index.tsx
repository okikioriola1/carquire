import React from 'react'
import Footer from '../footer/index'
import GetStarted from '../getStarted/index'
import Hero from '../heroSection/index'
import HowItWorks from '../howdoesitwork/index'
import WhyUs from '../whyus/index'

const Home = () => {
  return (
    <div>
            <Hero />
            <WhyUs />
            <HowItWorks/>
            <GetStarted />
            <Footer />


    </div>
  )
}

export default Home