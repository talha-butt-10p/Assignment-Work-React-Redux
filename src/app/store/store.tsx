import { configureStore } from '@reduxjs/toolkit'
import productSlice from '../store/slices/product'
import cartSlice from '../store/slices/cart'

export const store = configureStore({
  reducer: {
    productArray:productSlice,
    cartArray:cartSlice
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch