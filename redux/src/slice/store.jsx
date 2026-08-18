import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '../slice/cartSlice';

export const store = configureStore({
  reducer: {
    cart: cartReducer, // Assign our cart slice reducer to the 'cart' key in the store
  },
});