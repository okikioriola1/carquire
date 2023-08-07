import { useState } from 'react'
import * as React from 'react'

import './App.css'

import { SelectedPage } from './shared/types'
import Home from './scenes/HomePage/index'
import { Route, Routes } from 'react-router-dom'
import Renter from './scenes/renter/index'
import Navbar from './scenes/navbar/index'
import Hire from './scenes/hirer/index'

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
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/rent" element={<Renter/>} />
            <Route path="/hire" element={<Hire/>} />

          </Routes>
         

       </div>
    </>
  )
}

export default App
