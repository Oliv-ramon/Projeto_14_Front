import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { AuthProvider, CartProvider } from "./contexts";
import { SignIn, SignUp, MainPage, Cart, SuccessefullPurchase } from "./pages";

function App()  {
  return (
    <AuthProvider>
      <CartProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MainPage/>}/>
            <Route path="/sign-up" element={<SignUp/>}/>
            <Route path="/sign-in" element={<SignIn/>}/>
            <Route path="/cart" element={<Cart/>}/>
            <Route path="/successfull-purchase" element={<SuccessefullPurchase/>}/>
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </AuthProvider>
  )
}

export default App;