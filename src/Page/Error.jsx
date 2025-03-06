import React from 'react'
import Navbar from '../components/générique/Navbar'
import Footer from '../components/générique/Footer'
import '../components/styles/Error.css'
import ErrorContent from '../components/spécifique/ErrorContent'

function Error() {
  return (
    <div className="error__container">
      <Navbar />
      <ErrorContent />
      <Footer />                                                                 
    </div>
  )
}

export default Error
