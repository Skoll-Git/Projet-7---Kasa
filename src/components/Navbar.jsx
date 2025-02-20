import React from 'react'
import './styles/Navbar.css'

function Navbar() {
return ( 
    <nav className='navbar'>
        <div className='navbar__logo'><img src="\LOGO.png" alt="Logo Kasa" /></div>
        <ul className='navbar__menu'>
            <li><a href=''>Accueil</a></li>
            <li><a href=''>à Propos</a></li>
        </ul>
        
    </nav>
    )
}

export default Navbar
