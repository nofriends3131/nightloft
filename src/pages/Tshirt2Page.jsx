import BackButton from '../components/BackButton';
import tshirt2 from '../assets/tshirt design2.jpg'

function Tshirt2Page() {
  return (
    <div className="product-page">
      <BackButton />
      <img src={tshirt2} className="product-detail-image" alt="T-Shirt Design 2" />
      <div className="product-info">
        <h2 className="product-title">T-Shirt Design 2</h2>
        <p className="product-description">Train hard, look great, and save more with our affordable gym t-shirt. Featuring a stylish look and ultimate comfort.</p>
        <p className="product-price">₱249</p>
      </div>
    </div>
  );
}

export default Tshirt2Page; 