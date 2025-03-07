import React from 'react'
import '../styles/AppartementPage.css'

function AppartementTitle( {selectedFlat} ) {
  return (
    <div className='appartement__content__title'>    
              <h1>{selectedFlat.title}</h1>
              <h2>{selectedFlat.location}</h2>
              <div className='appartement__content__tags'>
              {selectedFlat.tags.map((tags) => (
                <span key={tags}>{tags}</span>
              ))}
              </div>
    </div>
  )
}

export default AppartementTitle
