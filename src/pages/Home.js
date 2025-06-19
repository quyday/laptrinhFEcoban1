import React, { useState } from 'react';

import { MobileMenu, CartPanel } from './components';


function Home({ cartItems, setCartItems, isCartOpen, setIsCartOpen, handleAddToCart, handleUpdateQuantity, handleRemoveItem }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="bg-gray-50">
      {/* Header */}

      <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
      <CartPanel 
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemove={handleRemoveItem}
      />

      <main>
        {/* Hero Section */}
        <section className="relative overflow-hidden" style={{
          backgroundImage: "url('https://readdy.ai/api/search-image?query=Beautiful%20floral%20arrangement%20with%20soft%20pastel%20roses%2C%20peonies%2C%20and%20greenery%20on%20a%20light%20background.%20The%20left%20side%20has%20a%20clean%20white%20gradient%20background%20for%20text%2C%20while%20the%20right%20side%20showcases%20the%20elegant%20flower%20bouquet.%20Professional%20photography%20with%20soft%20natural%20lighting%2C%20creating%20a%20dreamy%20atmosphere%20perfect%20for%20a%20flower%20shop%20hero%20image.&width=1920&height=800&seq=1&orientation=landscape')",
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}>
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-transparent"></div>
          <div className="container mx-auto px-4 py-20 md:py-32 relative">
            <div className="max-w-lg">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Mang vẻ đẹp thiên nhiên vào không gian của bạn</h1>
              <p className="text-lg text-gray-700 mb-8">Khám phá bộ sưu tập hoa tươi cao cấp, được chọn lọc kỹ lưỡng và thiết kế độc đáo cho mọi dịp đặc biệt.</p>
              <div className="flex flex-wrap gap-4">
                <button className="bg-primary text-white px-6 py-3 rounded-button font-medium hover:bg-primary/90 transition-colors whitespace-nowrap">Mua ngay</button>
                <button className="bg-white text-primary border border-primary px-6 py-3 rounded-button font-medium hover:bg-gray-50 transition-colors whitespace-nowrap">Xem bộ sưu tập</button>
              </div>
            </div>
          </div>
        </section>

        {/* Categories Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Danh mục sản phẩm</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">Khám phá các bộ sưu tập hoa tươi đa dạng của chúng tôi, được thiết kế tinh tế cho mọi dịp và không gian.</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {/* Category items */}
              <CategoryItem 
                image="https://readdy.ai/api/search-image?query=Beautiful%20bouquet%20of%20fresh%20red%20roses%20arranged%20professionally%20with%20green%20leaves%20and%20white%20babys%20breath%20flowers%20against%20a%20clean%20white%20background.%20The%20roses%20are%20vibrant%20and%20in%20full%20bloom%2C%20showcasing%20their%20perfect%20petals.%20Professional%20studio%20lighting%20highlights%20the%20texture%20and%20color%20of%20the%20flowers.&width=600&height=600&seq=2&orientation=squarish"
                title="Hoa hồng"
                count="12 sản phẩm"
              />
              <CategoryItem 
                image="https://readdy.ai/api/search-image?query=Beautiful%20bouquet%20of%20fresh%20tulips%20in%20various%20pastel%20colors%20including%20pink%2C%20purple%2C%20and%20white%20arranged%20professionally%20with%20green%20leaves%20against%20a%20clean%20white%20background.%20The%20tulips%20are%20in%20full%20bloom%20with%20perfect%20petals.%20Professional%20studio%20lighting%20highlights%20the%20texture%20and%20vibrant%20colors%20of%20the%20flowers.&width=600&height=600&seq=3&orientation=squarish"
                title="Hoa tulip"
                count="8 sản phẩm"
              />
              <CategoryItem 
                image="https://readdy.ai/api/search-image?query=Beautiful%20bouquet%20of%20fresh%20sunflowers%20arranged%20professionally%20with%20green%20leaves%20and%20white%20filler%20flowers%20against%20a%20clean%20white%20background.%20The%20sunflowers%20are%20vibrant%20yellow%20with%20dark%20centers%2C%20in%20full%20bloom.%20Professional%20studio%20lighting%20highlights%20the%20texture%20and%20bright%20colors%20of%20the%20flowers.&width=600&height=600&seq=4&orientation=squarish"
                title="Hoa hướng dương"
                count="6 sản phẩm"
              />
              <CategoryItem 
                image="https://readdy.ai/api/search-image?query=Beautiful%20bouquet%20of%20fresh%20orchids%20in%20various%20purple%20and%20white%20colors%20arranged%20professionally%20with%20green%20leaves%20against%20a%20clean%20white%20background.%20The%20orchids%20have%20delicate%20petals%20and%20are%20in%20full%20bloom.%20Professional%20studio%20lighting%20highlights%20the%20texture%20and%20elegant%20colors%20of%20the%20exotic%20flowers.&width=600&height=600&seq=5&orientation=squarish"
                title="Hoa lan"
                count="10 sản phẩm"
              />
            </div>
          </div>
        </section>

        {/* Featured Products */}
        <section class="py-16 bg-gray-50">
            <div class="container mx-auto px-4">
                <div class="flex justify-between items-center mb-12">
                    <h2 class="text-3xl font-bold text-gray-900">Sản phẩm nổi bật</h2>
                    <a href="#" class="text-primary font-medium hover:underline flex items-center">
                        Xem tất cả
                        <i class="ri-arrow-right-line ml-1"></i>
                    </a>
                </div>
                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div class="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                        <div class="relative">
                            <img src="https://readdy.ai/api/search-image?query=Elegant%20bouquet%20of%20pink%20and%20white%20peonies%20with%20eucalyptus%20leaves%2C%20professionally%20arranged%20in%20a%20clear%20glass%20vase%20against%20a%20clean%20white%20background.%20The%20peonies%20are%20in%20full%20bloom%20with%20lush%2C%20layered%20petals.%20Professional%20studio%20lighting%20highlights%20the%20soft%20texture%20and%20delicate%20colors%20of%20the%20flowers.&width=600&height=600&seq=6&orientation=squarish"
                                alt="Bó hoa mẫu đơn" class="w-full h-80 object-cover object-top"/>
                            <div class="absolute top-3 right-3">
                                <span class="bg-primary text-white text-xs font-medium px-2 py-1 rounded">Bán
                                    chạy</span>
                            </div>
                        </div>
                        <div class="p-4">
                            <h3 class="font-semibold text-gray-900 text-lg">Bó hoa mẫu đơn hồng</h3>
                            <div class="flex items-center mt-1 mb-3">
                                <div class="flex text-yellow-400">
                                    <i class="ri-star-fill"></i>
                                    <i class="ri-star-fill"></i>
                                    <i class="ri-star-fill"></i>
                                    <i class="ri-star-fill"></i>
                                    <i class="ri-star-half-fill"></i>
                                </div>
                                <span class="text-gray-500 text-sm ml-2">(28)</span>
                            </div>
                            <div class="flex justify-between items-center">
                                <div>
                                    <span class="text-primary font-bold text-xl">850.000₫</span>
                                    <span class="text-gray-400 line-through text-sm ml-2">950.000₫</span>
                                </div>
                                <button
                                    class="w-10 h-10 flex items-center justify-center bg-primary/10 text-primary rounded-full hover:bg-primary/20 transition-colors"
                                    onClick={() => handleAddToCart({id: 1, name: 'Bó hoa mẫu đơn hồng', price: '850.000₫', oldPrice: '950.000₫', image: 'https://readdy.ai/api/search-image?query=Beautiful%20bouquet%20of%20pink%20peonies%20arranged%20professionally%20against%20a%20clean%20white%20background.%20The%20peonies%20are%20in%20full%20bloom%20with%20perfect%20petals.%20Professional%20studio%20lighting%20highlights%20the%20texture%20and%20soft%20pink%20color%20of%20the%20flowers.&width=80&height=80&seq=20&orientation=squarish'})}>
                                    <i class="ri-shopping-cart-line"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div class="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                        <div class="relative">
                            <img src="https://readdy.ai/api/search-image?query=Beautiful%20bouquet%20of%20mixed%20flowers%20including%20white%20roses%2C%20purple%20lilacs%2C%20and%20pink%20carnations%20with%20green%20eucalyptus%20leaves%2C%20professionally%20arranged%20against%20a%20clean%20white%20background.%20The%20flowers%20are%20fresh%20and%20in%20full%20bloom.%20Professional%20studio%20lighting%20highlights%20the%20texture%20and%20various%20colors%20of%20the%20flowers.&width=600&height=600&seq=7&orientation=squarish"
                                alt="Bó hoa hỗn hợp" class="w-full h-80 object-cover object-top"/>
                        </div>
                        <div class="p-4">
                            <h3 class="font-semibold text-gray-900 text-lg">Bó hoa hỗn hợp pastel</h3>
                            <div class="flex items-center mt-1 mb-3">
                                <div class="flex text-yellow-400">
                                    <i class="ri-star-fill"></i>
                                    <i class="ri-star-fill"></i>
                                    <i class="ri-star-fill"></i>
                                    <i class="ri-star-fill"></i>
                                    <i class="ri-star-line"></i>
                                </div>
                                <span class="text-gray-500 text-sm ml-2">(16)</span>
                            </div>
                            <div class="flex justify-between items-center">
                                <div>
                                    <span class="text-primary font-bold text-xl">750.000₫</span>
                                </div>
                                <button
                                    class="w-10 h-10 flex items-center justify-center bg-primary/10 text-primary rounded-full hover:bg-primary/20 transition-colors"
                                    onClick={() => handleAddToCart({id: 2, name: 'Bó hoa hỗn hợp pastel', price: '750.000₫', image: 'https://readdy.ai/api/search-image?query=Beautiful%20bouquet%20of%20mixed%20flowers%20including%20white%20roses%2C%20purple%20lilacs%2C%20and%20pink%20carnations%20with%20green%20eucalyptus%20leaves%2C%20professionally%20arranged%20against%20a%20clean%20white%20background.%20The%20flowers%20are%20fresh%20and%20in%20full%20bloom.%20Professional%20studio%20lighting%20highlights%20the%20texture%20and%20various%20colors%20of%20the%20flowers.&width=80&height=80&seq=21&orientation=squarish'})}>
                                    <i class="ri-shopping-cart-line"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div class="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                        <div class="relative">
                            <img src="https://readdy.ai/api/search-image?query=Elegant%20arrangement%20of%20white%20lilies%20and%20roses%20in%20a%20stylish%20ceramic%20vase%20against%20a%20clean%20white%20background.%20The%20flowers%20are%20fresh%20with%20perfect%20petals%20in%20full%20bloom.%20Professional%20studio%20lighting%20highlights%20the%20pure%20white%20color%20and%20delicate%20texture%20of%20the%20flowers.&width=600&height=600&seq=8&orientation=squarish"
                                alt="Hoa lily trắng" class="w-full h-80 object-cover object-top"/>
                            <div class="absolute top-3 right-3">
                                <span class="bg-secondary text-white text-xs font-medium px-2 py-1 rounded">Mới</span>
                            </div>
                        </div>
                        <div class="p-4">
                            <h3 class="font-semibold text-gray-900 text-lg">Bình hoa lily trắng</h3>
                            <div class="flex items-center mt-1 mb-3">
                                <div class="flex text-yellow-400">
                                    <i class="ri-star-fill"></i>
                                    <i class="ri-star-fill"></i>
                                    <i class="ri-star-fill"></i>
                                    <i class="ri-star-fill"></i>
                                    <i class="ri-star-fill"></i>
                                </div>
                                <span class="text-gray-500 text-sm ml-2">(32)</span>
                            </div>
                            <div class="flex justify-between items-center">
                                <div>
                                    <span class="text-primary font-bold text-xl">950.000₫</span>
                                </div>
                                <button
                                    class="w-10 h-10 flex items-center justify-center bg-primary/10 text-primary rounded-full hover:bg-primary/20 transition-colors"
                                    onClick={() => handleAddToCart({id: 3, name: 'Bình hoa lily trắng', price: '950.000₫', image: 'https://readdy.ai/api/search-image?query=Beautiful%20bouquet%20of%20white%20lilies%20arranged%20professionally%20against%20a%20clean%20white%20background.%20The%20lilies%20are%20in%20full%20bloom%20with%20perfect%20petals.%20Professional%20studio%20lighting%20highlights%20the%20texture%20and%20pure%20white%20color%20of%20the%20flowers.&width=80&height=80&seq=22&orientation=squarish'})}>
                                    <i class="ri-shopping-cart-line"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div class="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                        <div class="relative">
                            <img src="https://readdy.ai/api/search-image?query=Beautiful%20arrangement%20of%20red%20roses%20and%20white%20babys%20breath%20in%20a%20elegant%20black%20box%20against%20a%20clean%20white%20background.%20The%20roses%20are%20deep%20red%20with%20perfect%20petals%20in%20full%20bloom.%20Professional%20studio%20lighting%20highlights%20the%20contrast%20between%20the%20vibrant%20red%20roses%20and%20the%20black%20box.&width=600&height=600&seq=9&orientation=squarish"
                                alt="Hoa hồng đỏ hộp đen" class="w-full h-80 object-cover object-top"/>
                        </div>
                        <div class="p-4">
                            <h3 class="font-semibold text-gray-900 text-lg">Hộp hoa hồng đỏ sang trọng</h3>
                            <div class="flex items-center mt-1 mb-3">
                                <div class="flex text-yellow-400">
                                    <i class="ri-star-fill"></i>
                                    <i class="ri-star-fill"></i>
                                    <i class="ri-star-fill"></i>
                                    <i class="ri-star-fill"></i>
                                    <i class="ri-star-half-fill"></i>
                                </div>
                                <span class="text-gray-500 text-sm ml-2">(24)</span>
                            </div>
                            <div class="flex justify-between items-center">
                                <div>
                                    <span class="text-primary font-bold text-xl">1.200.000₫</span>
                                    <span class="text-gray-400 line-through text-sm ml-2">1.350.000₫</span>
                                </div>
                                <button
                                    class="w-10 h-10 flex items-center justify-center bg-primary/10 text-primary rounded-full hover:bg-primary/20 transition-colors"
                                    onClick={() => handleAddToCart({id: 4, name: 'Hộp hoa hồng đỏ sang trọng', price: '1.200.000₫', oldPrice: '1.350.000₫', image: 'https://readdy.ai/api/search-image?query=Beautiful%20arrangement%20of%20red%20roses%20in%20a%20black%20box%20against%20a%20clean%20white%20background.%20The%20roses%20are%20in%20full%20bloom%20with%20perfect%20petals.%20Professional%20studio%20lighting%20highlights%20the%20texture%20and%20vibrant%20red%20color%20of%20the%20flowers.&width=80&height=80&seq=23&orientation=squarish'})}>
                                    <i class="ri-shopping-cart-line"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* Special Offer Banner */}
        <section class="py-16 bg-white">
            <div class="container mx-auto px-4">
                          <div class="rounded-xl overflow-hidden relative"
                              style={{backgroundImage: "url('https://readdy.ai/api/search-image?query=Beautiful%20floral%20background%20with%20soft%20pink%20roses%20and%20white%20peonies%20arranged%20artistically%20with%20eucalyptus%20leaves.%20The%20image%20has%20a%20light%2C%20airy%20feel%20with%20soft%20natural%20lighting%20creating%20a%20romantic%20atmosphere.%20The%20flowers%20appear%20fresh%20and%20vibrant%20against%20a%20subtle%20light%20background%2C%20creating%20an%20elegant%20composition%20perfect%20for%20a%20flower%20shop%20promotion%20banner.&width=1200&height=400&seq=10&orientation=landscape')", backgroundSize: "cover", backgroundPosition: "center"}}>
                    <div class="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary/40"></div>
                    <div class="relative p-8 md:p-12 flex flex-col md:flex-row items-center justify-between">
                        <div class="text-white mb-8 md:mb-0 md:max-w-xl">
                            <h2 class="text-3xl md:text-4xl font-bold mb-4">Ưu đãi đặc biệt mùa hè</h2>
                            <p class="text-white/90 text-lg mb-6">Giảm giá 20% cho tất cả các bó hoa mùa hè từ ngày 7-20
                                tháng 6. Sử dụng mã <span class="font-bold">SUMMER20</span> khi thanh toán.</p>
                            <button
                                class="bg-white text-primary px-6 py-3 rounded-button font-medium hover:bg-gray-100 transition-colors whitespace-nowrap">Mua
                                ngay</button>
                        </div>
                        <div class="bg-white/90 rounded-lg p-6 w-full md:w-auto">
                            <div class="text-center">
                                <h3 class="text-xl font-bold text-gray-900 mb-2">Thời gian còn lại</h3>
                                <div class="flex justify-center gap-3 mt-4">
                                    <div class="bg-primary/10 rounded p-2 w-16">
                                        <div class="text-2xl font-bold text-primary">13</div>
                                        <div class="text-xs text-gray-600">Ngày</div>
                                    </div>
                                    <div class="bg-primary/10 rounded p-2 w-16">
                                        <div class="text-2xl font-bold text-primary">08</div>
                                        <div class="text-xs text-gray-600">Giờ</div>
                                    </div>
                                    <div class="bg-primary/10 rounded p-2 w-16">
                                        <div class="text-2xl font-bold text-primary">45</div>
                                        <div class="text-xs text-gray-600">Phút</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* Testimonials */}
        <section class="py-16 bg-gray-50">
            <div class="container mx-auto px-4">
                <div class="text-center mb-12">
                    <h2 class="text-3xl font-bold text-gray-900 mb-4">Khách hàng nói gì về chúng tôi</h2>
                    <p class="text-gray-600 max-w-2xl mx-auto">Những đánh giá chân thực từ khách hàng đã trải nghiệm
                        dịch vụ của Hoa Xinh.</p>
                </div>
                <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div class="bg-white p-6 rounded-lg shadow-sm">
                        <div class="flex text-yellow-400 mb-4">
                            <i class="ri-star-fill"></i>
                            <i class="ri-star-fill"></i>
                            <i class="ri-star-fill"></i>
                            <i class="ri-star-fill"></i>
                            <i class="ri-star-fill"></i>
                        </div>
                        <p class="text-gray-700 mb-6">"Hoa luôn tươi và được giao đúng hẹn. Tôi đặc biệt ấn tượng với
                            cách họ đóng gói cẩn thận để hoa không bị dập. Sẽ tiếp tục ủng hộ!"</p>
                        <div class="flex items-center">
                            <div class="w-12 h-12 rounded-full bg-gray-200 overflow-hidden mr-4">
                                <img src="https://readdy.ai/api/search-image?query=Professional%20headshot%20portrait%20of%20a%20Vietnamese%20woman%20in%20her%2030s%20with%20long%20black%20hair%2C%20smiling%20naturally%20at%20the%20camera.%20She%20has%20a%20warm%2C%20friendly%20expression%20and%20is%20wearing%20professional%20business%20attire.%20The%20photo%20has%20soft%2C%20flattering%20lighting%20against%20a%20neutral%20background.&width=100&height=100&seq=11&orientation=squarish"
                                    alt="Nguyễn Thị Minh Tâm" class="w-full h-full object-cover"/>
                            </div>
                            <div>
                                <h4 class="font-medium text-gray-900">Nguyễn Thị Minh Tâm</h4>
                                <p class="text-gray-500 text-sm">Khách hàng thân thiết</p>
                            </div>
                        </div>
                    </div>
                    <div class="bg-white p-6 rounded-lg shadow-sm">
                        <div class="flex text-yellow-400 mb-4">
                            <i class="ri-star-fill"></i>
                            <i class="ri-star-fill"></i>
                            <i class="ri-star-fill"></i>
                            <i class="ri-star-fill"></i>
                            <i class="ri-star-fill"></i>
                        </div>
                        <p class="text-gray-700 mb-6">"Đặt hoa tặng sinh nhật vợ và cô ấy rất thích. Bó hoa đẹp hơn cả
                            trong hình, nhân viên tư vấn nhiệt tình và chuyên nghiệp. Chắc chắn sẽ quay lại!"</p>
                        <div class="flex items-center">
                            <div class="w-12 h-12 rounded-full bg-gray-200 overflow-hidden mr-4">
                                <img src="https://readdy.ai/api/search-image?query=Professional%20headshot%20portrait%20of%20a%20Vietnamese%20man%20in%20his%2040s%20with%20short%20black%20hair%20and%20glasses%2C%20smiling%20confidently%20at%20the%20camera.%20He%20has%20a%20friendly%2C%20approachable%20expression%20and%20is%20wearing%20a%20business%20casual%20outfit.%20The%20photo%20has%20soft%2C%20flattering%20lighting%20against%20a%20neutral%20background.&width=100&height=100&seq=12&orientation=squarish"
                                    alt="Trần Văn Hùng" class="w-full h-full object-cover"/>
                            </div>
                            <div>
                                <h4 class="font-medium text-gray-900">Trần Văn Hùng</h4>
                                <p class="text-gray-500 text-sm">Hà Nội</p>
                            </div>
                        </div>
                    </div>
                    <div class="bg-white p-6 rounded-lg shadow-sm">
                        <div class="flex text-yellow-400 mb-4">
                            <i class="ri-star-fill"></i>
                            <i class="ri-star-fill"></i>
                            <i class="ri-star-fill"></i>
                            <i class="ri-star-fill"></i>
                            <i class="ri-star-half-fill"></i>
                        </div>
                        <p class="text-gray-700 mb-6">"Đặt hoa cho sự kiện công ty và nhận được rất nhiều lời khen từ
                            đồng nghiệp. Hoa tươi lâu, mẫu mã đẹp và giá cả hợp lý. Sẽ tiếp tục hợp tác lâu dài!"</p>
                        <div class="flex items-center">
                            <div class="w-12 h-12 rounded-full bg-gray-200 overflow-hidden mr-4">
                                <img src="https://readdy.ai/api/search-image?query=Professional%20headshot%20portrait%20of%20a%20Vietnamese%20woman%20in%20her%20late%2020s%20with%20shoulder-length%20black%20hair%2C%20smiling%20confidently%20at%20the%20camera.%20She%20has%20a%20modern%2C%20professional%20appearance%20and%20is%20wearing%20business%20attire.%20The%20photo%20has%20soft%2C%20flattering%20lighting%20against%20a%20neutral%20background.&width=100&height=100&seq=13&orientation=squarish"
                                    alt="Lê Thị Hương" class="w-full h-full object-cover"/>
                            </div>
                            <div>
                                <h4 class="font-medium text-gray-900">Lê Thị Hương</h4>
                                <p class="text-gray-500 text-sm">Quản lý sự kiện</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* Instagram Feed */}
        <section class="py-16 bg-white">
            <div class="container mx-auto px-4">
                <div class="text-center mb-12">
                    <h2 class="text-3xl font-bold text-gray-900 mb-4">Theo dõi chúng tôi trên Instagram</h2>
                    <p class="text-gray-600 max-w-2xl mx-auto">@hoaxinh_official</p>
                </div>
                <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
                    <a href="https://www.facebook.com/trinhtopne" class="block overflow-hidden rounded-lg group">
                        <div class="aspect-square overflow-hidden relative">
                            <img src="https://readdy.ai/api/search-image?query=Close-up%20of%20a%20beautiful%20pink%20peony%20flower%20in%20full%20bloom%20against%20a%20light%20background.%20The%20image%20captures%20the%20delicate%2C%20layered%20petals%20in%20perfect%20detail%20with%20soft%2C%20natural%20lighting%20highlighting%20the%20texture%20and%20subtle%20color%20variations.&width=300&height=300&seq=14&orientation=squarish"
                                alt="Instagram post"
                                class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"/>
                            <div
                                class="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                <div class="text-white">
                                    <i class="ri-instagram-line text-2xl"></i>
                                </div>
                            </div>
                        </div>
                    </a>
                    <a href="https://www.facebook.com/trinhtopne" class="block overflow-hidden rounded-lg group">
                        <div class="aspect-square overflow-hidden relative">
                            <img src="https://readdy.ai/api/search-image?query=Beautiful%20arrangement%20of%20mixed%20flowers%20including%20roses%2C%20peonies%2C%20and%20eucalyptus%20leaves%20in%20a%20stylish%20vase.%20The%20image%20captures%20the%20elegant%20composition%20with%20soft%2C%20natural%20lighting%20highlighting%20the%20various%20colors%20and%20textures%20of%20the%20flowers.&width=300&height=300&seq=15&orientation=squarish"
                                alt="Instagram post"
                                class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"/>
                            <div
                                class="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                <div class="text-white">
                                    <i class="ri-instagram-line text-2xl"></i>
                                </div>
                            </div>
                        </div>
                    </a>
                    <a href="https://www.facebook.com/trinhtopne" class="block overflow-hidden rounded-lg group">
                        <div class="aspect-square overflow-hidden relative">
                            <img src="https://readdy.ai/api/search-image?query=Close-up%20of%20a%20florists%20hands%20arranging%20flowers%20in%20a%20bouquet.%20The%20image%20captures%20the%20careful%2C%20artistic%20process%20with%20soft%2C%20natural%20lighting%20highlighting%20the%20beautiful%20flowers%20and%20the%20skilled%20hands%20at%20work.&width=300&height=300&seq=16&orientation=squarish"
                                alt="Instagram post"
                                class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"/>
                            <div
                                class="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                <div class="text-white">
                                    <i class="ri-instagram-line text-2xl"></i>
                                </div>
                            </div>
                        </div>
                    </a>
                    <a href="https://www.facebook.com/trinhtopne" class="block overflow-hidden rounded-lg group">
                        <div class="aspect-square overflow-hidden relative">
                            <img src="https://readdy.ai/api/search-image?query=Elegant%20wedding%20bouquet%20with%20white%20and%20blush%20roses%2C%20peonies%2C%20and%20greenery.%20The%20image%20captures%20the%20beautiful%20bridal%20bouquet%20with%20soft%2C%20natural%20lighting%20highlighting%20the%20delicate%20flowers%20and%20sophisticated%20arrangement.&width=300&height=300&seq=17&orientation=squarish"
                                alt="Instagram post"
                                class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"/>
                            <div
                                class="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                <div class="text-white">
                                    <i class="ri-instagram-line text-2xl"></i>
                                </div>
                            </div>
                        </div>
                    </a>
                    <a href="https://www.facebook.com/trinhtopne" class="block overflow-hidden rounded-lg group">
                        <div class="aspect-square overflow-hidden relative">
                            <img src="https://readdy.ai/api/search-image?query=Beautiful%20flower%20shop%20interior%20with%20various%20bouquets%20and%20arrangements%20on%20display.%20The%20image%20captures%20the%20colorful%2C%20inviting%20atmosphere%20with%20soft%2C%20natural%20lighting%20highlighting%20the%20fresh%20flowers%20and%20elegant%20shop%20design.&width=300&height=300&seq=18&orientation=squarish"
                                alt="Instagram post"
                                class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"/>
                            <div
                                class="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                <div class="text-white">
                                    <i class="ri-instagram-line text-2xl"></i>
                                </div>
                            </div>                        </div>
                    </a>
                    <a href="https://www.facebook.com/trinhtopne" class="block overflow-hidden rounded-lg group">
                   
                        <div class="aspect-square overflow-hidden relative">
                            <img src="https://readdy.ai/api/search-image?query=Close-up%20of%20a%20beautiful%20sunflower%20in%20full%20bloom%20against%20a%20light%20background.%20The%20image%20captures%20the%20vibrant%20yellow%20petals%20and%20dark%20center%20in%20perfect%20detail%20with%20soft%2C%20natural%20lighting%20highlighting%20the%20texture%20and%20rich%20colors.&width=300&height=300&seq=19&orientation=squarish"
                                alt="Instagram post"
                                class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"/>
                            <div
                                class="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                <div class="text-white">
                                    <i class="ri-instagram-line text-2xl"></i>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        </section>

        {/* Newsletter */}
          <section class="py-16 bg-primary/5">
            <div class="container mx-auto px-4">
                <div class="max-w-3xl mx-auto text-center">
                    <h2 class="text-3xl font-bold text-gray-900 mb-4">Đăng ký nhận thông tin</h2>
                    <p class="text-gray-600 mb-8">Đăng ký để nhận thông tin về các bộ sưu tập mới và ưu đãi đặc biệt từ
                       Trình Tóp Shop.</p>
                    <form class="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
                        <input type="email" placeholder="Email của bạn"
                            class="flex-1 px-4 py-3 rounded-button border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"/>
                        <button type="submit"
                            class="bg-primary text-white px-6 py-3 rounded-button font-medium hover:bg-primary/90 transition-colors whitespace-nowrap">Đăng
                            ký</button>
                    </form>
                </div>
            </div>
        </section>
      </main>

      {/* Footer */}

    </div>
  );
}

