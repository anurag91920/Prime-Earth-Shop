import React from 'react';
import './Hero.css';

function Hero({ cartItems = [], onClose, onRemoveItem, onViewCart, onCheckout }) {
  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="cart-sidebar">
      <div className="cart-header">
        <h3>Shopping Cart</h3>
        <button className="close-btn" onClick={onClose}>×</button>
      </div>

      <div className="cart-items">
        {cartItems.length === 0 && <p>Your cart is empty.</p>}
        {cartItems.map(item => (
          <div className="cart-item" key={item.id}>
            <img src={item.img} alt={item.title} className="cart-item-img" />
            <div className="cart-item-details">
              <p className="cart-item-title">{item.title}</p>
              <p className="cart-item-qty-price">{item.quantity} × ${item.price.toFixed(2)}</p>
            </div>
            <button className="remove-item-btn" onClick={() => onRemoveItem(item.id)}>×</button>
          </div>
        ))}
      </div>

      <div className="cart-footer">
        <div className="subtotal">
          <strong>Subtotal:</strong> <span>${subtotal.toFixed(2)}</span>
        </div>
        <button className="btn view-cart-btn" onClick={onViewCart}>VIEW CART</button>
        <button className="btn checkout-btn" onClick={onCheckout}>CHECKOUT</button>
      </div>
    </div>
  );
}

export default Hero;  