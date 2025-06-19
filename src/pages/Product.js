import React, { useState } from 'react';
import './Product.css';

function Product({ cartItems, setCartItems, isCartOpen, setIsCartOpen, handleAddToCart, handleUpdateQuantity, handleRemoveItem }) {
  // State cho filter Loại hoa
  const [flowerTypes, setFlowerTypes] = useState({
    'Hoa hồng': false,
    'Hoa tulip': false,
    'Hoa lan': false,
    'Hoa mẫu đơn': false,
    'Hoa hướng dương': false,
    'Hoa lily': false,
  });
  // State cho filter Dịp
  const [occasions, setOccasions] = useState({
    'Sinh nhật': false,
    'Tình yêu': false,
    'Cưới hỏi': false,
    'Khai trương': false,
    'Chia buồn': false,
    'Chúc mừng': false,
  });
  // State cho khoảng giá
  const [priceRange, setPriceRange] = useState({
    min: 0,
    max: 2500000,
    slider: 2500000
  });

  const handleFlowerTypeChange = (type) => {
    setFlowerTypes(prev => ({
      ...prev,
      [type]: !prev[type]
    }));
  };
  const handleOccasionChange = (occasion) => {
    setOccasions(prev => ({
      ...prev,
      [occasion]: !prev[occasion]
    }));
  };

  return (
    <main className=" bg-gray-50">
    <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-3">
            <div className="flex items-center text-sm text-gray-500">
                <a href="#" className="hover:text-primary transition-colors">Trang chủ</a>
                <span className="mx-2">/</span>
                <span className="text-gray-900 font-medium">Sản phẩm</span>
            </div>
        </div>
    </div>

        
    <section className="py-8">
        <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row gap-8">

                <div className="lg:w-1/4 w-full">
                    <div className="bg-white rounded-lg shadow-sm p-6 sticky top-24">
                        <div className="flex justify-between items-center mb-6">
                            <h3 className="font-bold text-lg text-gray-900">Bộ lọc</h3>
                            <button className="text-sm text-primary hover:underline">Xóa tất cả</button>
                        </div>
                        <div className="mb-6 pb-6 border-b border-gray-100">
                            <h4 className="font-medium text-gray-900 mb-4">Loại hoa</h4>
                            <div className="space-y-3">
                                {Object.entries(flowerTypes).map(([type, checked]) => (
                                    <label className="custom-checkbox flex items-center" key={type} style={{position: 'relative', minHeight: 20, minWidth: 20}}>
                                        <input
                                            type="checkbox"
                                            checked={!!checked}
                                            onChange={() => handleFlowerTypeChange(type)}
                                        />
                                        <span className="checkmark"></span>
                                        <span className="ml-7 text-gray-700">{type}</span>
                                        <span className=" text-gray-500 text-sm" style={{float: 'right'}}>
                                            {type === 'Hoa hồng' ? '(24)' :
                                            type === 'Hoa tulip' ? '(18)' :
                                            type === 'Hoa lan' ? '(15)' :
                                            type === 'Hoa mẫu đơn' ? '(12)' :
                                            type === 'Hoa hướng dương' ? '(9)' :
                                            type === 'Hoa lily' ? '(14)' : ''}
                                        </span>   
                                    </label>
                                ))}
                            </div>
                            <button className="text-primary text-sm mt-3 hover:underline flex items-center">
                                Xem thêm
                                <i className="ri-arrow-down-s-line ml-1"></i>
                            </button>
                        </div>
                        
                        
                        <div className="mb-6 pb-6 border-b border-gray-100">
                            <h4 className="font-medium text-gray-900 mb-4">Khoảng giá</h4>
                            <div className="mb-4">
                                <input
                                    type="range"
                                    min="0"
                                    max="5000000"
                                    value={priceRange.slider}
                                    className="price-range-slider"
                                    id="priceRange"
                                    onChange={e => setPriceRange(prv => ({
                                        ...prv,
                                        slider: Number(e.target.value),
                                        max: Number(e.target.value)
                                    }))}
                                />
                            </div>
                            <div className="flex justify-between">
                                <span className="text-gray-700 text-sm">0₫</span>
                                <span className="text-gray-700 text-sm">5.000.000₫</span>
                            </div>
                            <div className="flex items-center gap-3 mt-4">
                                <div className="relative flex-1">
                                    <input
                                        type="text"
                                        value={priceRange.min}
                                        onChange={e => {
                                            const val = Number(e.target.value.replace(/\D/g, ''));
                                            setPriceRange(prv => ({ ...prv, min: isNaN(val) ? 0 : val }));
                                        }}
                                        className="w-full border border-gray-300 rounded px-3 py-2 text-sm text-right"
                                    />
                                    <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 text-sm">₫</span>
                                </div>
                                <span className="text-gray-400">-</span>
                                <div className="relative flex-1">
                                    <input
                                        type="text"
                                        value={priceRange.max}
                                        onChange={e => {
                                            const val = Number(e.target.value.replace(/\D/g, ''));
                                            setPriceRange(prv => ({ ...prv, max: isNaN(val) ? 0 : val, slider: isNaN(val) ? prv.slider : val }));
                                        }}
                                        className="w-full border border-gray-300 rounded px-3 py-2 text-sm text-right"
                                    />
                                    <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 text-sm">₫</span>
                                </div>
                            </div>
                            <button className="w-full bg-primary/10 text-primary mt-4 py-2 rounded font-medium hover:bg-primary/20 transition-colors whitespace-nowrap">Áp dụng</button>
                        </div>
                        
                        
                        <div className="mb-6 pb-6 border-b border-gray-100">
                            <h4 className="font-medium text-gray-900 mb-4">Dịp</h4>
                            <div className="space-y-3">
                                {Object.entries(occasions).map(([occasion, checked]) => (
                                    <label className="custom-checkbox flex items-center" key={occasion} style={{position: 'relative', minHeight: 20, minWidth: 20}}>
                                        <input
                                            type="checkbox"
                                            checked={!!checked}
                                            onChange={() => handleOccasionChange(occasion)}
                                        />
                                        <span className="checkmark"></span>
                                        <span className="ml-7 text-gray-700">{occasion}</span>
                                        <span className=" text-gray-500 text-sm" style={{float: 'right'}}>
                                            {occasion === 'Sinh nhật' ? '(32)' :
                                            occasion === 'Tình yêu' ? '(28)' :
                                            occasion === 'Cưới hỏi' ? '(15)' :
                                            occasion === 'Khai trương' ? '(10)' :
                                            occasion === 'Chia buồn' ? '(8)' :
                                            occasion === 'Chúc mừng' ? '(22)' : ''}
                                        </span>
                                    </label>
                                ))}
                            </div>
                        </div>
                        
                        
                        <div className="mb-6">
                            <h4 className="font-medium text-gray-900 mb-4">Màu sắc</h4>
                            <div className="flex flex-wrap gap-3">
                                <button className="w-8 h-8 rounded-full bg-red-500 border-2 border-white shadow-sm hover:shadow-md transition-shadow"></button>
                                <button className="w-8 h-8 rounded-full bg-pink-400 border-2 border-white shadow-sm hover:shadow-md transition-shadow"></button>
                                <button className="w-8 h-8 rounded-full bg-yellow-400 border-2 border-white shadow-sm hover:shadow-md transition-shadow"></button>
                                <button className="w-8 h-8 rounded-full bg-purple-500 border-2 border-white shadow-sm hover:shadow-md transition-shadow"></button>
                                <button className="w-8 h-8 rounded-full bg-blue-500 border-2 border-white shadow-sm hover:shadow-md transition-shadow"></button>
                                <button className="w-8 h-8 rounded-full bg-orange-500 border-2 border-white shadow-sm hover:shadow-md transition-shadow"></button>
                                <button className="w-8 h-8 rounded-full bg-white border-2 border-gray-300 shadow-sm hover:shadow-md transition-shadow"></button>
                                <button className="w-8 h-8 rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 border-2 border-white shadow-sm hover:shadow-md transition-shadow"></button>
                            </div>
                        </div>
                    </div>
                </div>
                
                
                <div className="lg:w-3/4 w-full">
                    
                    <div className="bg-white rounded-lg shadow-sm p-4 mb-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                        <div className="flex items-center">
                            <span className="text-gray-700 mr-3">Sắp xếp theo:</span>
                            <div className="relative">
                                <select className="appearance-none bg-gray-50 border border-gray-200 rounded py-2 pl-3 pr-10 text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary text-sm">
                                    <option>Phổ biến nhất</option>
                                    <option>Mới nhất</option>
                                    <option>Giá: Thấp đến cao</option>
                                    <option>Giá: Cao đến thấp</option>
                                    <option>Đánh giá cao nhất</option>
                                </select>
                                <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                                    <i className="ri-arrow-down-s-line text-gray-400"></i>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center gap-4 w-full sm:w-auto">
                            <div className="flex items-center gap-2">
                                <button className="w-8 h-8 flex items-center justify-center bg-primary text-white rounded">
                                    <i className="ri-layout-grid-line"></i>
                                </button>
                                <button className="w-8 h-8 flex items-center justify-center bg-gray-100 text-gray-500 rounded hover:bg-gray-200 transition-colors">
                                    <i className="ri-list-check"></i>
                                </button>
                            </div>
                            <div className="relative flex-1 sm:flex-none">
                                <select className="appearance-none bg-gray-50 border border-gray-200 rounded py-2 pl-3 pr-10 text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary text-sm w-full">
                                    <option>12 sản phẩm</option>
                                    <option>24 sản phẩm</option>
                                    <option>36 sản phẩm</option>
                                    <option>48 sản phẩm</option>
                                </select>
                                <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                                    <i className="ri-arrow-down-s-line text-gray-400"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                        <div className="bg-primary/10 text-primary rounded-full px-3 py-1 text-sm flex items-center">
                            Hoa hồng
                            <button className="ml-2 w-4 h-4 flex items-center justify-center">
                                <i className="ri-close-line"></i>
                            </button>
                        </div>
                        <div className="bg-primary/10 text-primary rounded-full px-3 py-1 text-sm flex items-center">
                            Dưới 2.500.000₫
                            <button className="ml-2 w-4 h-4 flex items-center justify-center">
                                <i className="ri-close-line"></i>
                            </button>
                        </div>
                    </div>
                    
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        
                        <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow group">
                            <div className="relative">
                                <img src="https://readdy.ai/api/search-image?query=Beautiful%2520bouquet%2520of%2520fresh%2520red%2520roses%2520arranged%2520professionally%2520with%2520green%2520leaves%2520against%2520a%2520clean%2520white%2520background.%2520The%2520roses%2520are%2520vibrant%2520and%2520in%2520full%2520bloom%252C%2520showcasing%2520their%2520perfect%2520petals.%2520Professional%2520studio%2520lighting%2520highlights%2520the%2520texture%2520and%2520color%2520of%2520the%2520flowers.&width=600&height=600&seq=101&orientation=squarish" alt="Bó hoa hồng đỏ" className="w-full h-64 object-cover object-top group-hover:scale-105 transition-transform duration-300"/>
                                <div className="absolute top-3 right-3">
                                    <span className="bg-primary text-white text-xs font-medium px-2 py-1 rounded">Bán chạy</span>
                                </div>
                                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3">
                                    <button className="w-10 h-10 rounded-full bg-white text-primary flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                                        <i className="ri-eye-line"></i>
                                    </button>
                                    <button className="w-10 h-10 rounded-full bg-white text-primary flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                                        <i className="ri-heart-line"></i>
                                    </button>
                                </div>
                            </div>
                            <div className="p-4">
                                <h3 className="font-semibold text-gray-900 text-lg">Bó hoa hồng đỏ tình yêu</h3>
                                <div className="flex items-center mt-1 mb-3">
                                    <div className="flex text-yellow-400">
                                        <i className="ri-star-fill"></i>
                                        <i className="ri-star-fill"></i>
                                        <i className="ri-star-fill"></i>
                                        <i className="ri-star-fill"></i>
                                        <i className="ri-star-half-fill"></i>
                                    </div>
                                    <span className="text-gray-500 text-sm ml-2">(42)</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <div>
                                        <span className="text-primary font-bold text-xl">950.000₫</span>
                                        <span className="text-gray-400 line-through text-sm ml-2">1.150.000₫</span>
                                    </div>
                                    <button className="w-10 h-10 flex items-center justify-center bg-primary/10 text-primary rounded-full hover:bg-primary/20 transition-colors" onClick={() => handleAddToCart({id: 101, name: 'Bó hoa hồng đỏ tình yêu', price: '950.000₫', oldPrice: '1.150.000₫', image: 'https://readdy.ai/api/search-image?query=Beautiful%2520bouquet%2520of%2520fresh%2520red%2520roses%2520arranged%2520professionally%2520with%2520green%2520leaves%2520against%2520a%2520clean%2520white%2520background.%2520The%2520roses%2520are%2520vibrant%2520and%2520in%2520full%2520bloom%252C%2520showcasing%2520their%2520perfect%2520petals.%2520Professional%2520studio%2520lighting%2520highlights%2520the%2520texture%2520and%2520color%2520of%2520the%2520flowers.&width=600&height=600&seq=101&orientation=squarish'})}>
                                        <i className="ri-shopping-cart-line"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                        
                        
                        <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow group">
                            <div className="relative">
                                <img src="https://readdy.ai/api/search-image?query=Beautiful%2520bouquet%2520of%2520fresh%2520pink%2520roses%2520arranged%2520professionally%2520with%2520green%2520leaves%2520and%2520white%2520babys%2520breath%2520against%2520a%2520clean%2520white%2520background.%2520The%2520roses%2520are%2520in%2520full%2520bloom%2520with%2520perfect%2520petals.%2520Professional%2520studio%2520lighting%2520highlights%2520the%2520texture%2520and%2520soft%2520pink%2520color%2520of%2520the%2520flowers.&width=600&height=600&seq=102&orientation=squarish" alt="Bó hoa hồng hồng" className="w-full h-64 object-cover object-top group-hover:scale-105 transition-transform duration-300"/>
                                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3">
                                    <button className="w-10 h-10 rounded-full bg-white text-primary flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                                        <i className="ri-eye-line"></i>
                                    </button>
                                    <button className="w-10 h-10 rounded-full bg-white text-primary flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                                        <i className="ri-heart-line"></i>
                                    </button>
                                </div>
                            </div>
                            <div className="p-4">
                                <h3 className="font-semibold text-gray-900 text-lg">Bó hoa hồng phấn dịu dàng</h3>
                                <div className="flex items-center mt-1 mb-3">
                                    <div className="flex text-yellow-400">
                                        <i className="ri-star-fill"></i>
                                        <i className="ri-star-fill"></i>
                                        <i className="ri-star-fill"></i>
                                        <i className="ri-star-fill"></i>
                                        <i className="ri-star-line"></i>
                                    </div>
                                    <span className="text-gray-500 text-sm ml-2">(36)</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <div>
                                        <span className="text-primary font-bold text-xl">850.000₫</span>
                                    </div>
                                    <button className="w-10 h-10 flex items-center justify-center bg-primary/10 text-primary rounded-full hover:bg-primary/20 transition-colors" onClick={() => handleAddToCart({id: 102, name: 'Bó hoa hồng phấn dịu dàng', price: '850.000₫', oldPrice: '850.000₫', image: 'https://readdy.ai/api/search-image?query=Beautiful%2520bouquet%2520of%2520fresh%2520pink%2520roses%2520arranged%2520professionally%2520with%2520green%2520leaves%2520and%2520white%2520babys%2520breath%2520against%2520a%2520clean%2520white%2520background.%2520The%2520roses%2520are%2520in%2520full%2520bloom%2520with%2520perfect%2520petals.%2520Professional%2520studio%2520lighting%2520highlights%2520the%2520texture%2520and%2520soft%2520pink%2520color%2520of%2520the%2520flowers.&width=600&height=600&seq=102&orientation=squarish'})}>
                                        <i className="ri-shopping-cart-line"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                        
                        
                        <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow group">
                            <div className="relative">
                                <img src="https://readdy.ai/api/search-image?query=Beautiful%2520bouquet%2520of%2520fresh%2520white%2520roses%2520arranged%2520professionally%2520with%2520eucalyptus%2520leaves%2520against%2520a%2520clean%2520white%2520background.%2520The%2520roses%2520are%2520in%2520full%2520bloom%2520with%2520perfect%2520petals.%2520Professional%2520studio%2520lighting%2520highlights%2520the%2520texture%2520and%2520pure%2520white%2520color%2520of%2520the%2520flowers.&width=600&height=600&seq=103&orientation=squarish" alt="Bó hoa hồng trắng" className="w-full h-64 object-cover object-top group-hover:scale-105 transition-transform duration-300"/>
                                <div className="absolute top-3 right-3">
                                    <span className="bg-secondary text-white text-xs font-medium px-2 py-1 rounded">Mới</span>
                                </div>
                                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3">
                                    <button className="w-10 h-10 rounded-full bg-white text-primary flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                                        <i className="ri-eye-line"></i>
                                    </button>
                                    <button className="w-10 h-10 rounded-full bg-white text-primary flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                                        <i className="ri-heart-line"></i>
                                    </button>
                                </div>
                            </div>
                            <div className="p-4">
                                <h3 className="font-semibold text-gray-900 text-lg">Bó hoa hồng trắng tinh khôi</h3>
                                <div className="flex items-center mt-1 mb-3">
                                    <div className="flex text-yellow-400">
                                        <i className="ri-star-fill"></i>
                                        <i className="ri-star-fill"></i>
                                        <i className="ri-star-fill"></i>
                                        <i className="ri-star-fill"></i>
                                        <i className="ri-star-fill"></i>
                                    </div>
                                    <span className="text-gray-500 text-sm ml-2">(29)</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <div>
                                        <span className="text-primary font-bold text-xl">880.000₫</span>
                                        <span className="text-gray-400 line-through text-sm ml-2">980.000₫</span>
                                    </div>
                                    <button className="w-10 h-10 flex items-center justify-center bg-primary/10 text-primary rounded-full hover:bg-primary/20 transition-colors" onClick={() => handleAddToCart({id: 103, name: 'Bó hoa hồng trắng tinh khôi', price: '880.000₫', oldPrice: '980.000₫', image: 'https://readdy.ai/api/search-image?query=Beautiful%2520bouquet%2520of%2520fresh%2520white%2520roses%2520arranged%2520professionally%2520with%2520eucalyptus%2520leaves%2520against%2520a%2520clean%2520white%2520background.%2520The%2520roses%2520are%2520in%2520full%2520bloom%2520with%2520perfect%2520petals.%2520Professional%2520studio%2520lighting%2520highlights%2520the%2520texture%2520and%2520pure%2520white%2520color%2520of%2520the%2520flowers.&width=600&height=600&seq=103&orientation=squarish'})}>
                                        <i className="ri-shopping-cart-line"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                        

                        <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow group">
                            <div className="relative">
                                <img src="https://readdy.ai/api/search-image?query=Beautiful%2520arrangement%2520of%2520red%2520roses%2520in%2520a%2520elegant%2520black%2520box%2520against%2520a%2520clean%2520white%2520background.%2520The%2520roses%2520are%2520deep%2520red%2520with%2520perfect%2520petals%2520in%2520full%2520bloom.%2520Professional%2520studio%2520lighting%2520highlights%2520the%2520contrast%2520between%2520the%2520vibrant%2520red%2520roses%2520and%2520the%2520black%2520box.&width=600&height=600&seq=104&orientation=squarish" alt="Hộp hoa hồng đỏ" className="w-full h-64 object-cover object-top group-hover:scale-105 transition-transform duration-300"/>
                                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3">
                                    <button className="w-10 h-10 rounded-full bg-white text-primary flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                                        <i className="ri-eye-line"></i>
                                    </button>
                                    <button className="w-10 h-10 rounded-full bg-white text-primary flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                                        <i className="ri-heart-line"></i>
                                    </button>
                                </div>
                            </div>
                            <div className="p-4">
                                <h3 className="font-semibold text-gray-900 text-lg">Hộp hoa hồng đỏ sang trọng</h3>
                                <div className="flex items-center mt-1 mb-3">
                                    <div className="flex text-yellow-400">
                                        <i className="ri-star-fill"></i>
                                        <i className="ri-star-fill"></i>
                                        <i className="ri-star-fill"></i>
                                        <i className="ri-star-fill"></i>
                                        <i className="ri-star-half-fill"></i>
                                    </div>
                                    <span className="text-gray-500 text-sm ml-2">(24)</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <div>
                                        <span className="text-primary font-bold text-xl">1.200.000₫</span>
                                        <span className="text-gray-400 line-through text-sm ml-2">1.350.000₫</span>
                                    </div>
                                    <button className="w-10 h-10 flex items-center justify-center bg-primary/10 text-primary rounded-full hover:bg-primary/20 transition-colors" onClick={() => handleAddToCart({id: 104, name: 'Hộp hoa hồng đỏ sang trọng', price: '1.200.000₫', oldPrice: '1.350.000₫', image: 'https://readdy.ai/api/search-image?query=Beautiful%2520arrangement%2520of%2520red%2520roses%2520in%2520a%2520elegant%2520black%2520box%2520against%2520a%2520clean%2520white%2520background.%2520The%2520roses%2520are%2520deep%2520red%2520with%2520perfect%2520petals%2520in%2520full%2520bloom.%2520Professional%2520studio%2520lighting%2520highlights%2520the%2520contrast%2520between%2520the%2520vibrant%2520red%2520roses%2520and%2520the%2520black%2520box.&width=600&height=600&seq=104&orientation=squarish'})}>
                                        <i className="ri-shopping-cart-line"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                        
                        
                        <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow group">
                            <div className="relative">
                                <img src="https://readdy.ai/api/search-image?query=Beautiful%2520bouquet%2520of%2520fresh%2520mixed%2520roses%2520in%2520various%2520colors%2520including%2520red%252C%2520pink%252C%2520and%2520white%252C%2520arranged%2520professionally%2520with%2520green%2520leaves%2520against%2520a%2520clean%2520white%2520background.%2520The%2520roses%2520are%2520in%2520full%2520bloom%2520with%2520perfect%2520petals.%2520Professional%2520studio%2520lighting%2520highlights%2520the%2520texture%2520and%2520vibrant%2520colors%2520of%2520the%2520flowers.&width=600&height=600&seq=105&orientation=squarish" alt="Bó hoa hồng nhiều màu" className="w-full h-64 object-cover object-top group-hover:scale-105 transition-transform duration-300"/>
                                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3">
                                    <button className="w-10 h-10 rounded-full bg-white text-primary flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                                        <i className="ri-eye-line"></i>
                                    </button>
                                    <button className="w-10 h-10 rounded-full bg-white text-primary flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                                        <i className="ri-heart-line"></i>
                                    </button>
                                </div>
                            </div>
                            <div className="p-4">
                                <h3 className="font-semibold text-gray-900 text-lg">Bó hoa hồng nhiều màu rực rỡ</h3>
                                <div className="flex items-center mt-1 mb-3">
                                    <div className="flex text-yellow-400">
                                        <i className="ri-star-fill"></i>
                                        <i className="ri-star-fill"></i>
                                        <i className="ri-star-fill"></i>
                                        <i className="ri-star-fill"></i>
                                        <i className="ri-star-line"></i>
                                    </div>
                                    <span className="text-gray-500 text-sm ml-2">(18)</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <div>
                                        <span className="text-primary font-bold text-xl">920.000₫</span>
                                    </div>
                                    <button className="w-10 h-10 flex items-center justify-center bg-primary/10 text-primary rounded-full hover:bg-primary/20 transition-colors" onClick={() => handleAddToCart({id: 105, name: 'Bó hoa hồng nhiều màu rực rỡ', price: '920.000₫', oldPrice: '920.000₫', image: 'https://readdy.ai/api/search-image?query=Beautiful%2520bouquet%2520of%2520fresh%2520mixed%2520roses%2520in%2520various%2520colors%2520including%2520red%252C%2520pink%252C%2520and%2520white%252C%2520arranged%2520professionally%2520with%2520green%2520leaves%2520against%2520a%2520clean%2520white%2520background.%2520The%2520roses%2520are%2520in%2520full%2520bloom%2520with%2520perfect%2520petals.%2520Professional%2520studio%2520lighting%2520highlights%2520the%2520texture%2520and%2520vibrant%2520colors%2520of%2520the%2520flowers.&width=600&height=600&seq=105&orientation=squarish'})}>
                                        <i className="ri-shopping-cart-line"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                        
                        
                        <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow group">
                            <div className="relative">
                                <img src="https://readdy.ai/api/search-image?query=Beautiful%2520bouquet%2520of%2520fresh%2520orange%2520roses%2520arranged%2520professionally%2520with%2520green%2520leaves%2520against%2520a%2520clean%2520white%2520background.%2520The%2520roses%2520are%2520in%2520full%2520bloom%2520with%2520perfect%2520petals.%2520Professional%2520studio%2520lighting%2520highlights%2520the%2520texture%2520and%2520vibrant%2520orange%2520color%2520of%2520the%2520flowers.&width=600&height=600&seq=106&orientation=squarish" alt="Bó hoa hồng cam" className="w-full h-64 object-cover object-top group-hover:scale-105 transition-transform duration-300"/>
                                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3">
                                    <button className="w-10 h-10 rounded-full bg-white text-primary flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                                        <i className="ri-eye-line"></i>
                                    </button>
                                    <button className="w-10 h-10 rounded-full bg-white text-primary flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                                        <i className="ri-heart-line"></i>
                                    </button>
                                </div>
                            </div>
                            <div className="p-4">
                                <h3 className="font-semibold text-gray-900 text-lg">Bó hoa hồng cam rạng rỡ</h3>
                                <div className="flex items-center mt-1 mb-3">
                                    <div className="flex text-yellow-400">
                                        <i className="ri-star-fill"></i>
                                        <i className="ri-star-fill"></i>
                                        <i className="ri-star-fill"></i>
                                        <i className="ri-star-fill"></i>
                                        <i className="ri-star-line"></i>
                                    </div>
                                    <span className="text-gray-500 text-sm ml-2">(15)</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <div>
                                        <span className="text-primary font-bold text-xl">870.000₫</span>
                                        <span className="text-gray-400 line-through text-sm ml-2">950.000₫</span>
                                    </div>
                                    <button className="w-10 h-10 flex items-center justify-center bg-primary/10 text-primary rounded-full hover:bg-primary/20 transition-colors" onClick={() => handleAddToCart({id: 106, name: 'Bó hoa hồng cam rạng rỡ', price: '870.000₫', oldPrice: '950.000₫', image: 'https://readdy.ai/api/search-image?query=Beautiful%2520bouquet%2520of%2520fresh%2520orange%2520roses%2520arranged%2520professionally%2520with%2520green%2520leaves%2520against%2520a%2520clean%2520white%2520background.%2520The%2520roses%2520are%2520in%2520full%2520bloom%2520with%2520perfect%2520petals.%2520Professional%2520studio%2520lighting%2520highlights%2520the%2520texture%2520and%2520vibrant%2520orange%2520color%2520of%2520the%2520flowers.&width=600&height=600&seq=106&orientation=squarish'})}>
                                        <i className="ri-shopping-cart-line"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                        
                        
                        <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow group">
                            <div className="relative">
                                <img src="https://readdy.ai/api/search-image?query=Beautiful%2520bouquet%2520of%2520fresh%2520yellow%2520roses%2520arranged%2520professionally%2520with%2520green%2520leaves%2520against%2520a%2520clean%2520white%2520background.%2520The%2520roses%2520are%2520in%2520full%2520bloom%2520with%2520perfect%2520petals.%2520Professional%2520studio%2520lighting%2520highlights%2520the%2520texture%2520and%2520vibrant%2520yellow%2520color%2520of%2520the%2520flowers.&width=600&height=600&seq=107&orientation=squarish" alt="Bó hoa hồng vàng" className="w-full h-64 object-cover object-top group-hover:scale-105 transition-transform duration-300"/>
                                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3">
                                    <button className="w-10 h-10 rounded-full bg-white text-primary flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                                        <i className="ri-eye-line"></i>
                                    </button>
                                    <button className="w-10 h-10 rounded-full bg-white text-primary flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                                        <i className="ri-heart-line"></i>
                                    </button>
                                </div>
                            </div>
                            <div className="p-4">
                                <h3 className="font-semibold text-gray-900 text-lg">Bó hoa hồng vàng ánh dương</h3>
                                <div className="flex items-center mt-1 mb-3">
                                    <div className="flex text-yellow-400">
                                        <i className="ri-star-fill"></i>
                                        <i className="ri-star-fill"></i>
                                        <i className="ri-star-fill"></i>
                                        <i className="ri-star-fill"></i>
                                        <i className="ri-star-half-fill"></i>
                                    </div>
                                    <span className="text-gray-500 text-sm ml-2">(22)</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <div>
                                        <span className="text-primary font-bold text-xl">830.000₫</span>
                                    </div>
                                    <button className="w-10 h-10 flex items-center justify-center bg-primary/10 text-primary rounded-full hover:bg-primary/20 transition-colors" onClick={() => handleAddToCart({id: 107, name: 'Bó hoa hồng vàng ánh dương', price: '830.000₫', oldPrice: '830.000₫', image: 'https://readdy.ai/api/search-image?query=Beautiful%2520bouquet%2520of%2520fresh%2520yellow%2520roses%2520arranged%2520professionally%2520with%2520green%2520leaves%2520against%2520a%2520clean%2520white%2520background.%2520The%2520roses%2520are%2520in%2520full%2520bloom%2520with%2520perfect%2520petals.%2520Professional%2520studio%2520lighting%2520highlights%2520the%2520texture%2520and%2520vibrant%2520yellow%2520color%2520of%2520the%2520flowers.&width=600&height=600&seq=107&orientation=squarish'})}>
                                        <i className="ri-shopping-cart-line"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                        

                        <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow group">
                            <div className="relative">
                                <img src="https://readdy.ai/api/search-image?query=Beautiful%2520bouquet%2520of%2520fresh%2520purple%2520roses%2520arranged%2520professionally%2520with%2520green%2520leaves%2520against%2520a%2520clean%2520white%2520background.%2520The%2520roses%2520are%2520in%2520full%2520bloom%2520with%2520perfect%2520petals.%2520Professional%2520studio%2520lighting%2520highlights%2520the%2520texture%2520and%2520vibrant%2520purple%2520color%2520of%2520the%2520flowers.&width=600&height=600&seq=108&orientation=squarish" alt="Bó hoa hồng tím" className="w-full h-64 object-cover object-top group-hover:scale-105 transition-transform duration-300"/>
                                <div className="absolute top-3 right-3">
                                    <span className="bg-primary text-white text-xs font-medium px-2 py-1 rounded">Bán chạy</span>
                                </div>
                                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3">
                                    <button className="w-10 h-10 rounded-full bg-white text-primary flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                                        <i className="ri-eye-line"></i>
                                    </button>
                                    <button className="w-10 h-10 rounded-full bg-white text-primary flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                                        <i className="ri-heart-line"></i>
                                    </button>
                                </div>
                            </div>
                            <div className="p-4">
                                <h3 className="font-semibold text-gray-900 text-lg">Bó hoa hồng tím quyến rũ</h3>
                                <div className="flex items-center mt-1 mb-3">
                                    <div className="flex text-yellow-400">
                                        <i className="ri-star-fill"></i>
                                        <i className="ri-star-fill"></i>
                                        <i className="ri-star-fill"></i>
                                        <i className="ri-star-fill"></i>
                                        <i className="ri-star-fill"></i>
                                    </div>
                                    <span className="text-gray-500 text-sm ml-2">(31)</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <div>
                                        <span className="text-primary font-bold text-xl">890.000₫</span>
                                        <span className="text-gray-400 line-through text-sm ml-2">990.000₫</span>
                                    </div>
                                    <button className="w-10 h-10 flex items-center justify-center bg-primary/10 text-primary rounded-full hover:bg-primary/20 transition-colors" onClick={() => handleAddToCart({id: 108, name: 'Bó hoa hồng tím quyến rũ', price: '890.000₫', oldPrice: '990.000₫', image: 'https://readdy.ai/api/search-image?query=Beautiful%2520bouquet%2520of%2520fresh%2520purple%2520roses%2520arranged%2520professionally%2520with%2520green%2520leaves%2520against%2520a%2520clean%2520white%2520background.%2520The%2520roses%2520are%2520in%2520full%2520bloom%2520with%2520perfect%2520petals.%2520Professional%2520studio%2520lighting%2520highlights%2520the%2520texture%2520and%2520vibrant%2520purple%2520color%2520of%2520the%2520flowers.&width=600&height=600&seq=108&orientation=squarish'})}>
                                        <i className="ri-shopping-cart-line"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                        
                        
                        <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow group">
                            <div className="relative">
                                <img src="https://readdy.ai/api/search-image?query=Beautiful%2520arrangement%2520of%2520pink%2520roses%2520in%2520a%2520elegant%2520pink%2520box%2520against%2520a%2520clean%2520white%2520background.%2520The%2520roses%2520are%2520soft%2520pink%2520with%2520perfect%2520petals%2520in%2520full%2520bloom.%2520Professional%2520studio%2520lighting%2520highlights%2520the%2520delicate%2520pink%2520color%2520of%2520the%2520roses%2520and%2520the%2520matching%2520box.&width=600&height=600&seq=109&orientation=squarish" alt="Hộp hoa hồng hồng" className="w-full h-64 object-cover object-top group-hover:scale-105 transition-transform duration-300"/>
                                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3">
                                    <button className="w-10 h-10 rounded-full bg-white text-primary flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                                        <i className="ri-eye-line"></i>
                                    </button>
                                    <button className="w-10 h-10 rounded-full bg-white text-primary flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                                        <i className="ri-heart-line"></i>
                                    </button>
                                </div>
                            </div>
                            <div className="p-4">
                                <h3 className="font-semibold text-gray-900 text-lg">Hộp hoa hồng phấn ngọt ngào</h3>
                                <div className="flex items-center mt-1 mb-3">
                                    <div className="flex text-yellow-400">
                                        <i className="ri-star-fill"></i>
                                        <i className="ri-star-fill"></i>
                                        <i className="ri-star-fill"></i>
                                        <i className="ri-star-fill"></i>
                                        <i className="ri-star-line"></i>
                                    </div>
                                    <span className="text-gray-500 text-sm ml-2">(19)</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <div>
                                        <span className="text-primary font-bold text-xl">1.100.000₫</span>
                                    </div>
                                    <button className="w-10 h-10 flex items-center justify-center bg-primary/10 text-primary rounded-full hover:bg-primary/20 transition-colors" onClick={() => handleAddToCart({id: 109, name: 'Hộp hoa hồng phấn ngọt ngào', price: '1.100.000₫', oldPrice: '1.100.000₫', image: 'https://readdy.ai/api/search-image?query=Beautiful%2520arrangement%2520of%2520pink%2520roses%2520in%2520a%2520elegant%2520pink%2520box%2520against%2520a%2520clean%2520white%2520background.%2520The%2520roses%2520are%2520soft%2520pink%2520with%2520perfect%2520petals%2520in%2520full%2520bloom.%2520Professional%2520studio%2520lighting%2520highlights%2520the%2520delicate%2520pink%2520color%2520of%2520the%2520roses%2520and%2520the%2520matching%2520box.&width=600&height=600&seq=109&orientation=squarish'})}>
                                        <i className="ri-shopping-cart-line"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    

                    <div className="mt-12 flex flex-col sm:flex-row justify-between items-center">
                        <div className="text-gray-600 mb-4 sm:mb-0">
                            Hiển thị 1-9 của 24 sản phẩm
                        </div>
                        <div className="flex items-center">
                            <button className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 text-gray-500 hover:bg-gray-50 transition-colors mr-2 disabled:opacity-50 disabled:cursor-not-allowed" disabled>
                                <i className="ri-arrow-left-s-line"></i>
                            </button>
                            <button className="w-10 h-10 flex items-center justify-center rounded-full bg-primary text-white">1</button>
                            <button className="w-10 h-10 flex items-center justify-center rounded-full text-gray-700 hover:bg-gray-100 transition-colors">2</button>
                            <button className="w-10 h-10 flex items-center justify-center rounded-full text-gray-700 hover:bg-gray-100 transition-colors">3</button>
                            <span className="mx-1 text-gray-500">...</span>
                            <button className="w-10 h-10 flex items-center justify-center rounded-full text-gray-700 hover:bg-gray-100 transition-colors">8</button>
                            <button className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 text-gray-500 hover:bg-gray-50 transition-colors ml-2">
                                <i className="ri-arrow-right-s-line"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</main>
  );
}

export default Product; 