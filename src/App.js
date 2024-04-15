import React, { useEffect } from 'react'
import './App.css'

import Home from './Pages/Home/Home';
import Products from './Pages/Products/Products';
import ProductsDetails from './Pages/ProductDetails/ProductDetails';
import Cart from './Pages/Cart/Cart';

import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Navbar from './Components/Navbar';
import { useDispatch } from 'react-redux';
import supabase from './supabase';
import { setUser } from './Slices/UserSlice';

const App = () => {
  useEffect(() => {
    getuser()
  }, [])
  const dispatch = useDispatch()
  const getuser = async () => {
    const { data, error } = await supabase.auth.getSession();
    if(data.session){
      dispatch(setUser(data.session.user))
      console.log(data.session.user)
    }
  
  }
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/products' element={<Products />}></Route>
          <Route path='/productdetails/:id' element={<ProductsDetails />}></Route>
          <Route path='/cart' element={<Cart />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
