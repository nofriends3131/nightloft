import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import nightloftlogo from '../assets/logo.jpg';
import hoodie from '../assets/hoodie design1.jpg';
import tshirt1 from '../assets/tshirt design1.jpg';
import tshirt2 from '../assets/tshirt design2.jpg';
import compression from '../assets/compression shirt1.jpg';

function Products() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const categories = [
    { id: 'all', name: 'All' },
    { id: 'tshirt', name: 'T-Shirts' },
    { id: 'hoodie', name: 'Hoodies' },
    { id: 'compression', name: 'Compression' },
    { id: 'shorts', name: 'Shorts' },
    { id: 'accessories', name: 'Accessories' }
  ];

  const products = [
    { id: 'tshirt1', category: 'tshirt', image: tshirt1, name: 'Atlas', price: '₱249' },
    { id: 'tshirt2', category: 'tshirt', image: tshirt2, name: 'Sisyphus', price: '₱249' },
    { id: 'hoodie', category: 'hoodie', image: hoodie, name: 'Zeus', price: '₱359' },
    { id: 'compression', category: 'compression', image: compression, name: 'Apollo', price: '₱299' }
  ];

  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  const renderContent = () => {
    if (selectedCategory === 'shorts' || selectedCategory === 'accessories') {
      return (
        <div className="no-products-message">
          <p>We don't have this yet :(</p>
          <p>Check back soon for new products!</p>
        </div>
      );
    }

    if (isMobile) {
      return (
        <div className="mobile-products">
          {filteredProducts.map(product => (
            <Link key={product.id} to={`/${product.id}`} className="product-link">
              <img src={product.image} className="product-image" alt={product.name} />
            </Link>
          ))}
        </div>
      );
    }

    return (
      <div className="products-grid">
        {filteredProducts.map(product => (
          <Link key={product.id} to={`/${product.id}`} className="product-link">
            <img src={product.image} className="product-image" alt={product.name} />
          </Link>
        ))}
      </div>
    );
  };

  return (
    <div className="products-page">
      <div className="header-container">
        <div className="logo-container">
          <img src={nightloftlogo} className="logo" alt="Nightloft logo" />
        </div>
      </div>

      <div className="category-filter">
        {categories.map(category => (
          <button
            key={category.id}
            className={`category-button ${selectedCategory === category.id ? 'active' : ''}`}
            onClick={() => setSelectedCategory(category.id)}
          >
            {category.name}
          </button>
        ))}
      </div>

      {renderContent()}
    </div>
  );
}

export default Products; 