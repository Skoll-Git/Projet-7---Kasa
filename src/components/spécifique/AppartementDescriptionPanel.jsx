import React from 'react'
import '../styles/AppartementPage.css'

function AppartementDescriptionPanel( {selectedFlat} ) {
    const [isDescriptionVisible, setIsDescriptionVisible] = React.useState(false)
    const [isEquipmentVisible, setIsEquipmentVisible] = React.useState(false)
  
    const toggleDescriptionVisibility = () => {
      setIsDescriptionVisible(!isDescriptionVisible)
    }
  
    const toggleEquipmentVisibility = () => {
      setIsEquipmentVisible(!isEquipmentVisible)
    }

  return (
    <div className="appartement__content__info">
      <div className="appartement__content__info__volet">
        <h4>Description</h4>
        <span>
          <i className={`fa-solid fa-chevron-up ${isDescriptionVisible ? 'rotate-180' : 'rotate'}`}
            onClick={toggleDescriptionVisibility}
          ></i>
        </span>
        <div className={isDescriptionVisible ? 'appartement__content__info__data appartement__content__info__data--visible' : 'appartement__content__info__data'}>
          <p>{selectedFlat.description}</p>
        </div>
      </div>
      <div className="appartement__content__info__volet">
        <h4>Équipements</h4>
        <span>
          <i className={`fa-solid fa-chevron-up ${isEquipmentVisible ? 'rotate-180' : 'rotate'}`}
            onClick={toggleEquipmentVisibility}
          ></i>
        </span>
        <div className={isEquipmentVisible ? 'appartement__content__info__data appartement__content__info__data--visible' : 'appartement__content__info__data'}>
          <ul>
            {selectedFlat.equipments.map((equipment) => (
              <li key={equipment}>{equipment}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
)
}

export default AppartementDescriptionPanel
