import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from './pages/Cart';
import Home from './pages/Home';

const App = () => {
  return (
   <BrowserRouter>
   <Routes>
  <Route path="/" element={<Home />}/>
  <Route path="/cart" element={<Cart />}/>
   </Routes>
   </BrowserRouter>
  );
};

export default App;