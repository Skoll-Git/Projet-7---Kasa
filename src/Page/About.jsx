import React from 'react'
import Navbar from '../components/générique/Navbar'
import Banner from '../components/générique/Banner'
import AboutMenu from '../components/spécifique/AboutMenu'
import Footer from '../components/générique/Footer'
import '../components/styles/About.css'

function About() {
  return (
    <div className='about__container'>
      <Navbar />
      <Banner />
      <AboutMenu />
      <Footer/>
    </div>
  )
}

export default About