// Helper Components
const CategoryItem = ({ image, title, count }) => (
  <a href="#" className="group">
    <div className="rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      <div className="aspect-square overflow-hidden">
        <img src={image} alt={title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
      </div>
      <div className="p-4 bg-white">
        <h3 className="font-semibold text-gray-900 text-lg">{title}</h3>
        <p className="text-gray-600 text-sm mt-1">{count}</p>
      </div>
    </div>
  </a>
);

const ProductItem = ({ image, title, price, oldPrice, rating, reviewCount, badge }) => (
  <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
    <div className="relative">
      <img src={image} alt={title} className="w-full h-80 object-cover object-top" />
      {badge && (
        <div className="absolute top-3 right-3">
          <span className="bg-primary text-white text-xs font-medium px-2 py-1 rounded">{badge}</span>
        </div>
      )}
    </div>
    <div className="p-4">
      <h3 className="font-semibold text-gray-900 text-lg">{title}</h3>
      <div className="flex items-center mt-1 mb-3">
        <div className="flex text-yellow-400">
          {[...Array(5)].map((_, i) => (
            <i key={i} className={`ri-star-${i < Math.floor(rating) ? 'fill' : i < rating ? 'half-fill' : 'line'}`}></i>
          ))}
        </div>
        <span className="text-gray-500 text-sm ml-2">({reviewCount})</span>
      </div>
      <div className="flex justify-between items-center">
        <div>
          <span className="text-primary font-bold text-xl">{price}</span>
          {oldPrice && <span className="text-gray-400 line-through text-sm ml-2">{oldPrice}</span>}
        </div>
        <button className="w-10 h-10 flex items-center justify-center bg-primary/10 text-primary rounded-full hover:bg-primary/20 transition-colors">
          <i className="ri-shopping-cart-line"></i>
        </button>
      </div>
    </div>
  </div>
);

const CountdownItem = ({ number, label }) => (
  <div className="bg-primary/10 rounded p-2 w-16">
    <div className="text-2xl font-bold text-primary">{number}</div>
    <div className="text-xs text-gray-600">{label}</div>
  </div>
);

const TestimonialItem = ({ rating, text, name, role, image }) => (
  <div className="bg-white p-6 rounded-lg shadow-sm">
    <div className="flex text-yellow-400 mb-4">
      {[...Array(5)].map((_, i) => (
        <i key={i} className={`ri-star-${i < rating ? 'fill' : 'line'}`}></i>
      ))}
    </div>
    <p className="text-gray-700 mb-6">{text}</p>
    <div className="flex items-center">
      <div className="w-12 h-12 rounded-full bg-gray-200 overflow-hidden mr-4">
        <img src={image} alt={name} className="w-full h-full object-cover" />
      </div>
      <div>
        <h4 className="font-medium text-gray-900">{name}</h4>
        <p className="text-gray-500 text-sm">{role}</p>
      </div>
    </div>
  </div>
);



export default Home; 