import React from 'react'
import Navbar from '../components/Navbar'
import Banner from '../components/Banner'
import AboutMenu from '../components/AboutMenu'
import Footer from '../components/Footer'
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
