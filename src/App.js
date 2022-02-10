import { BrowserRouter, Routes, Route } from "react-router-dom";

import { AuthProvider } from "./contexts/AuthContext";
import { SignIn } from "./pages";

function App()  {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/sign-in" element={<SignIn/>}/>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  )
}

export default App;