import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Tshirt1Page from './pages/Tshirt1Page'
import HoodiePage from './pages/HoodiePage'
import Tshirt2Page from './pages/Tshirt2Page'
import CompressionPage from './pages/CompressionPage'
import HomePage from './pages/HomePage'
import './App.css'

function App() {
  return (
    <>
      <div className="stars-small"></div>
      <div className="stars-medium"></div>
      <div className="nebula"></div>
      <div className="moon"></div>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/tshirt1" element={<Tshirt1Page />} />
          <Route path="/hoodie" element={<HoodiePage />} />
          <Route path="/tshirt2" element={<Tshirt2Page />} />
          <Route path="/compression" element={<CompressionPage />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
