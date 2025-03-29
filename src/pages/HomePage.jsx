import { Link } from 'react-router-dom'
import nightloftlogo from '../assets/logo.jpg'
import hoodie from '../assets/hoodie design1.jpg'
import tshirt1 from '../assets/tshirt design1.jpg'  
import tshirt2 from '../assets/tshirt design2.jpg'
import compression from '../assets/compression shirt1.jpg'
import rheymark from '../assets/rheymark.jpg'
import { FaUserCircle } from 'react-icons/fa'
import { useState, useEffect } from 'react'
import LoginModal from '../components/LoginModal'

function App() {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Check if user is logged in
    const userData = localStorage.getItem('nightloftUser');
    if (userData) {
      setUser(JSON.parse(userData));
    }
  }, []);

  const handleLoginSuccess = () => {
    const userData = localStorage.getItem('nightloftUser');
    if (userData) {
      setUser(JSON.parse(userData));
    }
  };

  return (
          <>
            <div className="header-container">
              <div className="logo-container">
                <img src={nightloftlogo} className="logo" alt="React logo" />
              </div>
              <div className="login-container">
                {user ? (
                  <div className="user-info">
                    <span className="username">{user.username}</span>
                    <button onClick={() => {
                      localStorage.removeItem('nightloftUser');
                      setUser(null);
                    }} className="logout-button">
                      Logout
                    </button>
                  </div>
                ) : (
                  <button onClick={() => setIsLoginModalOpen(true)} className="login-icon">
                    <FaUserCircle size={40} color="white" />
                  </button>
                )}
              </div>
            </div>
            <LoginModal 
              isOpen={isLoginModalOpen} 
              onClose={() => {
                setIsLoginModalOpen(false);
                handleLoginSuccess();
              }} 
            />
            <p className='text-white label-text'>Filipino budget friendly and quality gym clothing</p>
            <p className="read-the-docs label-text">
              bili na kayo pang confine ni rheymark HHAHAHAH
            </p>
            <div> <img src={rheymark} className="rheymark" alt="Rheymark" /> </div>
            <div>
              <Link to="/tshirt1">
                <img src={tshirt1} className="product-image" alt="T-Shirt Design 1" />
              </Link>
              <Link to="/hoodie">
                <img src={hoodie} className="product-image" alt="Hoodie" />
              </Link>
              <Link to="/tshirt2">
                <img src={tshirt2} className="product-image" alt="T-Shirt Design 2" />
              </Link>
              <Link to="/compression">
                <img src={compression} className="product-image" alt="Compression Shirt" />
              </Link>
            </div>
          </>
  )
}

export default App
