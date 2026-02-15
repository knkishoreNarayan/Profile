// Hero section container - Combines animated background, intro text, and profile photo
import React from 'react'
import Left from './Left'
import Background from './background'
import PhotoRight from './photoright'

const section1 = () => {
  return (
    <div id="home">
        <Background />
        <Left />
        <PhotoRight />
    </div>
  )
}

export default section1
