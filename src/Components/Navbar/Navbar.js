import React from 'react'
import './Navbar.scss'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";


function Navbar() {
    return (
        <div id='navbar'>
            <div className='navbar-container'>
                <div className='navbar-contents-wrapper'>
                    <div className='logo'>
                        <Link to='/' ><img src='/assets/logo.svg' /></Link>
                    </div>
                    <div className='navbar-links-wrapper'>
                        <ul className='nav-links'>
                            <li className='nav-list'><Link to='/portfolio' >Portfolio</Link></li>
                            <li className='nav-list'><Link to='/about' >About Us</Link></li>
                            <li className='nav-list'><Link to='/contact' >Contact</Link></li>
                        </ul>
                    </div>
                    <i className="fa-solid fa-bars"></i>
                </div>
            </div>
        </div>
    )
}

export default Navbar