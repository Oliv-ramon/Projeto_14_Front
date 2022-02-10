import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SingIn } from "./pages";

function App()  {
  return (
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<SingIn/>}/>
          </Routes>
        </BrowserRouter>
  )
}

export default App;