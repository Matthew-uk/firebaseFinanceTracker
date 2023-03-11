// THIS FOLDER WILL ACT AS OUR APP.JS

import React from 'react'
// React packages
import { BrowserRouter, Routes, Route } from 'react-router-dom'
// General Styles
import './GeneralStyles.css'
import LandingPage from './pages/LandingPage/landingPage'
// Pages



export default function LectureFree() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
            <Route path='/' element={<LandingPage />}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}
