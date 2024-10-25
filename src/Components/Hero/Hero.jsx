import React from 'react'
import './Hero.css' 
import white_arrow from '../../assets/white-arrow.png'
const Hero = () => {
  return (
    <div className='hero container'>
        <div className='hero-text'>
            <h1>We Ensure Better Education for Better World</h1>
            <p>Guiding students towards academic excellence with seamless admissions to top universities in China for MBBS, bachelor's, master's, and PhD programs.</p>
            <button className='btn'>Apply Now <img src={white_arrow} alt=''/></button>
        </div>

    </div>
  )
}

export default Hero