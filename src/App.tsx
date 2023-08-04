import { React, useState } from 'react'

import './App.css'
import Footer from './scenes/footer/index'
import GetStarted from './scenes/getStarted/index'
import Hero from './scenes/heroSection/index'
import HowItWorks from './scenes/howdoesitwork/index'
import Navbar from './scenes/navbar/index'
import WhyUs from './scenes/whyus/index'
import { SelectedPage } from './shared/types'

function App() {

  const [selectedPage, setSelectedPage] = useState<SelectedPage>(
    SelectedPage.Home
  )
  

  return (
    <>
      <div>
      <Navbar
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
            />
            <Hero />
            <HowItWorks/>
            <WhyUs />
            <GetStarted setSelectedPage={setSelectedPage}/>
            <Footer />
       </div>
    </>
  )
}

export default App
