import React from 'react'
import "./FeatuereSingl6.css"
import cover from "../../assets/CoverImage.png"
const FeatuereSingl6 = () => {
  return (
    <div  style={{width:"100%",height:"600px",display:"flex",justifyContent:"center",alignItems:"center"}}>
      <div style={{width:"78%",height:"auto"}}>
         <div style={{width:"100%",height:"100px",display:"flex",alignItems:"center",fontFamily:"sans-serif",gap:"60px"}}>
            <h3 style={{width:"500px",height:"100px",fontSize:"35px",fontWeight:"800",lineHeight:"54px"}}>Enter the worled of all fashion trends</h3>
            <p style={{width:"450px",fontSize:"16px",fontWeight:"350",lineHeight:"30px",paddingLeft:"20px"}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since when an unknown printer </p>
            
         </div>
         <div style={{width:"100%",height:"400px",paddingTop:"50px"}}>
              <img src={cover} style={{width:"100%",height:"370px"}} alt="" />
            </div>
      </div>
    </div>
  )
}

export default FeatuereSingl6