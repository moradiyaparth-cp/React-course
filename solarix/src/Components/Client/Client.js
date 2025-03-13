import React from 'react'
import './Client.css'
import about_img from '../../assets/im1.jpg'

const Client = () => {
  return (
    <div className='about client'>
        
        <div className="about-right">
            <h3>Why Choose us Smart Energy Solutions ?</h3>
            <h2>Powering a Sustainable Future, Today</h2>
            
            <p>At Smart Energy Solutions, we offer expert, tailored solar solutions designed to meet your unique energy needs. With years of experience and a commitment to using the highest quality products, we ensure maximum efficiency, reliability, and sustainability. Our team works closely with you to create a customized solar system that delivers long-term savings and reduces your environmental impact.</p>

            <p>We pride ourselves on exceptional customer service and transparent pricing, making the transition to solar energy easy and affordable. From installation to ongoing support, we’re with you every step of the way, ensuring your system performs at its best for years to come.</p>

        </div>
        <div className="about-left">
            <img src={about_img} alt="Client image" className='about-img'/>
        </div>
    </div>
  )
}

export default Client