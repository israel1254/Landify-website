import React from 'react'
import "../../assets/style/Testimonial.css"
import quote from "../../assets/Quote.png"
import hubspot from "../../assets/Hubspot.png"
import airbnb from "../../assets/Airbnb.png"
import bookmyshow from "../../assets/BookMyShow.png"
const Testimonial = () => {
  return (
    <div className='testimonialRaperDev'> 
         <img className='largequoteImg' src={quote}  alt="" />

        <div className='testimonialDev'>
          
          <div style={{width:"68%"}}>
            <div className='testimonialText' >
            <h2 >Real Stories from <br/>Real Customers</h2>

            <h5 >Get inspired by these stories</h5>
            </div>
            <div style={{display:"flex",zIndex:"2"}}>
            <div className='leftCardDev' >
              
            
              <div style={{width:"80%"}}>
              <img className='hubspotIcon' src={hubspot}  alt="" />

              <div className='leftCardText' > 
                <img src={quote} style={{width:"16px",height:"14px"}} alt="" />
                <div className='leftTextDev' ><p>To quecly start my startup landing page design, i was looking for a landing page ui kit Landify is one of the best landing page ui kit i have come across. it's so flexible, well organised and easiy editable.</p>
                 <div className='leftNameDev' style={{paddingTop:"15px"}}>
                 <h4>Floyd Miles</h4>
                 <p >Vise President Gopro</p>
                 </div>
               
                </div>
                
              </div>
              
              </div>
            </div>
            {/* testimonial cars 2 */}
            <div style={{paddingLeft:"30px",paddingTop:"50px"}}>
            <div className='rightTopDev'>
              <div style={{width:"90%"}}>
                <img className='rightTopAirbnbImg' src={airbnb} alt="" />
                  <div className='rightTopTextDev' >
                     <img className='rightTopQuoteImg' src={quote} alt="" />
                     <div  style={{paddingTop:"10px",paddingLeft:"10px"}}>
                       <p className='rightTopTextP'  >I used landify and created a landing page for my startup within a week. The landify ui kit is simple and highly intuitive,so anyone can use it. </p>
                       <div className='rightTopNameDev' >
                        <h1>Jone Cooper</h1>
                        <p>CEO, Airbnb</p>
                       </div>
                     </div>
                  </div>
              </div>
            </div>
            {/* seconderi */}
            <div className='rightBottomDev'>
                <div style={{width:"80%",height:"auto"}}>
                    <img className='rightBottomBookMyShowImg' src={bookmyshow}  alt="" />
                    <div className='rightBottomText'>
                      <img className='rightBottmQuoteImg' src={quote} alt="" />
                      <div className='rightBottomTextContener'>
                        <p className='rightBottomParagraf'>Landify saved our time in designing my company page.</p>
                        <div className='rightBottomNameDev'>
                          <h5 >Kristin Watson</h5>
                          <p>Co-Founder,BookMyShow</p>
                        </div>
                      </div>
                    </div>
                </div>
            </div>
            </div>
            </div>
            </div>
        </div>
        
    </div>
  )
}

export default Testimonial