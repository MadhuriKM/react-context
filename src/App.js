import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Menu from './component/Menu'
import Home from './Pages/Home'
import Ex1 from './Pages/Ex1'
import Ex2 from './Pages/Ex2'
import Pnf from './Pages/Pnf'

function App() {
  return (
    <BrowserRouter>
      <Menu/>
      <Routes>
        <Route path={`/`} element={<Home/>} />
        <Route path={`/ex1`} element={<Ex1/>} />
        <Route path={`/ex2`} element={<Ex2/>} />
        <Route path={`/*`} element={<Pnf/>} />
      </Routes>
      
    </BrowserRouter>
  )
}

export default App
