import { Link } from 'react-router-dom'
import nightloftlogo from '../assets/logo.jpg'
import hoodie from '../assets/hoodie design1.jpg'
import tshirt1 from '../assets/tshirt design1.jpg'  
import tshirt2 from '../assets/tshirt design2.jpg'
import compression from '../assets/compression shirt1.jpg'
import rheymark from '../assets/rheymark.jpg'

function App() {
  return (
          <>
            <div>
              <img src={nightloftlogo} className="logo" alt="React logo" />
            </div>
            <p className='text-white'>The biggest gym clothing brand in the Philippines</p>
            <p className="read-the-docs">
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
