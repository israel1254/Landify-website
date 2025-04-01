import React from 'react'
import "./FeatureSingle5.css"
import phone from "../../assets/PhoneMockup.png"
import EastIcon from '@mui/icons-material/East';
const FeatureSingle5 = () => {
  return (
    <div style={{width:"100%",height:"600px", display:"flex",justifyContent:"center",alignItems:"center",gap:"30px"}}>
        <img src={phone} style={{width:"450px",height:"450px"}} alt="" />
        <div style={{width:"500px",height:"400px",fontFamily:"sans-serif",paddingTop:"120px"}}>     
             <h3 style={{fontSize:"40px",fontWeight:"700",lineHeight:"50px",paddingLeft:"50px"}}>Headline</h3>
             <p style={{width:"440px",height:"160px",fontSize:"16px",fontWeight:"400",lineHeight:"32px",paddingLeft:"50px",color:"rgb(46, 46, 49)"}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
             <div style={{paddingTop:"30px"}}>
             <a href=""style={{ height:"24px",width:"auto",fontSize:"19px",fontWeight:"510",paddingLeft:"50px",paddingTop:"100px",textDecoration:"none"}} >Get Started <EastIcon style={{fontSize:"20px",fontWeight:"400",paddingTop:"10px"}}/> </a>
             </div>
             
        </div>
    </div>
  )
}

export default FeatureSingle5