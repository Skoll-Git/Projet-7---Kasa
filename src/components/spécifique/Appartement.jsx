import React from 'react'
import '../styles/Appartement.css'
import { NavLink } from 'react-router'

function Appartement(props) {
  
  return (
    <NavLink to={"/AppartementPage"} state={{Id:props.id}} className='appart'>
      <div className="appart__card">
        <img src= {props.cover} alt="" />
        <h2 className='appart__card__title'>{props.title}</h2>
      </div>
    </NavLink>
  )
}

export default Appartement
