import React from 'react';
import Home from '../pages/Home';
import Product from '../pages/Product';
import SuuTap from '../pages/SuuTap';
import About from '../pages/About';
import Login from '../pages/Login';

function Main({ currentPage, cartItems, setCartItems, isCartOpen, setIsCartOpen, handleAddToCart, handleUpdateQuantity, handleRemoveItem }) {
  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home cartItems={cartItems} setCartItems={setCartItems} isCartOpen={isCartOpen} setIsCartOpen={setIsCartOpen} handleAddToCart={handleAddToCart} handleUpdateQuantity={handleUpdateQuantity} handleRemoveItem={handleRemoveItem} />;
      case 'product':
        return <Product cartItems={cartItems} setCartItems={setCartItems} isCartOpen={isCartOpen} setIsCartOpen={setIsCartOpen} handleAddToCart={handleAddToCart} handleUpdateQuantity={handleUpdateQuantity} handleRemoveItem={handleRemoveItem} />;
      case 'suutap':
        return <SuuTap cartItems={cartItems} setCartItems={setCartItems} isCartOpen={isCartOpen} setIsCartOpen={setIsCartOpen} handleAddToCart={handleAddToCart} handleUpdateQuantity={handleUpdateQuantity} handleRemoveItem={handleRemoveItem} />;
      case 'about':
        return <About />;
      case 'login':
        return <Login />;
      default:
        return <Home cartItems={cartItems} setCartItems={setCartItems} isCartOpen={isCartOpen} setIsCartOpen={setIsCartOpen} handleAddToCart={handleAddToCart} handleUpdateQuantity={handleUpdateQuantity} handleRemoveItem={handleRemoveItem} />;
    }
  };

  return (
    <main > {/* Add padding-top to account for fixed header */}
      {renderPage()}
    </main>
  );
}

export default Main; 