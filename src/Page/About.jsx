import React from 'react'
import Navbar from '../components/générique/Navbar'
import Banner from '../components/générique/Banner'
import AboutMenu from '../components/spécifique/AboutMenu'
import Footer from '../components/générique/Footer'
import '../components/styles/About.css'

function About() {
  const bannerImage = 'public/Image2.png'; // Remplacez par le chemin de votre image

  return (
    <div className='about__container'>
      <Navbar />
      <Banner backgroundImage={bannerImage} />
      <AboutMenu />
      <Footer />
    </div>
  )
}

export default About
