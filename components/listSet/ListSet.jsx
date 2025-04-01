import React from 'react'
import "./ListSet.css";
const ListSet= (props) => {
  return (
    <div className="listcard"  style={{ width:"320px",height:"140px",display:"flex",justifyContent:"center",textAlign:"center" ,paddingBottom:"15px",cursor:"pointer"}}>
         <div style={{textAlign:"center"}}>
            <img src={props.list.img} style={{width:"32px",height:"32px",paddingBottom:"20px"}} alt="" />
            <div className="carddescription" style={{ width:"310px", textAlign:"center"}}>
            <h5 style={{fontSize:"22px",fontFamily:"sans-serif",fontWeight:"540",paddingBottom:"10px"}}>{props.list.title}</h5>
            <p style={{fontSize:"14px",fontWeight:'200',fontFamily:"sans-serif",color:"rgb(64, 64, 65)",width:"290px",alignItems:"center",display:"flex"}}>{props.list.desc} </p>
            </div> 
         </div>
    </div>
  )
}

export default ListSet;
 