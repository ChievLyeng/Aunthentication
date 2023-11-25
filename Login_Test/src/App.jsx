import { useState } from 'react'
import Home from './pages/Home'
import Login from './pages/Login'
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom'
import './App.css'

function App() {


  return (
    <>
      <div className='wrapper'> 
        <Router>
          <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/login" element={<Login />} />
          </Routes>
        </Router>
      </div>
    </>
  )
}

export default App
