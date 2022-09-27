import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./features/cart/cartSlice";
import storeReducer from "./features/store/storeSlice";

export const store = configureStore({
  reducer:{
    cart: cartReducer,
    store: storeReducer,
  }
})