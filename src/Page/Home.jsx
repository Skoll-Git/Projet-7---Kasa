import React from 'react'
import Navbar from '../components/générique/Navbar'
import Banner from '../components/générique/Banner'
import AppartGrid from '../components/spécifique/AppartGrid'
import Footer from '../components/générique/Footer'
import '../components/styles/Home.css'

function Home() {
const bannerImage = 'public/Image1.png'; // Remplacez par le chemin de votre image

  return (
    <div className="app__container">
      <Navbar />
      <Banner backgroundImage={bannerImage}/>
      <AppartGrid />
      <Footer/>
    </div>
  )
}

export default Home
