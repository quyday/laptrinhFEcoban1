import React, { useState } from 'react';
import './Login.css';

function Login() {
  const [activeTab, setActiveTab] = useState('login');
  const [showPassword, setShowPassword] = useState({
    password: false,
    registerPassword: false,
    confirmPassword: false
  });
  const [passwordStrength, setPasswordStrength] = useState({
    strength: 0,
    text: '',
    className: ''
  });

  const switchTab = (tab) => {
    setActiveTab(tab);
  };

  const togglePassword = (inputId) => {
    setShowPassword(prev => ({
      ...prev,
      [inputId]: !prev[inputId]
    }));
  };

  const checkPasswordStrength = (password) => {
    let strength = 0;
    if (password.length > 6) strength += 1;
    if (password.match(/[A-Z]/)) strength += 1;
    if (password.match(/[0-9]/)) strength += 1;
    if (password.match(/[^A-Za-z0-9]/)) strength += 1;

    let text = '';
    let className = '';

    if (strength === 0) {
      text = '';
      className = '';
    } else if (strength === 1) {
      text = 'Weak';
      className = 'weak';
    } else if (strength === 2) {
      text = 'Fair';
      className = 'fair';
    } else if (strength === 3) {
      text = 'Good';
      className = 'good';
    } else {
      text = 'Strong';
      className = 'strong';
    }

    setPasswordStrength({
      strength: strength * 25,
      text,
      className
    });
  };

  return (
    <div className="Login-container Login-fullscreen">
        <div className="Login-visual-section">
            <img src="https://readdy.ai/api/search-image?query=A%20luxurious%20arrangement%20of%20fresh%20flowers%20with%20soft%20pastel%20colors%20including%20pink%20roses%2C%20white%20lilies%2C%20and%20green%20foliage.%20The%20image%20has%20a%20dreamy%2C%20elegant%20atmosphere%20with%20soft%20natural%20lighting%20and%20a%20clean%2C%20simple%20background%20that%20highlights%20the%20beauty%20of%20the%20floral%20arrangement&width=800&height=1024&seq=1&orientation=portrait" 
                alt="Beautiful floral arrangement"/>
            <div className="Login-overlay">
                <div className="Login-brand">Shop Hoa</div>
                <div className="Login-content">
                    <h1>Khám phá vẻ đẹp thiên nhiên</h1>
                    <p>Tham gia cộng đồng hoa của chúng tôi và khám phá vẻ đẹp của thiên nhiên trong mỗi bó hoa.</p>
                </div>
            </div>
        </div>

        <div className="Login-auth-section">
            <div className="Login-auth-tabs">
                <button 
                    className={`Login-tab-btn ${activeTab === 'login' ? 'Login-active' : ''}`} 
                    onClick={() => switchTab('login')}
                >
                    Đăng nhập
                </button>
                <button 
                    className={`Login-tab-btn ${activeTab === 'register' ? 'Login-active' : ''}`} 
                    onClick={() => switchTab('register')}
                >
                    Đăng ký
                </button>
            </div>

            <div className="Login-auth-content">
                <div id="login-form" className={`Login-form-container ${activeTab === 'register' ? 'Login-hidden' : ''}`}>
                    <h2>Chào mừng trở lại</h2>
                    <form className="Login-auth-form">
                        <div className="Login-form-group">
                            <label htmlFor="email">Email</label>
                            <div className="Login-input-group">
                                <i className="fas fa-envelope"></i>
                                <input type="email" id="email" placeholder="you@example.com"/>
                            </div>
                        </div>

                        <div className="Login-form-group">
                            <label htmlFor="password">Mật khẩu</label>
                            <div className="Login-input-group">
                                <i className="fas fa-lock"></i>
                                <input 
                                    type={showPassword.password ? "text" : "password"} 
                                    id="password" 
                                    placeholder="••••••••"
                                />
                                <i 
                                    className={`fas ${showPassword.password ? 'fa-eye-slash' : 'fa-eye'} Login-toggle-password`}
                                    onClick={() => togglePassword('password')}
                                ></i>
                            </div>
                        </div>

                        <div className="Login-form-options">
                            <div className="Login-remember-me">
                                <input type="checkbox" id="remember-me"/>
                                <label htmlFor="remember-me">Ghi nhớ đăng nhập</label>
                            </div>
                            <a href="#" className="Login-forgot-password">Quên mật khẩu?</a>
                        </div>

                        <button type="submit" className="Login-submit-btn">Đăng nhập</button>

                        <div className="Login-divider">
                            <span>Hoặc đăng nhập với</span>
                        </div>

                        <div className="Login-social-buttons">
                            <button type="button" className="Login-social-btn">
                                <i className="fab fa-google"></i>
                                <span>Google</span>
                            </button>
                            <button type="button" className="Login-social-btn">
                                <i className="fab fa-facebook-f"></i>
                                <span>Facebook</span>
                            </button>
                        </div>
                    </form>
                </div>

                <div id="register-form" className={`Login-form-container ${activeTab === 'login' ? 'Login-hidden' : ''}`}>
                    <h2>Tạo tài khoản</h2>
                    <form className="Login-auth-form">
                        <div className="Login-form-group">
                            <label htmlFor="fullname">Họ và tên</label>
                            <div className="Login-input-group">
                                <i className="fas fa-user"></i>
                                <input type="text" id="fullname" placeholder="Nguyễn Văn A"/>
                            </div>
                        </div>

                        <div className="Login-form-group">
                            <label htmlFor="register-email">Email</label>
                            <div className="Login-input-group">
                                <i className="fas fa-envelope"></i>
                                <input type="email" id="register-email" placeholder="you@example.com"/>
                            </div>
                        </div>

                        <div className="Login-form-group">
                            <label htmlFor="register-password">Mật khẩu</label>
                            <div className="Login-input-group">
                                <i className="fas fa-lock"></i>
                                <input 
                                    type={showPassword.registerPassword ? "text" : "password"} 
                                    id="register-password" 
                                    placeholder="••••••••"
                                    onChange={(e) => checkPasswordStrength(e.target.value)}
                                />
                                <i 
                                    className={`fas ${showPassword.registerPassword ? 'fa-eye-slash' : 'fa-eye'} Login-toggle-password`}
                                    onClick={() => togglePassword('registerPassword')}
                                ></i>
                            </div>
                            <div className={`Login-password-strength ${passwordStrength.strength === 0 ? 'Login-hidden' : ''}`}>
                                <div className="Login-strength-bar">
                                    <div 
                                        className={`Login-strength-progress ${passwordStrength.className}`}
                                        style={{ width: passwordStrength.strength + '%' }}
                                    ></div>
                                </div>
                                <span className="Login-strength-text">{passwordStrength.text}</span>
                                <p className="Login-strength-hint">Sử dụng 8+ ký tự bao gồm chữ cái, số và ký tự đặc biệt</p>
                            </div>
                        </div>

                        <div className="Login-form-group">
                            <label htmlFor="confirm-password">Xác nhận mật khẩu</label>
                            <div className="Login-input-group">
                                <i className="fas fa-lock"></i>
                                <input 
                                    type={showPassword.confirmPassword ? "text" : "password"} 
                                    id="confirm-password" 
                                    placeholder="••••••••"
                                />
                                <i 
                                    className={`fas ${showPassword.confirmPassword ? 'fa-eye-slash' : 'fa-eye'} Login-toggle-password`}
                                    onClick={() => togglePassword('confirmPassword')}
                                ></i>
                            </div>
                        </div>

                        <div className="Login-form-group Login-terms">
                            <input type="checkbox" id="terms"/>
                            <label htmlFor="terms">
                                Tôi đồng ý với <a href="#">Điều khoản sử dụng</a> và <a href="#">Chính sách bảo mật</a>
                            </label>
                        </div>

                        <button type="submit" className="Login-submit-btn">Tạo tài khoản</button>

                        <div className="Login-divider">
                            <span>Hoặc đăng ký với</span>
                        </div>

                        <div className="Login-social-buttons">
                            <button type="button" className="Login-social-btn">
                                <i className="fab fa-google"></i>
                                <span>Google</span>
                            </button>
                            <button type="button" className="Login-social-btn">
                                <i className="fab fa-facebook-f"></i>
                                <span>Facebook</span>
                            </button>
                        </div>
                    </form>
                </div>
            </div>

            <div className="Login-auth-footer">
                <p id="switch-text">
                    {activeTab === 'login' ? (
                        <>Chưa có tài khoản? <a href="#" onClick={() => switchTab('register')}>Đăng ký ngay</a></>
                    ) : (
                        <>Đã có tài khoản? <a href="#" onClick={() => switchTab('login')}>Đăng nhập</a></>
                    )}
                </p>
            </div>
        </div>
    </div>
  );
}

export default Login; 