import React, { useState } from 'react';

export const MobileMenu = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="mobile-menu">
      <button 
        className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center text-gray-700"
        onClick={onClose}
      >
        <i className="ri-close-line text-xl"></i>
      </button>
      <div className="p-4 flex flex-col space-y-4">
        <a href="/" className="font-medium text-gray-900 py-3 border-b border-gray-100">Trang chủ</a>
        <a href="/product" className="font-medium text-gray-700 py-3 border-b border-gray-100">Sản phẩm</a>
        <a href="/suutap" className="font-medium text-gray-700 py-3 border-b border-gray-100">Bộ sưu tập</a>
        <a href="/about" className="font-medium text-gray-700 py-3 border-b border-gray-100">Về chúng tôi</a>
      </div>
      <div className="mt-4 p-4">
        <div className="relative">
          <input 
            type="text" 
            placeholder="Tìm kiếm..." 
            className="pl-10 pr-4 py-2 w-full rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary text-sm"
          />
          <div className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 flex items-center justify-center text-gray-400">
            <i className="ri-search-line"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export const CartItem = ({ item, onUpdateQuantity, onRemove }) => {
  const [isRemoving, setIsRemoving] = useState(false);

  const handleRemove = () => {
    setIsRemoving(true);
    setTimeout(() => {
      onRemove(item.id);
    }, 300);
  };

  return (
    <div className={`flex border-b pb-4 cart-item ${isRemoving ? 'removing' : ''}`}>
      <div className="w-20 h-20 rounded overflow-hidden mr-4">
        <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
      </div>
      <div className="flex-1">
        <h4 className="font-medium text-gray-900">{item.name}</h4>
        <div className="flex items-center mt-1">
          <span className="text-primary font-medium">{item.price}</span>
          {item.oldPrice && (
            <span className="text-gray-400 line-through text-sm ml-2">{item.oldPrice}</span>
          )}
        </div>
        <div className="flex items-center mt-2">
          <button 
            className="w-6 h-6 flex items-center justify-center border border-gray-300 rounded-full text-gray-500"
            onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
          >-</button>
          <span className="mx-2 w-8 text-center">{item.quantity}</span>
          <button 
            className="w-6 h-6 flex items-center justify-center border border-gray-300 rounded-full text-gray-500"
            onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
          >+</button>
        </div>
      </div>
      <button 
        className="text-gray-400 hover:text-red-500"
        onClick={handleRemove}
      >
        <i className="ri-delete-bin-line"></i>
      </button>
    </div>
  );
};

export const CartPanel = ({ isOpen, onClose, items, onUpdateQuantity, onRemove }) => {
  if (!isOpen) return null;

  const subtotal = items.reduce((sum, item) => sum + (parseFloat(item.price.replace(/[^\d]/g, '')) * item.quantity), 0);
  const discount = 250000;
  const total = subtotal - discount;

  return (
    <div className="cart-panel">
      <div className="cart-overlay" onClick={onClose}></div>
      <div className="cart-content">
        <div className="p-4 border-b flex justify-between items-center">
          <h3 className="font-bold text-lg">Giỏ hàng ({items.length})</h3>
          <button 
            className="w-8 h-8 flex items-center justify-center text-gray-500 hover:text-gray-700"
            onClick={onClose}
          >
            <i className="ri-close-line text-xl"></i>
          </button>
        </div>
        <div className="flex-1 overflow-y-auto p-4">
          <div className="space-y-4">
            {items.map(item => (
              <CartItem 
                key={item.id}
                item={item}
                onUpdateQuantity={onUpdateQuantity}
                onRemove={onRemove}
              />
            ))}
          </div>
        </div>
        <div className="p-4 border-t">
          <div className="flex justify-between mb-2">
            <span className="text-gray-600">Tạm tính:</span>
            <span className="font-medium">{subtotal.toLocaleString('vi-VN')}₫</span>
          </div>
          <div className="flex justify-between mb-4">
            <span className="text-gray-600">Giảm giá:</span>
            <span className="font-medium text-green-600">-{discount.toLocaleString('vi-VN')}₫</span>
          </div>
          <div className="flex justify-between text-lg font-bold mb-6">
            <span>Tổng cộng:</span>
            <span className="text-primary">{total.toLocaleString('vi-VN')}₫</span>
          </div>
          <button className="w-full bg-primary text-white py-3 rounded-button font-medium hover:bg-primary/90 transition-colors whitespace-nowrap mb-3">
            Thanh toán
          </button>
          <button 
            className="w-full border border-gray-300 bg-white text-gray-700 py-3 rounded-button font-medium hover:bg-gray-50 transition-colors whitespace-nowrap"
            onClick={onClose}
          >
            Tiếp tục mua hàng
          </button>
        </div>
      </div>
    </div>
  );
}; 