import React from 'react'
import {RiEdgeNewLine} from "react-icons/ri"

const FooterLinks = () => {
  return (
    <>

<div className="container Footer-sections">
    <div className="Generix-sec">
      <div className="iconHead">
    <RiEdgeNewLine className="icon"/> <h4> Generix </h4>
      </div>

      <h6>Contact Us -</h6>

       <p>support@designspace.io</p>
      <h6>Office -</h6>

       <p>123 Anywhere St,Any</p>
       <p>City,ST 12345</p>
    </div>
    <div className="product-sec section">
      <h6>Products</h6>
       <p>Enterpise</p>
       <p>Security</p>
       <p>Customer Stories</p>
       <p>Pricing</p>
       <p>Demo</p>

    </div>
    <div className="Teams-sec section">
      <h6>Engineering</h6>
       <p>Financial Services</p>
       <p>Sales</p>
       <p>IT</p>
       <p>Customer Support</p>
       <p>Human Resoureces</p>
       <p>Media</p>

    </div>
    <div className="Resources-sec section">
      <h6>Tips</h6>
       <p>Blog</p>
       <p>Event</p>
       <p>Certified Program</p>
       <p>Help Center</p>
       <p>API</p>
       <p>Download Templete</p>

    </div>
    <div className="Company-sec section">
      <h6>About Us</h6>
       <p>Leadership</p>
       <p>News</p>
       <p>Media Kit</p>
       <p>Career</p>
       <p>Documentation</p>
       

    </div>
   </div>
      
    </>
  )
}

export default FooterLinks
