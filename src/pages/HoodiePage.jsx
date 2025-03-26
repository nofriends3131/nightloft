import BackButton from '../components/BackButton';
import hoodie from '../assets/hoodie design1.jpg'

function HoodiePage() {
  return (
    <div className="product-page">
      <BackButton />
      <img src={hoodie} className="product-detail-image" alt="Hoodie Design 1" />
      <div className="product-info">
        <h2 className="product-title">Nightloft Hoodie</h2>
        <p className="product-description">Stay comfortable and stylish with our affordable gym hoodie. Perfect for workouts or everyday wear, designed for both durability and comfort without the high price tag.
        </p>
        <p className="product-price">₱359</p>
      </div>
    </div>
  );
}

export default HoodiePage; 