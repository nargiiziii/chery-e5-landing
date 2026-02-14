import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import SmartInnovations from './components/SmartInnovations'
import Vehicle from './components/Vehicle'
import Testimonials from './components/Testimonials'
import NewEra from './components/NewEra'
import Footer from './components/Footer'

function App() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-steel-900 text-white overflow-x-hidden">
      <Navbar scrolled={scrolled} />
      <Hero />
      <Features />
      <SmartInnovations />
      <Vehicle />
      <Testimonials />
      <NewEra />
      <Footer />
    </div>
  )
}

export default App
