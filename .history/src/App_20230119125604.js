import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from './pages/Cart';
import { HomeContainer } from './container/HomeContainer';

const App = pro => {
  useEffect(()=>{
    saveLocalStorage(products)
  }, [products, saveLocalStorage])
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