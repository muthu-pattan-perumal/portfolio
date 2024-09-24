// src/Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import WhatsAppChat from './WhatsAppChat';
import './Home.css'; // Import the CSS file for styling

const Home = () => {
    return (
        <div className="home">
            <div className='imagePl'>
                <img src={`${process.env.PUBLIC_URL}/img2.jpg`} alt="Avatar" className="moving-circle" /> 
            </div>
            
            <div className="content">
                <h1 className='header'>MUTHU PERUMAL PATTAN</h1>
                <h3 className='header2'>FRONTEND DEVELOPER</h3>
                <p className='Description'>
                    (Passionate about creating dynamic, user-friendly web applications using HTML, CSS, and JavaScript frameworks like React & Vue. Committed to writing clean, maintainable code and delivering exceptional user experiences)
                </p>
                <Link to="/about" className='about-button'>About</Link>
            </div>
            <WhatsAppChat />
        </div>
    );
};

export default Home;
