import React from 'react'
import '../styles/AppartementPage.css'
import '../styles/AppartementBanner.scss'

function AppartementBanner( {selectedFlat} ) {
const pictures = selectedFlat.pictures;

const [currentPicture, setCurrentPicture] = React.useState(0);

const getCLassName = (i) => {
    if (i === currentPicture) return "show" ; return "";
}

const moveToNext = () => {
    setCurrentPicture((currentPicture + 1) % pictures.length );
};
const moveToPrevious = () => {
    const nextPicture = currentPicture - 1;
    if (nextPicture < 0) {
        setCurrentPicture(pictures.length - 1);
        return;
    }    
    setCurrentPicture((currentPicture - 1));
}

return (
    <div className='appartement__content__img'>
    <button className='appartement__content__img__previous' onClick={(moveToNext)}><i className='fa-solid fa-chevron-left'></i></button>
    <button className='appartement__content__img__next' onClick={(moveToPrevious)}><i className='fa-solid fa-chevron-right'></i></button>
      {pictures.map((picture, i) => (
          <img className={getCLassName(i)} key={picture} src={picture} alt=""></img> ))}  
    </div>
 )
}


export default AppartementBanner
