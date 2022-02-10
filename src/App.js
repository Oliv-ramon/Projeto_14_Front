import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import "./css/reset.css";
import "./css/style.css";

import { SignUp, MainPage } from './pages'

function App()  {
  return (
        <BrowserRouter>
          <Routes>
            <Route path="/home"
              element={< MainPage />}
            />
            
            <Route path="/sign-up"
              element={< SignUp />}
            />
            
          </Routes>
        </BrowserRouter>
  )
}

export default App;