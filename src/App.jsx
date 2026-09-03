import { useState } from 'react'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Speakers from './components/Speakers'
import Schedule from './components/Schedule'
import Register from './components/Register'
import FAQ from './components/FAQ'
import Pricing from './components/Pricing'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Speakers />
      <Schedule />
      <Register />
      <FAQ />
      <Pricing />
      <Footer />
    </>
  )
}

export default App
