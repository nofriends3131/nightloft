import nightloftlogo from './assets/logo.jpg'
import hoodie from './assets/hooide design1.jpg'
import tshirt1 from './assets/tshirt design1.jpg'  
import tshirt2 from './assets/tshirt design2.jpg'
import compression from './assets/compression shirt1.jpg'
import './App.css'
function App() {

  return (
    <>
      <div>
        <img src={nightloftlogo} className="logo" alt="React logo" />
      </div>
      <p className='text-white'>The biggest gym clothing brand in the Philippines</p>
      <p className="read-the-docs">
        chat nyo nalang ako sa messenger kung gusto nyo mag-order tinamad ako gumawa ng website
      </p>
      <div>
      <img src={tshirt1} className="product-image" alt="React logo" />
        <img src={hoodie} className="product-image" alt="React logo" />
        <img src={tshirt2} className="product-image" alt="React logo" />
        <img src={compression} className="product-image" alt="React logo" />
      </div>
    </>
  )
}

export default App
