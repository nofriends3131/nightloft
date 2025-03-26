import { useNavigate } from 'react-router-dom';

function BackButton() {
  const navigate = useNavigate();

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