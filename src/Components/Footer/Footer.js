import './Footer.scss'
import { NavLink } from 'react-router-dom'

function Footer() {
    return (
        <div className="footer">
            <div className="footer-container">
                <div className='footer-contents-wrapper'>
                    <div className='logo-container'>
                        <img src='/assets/logo copy.svg' /> 
                    </div>
                    <div className='footer-links'>
                        <ul className='footer-ul-links'>
                            <li className='footer-list'><NavLink to='/portfolio' >Portfolio</NavLink></li>
                            <li className='footer-list'><NavLink to='/about' >About Us</NavLink></li>
                            <li className='footer-list'><NavLink to='/contact' >Contact</NavLink></li>
                        </ul>
                    </div>
                    {/* <Link className=''></Link> */}
                    <NavLink className='footer-btn' to='/portfolio'>See Our Portfolio <i className="fa-solid fa-arrow-right"></i></NavLink>
                </div>
            </div>
        </div>
    )
}

export default Footer