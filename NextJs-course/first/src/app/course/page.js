import React from 'react'
import image1 from '@/Images/image-1.png'
import Image from 'next/image'

const CoursePage = () => {
  return (
    <main>
        <h1>Course page</h1>
        <Image src={image1.src} width={400} height={400}/>
        {/* <img src={image1.src} alt="Image not load" /> */}
    </main>
  )
}

export default CoursePage