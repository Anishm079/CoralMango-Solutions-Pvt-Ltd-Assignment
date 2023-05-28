import { useState } from 'react'
import { Routes ,Route } from 'react-router-dom'
import './App.css'
import {Nav,Home,Login} from './components/index'

function App() {
  return (
   <div>
    <Nav/>
    <Routes>
      <Route path='/login' element={<Login/>} />
      <Route path='/' element={<Home/>} />
    </Routes>
   </div>
  )
}

export default App
