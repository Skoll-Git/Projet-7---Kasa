import React from 'react'
import Navbar from '../components/Navbar'
import Banner from '../components/Banner'
import AppartGrid from '../components/AppartGrid'
import Footer from '../components/Footer'
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
