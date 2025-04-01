import React from 'react'
import "../../assets/style/LogoClouds.css"
import airbnb from "../../assets/Airbnb.png"
import fedex from "../../assets/FedEx.png"
import hubspot from "../../assets/Hubspot.png"
import walmart from "../../assets/Walmart.png"
import microsoft from "../../assets/Microsoft.png"
import google from "../../assets/Google.png"
const LogoClouds = () => {
  return (
    <div className='logoClouds'>
        <hr />
        <div className="cloudscontener">
            <ul>
                <li><img src={airbnb} style={{width:"80px",height:"22px"}} alt="" /></li>
                <li><img src={hubspot} style={{width:"74px",height:"22px"}} alt="" /></li>
                <li><img src={google} style={{width:"74px",height:"24px"}} alt="" /></li>
                <li><img src={microsoft}style={{width:"74px",height:"22px"}} alt="" /></li>
                <li><img src={walmart} style={{width:"74px",height:"22px"}} alt="" /></li>
                <li><img src={fedex} style={{width:"74px",height:"22px"}} alt="" /></li>
            </ul>
        </div>
        <hr style={{paddingBottom:"0"}}/>
    </div>
  )
}

export default LogoClouds