import React from 'react';
import './Header.css'; 

function Header({ onPageChange, currentPage, cartItems, isCartOpen, setIsCartOpen, handleUpdateQuantity, handleRemoveItem }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  // Mobile menu handlers
  const openMobileMenu = () => setIsMobileMenuOpen(true);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  // Cart panel handlers
  const openCart = () => setIsCartOpen(true);
  const closeCart = () => setIsCartOpen(false);

  // Tính tổng tiền
  const cartTotal = cartItems.reduce((sum, item) => {
    const price = parseInt(item.price.replace(/\D/g, ''));
    return sum + price * item.quantity;
  }, 0);
  const cartDiscount = 250000; // demo
  const cartFinal = cartTotal - cartDiscount;

  const isActive = (page) => {
    return currentPage === page ? 'text-primary' : 'text-gray-700';
  };

  return (
    <>
      <header className="bg-white shadow-sm fixed w-full top-0 z-50">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <button 
            onClick={() => onPageChange('home')} 
            className="flex items-center"
            style={{ background: 'none', border: 'none', padding: 0 }}
          >
            <img src="./images/logo.png" alt="Logo" style={{ height: 60, marginRight: 8 }} />
          </button>
          <nav className="hidden md:flex items-center space-x-8">
            <button onClick={() => onPageChange('home')} className={`font-medium hover:text-primary transition-colors ${isActive('home')}`}>Trang chủ</button>
            <button onClick={() => onPageChange('product')} className={`font-medium hover:text-primary transition-colors ${isActive('product')}`}>Sản phẩm</button>
            <button onClick={() => onPageChange('suutap')} className={`font-medium hover:text-primary transition-colors ${isActive('suutap')}`}>Bộ sưu tập</button>
            <button onClick={() => onPageChange('about')} className={`font-medium hover:text-primary transition-colors ${isActive('about')}`}>Về chúng tôi</button>
            <button onClick={() => onPageChange('login')} className={`font-medium hover:text-primary transition-colors ${isActive('login')}`}>Đăng nhập</button>
          </nav>
          <div className="flex items-center space-x-4">
            <div className="relative hidden md:block">
              <input type="text" placeholder="Tìm kiếm..."
                className="pl-10 pr-4 py-2 w-64 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary text-sm" />
              <div className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 flex items-center justify-center text-gray-400">
                <i className="ri-search-line"></i>
              </div>
            </div>
            <div className="relative">
              <button 
                className="w-10 h-10 flex items-center justify-center text-gray-700 hover:text-primary transition-colors relative"
                onClick={openCart}
              >
                <i className="ri-shopping-cart-line text-xl"></i>
                <span className="absolute -top-1 -right-1 bg-primary text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {cartItems.length}
                </span>
              </button>
            </div>
            <button 
              className="w-10 h-10 flex items-center justify-center text-gray-700 hover:text-primary transition-colors md:hidden"
              onClick={openMobileMenu}
            >
              <i className="ri-menu-line text-xl"></i>
            </button>
          </div>
        </div>
      </header>
      {/* Mobile menu overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-white z-40 flex flex-col pt-16 animate-fade-in">
          <button className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center text-gray-700" onClick={closeMobileMenu}>
            <i className="ri-close-line text-xl"></i>
          </button>
          <div className="p-4 flex flex-col space-y-4">
            <button onClick={() => { onPageChange('home'); closeMobileMenu(); }} className="font-medium text-gray-700 py-3 border-b border-gray-100">Trang chủ</button>
            <button onClick={() => { onPageChange('product'); closeMobileMenu(); }} className="font-medium text-primary py-3 border-b border-gray-100">Sản phẩm</button>
            <button onClick={() => { onPageChange('suutap'); closeMobileMenu(); }} className="font-medium text-gray-700 py-3 border-b border-gray-100">Bộ sưu tập</button>
            <button onClick={() => { onPageChange('about'); closeMobileMenu(); }} className="font-medium text-gray-700 py-3 border-b border-gray-100">Về chúng tôi</button>
          </div>
          <div className="mt-4 p-4">
            <div className="relative">
              <input type="text" placeholder="Tìm kiếm..." className="pl-10 pr-4 py-2 w-full rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary text-sm" />
              <div className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 flex items-center justify-center text-gray-400">
                <i className="ri-search-line"></i>
              </div>
            </div>
          </div>
        </div>
      )}
      {/* Cart panel overlay */}
      {isCartOpen && (
        <div className="fixed inset-0 z-50 flex justify-end">
          <div className="fixed inset-0 bg-black/50" onClick={closeCart}></div>
          <div className="relative bg-white w-full max-w-md h-full flex flex-col shadow-xl animate-slide-in-right">
            <div className="p-4 border-b flex justify-between items-center">
              <h3 className="font-bold text-lg">Giỏ hàng ({cartItems.length})</h3>
              <button className="w-8 h-8 flex items-center justify-center text-gray-500 hover:text-gray-700" onClick={closeCart}>
                <i className="ri-close-line text-xl"></i>
              </button>
            </div>
            <div className="flex-1 overflow-y-auto p-4">
              <div className="space-y-4">
                {cartItems.map(item => (
                  <div className="flex border-b pb-4" key={item.id}>
                    <div className="w-20 h-20 rounded overflow-hidden mr-4">
                      <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium text-gray-900">{item.name}</h4>
                      <div className="flex items-center mt-1">
                        <span className="text-primary font-medium">{item.price}</span>
                        {item.oldPrice && <span className="text-gray-400 line-through text-sm ml-2">{item.oldPrice}</span>}
                      </div>
                      <div className="flex items-center mt-2">
                        <button className="w-6 h-6 flex items-center justify-center border border-gray-300 rounded-full text-gray-500" onClick={() => handleUpdateQuantity(item.id, item.quantity - 1)}>-</button>
                        <span className="mx-2 w-8 text-center">{item.quantity}</span>
                        <button className="w-6 h-6 flex items-center justify-center border border-gray-300 rounded-full text-gray-500" onClick={() => handleUpdateQuantity(item.id, item.quantity + 1)}>+</button>
                      </div>
                    </div>
                    <button className="text-gray-400 hover:text-red-500" onClick={() => handleRemoveItem(item.id)}>
                      <i className="ri-delete-bin-line"></i>
                    </button>
                  </div>
                ))}
              </div>
            </div>
            <div className="p-4 border-t">
              <div className="flex justify-between mb-2">
                <span className="text-gray-600">Tạm tính:</span>
                <span className="font-medium">{cartTotal.toLocaleString('vi-VN')}₫</span>
              </div>
              <div className="flex justify-between mb-4">
                <span className="text-gray-600">Giảm giá:</span>
                <span className="font-medium text-green-600">-{cartDiscount.toLocaleString('vi-VN')}₫</span>
              </div>
              <div className="flex justify-between text-lg font-bold mb-6">
                <span>Tổng cộng:</span>
                <span className="text-primary">{cartFinal.toLocaleString('vi-VN')}₫</span>
              </div>
              <button className="w-full bg-primary text-white py-3 rounded-button font-medium hover:bg-primary/90 transition-colors whitespace-nowrap mb-3">Thanh toán</button>
              <button className="w-full border border-gray-300 bg-white text-gray-700 py-3 rounded-button font-medium hover:bg-gray-50 transition-colors whitespace-nowrap" onClick={closeCart}>Tiếp tục mua hàng</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Header; 