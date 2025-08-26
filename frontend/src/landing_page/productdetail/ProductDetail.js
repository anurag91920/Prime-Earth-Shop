import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './ProductDetail.css'; // Create this file for styling

// Mock Poster Data (you can later fetch this from API or Context)
const posterData = {
    'poster-v1': {
        title: 'POSTER V1',
        price: '$23.99',
        quote: `"LOOK DEEP INTO NATURE, AND THEN YOU WILL UNDERSTAND EVERYTHING BETTER."`,
        author: 'ALBERT EINSTEIN',
        image: '/media/images/poster-v1.png',
        description: `Inspirational posters are a great way to be inspired and encouraged to take on new challenges and adventures. Hang up a poster at home or in the office to be reminded how much beauty awaits in the world, luring you out of your comfort zone and into a world where possibility resides.`,
        details: {
            noFrame: [
                'Printed on High-Quality vinyl.',
                '1-inch thick wooden back frame.',
                'No additional hanging hardware is required.',
                'Care: Dust with a soft, dry cloth.'
            ],
            framed: [
                'Printed on High-Quality matte photo paper.',
                'Acrylic borders are used.',
                'Highly durable acrylic glass is used on the top to protect it from damage.',
                'Hooks are attached to the back of each frame for hanging.'
            ]
        }
    },

    // Add poster-v2, v3, etc. as needed
    'poster-v2': {
        title: 'POSTER V2',
        price: '$17.99',
        quote: `"THE ONLY WAY TO DO GREAT WORK IS TO LOVE WHAT YOU DO."`,
        author: 'STEVE JOBS',
        image: '/media/images/poster-v2.png',
        description: `Inspirational posters are a great way to be inspired and encouraged to take on new challenges and adventures. Hang up a poster at home or in the office to be reminded how much beauty awaits in the world, luring you out of your comfort zone and into a world where possibility resides.`,
        details: {
            noFrame: [
                'Printed on High-Quality vinyl.',
                '1-inch thick wooden back frame.',
                'No additional hanging hardware is required.',
                'Care: Dust with a soft, dry cloth.'
            ],
            framed: [
                'Printed on High-Quality matte photo paper.',
                'Acrylic borders are used.',
                'Highly durable acrylic glass is used on the top to protect it from damage.',
                'Hooks are attached to the back of each frame for hanging.'
            ]
        }
    },

       // Add poster-v3 as needed

    'poster-v3': {
        title: 'POSTER V3',
        price: '$23.99',
        quote: `"LOOK DEEP INTO NATURE, AND THEN YOU WILL UNDERSTAND EVERYTHING BETTER."`,
        author: 'ALBERT EINSTEIN',
        image: '/media/images/poster-v3.png',
        description: `Inspirational posters are a great way to be inspired and encouraged to take on new challenges and adventures. Hang up a poster at home or in the office to be reminded how much beauty awaits in the world, luring you out of your comfort zone and into a world where possibility resides.`,
        details: {
            noFrame: [
                'Printed on High-Quality vinyl.',
                '1-inch thick wooden back frame.',
                'No additional hanging hardware is required.',
                'Care: Dust with a soft, dry cloth.'
            ],
            framed: [
                'Printed on High-Quality matte photo paper.',
                'Acrylic borders are used.',
                'Highly durable acrylic glass is used on the top to protect it from damage.',
                'Hooks are attached to the back of each frame for hanging.'
            ]
        }
    },

    // Add poster-v4 as needed

    'poster-v4': {
        title: 'POSTER V4',
        price: '$23.99',
        quote: `"LOOK DEEP INTO NATURE, AND THEN YOU WILL UNDERSTAND EVERYTHING BETTER."`,
        author: 'ALBERT EINSTEIN',
        image: '/media/images/poster-v4.png',
        description: `Inspirational posters are a great way to be inspired and encouraged to take on new challenges and adventures. Hang up a poster at home or in the office to be reminded how much beauty awaits in the world, luring you out of your comfort zone and into a world where possibility resides.`,
        details: {
            noFrame: [
                'Printed on High-Quality vinyl.',
                '1-inch thick wooden back frame.',
                'No additional hanging hardware is required.',
                'Care: Dust with a soft, dry cloth.'
            ],
            framed: [
                'Printed on High-Quality matte photo paper.',
                'Acrylic borders are used.',
                'Highly durable acrylic glass is used on the top to protect it from damage.',
                'Hooks are attached to the back of each frame for hanging.'
            ]
        }
    },

    // Add poster-v5 as needed

    'poster-v5': {
        title: 'POSTER V5',
        price: '$19.99',
        quote: `"THE BEST WAY TO PREDICT THE FUTURE IS TO CREATE IT."`,
        author: 'ABRAHAM LINCOLN',
        image: '/media/images/poster-v5.png',
        description: `Inspirational posters are a great way to be inspired and encouraged to take on new challenges and adventures. Hang up a poster at home or in the office to be reminded how much beauty awaits in the world, luring you out of your comfort zone and into a world where possibility resides.`,
        details: {
            noFrame: [
                'Printed on High-Quality vinyl.',
                '1-inch thick wooden back frame.',
                'No additional hanging hardware is required.',
                'Care: Dust with a soft, dry cloth.'
            ],
            framed: [
                'Printed on High-Quality matte photo paper.',
                'Acrylic borders are used.',
                'Highly durable acrylic glass is used on the top to protect it from damage.',
                'Hooks are attached to the back of each frame for hanging.'
            ]
        }
    },

    // Add poster-v6 as needed
    'poster-v6': {
        title: 'POSTER V6',
        price: '$21.99',
        quote: `"THE ONLY WAY TO DO GREAT WORK IS TO LOVE WHAT YOU DO."`,
        author: 'STEVE JOBS',
        image: '/media/images/poster-v6.png',
        description: `Inspirational posters are a great way to be inspired and encouraged to take on new challenges and adventures. Hang up a poster at home or in the office to be reminded how much beauty awaits in the world, luring you out of your comfort zone and into a world where possibility resides.`,
        details: {
            noFrame: [
                'Printed on High-Quality vinyl.',
                '1-inch thick wooden back frame.',
                'No additional hanging hardware is required.',
                'Care: Dust with a soft, dry cloth.'
            ],
            framed: [
                'Printed on High-Quality matte photo paper.',
                'Acrylic borders are used.',
                'Highly durable acrylic glass is used on the top to protect it from damage.',
                'Hooks are attached to the back of each frame for hanging.'
            ]
        }
    },

    // Add poster-v7 as needed
    'poster-v7': {
        title: 'POSTER V7',
        price: '$22.99',
        quote: `"THE BEST TIME TO PLANT A TREE WAS 20 YEARS AGO. THE SECOND BEST TIME IS NOW."`,
        author: 'CHINESE PROVERB',
        image: '/media/images/poster-v7.png',
        description: `Inspirational posters are a great way to be inspired and encouraged to take on new challenges and adventures. Hang up a poster at home or in the office to be reminded how much beauty awaits in the world, luring you out of your comfort zone and into a world where possibility resides.`,
        details: {
            noFrame: [
                'Printed on High-Quality vinyl.',
                '1-inch thick wooden back frame.',
                'No additional hanging hardware is required.',
                'Care: Dust with a soft, dry cloth.'
            ],
            framed: [
                'Printed on High-Quality matte photo paper.',
                'Acrylic borders are used.',
                'Highly durable acrylic glass is used on the top to protect it from damage.',
                'Hooks are attached to the back of each frame for hanging.'
            ]
        }
    },

    // Add poster-v8 as needed
    'poster-v8': {
        title: 'POSTER V8',
        price: '$24.99',
        quote: `"THE FUTURE BELONGS TO THOSE WHO BELIEVE IN THE BEAUTY OF THEIR DREAMS."`,
        author: 'ELEANOR ROOSEVELT',
        image: '/media/images/poster-v8.png',
        description: `Inspirational posters are a great way to be inspired and encouraged to take on new challenges and adventures. Hang up a poster at home or in the office to be reminded how much beauty awaits in the world, luring you out of your comfort zone and into a world where possibility resides.`,
        details: {
            noFrame: [
                'Printed on High-Quality vinyl.',
                '1-inch thick wooden back frame.',
                'No additional hanging hardware is required.',
                'Care: Dust with a soft, dry cloth.'
            ],
            framed: [
                'Printed on High-Quality matte photo paper.',
                'Acrylic borders are used.',
                'Highly durable acrylic glass is used on the top to protect it from damage.',
                'Hooks are attached to the back of each frame for hanging.'
            ]
        }
    }

};

function ProductDetail() {
    const { posterId } = useParams();
    const navigate = useNavigate();
    const poster = posterData[posterId];

    if (!poster) return <h2>Product not found</h2>;

    const handleAddToCart = () => {
    // 🛒 You can also add cart logic here later
       navigate('/shoppingcart'); // ✅ Redirect to cart page
      };

    return (
        <div className="product-detail-container">
            <div className="left">
                <img src={poster.image} alt={poster.title} className="poster-image" />
            </div>

            <div className="right">
                <p className="category">Posters</p>
                <h1 className="title">{poster.title}</h1>
                <p className="price">{poster.price}</p>
                <p className="description">{poster.description}</p>

                <div className="quantity">
                    <button>-</button>
                    <input type="number" value={1} readOnly />
                    <button>+</button>
                </div>

                 {/* ✅ Updated onClick to trigger navigation */}
                   <button className="add-to-cart" onClick={handleAddToCart}> ADD TO CART </button>

                <div className="details">
                    <h3>Description</h3>
                    <ul>
                        {poster.details.noFrame.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>

                    <h3>Framed With Borders & Acrylic Glass</h3>
                    <ul>
                        {poster.details.framed.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default ProductDetail;
