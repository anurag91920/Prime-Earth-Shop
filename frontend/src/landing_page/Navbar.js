import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Hero from "./shopingcart/Hero";

import "./Navbar.css";

function Navbar() {
  const [isCartOpen, setIsCartOpen] = useState(false);

  // 🔥 BODY SCROLL CONTROL (yahi useEffect lagana tha)
  useEffect(() => {
    if (isCartOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isCartOpen]);

  return (
    <>
      <nav className="navbar navbar-expand-lg custom-navbar fixed-top shadow-sm">
        <div className="container">
          <Link className="navbar-brand d-flex align-items-center" to="/">
            <img
              src="media/images/Logo.png"
              className="logo-img me-2"
              alt="Logo"
            />
            <span className="logo-text">EARTH STORE</span>
          </Link>

          <button
            className="navbar-toggler custom-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul className="navbar-nav text-center">
              <li className="nav-item">
                <Link className="nav-link nav-text" to="/about">About</Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link nav-text" to="/shop">Shop</Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link nav-text" to="/contact">Contact</Link>
              </li>

              {/* 🛒 CART ICON (NO ROUTE) */}
              <li className="nav-item">
                <button
                  className="nav-link nav-icon cart-btn"
                  onClick={() => setIsCartOpen(true)}
                >
                  <img
                    src="/media/icons/shopping-cart.png"
                    alt="Shopping Cart"
                    className="shop-cart"
                  />
                </button>
              </li>

              {/* 👤 USER ICON */}
              <li className="nav-item">
                <Link className="nav-link nav-icon" to="/login">
                  <img
                    src="/media/icons/user-icon.png"
                    alt="User"
                    className="user-icon"
                  />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* 🔥 OVERLAY */}
      {isCartOpen && (
        <>
          <div className="cart-overlay" onClick={() => setIsCartOpen(false)} />
          <Hero
            cartItems={[]}
            onClose={() => setIsCartOpen(false)}
            onRemoveItem={() => {}}
            onViewCart={() => {}}
            onCheckout={() => {}}
          />
        </>
      )}
    </>
  );
}

export default Navbar;
