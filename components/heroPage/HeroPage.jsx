import React from 'react'
import iphone from "../../assets/iphone.png"
import "../../assets/style/HeroPage.css"
import BasicButtons from '../button/Button'
const HeroPage = () => {
  return (
    <div className='hero'>
      <div className="herodiv">
         <div className="leftside">
           <div>
            <h1>Organis projects.
              <br />
              Get more done.
              
            </h1>
            <BasicButtons/>
           </div>
           
         </div>
         <div className="rightsides">
          <img src={iphone} alt="" />
         </div>
         </div>
    </div>
  )
}

export default HeroPage