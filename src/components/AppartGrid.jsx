import React, {useEffect, useState} from 'react'
import './styles/AppartGrid.css'
import './styles/Appartement.css'
import Appartement from './Appartement'


function AppartGrid() {
  const [appartements, setAppartements] = useState([]);

  useEffect(fetchAppartements, []);

  function fetchAppartements() {
    fetch("db.json")
    .then((res) => res.json())
    .then((res) => setAppartements(res))
    .catch(console.error);
  }

  return (
    <div className='Appart__Grid'>
        {appartements.map((appartements) => 
          (<Appartement title={appartements.title} cover={appartements.cover} id={appartements.id} />)
        )}
    </div>
  )
}

export default AppartGrid
