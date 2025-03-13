import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Title from './Components/Title/Title'
import About from './Components/About/About'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
import Gallery from './Components/Gallery/Gallery'
import Service from './Components/Service/Service'
import Client from './Components/Client/Client'

const App = () => {


  return (
    <div>
      <Navbar />
      <Hero />
      <div className="container">

        <Title subTitle='Our Services' title='What We Offer'/>
        <Service />

        <About />

        <Title subTitle='Gallery' title='Our Sites'/>
        <Gallery />

        <Title subTitle='Why Us?' title='Why Choose us?'/>
        <Client />

        <Title subTitle='Contact Us' title='Get in Touch'/>
        <Contact apiKey={process.env.REACT_APP_API}/>

        <Footer />
      </div>
      
    </div>
  )
}

export default App