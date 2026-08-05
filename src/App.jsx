import { useState } from 'react'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import Hero from './components/Hero'
import Navbar from './components/Navbar'

function App() {
  return (
    <>
      <Navbar />
      <Hero />
    </>
  )
}

export default App
