import React from 'react'
import '../styles/Banner.css'

function Banner({ backgroundImage }) {
  const bannerStyle = {
    backgroundImage: `url(${backgroundImage})`,
  }

  return (
    <div className="banner" style={bannerStyle}>
      <h1 className='banner__text'>Chez vous, partout et ailleurs</h1>
    </div>
  )
}

export default Banner