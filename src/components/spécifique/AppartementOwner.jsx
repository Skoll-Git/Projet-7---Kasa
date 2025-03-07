import React from 'react'
import '../styles/AppartementPage.css'

function AppartementOwner( {selectedFlat} ) {
    const [firstName, lastName] = selectedFlat.host.name.split(" ");
  return (
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
  )
}

export default AppartementOwner
