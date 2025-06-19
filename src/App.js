import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  // Thêm sản phẩm vào giỏ hàng
  const handleAddToCart = (product) => {
    setCartItems((prevItems) => {
      const existing = prevItems.find((item) => item.id === product.id);
      if (existing) {
        return prevItems.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevItems, { ...product, quantity: 1 }];
      }
    });
    setIsCartOpen(true);
  };

  // Cập nhật số lượng
  const handleUpdateQuantity = (id, newQuantity) => {
    if (newQuantity < 1) return;
    setCartItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  // Xóa sản phẩm khỏi giỏ
  const handleRemoveItem = (id) => {
    setCartItems((items) => items.filter((item) => item.id !== id));
  };

  return (
    <div className="App">
      {currentPage !== 'login' && (
        <Header
          currentPage={currentPage}
          onPageChange={handlePageChange}
          cartItems={cartItems}
          isCartOpen={isCartOpen}
          setIsCartOpen={setIsCartOpen}
          handleUpdateQuantity={handleUpdateQuantity}
          handleRemoveItem={handleRemoveItem}
        />
      )}
      <Main
        currentPage={currentPage}
        cartItems={cartItems}
        setCartItems={setCartItems}
        isCartOpen={isCartOpen}
        setIsCartOpen={setIsCartOpen}
        handleAddToCart={handleAddToCart}
        handleUpdateQuantity={handleUpdateQuantity}
        handleRemoveItem={handleRemoveItem}
      />
      {currentPage !== 'login' && <Footer />}
    </div>
  );
}

export default App;
