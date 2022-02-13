import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { SignIn, SignUp, MainPage } from "./pages";

import { AuthProvider } from "./contexts/AuthContext";


function App()  {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage/>}/>
          <Route path="/sign-up" element={<SignUp/>}/>
          <Route path="/sign-in" element={<SignIn/>}/>
          <Route path="/home" element={< MainPage />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  )
}

export default App;