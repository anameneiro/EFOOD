import { Provider } from 'react-redux'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { GlobalCss } from './styles'
import Home from './routes/home'
import React from 'react'
import Perfil from './routes/perfil'
import { store } from './store'

function App() {
  return (
    <Provider store={store}>
      <GlobalCss />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/perfil/:id" element={<Perfil />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  )
}

export default App
