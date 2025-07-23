import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Product from './components/Product'
import Service from './components/Service'

const App = () => {
  return (
    <div className='w-screen h-screen bg-gray-800 text-white'>
      <Routes>
        <Route path='/' element={<Home />} /> 
        <Route path='/about' element={ <About />}/> 
        <Route path='/product' element={ <Product />}/> 
        <Route path='/service' element={ <Service />}/> 
      </Routes>
    </div>
  )
}

export default App