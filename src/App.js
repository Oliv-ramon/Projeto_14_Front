import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SignIn } from "./pages";

function App()  {
  return (
        <BrowserRouter>
          <Routes>
            <Route path="/sign-in" element={<SignIn/>}/>
          </Routes>
        </BrowserRouter>
  )
}

export default App;