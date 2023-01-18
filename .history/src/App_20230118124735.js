import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from './pages/Cart';
import Home from './pages/Home';
import { HomeContainer } from './container/Home';

const App = () => {
  return (
   <BrowserRouter>
   <Routes>
  <Route path="/" element={<HomeContainer />}/>
  <Route path="/cart" element={<Cart />}/>
   </Routes>
   </BrowserRouter>
  );
};

export default App;