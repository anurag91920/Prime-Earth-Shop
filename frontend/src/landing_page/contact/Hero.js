import React from "react";
import './Hero.css';

function Hero() {
    return (
        <div className="hero-container">
            <img src="/media/images/Contact1.png" alt="Hero" className="hero-img" />
            <div className="hero-overlay"></div>
            <div className="hero-content">
                <h1 className="title">CONTACT</h1>
            </div>
        </div>
    );
}

export default Hero;