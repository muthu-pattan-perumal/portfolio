import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './ResponsiveNavbar.css'; // Ensure to import the CSS

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false); // State to manage menu open/close

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const closeMenu = () => {
        setIsOpen(false); // Function to close the menu
    };

    return (
        <div className="navbar">
            <img src={`${process.env.PUBLIC_URL}/img2.jpg`} alt="Avatar" className="logo" /> 
            <button className="nav-button" onClick={toggleMenu}>
                ☰ {/* Hamburger icon */}
            </button>
            <div className={`nav-links ${isOpen ? 'open' : ''}`}>
                <NavLink to="/" exact activeClassName="active" className="nav-link" onClick={closeMenu}>
                    Home
                </NavLink>
                <NavLink to="/projects" activeClassName="active" className="nav-link" onClick={closeMenu}>
                    Projects
                </NavLink>
                <NavLink to="/about" activeClassName="active" className="nav-link" onClick={closeMenu}>
                    About Me
                </NavLink>
                <NavLink to="/skills" activeClassName="active" className="nav-link" onClick={closeMenu}>
                    Skills
                </NavLink>
                <NavLink to="/contact" activeClassName="active" className="nav-link" onClick={closeMenu}>
                    Contact
                </NavLink>
            </div>
        </div>
    );
};

export default Navbar;
