import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

function NavBar() {
    const [click, setClick] = useState(false);

    const handleMenuClick = () => {
        setClick(!click);
    }

    const closeMobileMenu = () => {
        setClick(false);
    }

    return (
        <nav className='navbar'>
            <div className='navbar-container'>
                <Link to='/' className='navbar-logo'>
                    crowdfunding
                </Link>
                <div className='menu-icon' onClick={handleMenuClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                        <Link to='/' className='nav-link' onClick={closeMobileMenu}>About</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/' className='nav-link' onClick={closeMobileMenu}>Discover</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/' className='nav-link' onClick={closeMobileMenu}>Get Started</Link>
                    </li>
                </ul>


            </div>
        </nav>
    )
}

export default NavBar

