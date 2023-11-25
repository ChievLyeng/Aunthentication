import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Signup from './pages/Signup'
import Login from './pages/Login'
import Home from './pages/Home'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css'

function App() {


  return (
    <>

      <BrowserRouter>
        <Routes>
          <Route path='/register' element={<Signup />}> </Route>
          <Route path='/login' element={<Login />}> </Route>
          <Route path='/home' element={<Home />}> </Route>
        </Routes>
      </BrowserRouter>
        
    </>
  )
}

export default App
