import React from 'react'
import './Gallery.css'
import gallery_1 from '../../assets/site_1.avif'
import gallery_2 from '../../assets/site_2.avif'
import gallery_3 from '../../assets/site_3.avif'
import gallery_4 from '../../assets/site_4.avif'
import white_arrow from '../../assets/white-arrow.png'


const Gallery = () => {
  return (
    <div className='campus'>
        <div className="gallery">
            <img src={gallery_1} alt="" />
            <img src={gallery_2} alt="" />
            <img src={gallery_3} alt="" />
            <img src={gallery_4} alt="" />
        </div>
        <button className='btn dark-btn'>See more here <img src={white_arrow} alt="" /></button>
    </div>
  )
}

export default Gallery