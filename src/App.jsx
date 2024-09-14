import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import './App.css'
import Register from './assets/pages/Register'
import Home from './assets/pages/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/register" element={<Register/>} />
      </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
