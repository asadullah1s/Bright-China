import React from 'react'
import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'
const About = ({setPlayState}) => {
  return (
    <div className='about'>
      <div className="about-left">
        <img src={about_img} alt="" className='about-img' />
        <img src={play_icon} alt="" className='play-icon' onClick={()=>{setPlayState(true)}}/>
      </div>
      <div className="about-right">
        <h3>About Us</h3>
        <h2>Bright China Education Consultant</h2>
        <p>At Bright China, we specialize in helping students from around the world secure admissions to top universities in China for MBBS, bachelor’s, master’s, and PhD programs.</p> <p>With years of experience and a proven track record, we provide personalized guidance through every step of the application process, from selecting the right university to visa assistance.

</p><p>Operating online through Facebook and WhatsApp, we have successfully helped over 30 Nigerian, 10 Indian, and 20 Pakistani students achieve their academic dreams in China. Our goal is to make the journey smooth and stress-free, offering expert support tailored to each student’s unique needs.

Start your academic journey with us today and unlock opportunities for a brighter future in China.</p>
      </div>

    </div>
  )
}

export default About