import { createSlice, PayloadAction } from '@reduxjs/toolkit'
// import { Restaurantes } from '../../routes/home'
import { Menu } from '../../routes/perfil'

type CartState = {
  items: Menu[]
  isOpen: boolean
  isOrderOpen: boolean
}

const initialState: CartState = {
  items: [],
  isOpen: false,
  isOrderOpen: false
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<Menu>) => {
      state.items.push(action.payload)
    },
    remove: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((item) => item.id !== action.payload)
    },
    open: (state) => {
      state.isOpen = true
    },
    close: (state) => {
      state.isOpen = false
    },
    openOrder: (state) => {
      state.isOrderOpen = true
    },
    closeOrder: (state) => {
      state.isOrderOpen = false
    },
    clear: (state) => {
      state.items = []
    }
  }
})

export const { add, open, close, remove, closeOrder, openOrder, clear } =
  cartSlice.actions
export default cartSlice.reducer
