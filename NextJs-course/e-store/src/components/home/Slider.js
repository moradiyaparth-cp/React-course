"use client"
import React, { useState, useEffect } from 'react'
import styles from '@/styles/home/hero.module.css'
import Image from 'next/image'

const images = [
 "https://storage.googleapis.com/fir-auth-1c3bc.appspot.com/1692947383286-714WUJlhbLS._SL1500_.jpg",
 "https://storage.googleapis.com/fir-auth-1c3bc.appspot.com/1692255251854-xbox.jpg",
 "https://storage.googleapis.com/fir-auth-1c3bc.appspot.com/1692257709689-logitech heaphone.jpg",
 "https://storage.googleapis.com/fir-auth-1c3bc.appspot.com/1692941008275-headphone3.jpg",
 "https://storage.googleapis.com/fir-auth-1c3bc.appspot.com/1691056487173-headphon2.jpg"
]

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(()=>{
      setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length)
    }, 3000); // change slide every 3 seconds

    return ()=> clearInterval(interval) // cleanup interval on component unmount
  }, [])
  
  return (
    <div className={styles.imageSection}>
      <div className={styles.slider}>
        {images.map((image, index) =>{
            return(
              <Image alt={`Slide ${index + 1}`} className={`${styles.slide} ${index === currentSlide ? styles.active : ''}`} src={image} key={index} fill/> 
             )
        })}
      </div>
    </div>
  )
}

export default Slider