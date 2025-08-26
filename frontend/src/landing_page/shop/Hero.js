import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Hero.css';

// 🔧 Sample Products with Slug added
const productsData = [
  { id: 1, title: 'POSTER V5', slug: 'poster-v5', category: 'Posters', price: 23.99, img: '/media/images/poster-v5.png' },
  { id: 2, title: 'POSTER V6', slug: 'poster-v6', category: 'Posters', price: 17.99, img: '/media/images/poster-v6.png' },
  { id: 3, title: 'POSTER V7', slug: 'poster-v7', category: 'Posters', price: 14.99, img: '/media/images/poster-v7.png' },
  { id: 4, title: 'POSTER V8', slug: 'poster-v8', category: 'Posters', price: 19.99, img: '/media/images/poster-v8.png' },
  { id: 5, title: 'POSTER V1', slug: 'poster-v1', category: 'Posters', price: 23.99, img: '/media/images/poster-v1.png' },
  { id: 6, title: 'POSTER V2', slug: 'poster-v2', category: 'Posters', price: 17.99, img: '/media/images/poster-v2.png' },
  { id: 7, title: 'POSTER V3', slug: 'poster-v3', category: 'Posters', price: 14.99, img: '/media/images/poster-v3.png' },
  { id: 8, title: 'POSTER V4', slug: 'poster-v4', category: 'Posters', price: 19.99, img: '/media/images/poster-v4.png' }
];

function Hero() {
  const navigate = useNavigate();

  const [minPrice, setMinPrice] = useState(14);
  const [maxPrice, setMaxPrice] = useState(24);

  const filteredProducts = productsData.filter(
    (product) => product.price >= minPrice && product.price <= maxPrice
  );

  const handleProductClick = (slug) => {
    navigate(`/productdetail/${slug}`);
  };

  return (
    <div className="shop-page">
      <aside className="sidebar">
        <input type="text" placeholder="Search products..." className="search-box" />

        <div className="filter-section">
          <h4>FILTER BY PRICE</h4>
          <div className="price-range">
            <input
              type="range"
              min="14"
              max="24"
              value={minPrice}
              onChange={(e) => setMinPrice(Number(e.target.value))}
            />
            <input
              type="range"
              min="14"
              max="24"
              value={maxPrice}
              onChange={(e) => setMaxPrice(Number(e.target.value))}
            />
            <div className="price-values">
              <span>${minPrice}</span>
              <span>${maxPrice}</span>
            </div>
          </div>
        </div>

        <div className="categories">
          <h4>CATEGORIES</h4>
          <ul>
            <li>Postcards (4)</li>
            <li>Posters (4)</li>
          </ul>
        </div>
      </aside>

      <main className="products-area">
        <h2>SHOP</h2>
        <p>Showing all {filteredProducts.length} results</p>
        <div className="products-grid">
          {filteredProducts.map((product) => (
            <div className="product-card" key={product.id}>
              <img src={product.img} alt={product.title} />
              <p className="category">{product.category}</p>
              <h3>{product.title}</h3>
              <p className="price">${product.price.toFixed(2)}</p>

              <div className="product-buttons">
                <button className="buy-now" onClick={() => handleProductClick(product.slug)}>BUY NOW ➞</button>
                <button className="add-to-cart">
                  <img src="/media/icons/bag-icon.png" alt="Cart" className="cart-icon" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default Hero;
