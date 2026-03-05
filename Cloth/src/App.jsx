import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Main from './Pages/Main'
import Login from './Pages/Login'

function App() {
  return (
    <div>
      <Navbar/>
    <Routes>
      <Route path='/' element={<Main/>}/>
      <Route path='/login' element={<Login/>}/>
    </Routes>
    </div>
  )
}

export default App
