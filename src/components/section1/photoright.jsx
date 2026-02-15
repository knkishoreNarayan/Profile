import React from "react"
import profile from "../../assets/profile.png"
import { useScrollAnimation } from "../../hooks/useScrollAnimation"

const PhotoRight = () => {
  const [ref, isVisible] = useScrollAnimation()

  return (
    <div 
      ref={ref}
      className={`absolute right-20 top-1/2 -translate-y-1/2 z-10 transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'
      }`}
    >

      {/* Glow Background */}
      <div className="absolute inset-0 rounded-full 
        bg-gradient-to-tr from-blue-500 via-purple-500 to-blue-400 
        blur-3xl opacity-30">
      </div>

      {/* Circular Image */}
      <div className="relative w-[380px] h-[380px] 
        rounded-full overflow-hidden 
        border border-white/20 
        shadow-2xl">

        <img
          src={profile}
          alt="Kishore"
          className="w-full h-full object-cover"
        />
      </div>

    </div>
  )
}

export default PhotoRight
