import React from 'react'
import './App.css'

import Home from './Pages/Home/Home';
import Products from './Pages/Products/Products';
import ProductsDetails from './Pages/ProductDetails/ProductDetails';
import Cart from './Pages/Cart/Cart';

import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Navbar from './Components/Navbar';
import { Provider } from 'react-redux';
import { store } from './Store';

const App = () => {
  return (
    <div>
      <Provider store={store}>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/products' element={<Products />}></Route>
            <Route path='/productdetails/:id' element={<ProductsDetails />}></Route>
            <Route path='/cart' element={<Cart />}></Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  )
}

export default App
