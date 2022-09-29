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
  }
});

export default cartSlice.reducer

export const {toggleOverlay, toggleCart} = cartSlice.actions