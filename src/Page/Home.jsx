import React from 'react'
import Navbar from '../components/générique/Navbar'
import Banner from '../components/générique/Banner'
import AppartGrid from '../components/spécifique/AppartGrid'
import Footer from '../components/générique/Footer'
import '../components/styles/Home.css'

function Home() {
  return (
    <div className="app__container">
      <Navbar />
      <Banner />
      <AppartGrid />
      <Footer/>
    </div>
  )
}

export default Home
