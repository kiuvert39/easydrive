import { BrowserRouter, Routes, Route } from "react-router";
import './App.css'
import LoginPage from "./pages/auth/login.page";
import SignUpPage from "./pages/auth/signup.page";
import NavBarComponent from "./components/home/navbar.component";

function App() {


  return (
    <>
      <BrowserRouter>
      <NavBarComponent/>
        <Routes>
          <Route path="signin" element={<LoginPage/>} />
          <Route path="signup" element={<SignUpPage />} />
       
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
