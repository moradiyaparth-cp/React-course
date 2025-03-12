import React from 'react'
import './About.css'
import about_img from '../../assets/Solar_about.jpg'

const About = () => {
  return (
    <div className='about'>
        <div className="about-left">
            <img src={about_img} alt="" className='about-img'/>
        </div>
        <div className="about-right">
            <h3>ABOUT OUR COMPANY</h3>
            <h2>Powering a Sustainable Future, Today</h2>

            <p>Established in the year 2017, Smart Energy Solution in Shastri Nagar, Bhavnagar is a top player in the category solar roof dealers in the Bhavnagar. This well-known establishment acts as a one-stop destination servicing customers both local and from other parts of Bhavnagar.</p>

            <p>Over the course of its journey, this business has established a firm foothold in it's industry. The belief that customer satisfaction is as important as their products and services, have helped this establishment garner a vast base of customers, which continues to grow by the day.</p>

            <p>This business employs individuals that are dedicated towards their respective roles and put in a lot of effort to achieve the common vision and larger goals of the company.</p>
        </div>
    </div>
  )
}

export default About