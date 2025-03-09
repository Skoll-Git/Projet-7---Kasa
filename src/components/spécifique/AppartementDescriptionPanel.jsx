import React from 'react'
import '../styles/AppartementPage.css'
import Collapse from './Collapse'

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
      <div className="appartement__content__info__volet about__container">
        <Collapse title="Description" content={selectedFlat.description} />
        
      </div>
      <div className="appartement__content__info__volet about__container">
        <Collapse title="Équipements" content={selectedFlat.equipments} />
      
      </div>
    </div>
)
}

export default AppartementDescriptionPanel
