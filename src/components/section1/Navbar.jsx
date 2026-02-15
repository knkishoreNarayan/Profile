// Fixed navigation bar with active section highlighting, smooth scroll, and mobile menu (RESPONSIVE)
import React, { useState, useEffect } from "react"
import logo from "../../assets/logo.png"

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('home')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

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
    setMobileMenuOpen(false) // Close mobile menu after clicking
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
      px-4 sm:px-6 md:px-12 py-4 md:py-5 flex items-center justify-between"
    >

      {/* Logo Section */}
      <button onClick={() => scrollToSection('home')} className="flex items-center space-x-2 md:space-x-3 group">

        <div
          className="p-1.5 md:p-2 rounded-lg
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
            className="h-6 md:h-8 w-auto object-contain"
          />
        </div>

        <span
          className="text-white text-base md:text-lg font-semibold tracking-wider
          group-hover:text-cyan-400 transition duration-300"
        >
          Kishore
        </span>

      </button>

      {/* Desktop Navigation Links */}
      <div className="hidden md:flex items-center space-x-6 lg:space-x-10 text-xs lg:text-sm tracking-widest text-gray-400">

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

      {/* Mobile Menu Button */}
      <button 
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        className="md:hidden text-gray-400 hover:text-cyan-400 transition"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          {mobileMenuOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 md:hidden bg-[#05070d]/95 backdrop-blur-md border-b border-cyan-500/10">
          <div className="flex flex-col py-4 px-6 space-y-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-left py-2 transition duration-300 ${
                  activeSection === item.id ? 'text-cyan-400' : 'text-gray-400 hover:text-cyan-400'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}

    </div>
  )
}

export default Navbar
