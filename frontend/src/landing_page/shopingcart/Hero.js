import React from "react";
import { useNavigate } from 'react-router-dom';
import "./Hero.css";

function Hero({
  cartItems = [],
  onClose,
  onRemoveItem,
}) {
  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

   const navigate = useNavigate();

  const onCheckout = () => {
  navigate('/payment'); // or '/checkout'
  };

  return (
    <div className="cart-sidebar">
      {/* HEADER */}
      <div className="cart-header">
        <h3>Shopping Cart</h3>
        <button className="close-btn" onClick={onClose}>
          ×
        </button>
      </div>

      {/* CART ITEMS */}
      <div className="cart-items">
        {cartItems.length === 0 ? (
          <div className="empty-cart-view">
            <p>Your cart is empty.</p>
          </div>
        ) : (
          cartItems.map((item) => (
            <div className="cart-item" key={item.id}>
              <img
                src={item.img}
                alt={item.title}
                className="cart-item-img"
              />

              <div className="cart-item-details">
                <p className="cart-item-title">{item.title}</p>
                <p className="cart-item-qty-price">
                  {item.quantity} × ${item.price.toFixed(2)}
                </p>
              </div>

              <button
                className="remove-item-btn"
                onClick={() => onRemoveItem(item.id)}
              >
                ×
              </button>
            </div>
          ))
        )}
      </div>

      {/* FOOTER */}
      <div className="cart-footer">
        <div className="subtotal">
          <strong>Subtotal:</strong>
          <span>${subtotal.toFixed(2)}</span>
        </div>

        <button className="btn checkout-btn" onClick={onCheckout}>
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
}

export default Hero;
