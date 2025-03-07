import React, { useState } from 'react'
import '../styles/AboutMenu.css'

function AboutMenu() {
  const [isFiabilitéVisible, setIsFiabilitéVisible] = useState(false);
  const [isRespectVisible, setIsRespectVisible] = useState(false);
  const [isServiceVisible, setIsServiceVisible] = useState(false);
  const [isSécuritéVisible, setIsSécuritéVisible] = useState(false);

  const toggleFiabilité = () => {
    setIsFiabilitéVisible(!isFiabilitéVisible);
  }
  const toggleRespect = () => {
    setIsRespectVisible(!isRespectVisible);
  }
  const toggleService = () => {
    setIsServiceVisible(!isServiceVisible);
  }
  const toggleSécurité = () => {
    setIsSécuritéVisible(!isSécuritéVisible);
  }

  return (
    <div className='about__container'>
      <div className='volet'>
        <h2>Fiabilité</h2>
        <div><i className={`fa-solid fa-chevron-up ${isFiabilitéVisible ? 'rotate-180' : 'rotate'}`}
            onClick={toggleFiabilité}
          ></i></div>
      </div>
      <div className={`volet__content ${isFiabilitéVisible ? 'volet__content--visible' : ''}`}>
        Les annonces postées sur Kasa garantissent une fiabilité totale.
        Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.
      </div>
      
      <div className='volet'>
        <h2>Respect</h2>
        <div><i className={`fa-solid fa-chevron-up ${isRespectVisible ? 'rotate-180' : 'rotate'}`}
            onClick={toggleRespect}
          ></i></div>
      </div>
      <div className={`volet__content ${isRespectVisible ? 'volet__content--visible' : ''}`}>
        La bienveillance fait partie des valeurs fondatrices de Kasa.
        Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.
      </div>
      
      <div className='volet'>
        <h2>Service</h2>
        <div><i className={`fa-solid fa-chevron-up ${isServiceVisible ? 'rotate-180' : 'rotate'}`}
            onClick={toggleService}
          ></i></div>
      </div>
      <div className={`volet__content ${isServiceVisible ? 'volet__content--visible' : ''}`}>
        La qualité du service est au coeur de notre engagement chez Kasa.
        Nous veillons à ce que chaque interaction que ce soit avec nos hôtes ou nos locataires, soit empreinte de respect et de bienveillance.
      </div>
      
      <div className='volet'>
        <h2>Sécurité</h2>
        <div><i className={`fa-solid fa-chevron-up ${isSécuritéVisible ? 'rotate-180' : 'rotate'}`}
            onClick={toggleSécurité}
          ></i></div>
      </div>
      <div className={`volet__content ${isSécuritéVisible ? 'volet__content--visible' : ''}`}>
        La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs,
        chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire,
        cela permet à nos équipes de vérifier ques les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.
      </div>
    </div>
  )
}

export default AboutMenu