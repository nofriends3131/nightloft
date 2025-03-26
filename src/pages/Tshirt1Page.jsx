import BackButton from '../components/BackButton';
import tshirt1 from '../assets/tshirt design1.jpg'

function Tshirt1Page() {
  return (
    <div className="product-page">
      <BackButton />
      <img src={tshirt1} className="product-detail-image" alt="T-Shirt Design 1" />
      <div className="product-info">
        <h2 className="product-title">T-Shirt Design 1</h2>
        <p className="product-description">Stand out in the gym with our budget-friendly t-shirt. Featuring a modern design and a comfortable fit, it’s perfect for any workout or casual day out.</p>
        <p className="product-price">₱249</p>
      </div>
    </div>
  );
}

export default Tshirt1Page; 