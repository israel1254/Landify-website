import React from 'react'
import "./Cta.css"
import group from "../../assets/Group.png"
import layer from "../../assets/Layer.png"
import phone1 from "../../assets/PhoneMockup1.png"
import phone2 from "../../assets/PhoneMockup2.png"
const Cta = () => {
  return (
    <div style={{width:"100%",height:"430px",backgroundColor:"rgba(46, 197, 206, 1)",display:"flex",justifyContent:"center",fontFamily:"sans-serif"}}>
      <div style={{display:"flex"}}>
       <div style={{gap:"18px",padding:"30px",paddingTop:"60px"}}>
        <h2 style={{width:"500px",height:"110px",fontSize:"40px",fontWeight:"800",lineHeight:"60px"}}>Manage your projects from your mobile</h2>
        <p style={{width:"450px",height:"130px",fontSize:"16px",fontWeight:"360",lineHeight:"32px",color:"rgb(59, 60, 62)"}}>Download the app to manage your projects keep track of the progress and complete task procastinating Stay on track and complete on time!</p>

        <div>
          <h5 style={{fontSize:"18px",fontWeight:"450",lineHeight:"28px"}}>Get the App</h5>
          <div style={{display:"flex",width:"250px",height:"60px",gap:"10px",paddingTop:"10px"}}>
            <img src={group}  style={{width:"120px",height:"35px",cursor:"pointer"}} alt="" />
            <img src={layer} style={{width:"120px",height:"35px",cursor:"pointer"}} alt="" />
          </div>
        </div>
        
       </div>
       <img src={phone1} style={{width:"270px",height:"360px",gap:"10px"}} alt="" />
       <img src={phone2} style={{width:"270px",height:"360px",paddingTop:"70px"}} alt="" />
    </div>
    </div>
  )
}

export default Cta;