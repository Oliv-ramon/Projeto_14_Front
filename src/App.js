import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { SignIn, SignUp, Cart, SuccessefullPurchase, MainPage } from "./pages";

import { AuthProvider, CartProvider } from "./contexts";

function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<SignIn />} />
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="/sign-in" element={<SignIn />} />
            <Route path="/home" element={< MainPage />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/successfull-purchase" element={<SuccessefullPurchase />} />
          </Routes>
        </BrowserRouter>
      </CartProvider >
    </AuthProvider >
  )
}

export default App;