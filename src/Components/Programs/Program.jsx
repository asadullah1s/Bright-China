import React from 'react'
import './Program.css'
import program_1 from '../../assets/program-1.png'
import program_2 from '../../assets/program-2.png'
import program_3 from '../../assets/program-3.png'
import program_4 from '../../assets/program-4.png'
import program_5 from '../../assets/program-5.png'
import program_6 from '../../assets/program-6.png'
import program_icon_1 from '../../assets/program-icon-1.png'
import program_icon_2 from '../../assets/program-icon-2.png'
import program_icon_3 from '../../assets/program-icon-3.png'
const Program = () => {
  return (
    
    <div  className='programs'>
        <div className='program'>
            <img src={program_1} alt=''/>
            <div className="caption">
                <img src={program_icon_1} alt="" />
                <p>MBBS Program</p>
            </div>
        </div>
        <div className='program'>
            <img src={program_2} alt=''/>
            <div className="caption">
                <img src={program_icon_2} alt="" />
                <p>BDs Program</p>
            </div>
        </div>
        <div className='program'>
            <img src={program_3} alt=''/>
            <div className="caption">
                <img src={program_icon_3} alt="" />
                <p>Chinees Language Program</p>
            </div>
        </div>
        <div className='program'>
            <img src={program_4} alt=''/>
            <div className="caption">
                <img src={program_icon_1} alt="" />
                <p>Bachlor Program</p>
            </div>
        </div>
        <div className='program'>
            <img src={program_5} alt=''/>
            <div className="caption">
                <img src={program_icon_2} alt="" />
                <p>Master Program</p>
            </div>
        </div>
        <div className='program'>
            <img src={program_6} alt=''/>
            <div className="caption">
                <img src={program_icon_3} alt="" />
                <p>Phd Program</p>
            </div>
        </div>
        

        
        

    </div>

  )
}

export default Program