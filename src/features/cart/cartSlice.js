import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  isOverlayActive: false,
  isCartActive: false,
}

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    toggleOverlay: (state, {payload}) => {
      state.isOverlayActive = !state.isOverlayActive
    },
    toggleCart: (state, {payload}) => {
      state.isCartActive = !state.isCartActive
    },
    //
    closeOverlay: (state, {payload}) => {
      state.isOverlayActive = false
    },
    openOverlay: (state, {payload}) => {
      state.isOverlayActive = true;
    },
    //
    closeCart: (state, {payload}) => {
      state.isCartActive = false
    },
    openCart: (state) => {
      state.isCartActive = true
    },
  }
});

export default cartSlice.reducer

export const {toggleOverlay, toggleCart, closeOverlay, openOverlay, closeCart, openCart} = cartSlice.actions