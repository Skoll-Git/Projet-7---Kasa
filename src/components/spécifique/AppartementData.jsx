import React, { useEffect, useState } from 'react'
import '../styles/AppartementPage.css'
import { useLocation } from 'react-router'
import AppartementDescriptionPanel from './AppartementDescriptionPanel'

function AppartementData() {
const location = useLocation()
const [selectedFlat, setSelectedFlat] = useState(null);
const [firstName, setFirstName] = useState("");
const [lastName, setLastName] = useState("");

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
    setFirstName(firstName);
    setLastName(lastName);
  }
  }) 
  .catch(console.error);
}

if (selectedFlat== null) { return <div>Loading...</div> }

  return (
    <div className="appartement__container">
      <div className='appartement__content'>
        <div className='appartement__content__img'>
            <img src= {selectedFlat.cover} alt="" />  
        </div>
        <div className="appartement__content__header">
          <div className='appartement__content__title'>    
              <h1>{selectedFlat.title}</h1>
              <h2>{selectedFlat.location}</h2>
              <div className='appartement__content__tags'>
              {selectedFlat.tags.map((tags) => (
                <span key={tags}>{tags}</span>
              ))}
              </div>
          </div>
          <div className='appartement__content__owner'>
              <div className='appartement__content__owner__detail'>
                <h3>
                  <span>{firstName}</span>
                  <span>{lastName}</span>
                </h3>
                <div className="appartement__content__owner__badge">
                  <img src={selectedFlat.host.picture} alt="image du propriètaire" />
                </div>
              </div>
              <div className="appartement__content__owner__stars">
                {[1, 2, 3, 4, 5].map((num) => (
                  <span key={num} className={selectedFlat.rating >= num ? "appartement__content__owner__stars__on" : "appartement__content__owner__stars__off"} >★</span>
                ))}
              </div>
          </div>
        </div>
        <AppartementDescriptionPanel selectedFlat={selectedFlat} />
    </div>
    </div>
  )
}

export default AppartementData
