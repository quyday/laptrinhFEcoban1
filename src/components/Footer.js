import React from 'react';

const Footer = () => {
  return (
          <footer class="bg-gray-900 text-white pt-16 pb-8">
        <div class="container mx-auto px-4">
            <div class="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
                <div>
                    <a href="#" class="text-3xl font-['Pacifico'] text-white mb-6 inline-block">logo</a>
                    <p class="text-gray-400 mb-6">Chúng tôi mang đến những bó hoa tươi nhất, được thiết kế tinh tế cho
                        mọi dịp đặc biệt trong cuộc sống của bạn.</p>
                    <div class="flex space-x-4">
                        <a href="#"
                            class="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-primary transition-colors">
                            <i class="ri-facebook-fill text-white"></i>
                        </a>
                        <a href="#"
                            class="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-primary transition-colors">
                            <i class="ri-instagram-line text-white"></i>
                        </a>
                        <a href="#"
                            class="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-primary transition-colors">
                            <i class="ri-youtube-line text-white"></i>
                        </a>
                        <a href="#"
                            class="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-primary transition-colors">
                            <i class="ri-tiktok-line text-white"></i>
                        </a>
                    </div>
                </div>
                <div>
                    <h3 class="text-lg font-semibold mb-6">Danh mục</h3>
                    <ul class="space-y-3">
                        <li><a href="#" class="text-gray-400 hover:text-white transition-colors">Hoa sinh nhật</a></li>
                        <li><a href="#" class="text-gray-400 hover:text-white transition-colors">Hoa cưới</a></li>
                        <li><a href="#" class="text-gray-400 hover:text-white transition-colors">Hoa tình yêu</a></li>
                        <li><a href="#" class="text-gray-400 hover:text-white transition-colors">Hoa chia buồn</a></li>
                        <li><a href="#" class="text-gray-400 hover:text-white transition-colors">Hoa khai trương</a>
                        </li>
                        <li><a href="#" class="text-gray-400 hover:text-white transition-colors">Hoa chúc mừng</a></li>
                    </ul>
                </div>
                <div>
                    <h3 class="text-lg font-semibold mb-6">Thông tin</h3>
                    <ul class="space-y-3">
                        <li><a href="#" class="text-gray-400 hover:text-white transition-colors">Về chúng tôi</a></li>
                        <li><a href="#" class="text-gray-400 hover:text-white transition-colors">Chính sách giao
                                hàng</a></li>
                        <li><a href="#" class="text-gray-400 hover:text-white transition-colors">Chính sách đổi trả</a>
                        </li>
                        <li><a href="#" class="text-gray-400 hover:text-white transition-colors">Điều khoản dịch vụ</a>
                        </li>
                        <li><a href="#" class="text-gray-400 hover:text-white transition-colors">Chính sách bảo mật</a>
                        </li>
                        <li><a href="#" class="text-gray-400 hover:text-white transition-colors">Liên hệ</a></li>
                    </ul>
                </div>
                <div>
                    <h3 class="text-lg font-semibold mb-6">Liên hệ</h3>
                    <ul class="space-y-3">
                        <li class="flex items-start">
                            <div class="w-5 h-5 flex items-center justify-center text-primary mt-1 mr-3">
                                <i class="ri-map-pin-line"></i>
                            </div>
                            <span class="text-gray-400">Cung Kiệm - Nhân Hòa - Quế Võ - Bắc Ninh</span>
                        </li>
                        <li class="flex items-start">
                            <div class="w-5 h-5 flex items-center justify-center text-primary mt-1 mr-3">
                                <i class="ri-phone-line"></i>
                            </div>
                            <span class="text-gray-400">+84 396301835</span>
                        </li>
                        <li class="flex items-start">
                            <div class="w-5 h-5 flex items-center justify-center text-primary mt-1 mr-3">
                                <i class="ri-mail-line"></i>
                            </div>
                            <span class="text-gray-400">trinhtop.bacninh.lic@gmail.com</span>
                        </li>
                        <li class="flex items-start">
                            <div class="w-5 h-5 flex items-center justify-center text-primary mt-1 mr-3">
                                <i class="ri-time-line"></i>
                            </div>
                            <span class="text-gray-400">8:00 - 21:00, Thứ Hai - Chủ Nhật</span>
                        </li>
                    </ul>
                    <div class="mt-6">
                        <h4 class="text-sm font-medium mb-3">Phương thức thanh toán</h4>
                        <div class="flex space-x-3">
                            <div class="w-10 h-6 flex items-center justify-center bg-white rounded">
                                <i class="ri-visa-fill text-blue-800 text-lg"></i>
                            </div>
                            <div class="w-10 h-6 flex items-center justify-center bg-white rounded">
                                <i class="ri-mastercard-fill text-red-600 text-lg"></i>
                            </div>
                            <div class="w-10 h-6 flex items-center justify-center bg-white rounded">
                                <i class="ri-paypal-fill text-blue-600 text-lg"></i>
                            </div>
                            <div class="w-10 h-6 flex items-center justify-center bg-white rounded">
                                <i class="ri-bank-card-fill text-gray-700 text-lg"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="border-t border-gray-800 pt-8">
                <div class="flex flex-col md:flex-row justify-between items-center">
                    <p class="text-gray-500 text-sm mb-4 md:mb-0">© 2025 Trình Tóp - Đã đăng ký bản quyền.</p>
                    <div class="flex space-x-6">
                        <a href="#" class="text-gray-500 hover:text-white text-sm transition-colors">Điều khoản</a>
                        <a href="#" class="text-gray-500 hover:text-white text-sm transition-colors">Bảo mật</a>
                        <a href="#" class="text-gray-500 hover:text-white text-sm transition-colors">Cookie</a>
                    </div>
                </div>
            </div>
        </div>
    </footer>
  );
};

export default Footer;