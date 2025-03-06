import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import '../components/styles/AppartementPage.css'
import { useLocation } from 'react-router'
import js from '@eslint/js'

function AppartementPage() {
const location = useLocation()
const [selectedFlat, setSelectedFlat] = useState(null);
const [fisrtName, setFirstName] = useState("");
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
      <Navbar />
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
                  <span>{fisrtName}</span>
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
          <div className="appartement__content__info">
            <div className="appartement__content__info__volet">
                <h4>Description</h4>
                <span><i class="fa-solid fa-chevron-down"></i></span>
                <p>{selectedFlat.description}</p>
            </div>
            <div className="appartement__content__info__volet">
                <h4>Équipements</h4>
                <span><i className="fa-solid fa-chevron-down"></i></span>
                <ul>
                  {selectedFlat.equipments.map((equipment) => (
                    <li key={equipment}>{equipment}</li>
                  ))}
                </ul>
            </div>
          </div>  
    </div>
      <Footer />  
    </div>
  )
}

export default AppartementPage
