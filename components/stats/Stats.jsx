import React from 'react'
import "./Stats.css"
import icon1 from "../../assets/01.png"
import icon4 from  "../../assets/04.png"
import icon5 from "../../assets/05.png"
import icon  from "../../assets/icon.png"
const Stats = () => {
  return (
    <div style={{width:"100%",height:"300px",display:"flex",justifyContent:"center",alignItems:'center',fontFamily:"sans-serif"}}>
        <div style={{width:"500px",height:"160px"}}>
            <h2 style={{fontSize:"40px",fontWeight:"700",lineHeight:"64px",color:"rgba(24, 25, 31, 1)"}}>Our 18 years of achievements</h2>
            <h5 style={{fontSize:"16px",fontWeight:"400",lineHeight:"32px",color:"rgb(41, 41, 43)"}}>With our super powers We have reached this</h5>
        </div>
        <div style={{width:"500px",height:"170px",display:"grid",gridTemplateColumns:"300px 300px ",fontFamily:"sans-serif"}}>
            <div style={{display:"flex"}}>
                <img src={icon1} style={{width:"30px",height:"30px",padding:"8px",gap:"10px",paddingTop:"17px"}} alt="" />
                <div> 
                    <h4 style={{fontSize:"28px",fontWeight:"700",lineHeight:"40px"}}>10,000+</h4>
                    <h5 style={{fontSize:"14px",fontWeight:"300",lineHeight:"26px"}}>Downlodes per dey</h5>
                </div>
            </div>
            <div  style={{display:"flex"}}>
                <img src={icon4} style={{width:"30px",height:"30px",padding:"8px",gap:"10px",paddingTop:"17px"}} alt="" />
                <div>
                    <h4  style={{fontSize:"28px",fontWeight:"700",lineHeight:"40px"}}>2 Million</h4>
                    <h5 style={{fontSize:"14px",fontWeight:"300",lineHeight:"26px"}}>Users</h5>
                </div>
            </div>
            <div style={{display:"flex"}}>
                <img src={icon5} style={{width:"30px",height:"30px",padding:"8px",gap:"10px",paddingTop:"17px"}} alt="" />
                <div>
                    <h4 style={{fontSize:"28px",fontWeight:"700",lineHeight:"40px"}}>500+</h4>
                    <h5 style={{fontSize:"14px",fontWeight:"300",lineHeight:"26px"}}>Clients</h5>
                </div>
            </div>
            <div style={{display:"flex"}}>
                <img src={icon} style={{width:"30px",height:"30px",padding:"8px",gap:"10px",paddingTop:"17px"}} alt="" />
                <div> 
                    <h4 style={{fontSize:"28px",fontWeight:"700",lineHeight:"40px"}}>140</h4>
                    <h5 style={{fontSize:"14px",fontWeight:"300",lineHeight:"26px"}}>Countries</h5>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Stats