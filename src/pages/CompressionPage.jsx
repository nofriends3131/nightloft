import BackButton from '../components/BackButton';
import compression from '../assets/compression shirt1.jpg'

function CompressionPage() {
  return (
    <div className="product-page">
      <BackButton />
      <img src={compression} className="product-detail-image" alt="Compression Shirt" />
      <div className="product-info">
        <h2 className="product-title">Apollo</h2>
        <p className="product-description">Boost your confidence and performance with our budget-friendly compression t-shirt. Designed for comfort and support, it helps you feel your best during every workout, all at an unbeatable price!</p>
        <p className="product-price">₱299</p>
      </div>
    </div>
  );
}

export default CompressionPage; 