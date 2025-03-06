import React from 'react'
import '../styles/AboutMenu.css'

function AboutMenu() {

  const [isContentVisible, setIsContentVisible] = React.useState(false)

  const showContent = () => {
    setIsContentVisible(!isContentVisible);
  }

  return (
    <div className='about__container'>
      <div className='volet'>
        <h2>Fiabilité</h2>
        <div><img src="./public/arrow_back.png" alt="flèche direction haut" onClick={showContent}/></div>
      </div>
      {isContentVisible && <p className='volet__content'>test</p>}
      <div className='volet'>
        <h2>Respect</h2>
        <div><img src="./public/arrow_back.png" alt="flèche direction haut" /></div>
      </div>
      {isContentVisible && <p className='volet__content'>test</p>}

      <div className='volet'>
        <h2>Service</h2>
        <div><img src="./public/arrow_back.png" alt="flèche direction haut" /></div>
      </div>
      <div className='volet'>
        <h2>Sécurité</h2>
        <div><img src="./public/arrow_back.png" alt="flèche direction haut" /></div>
      </div>
    </div>
  )
}
export default AboutMenu
