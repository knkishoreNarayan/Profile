import React from "react"
import profile from "../../assets/abtimg.png"
import resume from "../../assets/KISHORERESUME (2).pdf"
import { useScrollAnimation } from "../../hooks/useScrollAnimation"
import { FaReact, FaNodeJs, FaPython, FaDatabase } from "react-icons/fa"
import { SiMongodb, SiJavascript, SiDjango } from "react-icons/si"

const About = () => {
  const [ref, isVisible] = useScrollAnimation()

  const skills = [
    { name: "React", icon: <FaReact />, color: "text-cyan-400" },
    { name: "Node.js", icon: <FaNodeJs />, color: "text-green-500" },
    { name: "Django", icon: <SiDjango />, color: "text-green-600" },
    { name: "MongoDB", icon: <SiMongodb />, color: "text-green-500" },
    { name: "JavaScript", icon: <SiJavascript />, color: "text-yellow-400" },
    { name: "Python", icon: <FaPython />, color: "text-blue-400" }
  ]

  return (
    <section 
      ref={ref}
      id="about" 
      className={`min-h-screen flex items-center px-20 py-24 relative z-10 transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
      }`}
    >

      {/* LEFT IMAGE */}
      <div className="w-1/2 flex justify-center">
        <div className="relative w-[400px] h-[500px] rounded-xl overflow-hidden shadow-2xl group border border-white/10">

          <img
            src={profile}
            alt="KN Kishore"
            className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
          />

        </div>
      </div>

      {/* RIGHT CONTENT */}
      <div className="w-1/2 pl-20">

        <p className="text-purple-400 mb-2 font-medium">
          ▶ About Me
        </p>

        <h2 className="text-4xl font-bold text-white mb-6">
          Who Am I
        </h2>

        <p className="text-gray-300 leading-relaxed mb-8">
          My name is KN Kishore, and I am a passionate Full Stack Developer
          specializing in MERN stack and Django-based applications.
          Currently pursuing B.E. in Computer Science & Business Systems
          (2022–2026). I focus on building scalable web platforms,
          real-time systems, and modern digital experiences.
        </p>

        {/* Skills Section */}
        <div className="grid grid-cols-3 gap-4 mb-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-[#1a1a22] border border-white/10 
              rounded-lg px-4 py-3 flex items-center gap-3
              hover:border-purple-500 hover:bg-[#22222b] 
              transition duration-300 group"
            >
              <span className={`text-2xl ${skill.color} group-hover:scale-110 transition-transform duration-300`}>
                {skill.icon}
              </span>
              <span className="text-gray-300">{skill.name}</span>
            </div>
          ))}
        </div>

        <a 
          href={resume} 
          download="KN_Kishore_Resume.pdf"
          className="inline-block bg-purple-600 hover:bg-purple-700 transition duration-300 px-6 py-3 rounded-lg text-white shadow-lg shadow-purple-600/30"
        >
          Download CV
        </a>

      </div>

    </section>
  )
}

export default About
