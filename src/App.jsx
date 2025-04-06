import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import Tshirt1Page from './pages/Tshirt1Page'
import HoodiePage from './pages/HoodiePage'
import Tshirt2Page from './pages/Tshirt2Page'
import CompressionPage from './pages/CompressionPage'
import HomePage from './pages/HomePage'
import About from './pages/About'
import Products from './pages/Products'
import Sidebar from './components/Sidebar'
import FloatingEquipment from './components/FloatingEquipment'
import MobileNav from './components/MobileNav'
import './App.css'

function App() {
  const [user, setUser] = useState(null)

  const handleLoginSuccess = (userData) => {
    setUser(userData)
  }

  const handleLogout = () => {
    setUser(null)
  }

  return (
    <Router>
      <div className="app">
        <div className="stars-small"></div>
        <div className="stars-medium"></div>
        <div className="nebula"></div>
        <div className="moon"></div>
        <FloatingEquipment />
        <MobileNav 
          user={user} 
          onLogout={handleLogout} 
          onLoginSuccess={handleLoginSuccess} 
        />
        <Sidebar />
        <div className="page-content">
          <Routes>
            <Route path="/" element={<HomePage user={user} onLoginSuccess={handleLoginSuccess} />} />
            <Route path="/products" element={<Products />} />
            <Route path="/tshirt1" element={<Tshirt1Page />} />
            <Route path="/hoodie" element={<HoodiePage />} />
            <Route path="/tshirt2" element={<Tshirt2Page />} />
            <Route path="/compression" element={<CompressionPage />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </div>
    </Router>
  )
}

export default App
