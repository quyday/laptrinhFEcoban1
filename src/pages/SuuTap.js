import React from 'react';
import './SuuTap.css';

function SuuTap({ cartItems, setCartItems, isCartOpen, setIsCartOpen, handleAddToCart, handleUpdateQuantity, handleRemoveItem }) {
  return (
<main >

    <section class="relative overflow-hidden" style= {{ backgroundImage: "url('https://readdy.ai/api/search-image?query=Beautiful%2520floral%2520collection%2520showcase%2520with%2520various%2520elegant%2520flower%2520arrangements%2520including%2520wedding%2520bouquets%252C%2520birthday%2520flowers%252C%2520and%2520romantic%2520rose%2520arrangements.%2520The%2520left%2520side%2520has%2520a%2520clean%2520white%2520gradient%2520background%2520for%2520text%252C%2520while%2520the%2520right%2520side%2520displays%2520the%2520beautiful%2520flower%2520collections.%2520Professional%2520photography%2520with%2520soft%2520natural%2520lighting%2520creating%2520a%2520sophisticated%2520atmosphere%2520perfect%2520for%2520a%2520flower%2520shop%2520collection%2520page.&width=1920&height=600&seq=23&orientation=landscape')", backgroundSize: 'cover', backgroundPosition: 'center'}}>
        <div class="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-transparent"></div>
        <div class="container mx-auto px-4 py-16 md:py-24 relative">
            <div class="max-w-lg">
                <h1 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Bộ sưu tập hoa</h1>
                <p class="text-lg text-gray-700 mb-6">Khám phá các bộ sưu tập hoa độc đáo và tinh tế được thiết kế cho mọi dịp đặc biệt trong cuộc sống của bạn.</p>
            </div>
        </div>
    </section>


    <section class="py-8 bg-white border-b">
        <div class="container mx-auto px-4">
            <div class="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div class="relative w-full md:w-64">
                    <input type="text" placeholder="Tìm kiếm bộ sưu tập..." class="pl-10 pr-4 py-3 w-full rounded-button border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary text-sm"/>
                    <div class="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 flex items-center justify-center text-gray-400">
                        <i class="ri-search-line"></i>
                    </div>
                </div>
                
                <div class="flex flex-wrap items-center gap-3">
                    <div class="hidden md:block text-gray-500 text-sm">Lọc theo:</div>
                    
                    <div class="relative group">
                        <button class="px-4 py-2 border border-gray-300 rounded-button text-sm font-medium text-gray-700 hover:border-primary hover:text-primary transition-colors flex items-center whitespace-nowrap">
                            Dịp
                            <i class="ri-arrow-down-s-line ml-2"></i>
                        </button>
                        <div class="absolute left-0 top-full mt-1 bg-white shadow-lg rounded-md p-2 w-48 hidden group-hover:block z-10">
                            <div class="py-1 px-2">
                                <label class="custom-checkbox flex items-center mb-2">
                                    <input type="checkbox" class="absolute opacity-0"/>
                                    <span class="checkmark"></span>
                                    <span class="ml-7 text-sm text-gray-700">Sinh nhật</span>
                                </label>
                                <label class="custom-checkbox flex items-center mb-2">
                                    <input type="checkbox" class="absolute opacity-0"/>
                                    <span class="checkmark"></span>
                                    <span class="ml-7 text-sm text-gray-700">Cưới</span>
                                </label>
                                <label class="custom-checkbox flex items-center mb-2">
                                    <input type="checkbox" class="absolute opacity-0"/>
                                    <span class="checkmark"></span>
                                    <span class="ml-7 text-sm text-gray-700">Tình yêu</span>
                                </label>
                                <label class="custom-checkbox flex items-center mb-2">
                                    <input type="checkbox" class="absolute opacity-0"/>
                                    <span class="checkmark"></span>
                                    <span class="ml-7 text-sm text-gray-700">Khai trương</span>
                                </label>
                                <label class="custom-checkbox flex items-center">
                                    <input type="checkbox" class="absolute opacity-0"/>
                                    <span class="checkmark"></span>
                                    <span class="ml-7 text-sm text-gray-700">Chia buồn</span>
                                </label>
                            </div>
                        </div>
                    </div>
                    
                    <div class="relative group">
                        <button class="px-4 py-2 border border-gray-300 rounded-button text-sm font-medium text-gray-700 hover:border-primary hover:text-primary transition-colors flex items-center whitespace-nowrap">
                            Màu sắc
                            <i class="ri-arrow-down-s-line ml-2"></i>
                        </button>
                        <div class="absolute left-0 top-full mt-1 bg-white shadow-lg rounded-md p-2 w-48 hidden group-hover:block z-10">
                            <div class="py-1 px-2">
                                <label class="custom-checkbox flex items-center mb-2">
                                    <input type="checkbox" class="absolute opacity-0"/>
                                    <span class="checkmark"></span>
                                    <span class="ml-7 text-sm text-gray-700">Đỏ</span>
                                </label>
                                <label class="custom-checkbox flex items-center mb-2">
                                    <input type="checkbox" class="absolute opacity-0"/>
                                    <span class="checkmark"></span>
                                    <span class="ml-7 text-sm text-gray-700">Hồng</span>
                                </label>
                                <label class="custom-checkbox flex items-center mb-2">
                                    <input type="checkbox" class="absolute opacity-0"/>
                                    <span class="checkmark"></span>
                                    <span class="ml-7 text-sm text-gray-700">Trắng</span>
                                </label>
                                <label class="custom-checkbox flex items-center mb-2">
                                    <input type="checkbox" class="absolute opacity-0"/>
                                    <span class="checkmark"></span>
                                    <span class="ml-7 text-sm text-gray-700">Vàng</span>
                                </label>
                                <label class="custom-checkbox flex items-center">
                                    <input type="checkbox" class="absolute opacity-0"/>
                                    <span class="checkmark"></span>
                                    <span class="ml-7 text-sm text-gray-700">Tím</span>
                                </label>
                            </div>
                        </div>
                    </div>
                    
                    <div class="relative group">
                        <button class="px-4 py-2 border border-gray-300 rounded-button text-sm font-medium text-gray-700 hover:border-primary hover:text-primary transition-colors flex items-center whitespace-nowrap">
                            Loại hoa
                            <i class="ri-arrow-down-s-line ml-2"></i>
                        </button>
                        <div class="absolute left-0 top-full mt-1 bg-white shadow-lg rounded-md p-2 w-48 hidden group-hover:block z-10">
                            <div class="py-1 px-2">
                                <label class="custom-checkbox flex items-center mb-2">
                                    <input type="checkbox" class="absolute opacity-0"/>
                                    <span class="checkmark"></span>
                                    <span class="ml-7 text-sm text-gray-700">Hoa hồng</span>
                                </label>
                                <label class="custom-checkbox flex items-center mb-2">
                                    <input type="checkbox" class="absolute opacity-0"/>
                                    <span class="checkmark"></span>
                                    <span class="ml-7 text-sm text-gray-700">Hoa lan</span>
                                </label>
                                <label class="custom-checkbox flex items-center mb-2">
                                    <input type="checkbox" class="absolute opacity-0"/>
                                    <span class="checkmark"></span>
                                    <span class="ml-7 text-sm text-gray-700">Hoa cúc</span>
                                </label>
                                <label class="custom-checkbox flex items-center mb-2">
                                    <input type="checkbox" class="absolute opacity-0"/>
                                    <span class="checkmark"></span>
                                    <span class="ml-7 text-sm text-gray-700">Hoa lily</span>
                                </label>
                                <label class="custom-checkbox flex items-center">
                                    <input type="checkbox" class="absolute opacity-0"/>
                                    <span class="checkmark"></span>
                                    <span class="ml-7 text-sm text-gray-700">Hoa tulip</span>
                                </label>
                            </div>
                        </div>
                    </div>
                    
                    <div class="relative group">
                        <button class="px-4 py-2 border border-gray-300 rounded-button text-sm font-medium text-gray-700 hover:border-primary hover:text-primary transition-colors flex items-center whitespace-nowrap">
                            Sắp xếp
                            <i class="ri-arrow-down-s-line ml-2"></i>
                        </button>
                        <div class="absolute right-0 top-full mt-1 bg-white shadow-lg rounded-md p-2 w-48 hidden group-hover:block z-10">
                            <div class="py-1">
                                <button class="block w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-primary/10 hover:text-primary rounded">Mới nhất</button>
                                <button class="block w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-primary/10 hover:text-primary rounded">Phổ biến nhất</button>
                                <button class="block w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-primary/10 hover:text-primary rounded">Giá: Thấp đến cao</button>
                                <button class="block w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-primary/10 hover:text-primary rounded">Giá: Cao đến thấp</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>


    <section class="py-12">
        <div class="container mx-auto px-4">
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

                <a href="https://www.facebook.com/trinhtopne" data-readdy="true" class="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow group">
                    <div class="aspect-square overflow-hidden">
                        <img src="https://readdy.ai/api/search-image?query=Beautiful%2520wedding%2520bouquet%2520collection%2520featuring%2520elegant%2520white%2520and%2520pastel%2520pink%2520roses%252C%2520peonies%252C%2520and%2520lilies%2520with%2520delicate%2520greenery.%2520The%2520bouquets%2520are%2520arranged%2520professionally%2520against%2520a%2520light%2520neutral%2520background.%2520Professional%2520studio%2520lighting%2520highlights%2520the%2520soft%2520textures%2520and%2520romantic%2520colors%2520of%2520the%2520bridal%2520flower%2520arrangements.&width=600&height=600&seq=24&orientation=squarish" alt="Bộ sưu tập hoa cưới" class="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"/>
                    </div>
                    <div class="p-6">
                        <div class="flex justify-between items-start mb-3">
                            <h3 class="font-semibold text-gray-900 text-xl">Bộ sưu tập hoa cưới</h3>
                            <span class="bg-primary/10 text-primary text-xs font-medium px-2 py-1 rounded">12 sản phẩm</span>
                        </div>
                        <p class="text-gray-600 mb-4">Những bó hoa cưới tinh tế, sang trọng với tông màu trắng, pastel nhẹ nhàng, được thiết kế đặc biệt cho ngày trọng đại của bạn.</p>
                        <div class="flex items-center justify-between">
                            <div class="flex text-yellow-400">
                                <i class="ri-star-fill"></i>
                                <i class="ri-star-fill"></i>
                                <i class="ri-star-fill"></i>
                                <i class="ri-star-fill"></i>
                                <i class="ri-star-half-fill"></i>
                                <span class="text-gray-500 text-sm ml-2">(28)</span>
                            </div>
                            <button class="text-primary font-medium flex items-center group-hover:underline whitespace-nowrap">
                                Xem chi tiết
                                <i class="ri-arrow-right-line ml-1"></i>
                            </button>
                        </div>
                    </div>
                </a>
                

                <a href="https://www.facebook.com/trinhtopne" data-readdy="true" class="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow group">
                    <div class="aspect-square overflow-hidden">
                        <img src="https://readdy.ai/api/search-image?query=Beautiful%2520birthday%2520flower%2520collection%2520featuring%2520vibrant%2520colorful%2520arrangements%2520with%2520roses%252C%2520gerbera%2520daisies%252C%2520and%2520sunflowers.%2520The%2520bouquets%2520are%2520arranged%2520professionally%2520against%2520a%2520light%2520neutral%2520background.%2520Professional%2520studio%2520lighting%2520highlights%2520the%2520bright%2520colors%2520and%2520festive%2520nature%2520of%2520the%2520birthday%2520flower%2520arrangements.&width=600&height=600&seq=25&orientation=squarish" alt="Bộ sưu tập hoa sinh nhật" class="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"/>
                    </div>
                    <div class="p-6">
                        <div class="flex justify-between items-start mb-3">
                            <h3 class="font-semibold text-gray-900 text-xl">Bộ sưu tập hoa sinh nhật</h3>
                            <span class="bg-primary/10 text-primary text-xs font-medium px-2 py-1 rounded">18 sản phẩm</span>
                        </div>
                        <p class="text-gray-600 mb-4">Những bó hoa rực rỡ, tươi vui với đa dạng màu sắc, mang đến niềm vui và lời chúc mừng ý nghĩa trong ngày sinh nhật đặc biệt.</p>
                        <div class="flex items-center justify-between">
                            <div class="flex text-yellow-400">
                                <i class="ri-star-fill"></i>
                                <i class="ri-star-fill"></i>
                                <i class="ri-star-fill"></i>
                                <i class="ri-star-fill"></i>
                                <i class="ri-star-fill"></i>
                                <span class="text-gray-500 text-sm ml-2">(42)</span>
                            </div>
                            <button class="text-primary font-medium flex items-center group-hover:underline whitespace-nowrap">
                                Xem chi tiết
                                <i class="ri-arrow-right-line ml-1"></i>
                            </button>
                        </div>
                    </div>
                </a>
                

                <a href="https://www.facebook.com/trinhtopne" data-readdy="true" class="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow group">
                    <div class="aspect-square overflow-hidden">
                        <img src="https://readdy.ai/api/search-image?query=Beautiful%2520romantic%2520flower%2520collection%2520featuring%2520elegant%2520red%2520roses%2520arrangements%2520in%2520various%2520styles%2520including%2520bouquets%2520and%2520heart-shaped%2520boxes.%2520The%2520arrangements%2520are%2520presented%2520professionally%2520against%2520a%2520light%2520neutral%2520background.%2520Professional%2520studio%2520lighting%2520highlights%2520the%2520rich%2520red%2520color%2520and%2520romantic%2520nature%2520of%2520the%2520love-themed%2520flower%2520arrangements.&width=600&height=600&seq=26&orientation=squarish" alt="Bộ sưu tập hoa tình yêu" class="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"/>
                    </div>
                    <div class="p-6">
                        <div class="flex justify-between items-start mb-3">
                            <h3 class="font-semibold text-gray-900 text-xl">Bộ sưu tập hoa tình yêu</h3>
                            <span class="bg-primary/10 text-primary text-xs font-medium px-2 py-1 rounded">15 sản phẩm</span>
                        </div>
                        <p class="text-gray-600 mb-4">Những bó hoa hồng đỏ lãng mạn, được thiết kế tinh tế để gửi gắm thông điệp yêu thương sâu sắc đến người thương yêu của bạn.</p>
                        <div class="flex items-center justify-between">
                            <div class="flex text-yellow-400">
                                <i class="ri-star-fill"></i>
                                <i class="ri-star-fill"></i>
                                <i class="ri-star-fill"></i>
                                <i class="ri-star-fill"></i>
                                <i class="ri-star-half-fill"></i>
                                <span class="text-gray-500 text-sm ml-2">(36)</span>
                            </div>
                            <button class="text-primary font-medium flex items-center group-hover:underline whitespace-nowrap">
                                Xem chi tiết
                                <i class="ri-arrow-right-line ml-1"></i>
                            </button>
                        </div>
                    </div>
                </a>
                

                <a href="https://www.facebook.com/trinhtopne" data-readdy="true" class="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow group">
                    <div class="aspect-square overflow-hidden">
                        <img src="https://readdy.ai/api/search-image?query=Beautiful%2520grand%2520opening%2520flower%2520collection%2520featuring%2520luxurious%2520arrangements%2520with%2520orchids%252C%2520lilies%252C%2520and%2520exotic%2520flowers%2520in%2520elegant%2520stands.%2520The%2520arrangements%2520are%2520large%2520and%2520impressive%252C%2520presented%2520professionally%2520against%2520a%2520light%2520neutral%2520background.%2520Professional%2520studio%2520lighting%2520highlights%2520the%2520vibrant%2520colors%2520and%2520prestigious%2520nature%2520of%2520the%2520business%2520celebration%2520flower%2520arrangements.&width=600&height=600&seq=27&orientation=squarish" alt="Bộ sưu tập hoa khai trương" class="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"/>
                    </div>
                    <div class="p-6">
                        <div class="flex justify-between items-start mb-3">
                            <h3 class="font-semibold text-gray-900 text-xl">Bộ sưu tập hoa khai trương</h3>
                            <span class="bg-primary/10 text-primary text-xs font-medium px-2 py-1 rounded">10 sản phẩm</span>
                        </div>
                        <p class="text-gray-600 mb-4">Những lẵng hoa hoành tráng, sang trọng với tông màu rực rỡ, mang ý nghĩa may mắn và thịnh vượng cho ngày khai trương.</p>
                        <div class="flex items-center justify-between">
                            <div class="flex text-yellow-400">
                                <i class="ri-star-fill"></i>
                                <i class="ri-star-fill"></i>
                                <i class="ri-star-fill"></i>
                                <i class="ri-star-fill"></i>
                                <i class="ri-star-line"></i>
                                <span class="text-gray-500 text-sm ml-2">(22)</span>
                            </div>
                            <button class="text-primary font-medium flex items-center group-hover:underline whitespace-nowrap">
                                Xem chi tiết
                                <i class="ri-arrow-right-line ml-1"></i>
                            </button>
                        </div>
                    </div>
                </a>
                

                <a href="hhttps://www.facebook.com/trinhtopne" data-readdy="true" class="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow group">
                    <div class="aspect-square overflow-hidden">
                        <img src="https://readdy.ai/api/search-image?query=Beautiful%2520sympathy%2520flower%2520collection%2520featuring%2520elegant%2520white%2520lily%2520and%2520chrysanthemum%2520arrangements%2520in%2520tasteful%2520designs.%2520The%2520arrangements%2520are%2520respectful%2520and%2520dignified%252C%2520presented%2520professionally%2520against%2520a%2520light%2520neutral%2520background.%2520Professional%2520studio%2520lighting%2520highlights%2520the%2520pure%2520white%2520colors%2520and%2520solemn%2520nature%2520of%2520the%2520sympathy%2520flower%2520arrangements.&width=600&height=600&seq=28&orientation=squarish" alt="Bộ sưu tập hoa chia buồn" class="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"/>
                    </div>
                    <div class="p-6">
                        <div class="flex justify-between items-start mb-3">
                            <h3 class="font-semibold text-gray-900 text-xl">Bộ sưu tập hoa chia buồn</h3>
                            <span class="bg-primary/10 text-primary text-xs font-medium px-2 py-1 rounded">8 sản phẩm</span>
                        </div>
                        <p class="text-gray-600 mb-4">Những vòng hoa trang nghiêm với tông màu trắng chủ đạo, thể hiện lòng thành kính và sự chia sẻ trong những giây phút đau buồn.</p>
                        <div class="flex items-center justify-between">
                            <div class="flex text-yellow-400">
                                <i class="ri-star-fill"></i>
                                <i class="ri-star-fill"></i>
                                <i class="ri-star-fill"></i>
                                <i class="ri-star-fill"></i>
                                <i class="ri-star-half-fill"></i>
                                <span class="text-gray-500 text-sm ml-2">(19)</span>
                            </div>
                            <button class="text-primary font-medium flex items-center group-hover:underline whitespace-nowrap">
                                Xem chi tiết
                                <i class="ri-arrow-right-line ml-1"></i>
                            </button>
                        </div>
                    </div>
                </a>
                

                <a href="https://www.facebook.com/trinhtopne" data-readdy="true" class="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow group">
                    <div class="aspect-square overflow-hidden">
                        <img src="https://readdy.ai/api/search-image?query=Beautiful%2520congratulations%2520flower%2520collection%2520featuring%2520bright%2520cheerful%2520arrangements%2520with%2520sunflowers%252C%2520gerbera%2520daisies%252C%2520and%2520yellow%2520roses.%2520The%2520arrangements%2520are%2520vibrant%2520and%2520uplifting%252C%2520presented%2520professionally%2520against%2520a%2520light%2520neutral%2520background.%2520Professional%2520studio%2520lighting%2520highlights%2520the%2520sunny%2520colors%2520and%2520celebratory%2520nature%2520of%2520the%2520congratulatory%2520flower%2520arrangements.&width=600&height=600&seq=29&orientation=squarish" alt="Bộ sưu tập hoa chúc mừng" class="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"/>
                    </div>
                    <div class="p-6">
                        <div class="flex justify-between items-start mb-3">
                            <h3 class="font-semibold text-gray-900 text-xl">Bộ sưu tập hoa chúc mừng</h3>
                            <span class="bg-primary/10 text-primary text-xs font-medium px-2 py-1 rounded">14 sản phẩm</span>
                        </div>
                        <p class="text-gray-600 mb-4">Những bó hoa tươi vui, rực rỡ với hướng dương, cúc và các loại hoa màu vàng, thể hiện niềm vui và lời chúc mừng thành công.</p>
                        <div class="flex items-center justify-between">
                            <div class="flex text-yellow-400">
                                <i class="ri-star-fill"></i>
                                <i class="ri-star-fill"></i>
                                <i class="ri-star-fill"></i>
                                <i class="ri-star-fill"></i>
                                <i class="ri-star-line"></i>
                                <span class="text-gray-500 text-sm ml-2">(31)</span>
                            </div>
                            <button class="text-primary font-medium flex items-center group-hover:underline whitespace-nowrap">
                                Xem chi tiết
                                <i class="ri-arrow-right-line ml-1"></i>
                            </button>
                        </div>
                    </div>
                </a>
                

                <a href="https://www.facebook.com/trinhtopne" data-readdy="true" class="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow group">
                    <div class="aspect-square overflow-hidden">
                        <img src="https://readdy.ai/api/search-image?query=Beautiful%2520seasonal%2520flower%2520collection%2520featuring%2520spring%2520arrangements%2520with%2520tulips%252C%2520daffodils%252C%2520and%2520hyacinths%2520in%2520fresh%2520pastel%2520colors.%2520The%2520arrangements%2520are%2520bright%2520and%2520seasonal%252C%2520presented%2520professionally%2520against%2520a%2520light%2520neutral%2520background.%2520Professional%2520studio%2520lighting%2520highlights%2520the%2520fresh%2520spring%2520colors%2520and%2520seasonal%2520nature%2520of%2520the%2520flower%2520arrangements.&width=600&height=600&seq=30&orientation=squarish" alt="Bộ sưu tập hoa theo mùa" class="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"/>
                    </div>
                    <div class="p-6">
                        <div class="flex justify-between items-start mb-3">
                            <h3 class="font-semibold text-gray-900 text-xl">Bộ sưu tập hoa theo mùa</h3>
                            <span class="bg-primary/10 text-primary text-xs font-medium px-2 py-1 rounded">16 sản phẩm</span>
                        </div>
                        <p class="text-gray-600 mb-4">Những bó hoa tươi theo mùa với tulip, thủy tiên và các loại hoa mùa xuân, mang đến không khí tươi mới và sức sống mới.</p>
                        <div class="flex items-center justify-between">
                            <div class="flex text-yellow-400">
                                <i class="ri-star-fill"></i>
                                <i class="ri-star-fill"></i>
                                <i class="ri-star-fill"></i>
                                <i class="ri-star-fill"></i>
                                <i class="ri-star-half-fill"></i>
                                <span class="text-gray-500 text-sm ml-2">(27)</span>
                            </div>
                            <button class="text-primary font-medium flex items-center group-hover:underline whitespace-nowrap">
                                Xem chi tiết
                                <i class="ri-arrow-right-line ml-1"></i>
                            </button>
                        </div>
                    </div>
                </a>
                

                <a href="https://www.facebook.com/trinhtopne" data-readdy="true" class="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow group">
                    <div class="aspect-square overflow-hidden">
                        <img src="https://readdy.ai/api/search-image?query=Beautiful%2520premium%2520flower%2520collection%2520featuring%2520luxury%2520arrangements%2520with%2520exotic%2520orchids%252C%2520premium%2520roses%252C%2520and%2520rare%2520flowers%2520in%2520elegant%2520designs.%2520The%2520arrangements%2520are%2520sophisticated%2520and%2520high-end%252C%2520presented%2520professionally%2520against%2520a%2520light%2520neutral%2520background.%2520Professional%2520studio%2520lighting%2520highlights%2520the%2520exquisite%2520details%2520and%2520premium%2520quality%2520of%2520the%2520luxury%2520flower%2520arrangements.&width=600&height=600&seq=31&orientation=squarish" alt="Bộ sưu tập hoa cao cấp" class="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"/>
                    </div>
                    <div class="p-6">
                        <div class="flex justify-between items-start mb-3">
                            <h3 class="font-semibold text-gray-900 text-xl">Bộ sưu tập hoa cao cấp</h3>
                            <span class="bg-primary/10 text-primary text-xs font-medium px-2 py-1 rounded">9 sản phẩm</span>
                        </div>
                        <p class="text-gray-600 mb-4">Những bó hoa cao cấp với lan hồ điệp, hồng Ecuador và các loại hoa quý hiếm, thể hiện đẳng cấp và sự tinh tế.</p>
                        <div class="flex items-center justify-between">
                            <div class="flex text-yellow-400">
                                <i class="ri-star-fill"></i>
                                <i class="ri-star-fill"></i>
                                <i class="ri-star-fill"></i>
                                <i class="ri-star-fill"></i>
                                <i class="ri-star-fill"></i>
                                <span class="text-gray-500 text-sm ml-2">(45)</span>
                            </div>
                            <button class="text-primary font-medium flex items-center group-hover:underline whitespace-nowrap">
                                Xem chi tiết
                                <i class="ri-arrow-right-line ml-1"></i>
                            </button>
                        </div>
                    </div>
                </a>
                

                <a href="https://www.facebook.com/trinhtopne" data-readdy="true" class="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow group">
                    <div class="aspect-square overflow-hidden">
                        <img src="https://readdy.ai/api/search-image?query=Beautiful%2520minimalist%2520flower%2520collection%2520featuring%2520simple%2520elegant%2520arrangements%2520with%2520single%2520variety%2520flowers%2520like%2520calla%2520lilies%252C%2520roses%252C%2520or%2520tulips%2520in%2520clean%2520modern%2520designs.%2520The%2520arrangements%2520are%2520sleek%2520and%2520contemporary%252C%2520presented%2520professionally%2520against%2520a%2520light%2520neutral%2520background.%2520Professional%2520studio%2520lighting%2520highlights%2520the%2520clean%2520lines%2520and%2520modern%2520aesthetic%2520of%2520the%2520minimalist%2520flower%2520arrangements.&width=600&height=600&seq=32&orientation=squarish" alt="Bộ sưu tập hoa tối giản" class="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"/>
                    </div>
                    <div class="p-6">
                        <div class="flex justify-between items-start mb-3">
                            <h3 class="font-semibold text-gray-900 text-xl">Bộ sưu tập hoa tối giản</h3>
                            <span class="bg-primary/10 text-primary text-xs font-medium px-2 py-1 rounded">11 sản phẩm</span>
                        </div>
                        <p class="text-gray-600 mb-4">Những bó hoa đơn giản, tinh tế với một loại hoa chủ đạo như calla lily, hồng hoặc tulip, thể hiện phong cách hiện đại, tối giản.</p>
                        <div class="flex items-center justify-between">
                            <div class="flex text-yellow-400">
                                <i class="ri-star-fill"></i>
                                <i class="ri-star-fill"></i>
                                <i class="ri-star-fill"></i>
                                <i class="ri-star-fill"></i>
                                <i class="ri-star-line"></i>
                                <span class="text-gray-500 text-sm ml-2">(23)</span>
                            </div>
                            <button class="text-primary font-medium flex items-center group-hover:underline whitespace-nowrap">
                                Xem chi tiết
                                <i class="ri-arrow-right-line ml-1"></i>
                            </button>
                        </div>
                    </div>
                </a>
            </div>
            
            <div class="flex justify-center mt-12">
                <nav class="flex items-center">
                    <button class="w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 text-gray-500 hover:border-primary hover:text-primary transition-colors mr-2">
                        <i class="ri-arrow-left-s-line"></i>
                    </button>
                    <button class="w-10 h-10 flex items-center justify-center rounded-full bg-primary text-white font-medium mx-1">1</button>
                    <button class="w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 text-gray-700 hover:border-primary hover:text-primary transition-colors mx-1">2</button>
                    <button class="w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 text-gray-700 hover:border-primary hover:text-primary transition-colors mx-1">3</button>
                    <span class="mx-2 text-gray-500">...</span>
                    <button class="w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 text-gray-700 hover:border-primary hover:text-primary transition-colors mx-1">8</button>
                    <button class="w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 text-gray-500 hover:border-primary hover:text-primary transition-colors ml-2">
                        <i class="ri-arrow-right-s-line"></i>
                    </button>
                </nav>
            </div>
        </div>
    </section>
    
    <section class="py-16 bg-gray-50">
        <div class="container mx-auto px-4">
            <div class="text-center mb-12">
                <h2 class="text-3xl font-bold text-gray-900 mb-4">Bộ sưu tập nổi bật</h2>
                <p class="text-gray-600 max-w-2xl mx-auto">Khám phá những bộ sưu tập hoa được yêu thích nhất và được đánh giá cao từ khách hàng của chúng tôi.</p>
            </div>
            
              <div class="relative overflow-hidden rounded-xl" style={{ backgroundImage: "url('https://readdy.ai/api/search-image?query=Beautiful%2520romantic%2520flower%2520collection%2520featuring%2520elegant%2520red%2520and%2520pink%2520roses%2520in%2520various%2520arrangements%2520including%2520bouquets%2520and%2520heart-shaped%2520boxes.%2520The%2520image%2520has%2520a%2520soft%252C%2520romantic%2520atmosphere%2520with%2520professional%2520lighting%2520highlighting%2520the%2520vibrant%2520colors%2520against%2520a%2520light%2520background.%2520The%2520composition%2520is%2520perfect%2520for%2520a%2520Valentine%2527s%2520Day%2520or%2520romantic%2520flower%2520collection%2520promotional%2520banner.&width=1200&height=500&seq=33&orientation=landscape')", backgroundSize: 'cover', backgroundPosition: 'center'}}>
                <div class="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary/40"></div>
                <div class="relative p-8 md:p-12 flex flex-col md:flex-row items-center justify-between">
                    <div class="text-white mb-8 md:mb-0 md:max-w-xl">
                        <h2 class="text-3xl md:text-4xl font-bold mb-4">Bộ sưu tập Valentine</h2>
                        <p class="text-white/90 text-lg mb-6">Khám phá bộ sưu tập hoa tình yêu đặc biệt của chúng tôi, được thiết kế riêng cho ngày Valentine với những bó hoa hồng đỏ lãng mạn và các thiết kế độc đáo.</p>
                        <a href="https://readdy.ai/home/622daf02-81f5-4797-a970-4073e545c2a2/a2779329-a0ab-4336-8c4e-df35e9c72c53" data-readdy="true" class="bg-white text-primary px-6 py-3 rounded-button font-medium hover:bg-gray-100 transition-colors inline-block whitespace-nowrap">Xem bộ sưu tập</a>
                    </div>
                    <div class="bg-white/90 rounded-lg p-6 w-full md:w-auto">
                        <div class="text-center">
                            <h3 class="text-xl font-bold text-gray-900 mb-2">Ưu đãi đặc biệt</h3>
                            <p class="text-gray-600 mb-3">Giảm giá 15% cho tất cả các sản phẩm trong bộ sưu tập Valentine từ ngày 1-14 tháng 2.</p>
                            <div class="text-primary font-bold text-2xl">Mã: LOVE15</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    
    <section class="py-16 bg-white">
        <div class="container mx-auto px-4">
            <div class="max-w-3xl mx-auto text-center">
                <h2 class="text-3xl font-bold text-gray-900 mb-4">Đăng ký nhận thông tin</h2>
                <p class="text-gray-600 mb-8">Đăng ký để nhận thông tin về các bộ sưu tập mới và ưu đãi đặc biệt từ Trình Tóp Shop.</p>
                <form class="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
                    <input type="email" placeholder="Email của bạn" class="flex-1 px-4 py-3 rounded-button border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"/>
                    <button type="submit" class="bg-primary text-white px-6 py-3 rounded-button font-medium hover:bg-primary/90 transition-colors whitespace-nowrap">Đăng ký</button>
                </form>      
            </div>
        </div>
    </section>
</main>
  );
}

export default SuuTap; 