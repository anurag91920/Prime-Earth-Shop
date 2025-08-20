import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Hero.css';

function Hero() {
    const navigate = useNavigate();

    const handleShopNow = () => {
        navigate('/login'); // redirect to login page
    };

    return (
        <div className="hero-container">
            <img src="/media/images/HomeHero.png" alt="Hero" className="hero-img" />
            <div className="hero-overlay"></div>
            <div className="hero-content">
                <p className="subtitle">EARTH STORE</p>
                <h1 className="title">Multipurpose Store</h1>
                <button className="btn-learn" onClick={handleShopNow}>
                    SHOP NOW
                </button>
            </div>
        </div>
    );
}

export default Hero;
