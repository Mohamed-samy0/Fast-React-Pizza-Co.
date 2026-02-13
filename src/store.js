import { configureStore } from '@reduxjs/toolkit';
import userReducer from './features/users/userSlice';
import cartRducer from "./features/cart/cartSlice"

const store = configureStore({
  reducer: {
    user: userReducer,
    cart: cartRducer,
  },
});

export default store;
