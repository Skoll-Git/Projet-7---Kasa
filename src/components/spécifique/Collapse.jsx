import React from 'react'
import { useState } from 'react'
import '../styles/AboutMenu.css'




function Collapse({title, content}) {
const [isVisible, setVisible] = useState(false);

const toggleVisible = () => {
    setVisible(!isVisible);
  }
  return (
    <>
      <div className='volet'>
        <h2>{title}</h2>
        <div><i className={`fa-solid fa-chevron-up ${isVisible ? 'rotate-180' : 'rotate'}`}
            onClick={toggleVisible}
          ></i></div>
      </div>
      {Array.isArray(content) ? <div className={isVisible ? 'appartement__content__info__data appartement__content__info__data--visible' : 'appartement__content__info__data'}>
          <ul>
            {content.map((equipment) => (
              <li key={equipment}>{equipment}</li>
            ))}
          </ul>
        </div>: <div className={`volet__content ${isVisible ? 'volet__content--visible' : ''}`}>
        {content}
      </div>}
    </>
  )
}

export default Collapse
