import React from 'react'
import './Navbar.scss'
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";


function Navbar({change_menu_function, menu_state}) {
    return (
        <div id='navbar'>
            <div className='navbar-container'>
                <div className='navbar-contents-wrapper'>
                    <div className='logo'>
                        <NavLink to='/' ><img src='/assets/logo.svg' /></NavLink>
                    </div>
                    <div className='navbar-links-wrapper'>
                        <ul className={`nav-links ${menu_state ? 'show-menu' : ''}`}>
                            <li className='nav-list'><NavLink to='/portfolio' >Portfolio</NavLink></li>
                            <li className='nav-list'><NavLink to='/about' >About Us</NavLink></li>
                            <li className='nav-list'><NavLink to='/contact' >Contact</NavLink></li>
                        </ul>
                    </div>
                    <i className="fa-solid fa-bars" onClick={change_menu_function}></i>
                </div>
            </div>
        </div>
    )
}

export default Navbar