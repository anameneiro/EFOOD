import { Routes, Route } from 'react-router-dom'

import Home from './routes/home'
import Perfil from './routes/perfil'

const Rotas = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/perfil/:id" element={<Perfil />} />
  </Routes>
)
export default Rotas
