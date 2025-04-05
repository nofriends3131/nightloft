import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Tshirt1Page from './pages/Tshirt1Page'
import HoodiePage from './pages/HoodiePage'
import Tshirt2Page from './pages/Tshirt2Page'
import CompressionPage from './pages/CompressionPage'
import HomePage from './pages/HomePage'
import About from './pages/About'
import Sidebar from './components/Sidebar'
import FloatingEquipment from './components/FloatingEquipment'
import './App.css'

function App() {
  return (
    <Router>
      <>
        <div className="stars-small"></div>
        <div className="stars-medium"></div>
        <div className="nebula"></div>
        <div className="moon"></div>
        <FloatingEquipment />
        <Sidebar />
        <div className="page-content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/tshirt1" element={<Tshirt1Page />} />
            <Route path="/hoodie" element={<HoodiePage />} />
            <Route path="/tshirt2" element={<Tshirt2Page />} />
            <Route path="/compression" element={<CompressionPage />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </>
    </Router>
  )
}

export default App
