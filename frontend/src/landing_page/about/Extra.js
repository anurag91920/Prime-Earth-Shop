import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Hero.css';

function Extra() {
    const navigate = useNavigate();

    const handleShopNow = () => {
        navigate('/login'); // Navigate to login page
    };

    return (
        <div className="hero-container">
            <img src="/media/images/HomeHero.png" alt="Hero" className="hero-img" />
            <div className="hero-overlay"></div>
            <div className="hero-content">
                <h1 className="title">Give the gift of a lasting memory with a postcard</h1>
                <p className="subtitle">Give the Gift of a Postcard</p>
                <button className="btn-learn" onClick={handleShopNow}>
                    Purchase A Postcard
                </button>
            </div>
        </div>
    );
}

export default Extra;
