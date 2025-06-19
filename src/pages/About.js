import React, { useState, useEffect, useRef } from 'react';
import './About.css';

function About() {
  // Refs for cursor elements
  const cursorRef = useRef(null);
  const cursorTrailRef = useRef(null);
  const petalsContainerRef = useRef(null);

  // State for form
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  // Cursor effects
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (cursorRef.current && cursorTrailRef.current) {
        cursorRef.current.style.left = e.clientX + 'px';
        cursorRef.current.style.top = e.clientY + 'px';
        
        setTimeout(() => {
          cursorTrailRef.current.style.left = e.clientX + 'px';
          cursorTrailRef.current.style.top = e.clientY + 'px';
        }, 100);
      }
    };

    // Add ripple effect to buttons
    const handleButtonClick = (e) => {
      const button = e.currentTarget;
      const ripple = document.createElement('span');
      ripple.classList.add('ripple');
      button.appendChild(ripple);
      
      const x = e.clientX - button.getBoundingClientRect().left;
      const y = e.clientY - button.getBoundingClientRect().top;
      
      ripple.style.left = x + 'px';
      ripple.style.top = y + 'px';
      
      setTimeout(() => {
        ripple.remove();
      }, 600);
    };

    const buttons = document.querySelectorAll('button, a');
    buttons.forEach(button => {
      button.addEventListener('click', handleButtonClick);
    });

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      buttons.forEach(button => {
        button.removeEventListener('click', handleButtonClick);
      });
    };
  }, []);

  // Scroll animations
  useEffect(() => {
    const fadeElements = document.querySelectorAll('.fade-in');
    
    const fadeObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          fadeObserver.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1
    });
    
    fadeElements.forEach(element => {
      fadeObserver.observe(element);
    });

    // Count up animation
    const countElements = document.querySelectorAll('.count-up');
    
    const countObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const target = parseInt(entry.target.getAttribute('data-target'));
          const duration = 2000;
          const increment = target / (duration / 16);
          let current = 0;
          
          const timer = setInterval(() => {
            current += increment;
            entry.target.textContent = Math.floor(current);
            
            if (current >= target) {
              entry.target.textContent = target;
              clearInterval(timer);
            }
          }, 16);
          
          countObserver.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.5
    });
    
    countElements.forEach(element => {
      countObserver.observe(element);
    });

    return () => {
      fadeObserver.disconnect();
      countObserver.disconnect();
    };
  }, []);

  // Floating petals
  useEffect(() => {
    if (petalsContainerRef.current) {
      const createPetal = () => {
        const petal = document.createElement('div');
        petal.classList.add('floating-petal');
        
        const size = Math.random() * 20 + 20;
        petal.style.width = `${size}px`;
        petal.style.height = `${size}px`;
        
        const startPosX = Math.random() * 100;
        petal.style.left = `${startPosX}%`;
        petal.style.top = '-5%';
        
        const rotation = Math.random() * 360;
        petal.style.transform = `rotate(${rotation}deg)`;
        
        petalsContainerRef.current.appendChild(petal);
        
        const duration = Math.random() * 10 + 10;
        const delay = Math.random() * 5;
        
        petal.style.animation = `floatDown ${duration}s linear ${delay}s infinite`;
        
        const keyframes = `
          @keyframes floatDown {
            0% {
              transform: translate(0, 0) rotate(${rotation}deg);
              opacity: 0;
            }
            10% {
              opacity: 0.8;
            }
            90% {
              opacity: 0.8;
            }
            100% {
              transform: translate(${Math.random() * 200 - 100}px, ${window.innerHeight}px) rotate(${rotation + 360}deg);
              opacity: 0;
            }
          }
        `;
        
        const style = document.createElement('style');
        style.innerHTML = keyframes;
        document.head.appendChild(style);
      };

      for (let i = 0; i < 15; i++) {
        createPetal();
      }
    }
  }, []);

  // Form interactions
  const handleCheckboxChange = (e) => {
    setIsSubscribed(e.target.checked);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    setTimeout(() => {
      setShowSuccessMessage(true);
      setIsSubmitting(false);
      e.target.reset();
      
      setTimeout(() => {
        setShowSuccessMessage(false);
      }, 5000);
    }, 1500);
  };

  // Card interactions
  useEffect(() => {
    const tiltCards = document.querySelectorAll('.tilt-card');
    
    const handleCardMouseMove = (e) => {
      const card = e.currentTarget;
      const cardRect = card.getBoundingClientRect();
      const x = e.clientX - cardRect.left;
      const y = e.clientY - cardRect.top;
      
      const centerX = cardRect.width / 2;
      const centerY = cardRect.height / 2;
      
      const deltaX = (x - centerX) / 20;
      const deltaY = (y - centerY) / 20;
      
      card.style.transform = `perspective(1000px) rotateX(${-deltaY}deg) rotateY(${deltaX}deg)`;
    };

    const handleCardMouseLeave = (e) => {
      e.currentTarget.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
    };

    tiltCards.forEach(card => {
      card.addEventListener('mousemove', handleCardMouseMove);
      card.addEventListener('mouseleave', handleCardMouseLeave);
    });

    return () => {
      tiltCards.forEach(card => {
        card.removeEventListener('mousemove', handleCardMouseMove);
        card.removeEventListener('mouseleave', handleCardMouseLeave);
      });
    };
  }, []);

  return (
    <div className="about">
      <div className="custom-cursor" ref={cursorRef}></div>
      <div className="cursor-trail" ref={cursorTrailRef}></div>
      <main>
        <section class="parallax-section relative h-[500px] overflow-hidden"  style={{backgroundImage: "url('/images/hoa.png')", backgroundSize: 'cover', backgroundPosition: 'center'}}>
        <div class="absolute inset-0 bg-black bg-opacity-40"></div>
        
        <div class="container mx-auto px-4 h-full flex items-center relative z-10">
            <div class="max-w-2xl fade-in">
                <h1 class="text-white text-5xl font-bold mb-6">Câu chuyện nở hoa của chúng tôi</h1>
                <p class="text-white text-xl mb-8">Từ một cửa hàng nhỏ đến điểm đến yêu thích của những người yêu hoa, hành trình của chúng tôi luôn tràn đầy đam mê, sáng tạo và hương thơm ngọt ngào của hoa tươi.</p>
                <button class="bg-primary hover:bg-opacity-90 text-white px-8 py-3 rounded-button font-medium transition-all duration-300 transform hover:scale-105 !whitespace-nowrap">Khám phá câu chuyện của chúng tôi</button>
            </div>
        </div>
        
        <div id="petals-container" class="absolute inset-0 pointer-events-none"></div>
    </section>

    <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-16 fade-in">
                <h2 className="text-4xl font-bold mb-6">Câu chuyện nở hoa của chúng tôi</h2>
                <p className="text-gray-600 text-lg">Từ một cửa hàng nhỏ đến điểm đến yêu thích của những người yêu hoa, hành trình của chúng tôi luôn tràn đầy đam mê, sáng tạo và hương thơm ngọt ngào của hoa tươi.</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-16 items-center">
                <div className="fade-in">
                    <img src="https://readdy.ai/api/search-image?query=elegant%2520female%2520florist%2520arranging%2520beautiful%2520bouquet%2520in%2520stylish%2520flower%2520shop%252C%2520surrounded%2520by%2520fresh%2520flowers%252C%2520soft%2520natural%2520lighting%252C%2520professional%2520photography%252C%2520high%2520resolution%252C%2520commercial%2520quality%252C%2520artistic%2520composition%252C%2520shallow%2520depth%2520of%2520field&width=600&height=800&seq=story1&orientation=portrait" alt="Florist creating arrangement" className="rounded-lg shadow-xl w-full h-auto object-cover transform transition-transform duration-500 hover:scale-105"/>
                </div>
                
                <div className="space-y-8 fade-in">
                    <div>
                        <h3 className="text-2xl font-bold mb-4">Khởi đầu của chúng tôi</h3>
                        <p className="text-gray-600">Được thành lập năm 2010 bởi Elizabeth Bloom, cửa hàng của chúng tôi bắt đầu từ một dự án nhỏ đầy đam mê...</p>
                    </div>
                    
                    <div>
                        <h3 className="text-2xl font-bold mb-4">Lớn lên cùng tình yêu hoa</h3>
                        <p className="text-gray-600">Nhờ sự lan tỏa về những bó hoa độc đáo và dịch vụ tận tâm, chúng tôi đã mở rộng đến địa điểm hiện tại vào năm 2015. Ngày nay, đội ngũ nghệ nhân tài năng của chúng tôi tiếp tục di sản của Elizabeth, mang đến vẻ đẹp và niềm vui cho mọi dịp với những bó hoa thủ công tỉ mỉ.</p>
                    </div>
                    
                    <div>
                        <h3 className="text-2xl font-bold mb-4">Triết lý của chúng tôi</h3>
                        <p className="text-gray-600">Chúng tôi tin rằng hoa là cách thiên nhiên tôn vinh những khoảnh khắc của cuộc sống. Mỗi bông hoa đều được chọn lọc kỹ càng về độ tươi và chất lượng, mỗi bó hoa là một tác phẩm nghệ thuật chứa đựng cảm xúc.</p>
                    </div>
                </div>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20">
                <div className="text-center fade-in">
                    <div className="text-primary text-5xl font-bold mb-2">
                        <span className="count-up" data-target="15">0</span>+
                    </div>
                    <p className="text-gray-600">Năm kinh nghiệm</p>
                </div>
                
                <div className="text-center fade-in">
                    <div className="text-primary text-5xl font-bold mb-2">
                        <span className="count-up" data-target="10000">0</span>+
                    </div>
                    <p className="text-gray-600">Khách hàng hài lòng</p>
                </div>
                
                <div className="text-center fade-in">
                    <div className="text-primary text-5xl font-bold mb-2">
                        <span className="count-up" data-target="500">0</span>+
                    </div>
                    <p className="text-gray-600">Loại hoa đa dạng</p>
                </div>
                
                <div className="text-center fade-in">
                    <div className="text-primary text-5xl font-bold mb-2">
                        <span className="count-up" data-target="25">0</span>
                    </div>
                    <p className="text-gray-600">Nghệ nhân cắm hoa</p>
                </div>
            </div>
        </div>
    </section>


    <section className="py-20">
        <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-16 fade-in">
                <h2 className="text-4xl font-bold mb-6">Giá trị cốt lõi của chúng tôi</h2>
                <p className="text-gray-600 text-lg">Những nguyên tắc này định hướng mọi hoạt động của chúng tôi, từ việc chọn hoa tươi nhất đến tạo ra bó hoa hoàn hảo cho khoảnh khắc đặc biệt của bạn.</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
                <div className="value-card relative h-80 rounded-lg shadow-lg fade-in">
                    <div className="value-card-front bg-white p-8 rounded-lg h-full flex flex-col items-center justify-center text-center">
                        <div className="w-16 h-16 flex items-center justify-center text-primary mb-6">
                            <i className="ri-heart-line text-4xl"></i>
                        </div>
                        <h3 className="text-2xl font-bold mb-4">Đam mê & Sáng tạo</h3>
                        <p className="text-gray-600">Chúng tôi đặt cả trái tim vào từng bó hoa, mang đến sự sáng tạo và nghệ thuật cho mỗi thiết kế.</p>
                    </div>
                    {/* <div className="value-card-back bg-primary text-white p-8 rounded-lg h-full flex flex-col items-center justify-center text-center">
                        <p className="text-lg">"Flowers are the music of the ground. From earth's lips spoken without sound."</p>
                        <p className="mt-4 font-medium">- Edwin Curran</p>
                    </div> */}
                </div>
                
                <div className="value-card relative h-80 rounded-lg shadow-lg fade-in">
                    <div className="value-card-front bg-white p-8 rounded-lg h-full flex flex-col items-center justify-center text-center">
                        <div className="w-16 h-16 flex items-center justify-center text-primary mb-6">
                            <i className="ri-leaf-line text-4xl"></i>
                        </div>
                        <h3 className="text-2xl font-bold mb-4">Chất lượng & Tươi mới</h3>
                        <p className="text-gray-600">Chúng tôi chỉ chọn những bông hoa tươi và đẹp nhất để đảm bảo bó hoa của bạn luôn rực rỡ lâu dài.</p>
                    </div>
                    {/* <div className="value-card-back bg-primary text-white p-8 rounded-lg h-full flex flex-col items-center justify-center text-center">
                        <p className="text-lg">"The earth laughs in flowers."</p>
                        <p className="mt-4 font-medium">- Ralph Waldo Emerson</p>
                    </div> */}
                </div>
                
                <div className="value-card relative h-80 rounded-lg shadow-lg fade-in">
                    <div className="value-card-front bg-white p-8 rounded-lg h-full flex flex-col items-center justify-center text-center">
                        <div className="w-16 h-16 flex items-center justify-center text-primary mb-6">
                            <i className="ri-earth-line text-4xl"></i>
                        </div>
                        <h3 className="text-2xl font-bold mb-4">Phát triển bền vững</h3>
                        <p className="text-gray-600">Chúng tôi cam kết thực hiện các hoạt động thân thiện với môi trường, ưu tiên nguồn hoa địa phương và sử dụng bao bì phân hủy sinh học.</p>
                    </div>
                    {/* <div className="value-card-back bg-primary text-white p-8 rounded-lg h-full flex flex-col items-center justify-center text-center">
                        <p className="text-lg">"Where flowers bloom, so does hope."</p>
                        <p className="mt-4 font-medium">- Lady Bird Johnson</p>
                    </div> */}
                </div>
            </div>
        </div>
    </section>


    <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-16 fade-in">
                <h2 className="text-4xl font-bold mb-6">Gặp gỡ nghệ nhân cắm hoa của chúng tôi</h2>
                <p className="text-gray-600 text-lg">Những đôi tay tài hoa và khối óc sáng tạo đứng sau các tác phẩm hoa tuyệt đẹp.</p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="tilt-card bg-white rounded-lg shadow-lg overflow-hidden fade-in">
                    <div className="p-6 text-center">
                        <div className="team-image-border w-40 h-40 mx-auto mb-6">
                            <img src="./images/trinhtop.jpg" alt="Elizabeth Bloom" className="w-full h-full object-cover rounded-full"/>
                        </div>
                        <h3 className="text-xl font-bold mb-2">Nguyễn Trọng Trình </h3>
                        <p className="text-primary mb-4">Người sáng lập & Giám đốc sáng tạo</p>
                        <p className="text-gray-600 mb-6">Với hơn 20 năm kinh nghiệm, Trình Tóp Shop mang đến tầm nhìn nghệ thuật và chuyên môn hoa cho mọi tác phẩm.</p>
                        <div className="flex justify-center space-x-4">
                            <a href="#" className="social-icon w-8 h-8 flex items-center justify-center text-gray-500 hover:text-primary">
                                <i className="ri-instagram-line"></i>
                            </a>
                            <a href="#" className="social-icon w-8 h-8 flex items-center justify-center text-gray-500 hover:text-primary">
                                <i className="ri-facebook-circle-line"></i>
                            </a>
                            <a href="#" className="social-icon w-8 h-8 flex items-center justify-center text-gray-500 hover:text-primary">
                                <i className="ri-linkedin-box-line"></i>
                            </a>
                        </div>
                    </div>
                </div>
                
                <div className="tilt-card bg-white rounded-lg shadow-lg overflow-hidden fade-in">
                    <div className="p-6 text-center">
                        <div className="team-image-border w-40 h-40 mx-auto mb-6">
                            <img src="./images/ngocanh.jpg" alt="James Chen" className="w-full h-full object-cover rounded-full"/>
                        </div>
                        <h3 className="text-xl font-bold mb-2">Nguyễn Ngọc Anh </h3>
                        <p className="text-primary mb-4">Chuyên gia thiết kế hoa chính</p>
                        <p className="text-gray-600 mb-6">Nguyễn Ngọc Anh chuyên về các thiết kế hiện đại và đã giành nhiều giải thưởng cho các tác phẩm sáng tạo.</p>
                        <div className="flex justify-center space-x-4">
                            <a href="#" className="social-icon w-8 h-8 flex items-center justify-center text-gray-500 hover:text-primary">
                                <i className="ri-instagram-line"></i>
                            </a>
                            <a href="#" className="social-icon w-8 h-8 flex items-center justify-center text-gray-500 hover:text-primary">
                                <i className="ri-facebook-circle-line"></i>
                            </a>
                            <a href="#" className="social-icon w-8 h-8 flex items-center justify-center text-gray-500 hover:text-primary">
                                <i className="ri-pinterest-line"></i>
                            </a>
                        </div>
                    </div>
                </div>
                
                <div className="tilt-card bg-white rounded-lg shadow-lg overflow-hidden fade-in">
                    <div className="p-6 text-center">
                        <div className="team-image-border w-40 h-40 mx-auto mb-6">
                                <img src="./images/congquy.jpg" alt="Sophia Johnson" className="w-full h-full object-cover rounded-full"/>
                            </div>
                        <h3 className="text-xl font-bold mb-2">Nguyễn Công Quý</h3>
                        <p className="text-primary mb-4">Chuyên gia hoa cưới</p>
                        <p className="text-gray-600 mb-6">Công QuýQuý đã thiết kế cho hơn 500 đám cưới, biến ý tưởng của mỗi cặp đôi thành hiện thực bằng hoa tươi.</p>
                        <div className="flex justify-center space-x-4">
                            <a href="#" className="social-icon w-8 h-8 flex items-center justify-center text-gray-500 hover:text-primary">
                                <i className="ri-instagram-line"></i>
                            </a>
                            <a href="#" className="social-icon w-8 h-8 flex items-center justify-center text-gray-500 hover:text-primary">
                                <i className="ri-facebook-circle-line"></i>
                            </a>
                            <a href="#" className="social-icon w-8 h-8 flex items-center justify-center text-gray-500 hover:text-primary">
                                <i className="ri-twitter-line"></i>
                            </a>
                        </div>
                    </div>
                </div>
                
                <div className="tilt-card bg-white rounded-lg shadow-lg overflow-hidden fade-in">
                    <div className="p-6 text-center">
                        <div className="team-image-border w-40 h-40 mx-auto mb-6">
                                <img src="./images/sonttung.jpg" alt="Miguel Rodriguez" className="w-full h-full object-cover rounded-full"/>
                            </div>
                        <h3 className="text-xl font-bold mb-2">Sơn Tùng MTP</h3>
                        <p className="text-primary mb-4">KOLKOL</p>
                        <p className="text-gray-600 mb-6">Với độ nổi tiếng của mình, Sơn Tùng MTP sẽ quảng bá cho Trình Tóp Shop, mang đến nhiều khách hàng mới.</p>
                        <div className="flex justify-center space-x-4">
                            <a href="#" className="social-icon w-8 h-8 flex items-center justify-center text-gray-500 hover:text-primary">
                                <i className="ri-instagram-line"></i>
                            </a>
                            <a href="#" className="social-icon w-8 h-8 flex items-center justify-center text-gray-500 hover:text-primary">
                                <i className="ri-linkedin-box-line"></i>
                            </a>
                            <a href="#" className="social-icon w-8 h-8 flex items-center justify-center text-gray-500 hover:text-primary">
                                <i className="ri-youtube-line"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>


    <section className="py-20">
        <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-16 fade-in">
                <h2 className="text-4xl font-bold mb-6">Ghé thăm thiên đường hoa của chúng tôi</h2>
                <p className="text-gray-600 text-lg">Bước vào thế giới ngập tràn hương hoa và khám phá những bó hoa hoàn hảo cho mọi dịp.</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-16">
                <div className="fade-in">
                    <div className="rounded-lg overflow-hidden shadow-xl h-[400px] relative">
                        <div style={{
                            backgroundImage: "url('https://public.readdy.ai/gen_page/map_placeholder_1280x720.png')",
                            backgroundSize: 'cover',
                            backgroundPosition: 'center'
                        }} className="w-full h-full"></div>
                        <div className="absolute top-4 left-4 bg-white p-3 rounded-lg shadow-md">
                            <div className="w-8 h-8 flex items-center justify-center text-primary">
                                <i className="ri-map-pin-line text-xl"></i>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="space-y-8 fade-in">
                    <div>
                        <h3 className="text-2xl font-bold mb-4">Giờ mở cửa</h3>
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <p className="font-medium">Thứ Hai - Thứ Sáu</p>
                                <p className="text-gray-600">9:00 AM - 7:00 PM</p>
                            </div>
                            <div>
                                <p className="font-medium">Thứ Bảy</p>
                                <p className="text-gray-600">8:00 AM - 6:00 PM</p>
                            </div>
                            <div>
                                <p className="font-medium">Chủ Nhật</p>
                                <p className="text-gray-600">10:00 AM - 4:00 PM</p>
                            </div>
                            <div>
                                <p className="font-medium">Ngày lễ</p>
                                <p className="text-gray-600">Áp dụng giờ đặc biệt</p>
                            </div>
                        </div>
                    </div>
                    
                    <div>
                        <h3 className="text-2xl font-bold mb-4">Thông tin liên hệ</h3>
                        <div className="space-y-4">
                            <div className="flex items-start">
                                <div className="w-10 h-10 flex items-center justify-center text-primary mr-4">
                                    <i className="ri-map-pin-line text-xl"></i>
                                </div>
                                <div>
                                    <p className="font-medium">Địa chỉ</p>
                                    <p className="text-gray-600">Cung Kiệm - Nhân Hòa - Quế Võ - Bắc Ninh</p>
                                </div>
                            </div>
                            
                            <div className="flex items-start">
                                <div className="w-10 h-10 flex items-center justify-center text-primary mr-4">
                                    <i className="ri-phone-line text-xl"></i>
                                </div>
                                <div>
                                    <p className="font-medium">Điện thoại</p>
                                    <p className="text-gray-600">(039) 630 1835</p>
                                </div>
                            </div>
                            
                            <div className="flex items-start">
                                <div className="w-10 h-10 flex items-center justify-center text-primary mr-4">
                                    <i className="ri-mail-line text-xl"></i>
                                </div>
                                <div>
                                    <p className="font-medium">Email</p>
                                    <p className="text-gray-600">Trinhtop.bacninh.lic@gmail.com</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div>
                        <h3 className="text-2xl font-bold mb-4">Dịch vụ</h3>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="flex items-center">
                                <div className="w-6 h-6 flex items-center justify-center text-primary mr-2">
                                    <i className="ri-check-line"></i>
                                </div>
                                <p className="text-gray-600">Chọn Hoa</p>
                            </div>
                            
                            <div className="flex items-center">
                                <div className="w-6 h-6 flex items-center justify-center text-primary mr-2">
                                    <i className="ri-check-line"></i>
                                </div>
                                <p className="text-gray-600">Cắm Hoa Đám CướiCưới</p>
                            </div>
                            
                            <div className="flex items-center">
                                <div className="w-6 h-6 flex items-center justify-center text-primary mr-2">
                                    <i className="ri-check-line"></i>
                                </div>
                                <p className="text-gray-600">Hoa Đám Hiếu</p>
                            </div>
                            
                            <div className="flex items-center">
                                <div className="w-6 h-6 flex items-center justify-center text-primary mr-2">
                                    <i className="ri-check-line"></i>
                                </div>
                                <p className="text-gray-600">Hoa Khai Trương</p>
                            </div>
                            
                            <div className="flex items-center">
                                <div className="w-6 h-6 flex items-center justify-center text-primary mr-2">
                                    <i className="ri-check-line"></i>
                                </div>
                                <p className="text-gray-600">Cắm hoa theo yêu cầu</p>
                            </div>
                            
                            <div className="flex items-center">
                                <div className="w-6 h-6 flex items-center justify-center text-primary mr-2">
                                    <i className="ri-check-line"></i>
                                </div>
                                <p className="text-gray-600">Hoa Trang Trí</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    
    <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-16 fade-in">
                <h2 className="text-4xl font-bold mb-6">Liên hệ với chúng tôi</h2>
                <p className="text-gray-600 text-lg">Bạn có câu hỏi hoặc yêu cầu đặc biệt? Hãy liên hệ với chúng tôi!</p>
            </div>
            
            <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-xl overflow-hidden fade-in">
                <div className="p-8">
                    <form onSubmit={handleFormSubmit} className="space-y-6">
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="input-animated relative">
                                <input type="text" id="name" className="w-full px-4 py-3 border-none bg-gray-50 rounded focus:outline-none focus:ring-2 focus:ring-primary" placeholder=" "/>
                                <label for="name">Họ và tên của bạn</label>
                            </div>
                            
                            <div className="input-animated relative">
                                <input type="email" id="email" className="w-full px-4 py-3 border-none bg-gray-50 rounded focus:outline-none focus:ring-2 focus:ring-primary" placeholder=" "/>
                                <label for="email">Email của bạn</label>
                            </div>
                        </div>
                        
                        <div className="input-animated relative">
                            <input type="text" id="subject" className="w-full px-4 py-3 border-none bg-gray-50 rounded focus:outline-none focus:ring-2 focus:ring-primary" placeholder=" "/>
                            <label for="subject">Chủ đề</label>
                        </div>
                        
                        <div className="relative">
                            <textarea id="message" rows="5" className="w-full px-4 py-3 border-none bg-gray-50 rounded focus:outline-none focus:ring-2 focus:ring-primary" placeholder="Tin nhắn của bạn"/>
                        </div>
                        
                        <div className="flex items-center">
                            <input 
                                type="checkbox" 
                                id="subscribe" 
                                className="hidden"
                                onChange={handleCheckboxChange}
                            />
                            <label htmlFor="subscribe" className="flex items-center cursor-pointer">
                                <div className="w-5 h-5 border-2 border-gray-300 rounded mr-3 flex items-center justify-center custom-checkbox">
                                    <div className={`w-3 h-3 bg-primary rounded ${isSubscribed ? '' : 'hidden'} checkbox-indicator`}></div>
                                </div>
                                <span className="text-gray-700">Đăng ký nhận bản tin để nhận ưu đãi đặc biệt</span>
                            </label>
                        </div>
                        
                        <button 
                            type="submit" 
                            disabled={isSubmitting}
                            className="bg-primary hover:bg-opacity-90 text-white px-8 py-3 rounded-button font-medium transition-all duration-300 transform hover:scale-105 w-full md:w-auto !whitespace-nowrap"
                        >
                            {isSubmitting ? 'Đang gửi...' : 'Gửi tin nhắn'}
                        </button>

                        {showSuccessMessage && (
                            <div className="bg-green-100 text-green-700 p-4 rounded mt-4">
                                Tin nhắn của bạn đã được gửi thành công! Chúng tôi sẽ liên hệ lại với bạn sớm.
                            </div>
                        )}
                    </form>
                </div>
            </div>
        </div>
    </section>

    
    <section className="py-20">
        <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-16 fade-in">
                <h2 className="text-4xl font-bold mb-6">Khách hàng nói gì về chúng tôi</h2>
                <p className="text-gray-600 text-lg">Đừng chỉ nghe chúng tôi nói – hãy nghe từ những khách hàng hài lòng của chúng tôi!</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-white p-8 rounded-lg shadow-lg fade-in">
                    <div className="flex items-center mb-4">
                        <div className="text-primary">
                            <i className="ri-star-fill"></i>
                            <i className="ri-star-fill"></i>
                            <i className="ri-star-fill"></i>
                            <i className="ri-star-fill"></i>
                            <i className="ri-star-fill"></i>
                        </div>
                    </div>
                    <p className="text-gray-600 mb-6">"Mình đặt hoa sinh nhật cho mẹ, shop làm quá xuất sắc. Mẹ cảm động lắm. Cảm ơn shop nhiều!

"</p>
                    <div className="flex items-center">
                        <img src="https://readdy.ai/api/search-image?query=professional%2520headshot%2520of%2520middle-aged%2520woman%2520with%2520brown%2520hair%252C%2520warm%2520smile%252C%2520neutral%2520background%252C%2520high%2520quality%2520portrait&width=60&height=60&seq=test1&orientation=squarish" alt="Customer" className="w-12 h-12 rounded-full mr-4"/>
                        <div>
                            <h4 className="font-bold">Chửi Lan Ánh</h4>
                            <p className="text-gray-500 text-sm">Fan Cứng</p>
                        </div>
                    </div>
                </div>
                
                <div className="bg-white p-8 rounded-lg shadow-lg fade-in">
                    <div className="flex items-center mb-4">
                        <div className="text-primary">
                            <i className="ri-star-fill"></i>
                            <i className="ri-star-fill"></i>
                            <i className="ri-star-fill"></i>
                            <i className="ri-star-fill"></i>
                            <i className="ri-star-fill"></i>
                        </div>
                    </div>
                    <p className="text-gray-600 mb-6">"Shop rất có tâm, chọn hoa phù hợp với nhu cầu. Giao hàng nhanh, đóng gói cẩn thận."</p>
                    <div className="flex items-center">
                        <img src="https://readdy.ai/api/search-image?query=professional%2520headshot%2520of%2520middle-aged%2520man%2520with%2520glasses%252C%2520warm%2520smile%252C%2520neutral%2520background%252C%2520high%2520quality%2520portrait&width=60&height=60&seq=test2&orientation=squarish" alt="Customer" className="w-12 h-12 rounded-full mr-4"/>
                        <div>
                            <h4 className="font-bold">Nguyễn Thị Trang</h4>
                            <p className="text-gray-500 text-sm">Khách Hàng Tiềm năng</p>
                        </div>
                    </div>
                </div>
                
                <div className="bg-white p-8 rounded-lg shadow-lg fade-in">
                    <div className="flex items-center mb-4">
                        <div className="text-primary">
                            <i className="ri-star-fill"></i>
                            <i className="ri-star-fill"></i>
                            <i className="ri-star-fill"></i>
                            <i className="ri-star-fill"></i>
                            <i className="ri-star-fill"></i>
                        </div>
                    </div>
                    <p className="text-gray-600 mb-6">"Phục vụ chu đáo, nhẹ nhàng và chuyên nghiệp. 10 điểm cho chất lượng!"</p>
                    <div className="flex items-center">
                        <img src="https://readdy.ai/api/search-image?query=professional%2520headshot%2520of%2520young%2520woman%2520with%2520black%2520hair%252C%2520warm%2520smile%252C%2520neutral%2520background%252C%2520high%2520quality%2520portrait&width=60&height=60&seq=test3&orientation=squarish" alt="Customer" className="w-12 h-12 rounded-full mr-4"/>
                        <div>
                            <h4 className="font-bold">Vợ Gíam Đốc</h4>
                            <p className="text-gray-500 text-sm">Nguyễn Ngọc Anh</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>


    <section className="py-16 bg-primary bg-opacity-10">
        <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center fade-in">
                <h2 className="text-3xl font-bold mb-6">Tham Gia Cộng Đồng Yêu Hoa Của Chúng Tôi</h2>
                <p className="text-gray-600 mb-8">Đăng ký nhận bản tin để nhận mẹo theo mùa, cảm hứng về hoa và ưu đãi độc quyền.</p>
                
                <form className="flex flex-col md:flex-row gap-4 max-w-lg mx-auto">
                    <input type="email" placeholder="Địa chỉ email của bạn" className="flex-grow px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary border-none"/>
                    <button type="submit" className="bg-primary hover:bg-opacity-90 text-white px-6 py-3 rounded-button font-medium transition-all duration-300 !whitespace-nowrap">Đăng ký ngay</button>
                </form>
                
                <p className="text-gray-500 text-sm mt-4">Chúng tôi tôn trọng quyền riêng tư của bạn. Bạn có thể hủy đăng ký bất cứ lúc nào.</p>
            </div>
        </div>
    </section>
</main>

</div>
  );
}

export default About; 