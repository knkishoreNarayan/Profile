import React from "react"
import { useScrollAnimation } from "../../hooks/useScrollAnimation"
import { FaReact, FaNodeJs, FaPython, FaJava, FaGitAlt, FaGithub } from "react-icons/fa"
import { SiMongodb, SiJavascript, SiDjango, SiExpress, SiHtml5, SiCss3, SiFlask, SiPostman } from "react-icons/si"

const Resume = () => {
  const [ref, isVisible] = useScrollAnimation()

  const skills = [
    { name: "React", icon: <FaReact />, color: "text-cyan-400" },
    { name: "Node.js", icon: <FaNodeJs />, color: "text-green-500" },
    { name: "Django", icon: <SiDjango />, color: "text-green-600" },
    { name: "MongoDB", icon: <SiMongodb />, color: "text-green-500" },
    { name: "JavaScript", icon: <SiJavascript />, color: "text-yellow-400" },
    { name: "Python", icon: <FaPython />, color: "text-blue-400" },
    { name: "Java", icon: <FaJava />, color: "text-red-500" },
    { name: "HTML", icon: <SiHtml5 />, color: "text-orange-500" },
    { name: "CSS", icon: <SiCss3 />, color: "text-blue-500" },
    { name: "Express", icon: <SiExpress />, color: "text-gray-400" },
    { name: "Flask", icon: <SiFlask />, color: "text-gray-300" },
    { name: "Git", icon: <FaGitAlt />, color: "text-orange-600" },
    { name: "GitHub", icon: <FaGithub />, color: "text-gray-300" },
    { name: "Postman", icon: <SiPostman />, color: "text-orange-500" }
  ]

  return (
    <section 
      ref={ref}
      id="resume" 
      className={`min-h-screen px-20 py-24 relative z-10 transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
      }`}
    >

      <h2 className="text-4xl font-bold text-white mb-16 tracking-wider">
        Resume
      </h2>

      <div className="grid grid-cols-3 gap-10">

        {/* LEFT PANEL */}
        <div className="col-span-1 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8">

          <h3 className="text-2xl text-white font-semibold mb-4">
            KN Kishore
          </h3>

          <p className="text-purple-400 mb-6">
            Full Stack Developer
          </p>

          <div className="space-y-3 text-gray-300 text-sm">
            <p>📧 kishorekn26@gmail.com</p>
            <p>📱 +91 8951608082</p>
            <p>📍 Bangalore, India</p>
            <p>🔗 linkedin.com/in/kn-kishore</p>
          </div>

        </div>

        {/* CENTER PANEL */}
        <div className="col-span-2 space-y-10">

          {/* PROFILE */}
          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8">
            <h3 className="text-xl text-white font-semibold mb-4">
              Profile
            </h3>
            <p className="text-gray-300 leading-relaxed">
              Computer Science student specializing in Business Systems
              with hands-on experience in MERN stack and Django-based
              applications. Passionate about building scalable web
              solutions and real-time systems with modern technologies.
            </p>
          </div>

          {/* EDUCATION */}
          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8">
            <h3 className="text-xl text-white font-semibold mb-4">
              Education
            </h3>

            <div className="text-gray-300 space-y-4">
              <p>
                <span className="text-purple-400 font-medium">
                  B.E. Computer Science & Business Systems
                </span>
                <br />
                Visvesvaraya Technological University (2022–2026)
                <br />
                GPA: 8.0/10
              </p>
            </div>
          </div>

          {/* EXPERIENCE */}
          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8">
            <h3 className="text-xl text-white font-semibold mb-4">
              Work Experience
            </h3>

            <p className="text-gray-300">
              <span className="text-purple-400 font-medium">
                Full Stack Developer Intern – PygenicArc
              </span>
              <br />
              August 2025 – Present
              <br />
              Working with React (Frontend) and Django (Backend) to build
              scalable web products.
            </p>
          </div>

          {/* SKILLS */}
          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8">
            <h3 className="text-xl text-white font-semibold mb-4">
              Technical Skills
            </h3>

            <div className="flex flex-wrap gap-3 text-sm">
              {skills.map((skill, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-purple-500/20 border border-blue-500/30 
                  rounded-full flex items-center gap-2 
                  hover:bg-purple-500/30 hover:scale-105 transition-all duration-300 group"
                >
                  <span className={`text-lg ${skill.color} group-hover:scale-110 transition-transform duration-300`}>
                    {skill.icon}
                  </span>
                  <span className="text-blue-300">{skill.name}</span>
                </span>
              ))}
            </div>
          </div>

        </div>

      </div>
        

    </section>
  )
}

export default Resume
