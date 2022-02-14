import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

<<<<<<< HEAD
import { SignIn, SignUp, MainPage } from "./pages";

import { AuthProvider } from "./contexts/AuthContext";

=======
import { AuthProvider, CartProvider } from "./contexts";
import { SignIn, SignUp, Cart, SuccessefullPurchase } from "./pages";
>>>>>>> main

function App()  {
  return (
    <AuthProvider>
<<<<<<< HEAD
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage/>}/>
          <Route path="/sign-up" element={<SignUp/>}/>
          <Route path="/sign-in" element={<SignIn/>}/>
          <Route path="/home" element={< MainPage />} />
        </Routes>
      </BrowserRouter>
=======
      <CartProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={"<MainPage/>"}/>
            <Route path="/sign-up" element={<SignUp/>}/>
            <Route path="/sign-in" element={<SignIn/>}/>
            <Route path="/cart" element={<Cart/>}/>
            <Route path="/successfull-purchase" element={<SuccessefullPurchase/>}/>
          </Routes>
        </BrowserRouter>
      </CartProvider>
>>>>>>> main
    </AuthProvider>
  )
}

export default App;