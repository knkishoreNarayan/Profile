import React, { useState, useEffect } from 'react'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'

const Left = () => {
  const [ref, isVisible] = useScrollAnimation()
  const [displayedText, setDisplayedText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const [loopNum, setLoopNum] = useState(0)
  const fullText = "Kishore"
  const typingSpeed = 150
  const deletingSpeed = 100
  const pauseTime = 2000

  useEffect(() => {
    const handleTyping = () => {
      const currentText = fullText

      if (!isDeleting) {
        // Typing
        if (displayedText.length < currentText.length) {
          setDisplayedText(currentText.slice(0, displayedText.length + 1))
        } else {
          // Pause before deleting
          setTimeout(() => setIsDeleting(true), pauseTime)
        }
      } else {
        // Deleting
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
      className={`flex flex-col justify-center h-screen px-12 relative z-10 transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'
      }`}
    >
      
      <h3 className="text-gray-400 tracking-widest text-sm mb-4">
        FULL STACK DEVELOPER
      </h3>

      <h1 className="text-5xl font-bold text-white mb-6 leading-tight">
        Hi, I'm <span className="text-purple-500">{displayedText}</span>
        <span className="animate-pulse text-blue-500">|</span>
      </h1>

      <p className="text-gray-300 text-lg leading-relaxed max-w-xl mb-8">
        I build modern, responsive and scalable web applications using 
        React and full stack technologies. As a passionate developer, 
        I love turning ideas into real digital experiences that solve 
        real-world problems.
      </p>

      <div className="flex space-x-4">
        <button 
          onClick={() => scrollToSection('work')}
          className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition duration-300"
        >
          View My Work
        </button>

        <button 
          onClick={() => scrollToSection('contact')}
          className="border border-gray-500 text-gray-300 px-6 py-3 rounded-lg hover:bg-gray-800 transition duration-300"
        >
          Contact Me
        </button>
      </div>

    </div>
  )
}

export default Left
