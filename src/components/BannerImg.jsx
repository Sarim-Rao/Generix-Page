import React from 'react'
import bannerImage from "../assets/banner-image.jpg"

const BannerImg = () => {
  return (
    <>
     <div className="bannerImg">
         <img src={bannerImage} alt="banner image" />
      </div>
      
    </>
  )
}

export default BannerImg
