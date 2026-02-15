// Hero section left side - Intro text with typewriter animation and CTA buttons (RESPONSIVE)
import React, { useState, useEffect } from 'react'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'

const Left = () => {
  const [ref, isVisible] = useScrollAnimation()
  
  // Typewriter animation state
  const [displayedText, setDisplayedText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const [loopNum, setLoopNum] = useState(0)
  const fullText = "Kishore"
  const typingSpeed = 150
  const deletingSpeed = 100
  const pauseTime = 2000

  // Typewriter effect - types and deletes name continuously
  useEffect(() => {
    const handleTyping = () => {
      const currentText = fullText

      if (!isDeleting) {
        // Typing phase
        if (displayedText.length < currentText.length) {
          setDisplayedText(currentText.slice(0, displayedText.length + 1))
        } else {
          // Pause before deleting
          setTimeout(() => setIsDeleting(true), pauseTime)
        }
      } else {
        // Deleting phase
        if (displayedText.length > 0) {
          setDisplayedText(currentText.slice(0, displayedText.length - 1))
        } else {
          setIsDeleting(false)
          setLoopNum(loopNum + 1)
        }
      }
    }

    const timer = setTimeout(
      handleTyping,
      isDeleting ? deletingSpeed : typingSpeed
    )

    return () => clearTimeout(timer)
  }, [displayedText, isDeleting, loopNum])

  // Smooth scroll to section using Lenis
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element && window.lenis) {
      window.lenis.scrollTo(element, {
        offset: 0,
        duration: 1,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
      })
    } else if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div 
      ref={ref}
      className={`flex flex-col justify-center min-h-screen px-6 sm:px-8 md:px-12 lg:px-16 py-20 md:py-0 relative z-10 transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'
      }`}
    >
      
      <h3 className="text-gray-400 tracking-widest text-xs sm:text-sm mb-3 md:mb-4">
        FULL STACK DEVELOPER
      </h3>

      {/* Animated name with typewriter effect - Responsive text sizes */}
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-6 leading-tight">
        Hi, I'm <span className="text-purple-500">{displayedText}</span>
        <span className="animate-pulse text-blue-500">|</span>
      </h1>

      <p className="text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed max-w-xl mb-6 md:mb-8">
        I build modern, responsive and scalable web applications using 
        React and full stack technologies. As a passionate developer, 
        I love turning ideas into real digital experiences that solve 
        real-world problems.
      </p>

      {/* CTA buttons - Stack on mobile, side by side on larger screens */}
      <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
        <button 
          onClick={() => scrollToSection('work')}
          className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition duration-300 text-center w-full sm:w-auto"
        >
          View My Work
        </button>

        <button 
          onClick={() => scrollToSection('contact')}
          className="border border-gray-500 text-gray-300 px-6 py-3 rounded-lg hover:bg-gray-800 transition duration-300 text-center w-full sm:w-auto"
        >
          Contact Me
        </button>
      </div>

    </div>
  )
}

export default Left
