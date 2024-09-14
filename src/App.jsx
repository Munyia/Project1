import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import './App.css'
import Register from './assets/pages/Register'
import Home from './assets/pages/Home'
import Login from './assets/pages/Login'
import ForgotPassword from './assets/components/ForgotPassword'
import CheckOut from './assets/pages/CheckOut'
import Request from './assets/pages/Request'
import Confirmation from './assets/components/Confirmation'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/forgotpassword" element={<ForgotPassword/>} />
        <Route path="/checkout" element={<CheckOut/>} />
        <Route path="/request" element={<Request/>} />
        <Route path="/confirmation" element={<Confirmation/>} />
      </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
