import React from 'react'
import "./Footer.css"
import group from "../../assets/Group.png"
import layer from "../../assets/Layer.png"
import logo from "../../assets/Logo.png"
const Footer = () => {
  return (
    <div className='footerSection'>
    
      <div className="leftFooterDev">
        <img src={logo} alt="" />
        <div className="link">
          <a href=""><h3>Download Now   License</h3></a>
          <ul>
            <li><a href="">About</a></li>
            <li><a href="">Features</a></li>
            <li><a href="">Pricing</a></li>
            <li><a href="">Careers</a></li>
            <li><a href="">Help</a></li>
            <li><a href="">Privacy Policy</a></li>
          </ul>
          <h5>2025 Landify ui kit All right reserved</h5>
        </div>
      </div>
      <div className="rightFooterDev">
        <h5>Get the App</h5>
        <a href=""><img src={layer} alt="" /></a>
        <a href=""><img src={group} alt="" /></a>
      </div>
   
    </div>
  )
}

export default Footer