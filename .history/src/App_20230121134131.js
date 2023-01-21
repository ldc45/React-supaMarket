import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import Home from './pages/Home';
import UserProfileContextProvider from './lib/UserProfileContext';

const App = props => {
  const {products, saveLocalStorage} = props

  useEffect(()=>{
    saveLocalStorage(products)
  }, [products, saveLocalStorage])

  return (  
  <UserProfileContextProvider>
   <BrowserRouter>
   <Routes>
  <Route path="/" element={<Home />}/>
  <Route path="/cart" element={<Cart />}/>
  <Route path="/checkout" element={<Checkout />}/>
    {/* Ce path affiche la page d'accueil si l'url ne corespond à rien */}
    <Route path="*" element={<Home /> }/>
   </Routes>

   </BrowserRouter>
 </UserProfileContextProvider>
  );
};

export default App;