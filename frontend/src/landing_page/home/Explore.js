import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Explore.css';

function Explore() {
    const navigate = useNavigate();


    const onCheckout = () => {
      navigate('/payment'); 
    };

    const posters = [
        {
            id: 1,
            slug: 'poster-v1',
            title: 'POSTER V1',
            price: '$23.99',
            image: '/media/images/poster-v1.png',
        },
        {
            id: 2,
            slug: 'poster-v2',
            title: 'POSTER V2',
            price: '$17.99',
            image: '/media/images/poster-v2.png',
        },
        {
            id: 3,
            slug: 'poster-v3',
            title: 'POSTER V3',
            price: '$14.99',
            image: '/media/images/poster-v3.png',
        },
        {
            id: 4,
            slug: 'poster-v4',
            title: 'POSTER V4',
            price: '$18.99',
            image: '/media/images/poster-v4.png',
        },
    ];
 

    return (
        <div className="poster-section">
            <h2 className="poster-title">Featured Posters</h2>
            <div className="underline"></div>
            <div className="poster-grid">
                {posters.map((poster) => (
                    <div className="poster-card" key={poster.id}>
                        <img src={poster.image} alt={poster.title} className="poster-img" />
                        <h3>{poster.title}</h3>
                        <p className="price">{poster.price}</p>
                        <button className="buy-now" onClick={onCheckout}>BUY NOW ➞</button>
                       
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Explore;
