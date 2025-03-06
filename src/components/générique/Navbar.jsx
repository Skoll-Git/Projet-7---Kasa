import React from 'react'
import '../styles/Navbar.css'
import { NavLink } from 'react-router'

function Navbar() {
return ( 
    <nav className='navbar'>
        <div className='navbar__logo'><img src="\LOGO.png" alt="Logo Kasa" className='navbar__logo' /></div>
        <ul className='navbar__menu'>
            <NavLink to={"/"}>Accueil</NavLink>
            <NavLink to={"/about"}>A Propos</NavLink>
        </ul>
        
    </nav>
    )
}

export default Navbar
