// Fixed navigation bar with active section highlighting and smooth scroll
import React, { useState, useEffect } from "react"
import logo from "../../assets/logo.png"

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('home')

  // Track which section is currently in view
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'resume', 'work', 'contact']
      const scrollPosition = window.scrollY + 200

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetBottom = offsetTop + element.offsetHeight

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Initial check

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

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

  const navItems = [
    { id: 'home', label: 'HOME' },
    { id: 'about', label: 'ABOUT' },
    { id: 'resume', label: 'RESUME' },
    { id: 'work', label: 'MY WORK' },
    { id: 'contact', label: 'CONTACT' }
  ]

  return (
    <div
      className="w-full fixed top-0 left-0 z-50
      backdrop-blur-md bg-[#05070d]/80
      border-b border-cyan-500/10
      px-12 py-5 flex items-center justify-between"
    >

      {/* Logo Section */}
      <button onClick={() => scrollToSection('home')} className="flex items-center space-x-3 group">

        <div
          className="p-2 rounded-lg
          bg-[#0b0f1a]/60
          border border-cyan-500/10
          group-hover:border-cyan-400
          group-hover:shadow-lg
          group-hover:shadow-cyan-500/20
          transition duration-300"
        >
          <img
            src={logo}
            alt="Kishore Narayan Logo"
            className="h-8 w-auto object-contain"
          />
        </div>

        <span
          className="text-white text-lg font-semibold tracking-wider
          group-hover:text-cyan-400 transition duration-300"
        >
          Kishore
        </span>

      </button>

      {/* Navigation Links with active highlighting */}
      <div className="hidden md:flex items-center space-x-10 text-sm tracking-widest text-gray-400">

        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => scrollToSection(item.id)}
            className={`relative transition duration-300 ${
              activeSection === item.id ? 'text-cyan-400' : 'hover:text-cyan-400'
            }`}
          >
            {item.label}
            {/* Active indicator underline */}
            {activeSection === item.id && (
              <span className="absolute -bottom-2 left-0 right-0 h-0.5 bg-cyan-400 rounded-full"></span>
            )}
          </button>
        ))}

      </div>

      {/* Right Side Icons */}
      <div className="flex items-center space-x-6 text-gray-400 text-lg">
        <span className="hover:text-cyan-400 cursor-pointer transition">🌙</span>
        <span className="hover:text-cyan-400 cursor-pointer transition">⚡</span>
      </div>

    </div>
  )
}

export default Navbar
