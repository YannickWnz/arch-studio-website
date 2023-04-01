import './Footer.scss'
import { Link } from 'react-router-dom'

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
                            <li className='footer-list'><Link to='/portfolio' >Portfolio</Link></li>
                            <li className='footer-list'><Link to='/about' >About Us</Link></li>
                            <li className='footer-list'><Link to='/contact' >Contact</Link></li>
                        </ul>
                    </div>
                    {/* <Link className=''></Link> */}
                    <Link className='footer-btn' to='/portfolio'>See Our Portfolio <i className="fa-solid fa-arrow-right"></i></Link>
                </div>
            </div>
        </div>
    )
}

export default Footer