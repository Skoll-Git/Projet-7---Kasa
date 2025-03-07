import React, { useEffect, useState } from 'react'
import '../styles/AppartGrid.css'
import '../styles/Appartement.css'
import Appartement from './Appartement'

function AppartGrid() {
  const [appartements, setAppartements] = useState([]);

  useEffect(() => {
    fetchAppartements();
  }, []);

  function fetchAppartements() {
    fetch("db.json")
      .then((res) => res.json())
      .then((data) => setAppartements(data))
      .catch(console.error);
  }

  return (
    <div className='Appart__Grid'>
      {appartements.map((appartement) => (
        <Appartement
          key={appartement.id} // Utilisez une clé unique
          title={appartement.title}
          cover={appartement.cover}
          id={appartement.id}
        />
      ))}
    </div>
  )
}

export default AppartGrid
