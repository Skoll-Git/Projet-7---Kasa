import React from 'react'
import './styles/Appartement.css'
import { NavLink } from 'react-router'

function Appartement() {
  return (
    <NavLink to={"/AppartementPage"} className='appart'> 
      <h2 className='appart__title'>Titre de la location</h2>
    </NavLink>
  )
}

export default Appartement
