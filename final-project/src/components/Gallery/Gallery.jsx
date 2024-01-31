import React from 'react'
import instagramSample from "../../assets/instagram-sample.jpg"
import ProfileData from '../profileData/ProfileData'
import './Gallery.css'


const Gallery = () => {
  return (
    <div className='--gaellery-page'>
      <ProfileData/>
      <section className='gallery'>
          <img className='item-image' src={instagramSample} alt="" />
          <img className='item-image' src={instagramSample} alt="" />
          <img className='item-image' src={instagramSample} alt="" />
      </section>
    </div>
  )
}

export default Gallery