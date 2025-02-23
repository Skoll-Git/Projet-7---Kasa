import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { NavLink } from 'react-router'
import '../components/styles/Error.css'

function Error() {
  return (
    <div className="error__container">
      <Navbar />
        <div className='error__content'>
            <h1 className='error__content__text'>404</h1>
            <p className='error__content__p'>Oups! La page que vous demandez n'existe pas.</p>
            <NavLink to={"/"} className='error__content__link'>Retourner sur la page d'accueil</NavLink>
        </div> 
      <Footer />                                                                 
    </div>
  )
}

export default Error
