import React, { useEffect, useRef } from 'react'
import Section1 from './components/section1/section1'
import Section2 from './components/section2/section'
import Navbar from './components/section1/Navbar'
import ScrollToTop from './components/ScrollToTop'
import Lenis from 'lenis'

const App = () => {
  const lenisRef = useRef(null)

  useEffect(() => {
    // Initialize Lenis with optimized settings
    const lenis = new Lenis({
      duration: 1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
      syncTouch: true,
    })

    lenisRef.current = lenis

    // Make lenis available globally for scroll functions
    window.lenis = lenis

    // Animation frame loop
    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    // Cleanup
    return () => {
      lenis.destroy()
      window.lenis = null
    }
  }, [])

  return (
    <div>
      <Navbar />
      <Section1 />
      <Section2 />
      <ScrollToTop />
    </div>
  )
}

export default App
