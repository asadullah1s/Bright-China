import { useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Program from './Components/Programs/Program'
import Title from './Components/Title/Title'
import About from './Components/About/About'
import Campus from './Components/Campus/Campus'
import Testimonial from './Components/Testimonial/Testimonial'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
import VedioPlayer from './Components/VedioPlayer/VedioPlayer'
function App() {
  const [count, setCount] = useState(0)


  const [playState, setPlayState] = useState(false)
  return (
    <>
    <div>
    <Navbar />
    <Hero />
    <div className='container'>
    <Title subTitle='Our Program' title='What We Offer' />
    <Program />
    <About setPlayState={setPlayState}/>
    <Title subTitle='Gallery' title='Campus Photo' />
    <Campus />
    <Title subTitle='Testimonial' title='What Students Says' />
    <Testimonial />
    <Title subTitle='Contact Us' title='Get in Touch' />
    <Contact />
    <Footer />
    </div>
    <VedioPlayer playState={playState} setPlayState={setPlayState} />
    </div>
   
    
    </>
  )
}

export default App