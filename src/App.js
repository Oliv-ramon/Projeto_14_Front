import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { SignUp } from './pages'

function App()  {
  return (
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<h1>Olá Mundo!!! e digo mais, Hello World!!</h1>}/>
            
            <Route path="/sign-up"
              element={< SignUp />}
            />
            
          </Routes>
        </BrowserRouter>
  )
}

export default App;