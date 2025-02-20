import React from 'react'
import './styles/AppartGrid.css'
import './styles/Appartement.css'
import Appartement from './Appartement'

function AppartGrid() {
  return (
    <div className='grid'>
        <Appartement/>
        <Appartement/>
        <Appartement/>
        <Appartement/>
        <Appartement/>
        <Appartement/>
    </div>
  )
}

export default AppartGrid
