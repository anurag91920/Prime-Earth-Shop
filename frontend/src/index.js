import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './index.css';
import HomePage from './landing_page/home/HomePage';
import AboutPage from './landing_page/about/AboutPage';
import ContactPage from './landing_page/contact/ContactPage';
import ShopPage from './landing_page/shop/ShopPage';
import SignupPage from './landing_page/signup/SignupPage';
import LoginPage from './landing_page/login/LoginPage';
import ProductDetailPage from './landing_page/productdetail/ProductDetailPage';
import ShoppingCartPage from './landing_page/shopingcart/ShopingcartPage';
import Footer from './landing_page/Footer';
import Navbar from './landing_page/Navbar';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Navbar />
    <Routes>
       <Route path='/' element={<HomePage />} /> 
      <Route path='/about' element={<AboutPage />} />
      <Route path='/contact' element={<ContactPage />} />
      <Route path='/shop' element={<ShopPage />} />
      <Route path='/signup' element={<SignupPage />} />
      <Route path='/login' element={<LoginPage />} />
      <Route path='/productdetail/:posterId' element={<ProductDetailPage />} />
      <Route path='/shoppingcart' element={<ShoppingCartPage />} />
    </Routes>
    <Footer />
  </BrowserRouter>
);