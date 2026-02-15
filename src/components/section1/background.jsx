import React, { useEffect, useRef } from "react"
import { gsap } from "gsap"

const Background = () => {
  const containerRef = useRef(null)
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    // Particle system for neural network effect
    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height
        this.vx = (Math.random() - 0.5) * 0.5
        this.vy = (Math.random() - 0.5) * 0.5
        this.radius = Math.random() * 2 + 1
        this.opacity = Math.random() * 0.5 + 0.3
      }

      update() {
        this.x += this.vx
        this.y += this.vy

        if (this.x < 0 || this.x > canvas.width) this.vx *= -1
        if (this.y < 0 || this.y > canvas.height) this.vy *= -1
      }

      draw() {
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(100, 200, 255, ${this.opacity})`
        ctx.fill()
        
        // Add glow effect
        ctx.shadowBlur = 10
        ctx.shadowColor = `rgba(100, 200, 255, ${this.opacity})`
      }
    }

    // Create particles
    const particles = []
    for (let i = 0; i < 120; i++) {
      particles.push(new Particle())
    }

    // Draw connections between nearby particles
    function drawConnections() {
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 150) {
            ctx.beginPath()
            ctx.strokeStyle = `rgba(100, 200, 255, ${0.2 * (1 - distance / 150)})`
            ctx.lineWidth = 1
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.stroke()
          }
        }
      }
    }

    // Animation loop
    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      
      particles.forEach(particle => {
        particle.update()
        particle.draw()
      })
      
      drawConnections()
      requestAnimationFrame(animate)
    }

    animate()

    // Resize handler
    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    window.addEventListener('resize', handleResize)

    // GSAP Animations for gradient orbs
    const orbs = containerRef.current.querySelectorAll('.orb')
    
    gsap.to(orbs[0], {
      x: 200,
      y: -150,
      scale: 1.3,
      duration: 8,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    })

    gsap.to(orbs[1], {
      x: -180,
      y: 120,
      scale: 0.9,
      duration: 10,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    })

    gsap.to(orbs[2], {
      x: 150,
      y: 180,
      scale: 1.2,
      duration: 12,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    })

    gsap.to(orbs[3], {
      x: -120,
      y: -100,
      scale: 1.1,
      duration: 9,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    })

    // Animate data streams
    const streams = containerRef.current.querySelectorAll('.data-stream')
    streams.forEach((stream, index) => {
      gsap.to(stream, {
        y: '100vh',
        duration: 12 + index * 1.5,
        repeat: -1,
        ease: "none",
        delay: index * 1.5
      })
    })

    // Animate floating code elements
    const codeElements = containerRef.current.querySelectorAll('.code-float')
    codeElements.forEach((element, index) => {
      gsap.to(element, {
        y: -50,
        x: Math.random() * 40 - 20,
        rotation: Math.random() * 10 - 5,
        duration: 8 + index * 2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: index * 0.5
      })
    })

    // Animate rings
    const rings = containerRef.current.querySelectorAll('.pulse-ring')
    rings.forEach((ring, index) => {
      gsap.to(ring, {
        scale: 1.5,
        opacity: 0,
        duration: 3,
        repeat: -1,
        ease: "power1.out",
        delay: index * 1
      })
    })

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  const codeSnippets = [
    '{ }', '</>', '<div>', 'const', 'function', 'import', 'export', 'async', 'await', 'return'
  ]

  return (
    <div ref={containerRef} className="fixed inset-0 -z-50 overflow-hidden">
      
      {/* Base gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a0e27] via-[#0f1419] to-[#050810]"></div>

      {/* Canvas for neural network */}
      <canvas ref={canvasRef} className="absolute inset-0 opacity-70"></canvas>

      {/* Animated gradient orbs */}
      <div className="orb absolute w-[700px] h-[700px] rounded-full blur-3xl opacity-30 -left-60 top-20"
        style={{ background: 'radial-gradient(circle, rgba(0, 150, 255, 0.6), rgba(100, 50, 255, 0.3))' }}>
      </div>

      <div className="orb absolute w-[600px] h-[600px] rounded-full blur-3xl opacity-25 -right-40 bottom-10"
        style={{ background: 'radial-gradient(circle, rgba(0, 255, 200, 0.5), rgba(0, 150, 255, 0.3))' }}>
      </div>

      <div className="orb absolute w-[550px] h-[550px] rounded-full blur-3xl opacity-20 left-1/3 top-1/2"
        style={{ background: 'radial-gradient(circle, rgba(150, 50, 255, 0.5), rgba(255, 0, 150, 0.2))' }}>
      </div>

      <div className="orb absolute w-[500px] h-[500px] rounded-full blur-3xl opacity-25 right-1/4 top-1/4"
        style={{ background: 'radial-gradient(circle, rgba(0, 200, 255, 0.5), rgba(100, 255, 200, 0.3))' }}>
      </div>

      {/* Data streams */}
      <div className="data-stream absolute left-[10%] -top-20 w-[2px] h-40 bg-gradient-to-b from-transparent via-cyan-400 to-transparent opacity-50"></div>
      <div className="data-stream absolute left-[25%] -top-32 w-[2px] h-32 bg-gradient-to-b from-transparent via-blue-400 to-transparent opacity-40"></div>
      <div className="data-stream absolute left-[45%] -top-24 w-[2px] h-36 bg-gradient-to-b from-transparent via-purple-400 to-transparent opacity-45"></div>
      <div className="data-stream absolute left-[65%] -top-28 w-[2px] h-44 bg-gradient-to-b from-transparent via-teal-400 to-transparent opacity-50"></div>
      <div className="data-stream absolute left-[80%] -top-36 w-[2px] h-38 bg-gradient-to-b from-transparent via-cyan-400 to-transparent opacity-40"></div>
      <div className="data-stream absolute left-[90%] -top-20 w-[2px] h-40 bg-gradient-to-b from-transparent via-blue-400 to-transparent opacity-45"></div>

      {/* Floating code snippets */}
      {codeSnippets.map((code, index) => (
        <div
          key={index}
          className="code-float absolute text-cyan-400/30 font-mono text-sm pointer-events-none"
          style={{
            left: `${10 + index * 9}%`,
            top: `${20 + (index % 3) * 25}%`,
          }}
        >
          {code}
        </div>
      ))}

      {/* Pulsing rings */}
      <div className="pulse-ring absolute top-1/4 left-1/4 w-32 h-32 border-2 border-cyan-400/30 rounded-full"></div>
      <div className="pulse-ring absolute top-2/3 right-1/3 w-40 h-40 border-2 border-purple-400/30 rounded-full"></div>
      <div className="pulse-ring absolute bottom-1/4 left-2/3 w-36 h-36 border-2 border-blue-400/30 rounded-full"></div>

      {/* Glowing grid */}
      <div className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0, 200, 255, 0.8) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 200, 255, 0.8) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px'
        }}>
      </div>

      {/* Radial glow spots */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>

      {/* Diagonal light beams */}
      <div className="absolute top-0 left-1/4 w-[2px] h-full bg-gradient-to-b from-cyan-400/20 via-transparent to-transparent rotate-12 origin-top"></div>
      <div className="absolute top-0 right-1/3 w-[2px] h-full bg-gradient-to-b from-purple-400/20 via-transparent to-transparent -rotate-12 origin-top"></div>

      {/* Overlay gradient for depth */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#050810]/80 via-transparent to-transparent"></div>

    </div>
  )
}

export default Background
