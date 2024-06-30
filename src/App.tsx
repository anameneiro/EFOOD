import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { GlobalCss } from './styles'
import Home from './routes/home'
import React from 'react'
import Perfil from './routes/perfil'

function App() {
  return (
    <React.StrictMode>
      <GlobalCss />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/perfil/:id" element={<Perfil />} />
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  )
}

export default App
