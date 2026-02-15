// Projects section - Grid display of portfolio projects with tech stack tags
import React from "react"
import { useScrollAnimation } from "../../hooks/useScrollAnimation"

// Project data array
const projectData = [
  {
    title: "Face Recognition & Intruder Detection System",
    desc: "Real-time surveillance system that detects and logs unauthorized individuals using facial recognition.",
    tech: ["Python", "OpenCV", "Haar Cascade", "LBPH"],
    link: "https://github.com/knkishoreNarayan"
  },
  {
    title: "Bengaluru Civic Connect (Urban Eye)",
    desc: "Full-stack civic issue reporting platform with real-time tracking and Google Maps integration.",
    tech: ["React", "Node.js", "Express", "Google Maps API"],
    link: "https://github.com/knkishoreNarayan"
  },
  {
    title: "Automated Blood Bank Management System",
    desc: "Responsive system to manage blood donations, hospital requests, and inventory efficiently.",
    tech: ["Node.js", "Express", "SQL", "Leaflet.js"],
    link: "https://github.com/knkishoreNarayan"
  },
  {
    title: "Real-time Location Sharing Web App",
    desc: "Live location sharing application using WebSockets and browser Geolocation API.",
    tech: ["Node.js", "Socket.IO", "EJS"],
    link: "https://github.com/knkishoreNarayan"
  },
  {
    title: "Skill Share Platform",
    desc: "Web app enabling users to share skills, explore expertise, and connect locally.",
    tech: ["HTML", "CSS", "JavaScript"],
    link: "https://github.com/knkishoreNarayan"
  }
]

const Projects = () => {
  const [ref, isVisible] = useScrollAnimation()

  return (
    <section 
      ref={ref}
      id="work" 
      className={`min-h-screen px-20 py-24 relative z-10 transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
      }`}
    >

      {/* Heading */}
      <div className="text-center mb-16">
        <h2 className="text-5xl font-bold text-white tracking-wider">
          MY <span className="text-purple-400">WORKS</span>
        </h2>
      </div>

      {/* Project Grid */}
      <div className="grid grid-cols-3 gap-8">

        {projectData.map((project, index) => (
          <div
            key={index}
            className="bg-[#14141c] border border-white/10 
            rounded-xl p-6 hover:border-purple-500 
            hover:shadow-lg hover:shadow-purple-600/20
            transition duration-300 flex flex-col justify-between"
          >

            <div>
              <h3 className="text-white text-lg font-semibold mb-3">
                {project.title}
              </h3>

              <p className="text-gray-400 text-sm mb-5 leading-relaxed">
                {project.desc}
              </p>

              {/* Tech Stack Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="text-xs px-3 py-1 bg-purple-600/20 
                    text-purple-300 rounded-full border border-purple-500/30"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-400 hover:text-purple-300 font-medium"
            >
              View on GitHub →
            </a>

          </div>
        ))}

      </div>

    </section>
  )
}

export default Projects
