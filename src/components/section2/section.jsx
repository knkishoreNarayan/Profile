import React from 'react'
import Resume from './resume'
import About from './About'
import Contact from './contact'
import Projects from './projects'


const section = () => {
  return (
    <div>
        <About />
      <Resume />
      <Projects />
      <Contact />
      
    </div>
  )
}

export default section
