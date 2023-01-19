import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from './pages/Cart';
import Home from './pages/Home';


const App = props => {
  const {products, saveLocalStorage} = props

  useEffect(()=>{
    saveLocalStorage(products)
  }, [products, saveLocalStorage])

  return (
   <BrowserRouter>
   <Routes>
  <Route path="/" element={<Home />}/>
  <Route path="/cart" element={<Cart />}/>
  <Route path="/checkout" element={<Checko />}/>
   </Routes>
   </BrowserRouter>
  );
};

export default App;