import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

function BackButton() {
  const navigate = useNavigate();
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Completely remove the back button on mobile
  if (isMobile) {
    return null;
  }

  return (
    <button 
      onClick={() => navigate('/')}
      className="back-button"
    >
      Back
    </button>
  );
}

export default BackButton; 