import { Link } from 'react-router-dom';
import smallerlogo from '../assets/smallerlogo.png' // Adjust the path as needed

function Sidebar() {
  return (
    <div className="sidebar">
      <nav className="sidebar-nav">
        <ul className="sidebar-menu">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/products">Products</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
    </div>
  );
}

export default Sidebar; 