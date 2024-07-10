import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { GlobalCss } from './styles'

import React from 'react'

import { store } from './store'
import Cart from './components/Cart'
import Rotas from './routes'

function App() {
  return (
    <Provider store={store}>
      <GlobalCss />
      <BrowserRouter>
        <Rotas />
        <Cart />
      </BrowserRouter>
    </Provider>
  )
}

export default App
