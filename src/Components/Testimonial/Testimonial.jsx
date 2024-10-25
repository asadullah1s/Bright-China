import React, { useRef } from 'react'
import './Testimonial.css'
import next_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png'
import user_1 from '../../assets/user-1.png'
import user_2 from '../../assets/user-2.png'
import user_3 from '../../assets/user-3.png'
import user_4 from '../../assets/user-4.png'
const Testimonial = () => {
   
  const slider = useRef();
  let tx = 0;
  const slideForward = () =>{
       
    if(tx > -50){
      tx -= 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  }

  const slideBackward = () =>{
    if(tx < 0){
      tx += 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;

  }

  return (
    <div className='testimonials'>
        <img src={back_icon} alt="" className='back-btn' onClick={slideBackward} />
        <img src={next_icon} alt="" className='next-btn' onClick={slideForward} />
        <div className="slider">
          <ul ref={slider}>
            <li>
              <div className='slide'>
                <div className="user-info">
                  <img src={user_1} alt="" />
                  <div>
                  <h3>William Jackson</h3>
                  <span>Nigeria</span>
                  </div>
                </div>
                <p>Muhammad Asadullah Qureshi from Bright China Consultancy is outstanding! He supported me like a brother through every challenge to secure my bachelor's admission.</p>
              </div>
            </li>
            <li>
              <div className='slide'>
                <div className="user-info">
                  <img src={user_2} alt="" />
                  <div>
                  <h3>William Jackson</h3>
                  <span>Nigeria</span>
                  </div>
                </div>
                <p>Exceptional service by Asadullah Qureshi! He guided me through every tough step and treated me with genuine care.</p>
              </div>
            </li>
            <li>
              <div className='slide'>
                <div className="user-info">
                  <img src={user_3} alt="" />
                  <div>
                  <h3>William Jackson</h3>
                  <span>Nigeria</span>
                  </div>
                </div>
                <p>Best consultant! Asadullah Qureshi made the admission process easy and offered incredible support along the way.</p>
              </div>
            </li>
            <li>
              <div className='slide'>
                <div className="user-info">
                  <img src={user_4} alt="" />
                  <div>
                  <h3>William Jackson</h3>
                  <span>Nigeria</span>
                  </div>
                </div>
                <p>Highly recommend Bright China Consultancy! Asadullah treated me like family and helped me achieve my academic goals.</p>
              </div>
            </li>
          </ul>
        </div>
        
    </div>
  )
}

export default Testimonial