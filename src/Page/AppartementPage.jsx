import React from 'react'
import Navbar from '../components/générique/Navbar'
import Footer from '../components/générique/Footer'
import '../components/styles/AppartementPage.css'
import AppartementData from '../components/spécifique/AppartementData'

function AppartementPage() {
  return (
    <div className='appartement__container'>
      <Navbar />
      <AppartementData />
      <Footer />
    </div>
  )
}

export default AppartementPage
