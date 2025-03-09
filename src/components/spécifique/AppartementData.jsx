import React, { useEffect, useState } from 'react'
import '../styles/AppartementPage.css'
import { useLocation } from 'react-router'
import AppartementDescriptionPanel from './AppartementDescriptionPanel'
import AppartementOwner from './AppartementOwner'
import AppartementTitle from './AppartementTitle'
import AppartementBanner from './AppartementBanner'

function AppartementData() {
const location = useLocation()
const [selectedFlat, setSelectedFlat] = useState(null);

useEffect(() => {
  fetchAppartementData();
}, []);

function fetchAppartementData() {
  fetch("db.json")
  .then((res) => res.json())
  .then((flats) => {
   const flat = flats.find ((flat) => flat.id === location.state.Id);
   setSelectedFlat(flat);
   if (flat && flat.host && flat.host.name) {
    const [firstName, lastName] = flat.host.name.split(" ");
  }
  }) 
  .catch(console.error);
}

if (selectedFlat== null) { return <div>Loading...</div> }

  return (
    <div className="appartement__container">
      <div className='appartement__content'>
          <AppartementBanner selectedFlat={selectedFlat} />
        <div className="appartement__content__header">
          <AppartementTitle selectedFlat={selectedFlat} />
          <AppartementOwner selectedFlat={selectedFlat} />
        </div>
        <AppartementDescriptionPanel selectedFlat={selectedFlat} />
    </div>
    </div>
  )
}

export default AppartementData
