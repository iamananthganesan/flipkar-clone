import React from 'react'
import './App.css'

import Home from './Pages/Home/Home';
import Products from './Pages/Products/Products';
import ProductsDetails from './Pages/ProductDetails/ProductDetails';
import Cart from './Pages/Cart/Cart';

import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Navbar from './Components/Navbar';

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/products' element={<Products/>}></Route>
          <Route path='/productdetails/:id' element={<ProductsDetails/>}></Route>
          <Route path='/cart' element={<Cart/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
