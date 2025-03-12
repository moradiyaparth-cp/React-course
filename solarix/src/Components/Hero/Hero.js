import React from 'react'
import './Hero.css'
import dark_arrow from '../../assets/dark-arrow.png'

const Hero = () => {
  return (
    <div className='hero container'>
        <div className="hero-text">
            <h1>We Harness the Power of the Sun for a Sustainable Future</h1>
            <p>Our innovative solar solutions are designed to empower communities with clean, efficient, and sustainable energy, paving the way for a brighter and more eco-friendly future.</p>
            <button className="btn">Explore more <img src={dark_arrow} alt="" /></button>
        </div>
    </div>
  )
}

export default Hero