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
            <img src={gallery_1} alt="gallery_1" />
            <img src={gallery_2} alt="gallery_2" />
            <img src={gallery_3} alt="gallery_3" />
            <img src={gallery_4} alt="gallery_4" />
        </div>
        <button className='btn dark-btn'>See more here <img src={white_arrow} alt="white arrow" /></button>
    </div>
  )
}

export default Gallery