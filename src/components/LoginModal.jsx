import React, { useState } from 'react';
import { FaUserCircle, FaTimes, FaEye, FaEyeSlash } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

const LoginModal = ({ isOpen, onClose, onLoginSuccess }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [message, setMessage] = useState({ type: '', text: '' });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  if (!isOpen) return null;

  const sendWelcomeEmail = async (email, username) => {
    try {
      await emailjs.send(
        'YOUR_SERVICE_ID', // Replace with your EmailJS service ID
        'YOUR_TEMPLATE_ID', // Replace with your EmailJS template ID
        {
          to_email: email,
          to_name: username,
          message: 'Thankyou for partnering with Nightloft!'
        },
        'YOUR_PUBLIC_KEY' // Replace with your EmailJS public key
      );
    } catch (error) {
      console.error('Failed to send email:', error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    if (formData.email && formData.password) {
      const existingUsers = JSON.parse(localStorage.getItem('nightloftUsers') || '[]');
      const user = existingUsers.find(u => 
        (u.email === formData.email || u.username === formData.email) && 
        u.password === formData.password
      );

      if (user) {
        setMessage({ type: 'success', text: 'Successfully logged in!' });
        localStorage.setItem('nightloftUser', JSON.stringify({
          username: user.username,
          email: user.email
        }));
        
        // Send welcome email
        await sendWelcomeEmail(user.email, user.username);
        
        setTimeout(() => {
          onClose();
        }, 1500);
      } else {
        setMessage({ type: 'error', text: 'Invalid email/username or password' });
      }
    } else {
      setMessage({ type: 'error', text: 'Please fill in all fields' });
    }
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    if (!formData.username || !formData.email || !formData.password || !formData.confirmPassword) {
      setMessage({ type: 'error', text: 'Please fill in all fields' });
      return;
    }
    if (formData.password !== formData.confirmPassword) {
      setMessage({ type: 'error', text: 'Passwords do not match' });
      return;
    }

    const existingUsers = JSON.parse(localStorage.getItem('nightloftUsers') || '[]');
    
    if (existingUsers.some(user => user.email === formData.email)) {
      setMessage({ type: 'error', text: 'Email already exists' });
      return;
    }
    if (existingUsers.some(user => user.username === formData.username)) {
      setMessage({ type: 'error', text: 'Username already exists' });
      return;
    }

    existingUsers.push({
      username: formData.username,
      email: formData.email,
      password: formData.password
    });

    localStorage.setItem('nightloftUsers', JSON.stringify(existingUsers));

    // Send welcome email for new signup
    await sendWelcomeEmail(formData.email, formData.username);

    setMessage({ type: 'success', text: 'Account created successfully!' });
    setTimeout(() => {
      setIsLogin(true);
      setMessage({ type: '', text: '' });
    }, 1500);
  };

  return (
    <div className="modal-overlay">
      <div className="moon"></div>
      <div className="space-debris">
        <div className="debris"></div>
        <div className="debris"></div>
        <div className="debris"></div>
        <div className="debris"></div>
        <div className="debris"></div>
        <div className="debris"></div>
        <div className="debris"></div>
        <div className="debris"></div>
      </div>
      <div className="modal-content">
        <button className="close-button" onClick={onClose}>
          <FaTimes />
        </button>
        
        <div className="auth-container">
          <div className="auth-header">
            <button 
              className={`auth-tab ${isLogin ? 'active' : ''}`}
              onClick={() => {
                setIsLogin(true);
                setMessage({ type: '', text: '' });
              }}
            >
              Login
            </button>
            <button 
              className={`auth-tab ${!isLogin ? 'active' : ''}`}
              onClick={() => {
                setIsLogin(false);
                setMessage({ type: '', text: '' });
              }}
            >
              Sign Up
            </button>
          </div>

          {message.text && (
            <div className={`message ${message.type}`}>
              {message.text}
            </div>
          )}

          <div className="auth-form">
            {isLogin ? (
              <form className="login-form" onSubmit={handleLogin}>
                <div className="form-group">
                  <input 
                    type="text" 
                    placeholder="Email or Username"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="form-group password-group">
                  <input 
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                  />
                  <button 
                    type="button" 
                    className="password-toggle"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </button>
                </div>
                <button type="submit" className="submit-button">Login</button>
              </form>
            ) : (
              <form className="signup-form" onSubmit={handleSignup}>
                <div className="form-group">
                  <input 
                    type="text" 
                    placeholder="Username"
                    name="username"
                    value={formData.username}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="form-group">
                  <input 
                    type="email" 
                    placeholder="Email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="form-group password-group">
                  <input 
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                  />
                  <button 
                    type="button" 
                    className="password-toggle"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </button>
                </div>
                <div className="form-group password-group">
                  <input 
                    type={showConfirmPassword ? "text" : "password"}
                    placeholder="Confirm Password"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                  />
                  <button 
                    type="button" 
                    className="password-toggle"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  >
                    {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                  </button>
                </div>
                <button type="submit" className="submit-button">Sign Up</button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginModal; 