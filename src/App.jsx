import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Hero from './Components/Hero'
import Solution from './Components/Solution'
import Cta from './Components/Cta'
import Contact from './Components/Contact'
import Testimonials from './Components/Testimonials'
import Footer from './Components/Footer'
import ModalForm from './Components/ModalForm' // <-- Add this import

function App() {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowModal(true), 10000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <ModalForm show={showModal} onClose={() => setShowModal(false)} />
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