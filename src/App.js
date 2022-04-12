import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages'
import About from './pages/about'
import Resume from './pages/resume'
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/About' element={<About />} />
          <Route path='/Resume' element={<Resume />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  )
}

export default App;