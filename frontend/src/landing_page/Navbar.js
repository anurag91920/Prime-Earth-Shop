import React from 'react';
import { Link } from "react-router-dom";
import './Navbar.css'; // External CSS for styles

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg custom-navbar fixed-top shadow-sm">
            <div className="container">
                <Link className="navbar-brand d-flex align-items-center" to="/">
                    <img src='media/images/Logo.png' className='logo-img me-2' alt='Logo' />
                    <span className="logo-text">EARTH STORE</span>
                </Link>
                <button className="navbar-toggler custom-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
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
                        
                        {/* User Icon instead of Shoping Cart */}
                        <li className="nav-item">
                            <Link className="nav-link nav-icon" to="/shoppingcart">
                                <img
                                    src="/media/icons/shopping-cart.png" // Replace with your icon path
                                    alt="Shopping Cart"
                                    className="shop-cart"
                                />
                            </Link>
                        </li>

                        {/* User Icon instead of Login/Signup */}
                        <li className="nav-item">
                            <Link className="nav-link nav-icon" to="/login">
                                <img
                                    src="/media/icons/user-icon.png" // Replace with your icon path
                                    alt="User"
                                    className="user-icon"
                                />
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;