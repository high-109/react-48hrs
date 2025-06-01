import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Hero from './Components/Hero'
import Solution from './Components/Solution'
import Cta from './Components/Cta'
import Contact from './Components/Contact'
import Testimonials from './Components/Testimonials'
import Footer from './Components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Hero/>
      <Solution/>
      <Cta/>
      <Contact/>
      <Testimonials/>
      <Footer/>
    </>
  )
}

export default App
