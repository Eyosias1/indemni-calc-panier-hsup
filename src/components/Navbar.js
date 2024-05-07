import React, { useState } from 'react';
import './Navbar.css'; // Make sure to import the CSS file
import logo from '../logos/favicon.ico';
function Navbar() {
    const [isActive, setIsActive] = useState(false);

    const toggleMenu = () => {
        setIsActive(!isActive);
    };

    const closeMenu = () => {
        setIsActive(false);
    };

    return (
        <header className='section'>
            <div className='logo'>
                <a href='#logo'><img src={logo} alt="Logo" /></a>
            </div>
            <nav className={isActive ? 'active':''}>
                <li className='nav-item'>
                    <a className="nav-link" href='#home' onClick={closeMenu} > Home </a>
                </li>
                <li className='nav-item'>
                    <a className="nav-link" href='#calculate' onClick={closeMenu}> Calculate </a>
                </li>
                <li className='nav-item'>
                    <a className="nav-link" href='#Contact' onClick={closeMenu} > 
                    Contact </a>
                </li>
            </nav>
            <div className={`burger ${isActive ? 'active' : ''}`} onClick={toggleMenu}>
                <span className='bar'></span>
                <span className='bar'></span>
                <span className='bar'></span>
            </div>
        </header>

    );
}


export default Navbar;