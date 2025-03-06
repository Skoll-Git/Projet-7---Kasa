import React from 'react'
import { NavLink } from 'react-router'


function ErrorContent() {
  return (
    <div className='error__content'>
            <h1 className='error__content__text'>404</h1>
            <p className='error__content__p'>Oups! La page que vous demandez n'existe pas.</p>
            <NavLink to={"/"} className='error__content__link'>Retourner sur la page d'accueil</NavLink>
        </div> 
  )
}

export default ErrorContent
