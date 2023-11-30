import { configureStore } from '@reduxjs/toolkit';
import productSlice from '../store/slices/product';
import cartSlice from '../store/slices/cart';
import { productApi } from './slices/productApi';
import { setupListeners } from '@reduxjs/toolkit/query';

export const store = configureStore({
  reducer: {
    productArray:productSlice,
    cartArray:cartSlice,
    [productApi.reducerPath]: productApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware().concat(productApi.middleware),
});

setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch