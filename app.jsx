import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Services from './pages/Services'
import DigitalVeerSena from './pages/DigitalVeerSena'
import Contact from './pages/Contact'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/services" element={<Services />} />
      <Route path="/join" element={<DigitalVeerSena />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  )
}

export default App
