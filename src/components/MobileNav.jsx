import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaUserCircle, FaBars, FaTimes } from 'react-icons/fa';
import LoginModal from './LoginModal';

function MobileNav({ user, onLogout, onLoginSuccess }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="mobile-nav">
      <div className="mobile-nav-bar">
        <button className="menu-icon" onClick={toggleMenu}>
          {isMenuOpen ? <FaTimes size={24} color="white" /> : <FaBars size={24} color="white" />}
        </button>
        <div className="mobile-logo">
          <Link to="/" onClick={closeMenu}>Nightloft</Link>
        </div>
        <div className="mobile-login">
          {user ? (
            <div className="user-info">
              <span className="username">{user.username}</span>
              <button onClick={onLogout} className="logout-button">
                Logout
              </button>
            </div>
          ) : (
            <button onClick={() => setIsLoginModalOpen(true)} className="login-icon">
              <FaUserCircle size={24} color="white" />
            </button>
          )}
        </div>
      </div>

      {isMenuOpen && (
        <div className="mobile-menu">
          <Link to="/" onClick={closeMenu} className="mobile-menu-item">Home</Link>
          <Link to="/products" onClick={closeMenu} className="mobile-menu-item">Products</Link>
          <Link to="/about" onClick={closeMenu} className="mobile-menu-item">About</Link>
          <Link to="/contact" onClick={closeMenu} className="mobile-menu-item">Contact</Link>
        </div>
      )}

      <LoginModal 
        isOpen={isLoginModalOpen} 
        onClose={() => {
          setIsLoginModalOpen(false);
          onLoginSuccess();
        }} 
      />
    </div>
  );
}

export default MobileNav; 