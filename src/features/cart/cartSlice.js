import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  cartTotal: 0,
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
    addToCart: (state, {payload}) => {
      console.log(payload)
      // might have to create condition to prevent adding multiple of the same.
      const duplicate = state.cartItems.some((item) => {
        return item.id === payload.id
      })
      if (duplicate){
        const changeItem = state.cartItems.find((item) => {
          return item.id === payload.id
        })
        changeItem.itemQuantity = changeItem.itemQuantity + payload.itemQuantity;
        changeItem.totalPrice = changeItem.price * changeItem.itemQuantity;
      }
      if (!duplicate){
        state.cartItems = [...state.cartItems, payload];
      }
    },
    clearCart: (state) => {
      state.cartItems = []
    },
    changeCartItemQuantity: (state, {payload}) => {
      const selectedItem = state.cartItems.find(item => item.id === payload.id)
      if (payload.type === "inc"){
        selectedItem.itemQuantity++;
        selectedItem.totalPrice = selectedItem.price * selectedItem.itemQuantity;
      }
      if (payload.type === "dec"){
        selectedItem.itemQuantity--;
        selectedItem.totalPrice =
        selectedItem.price * selectedItem.itemQuantity;
      }
      if (selectedItem.itemQuantity <= 0){
        const remainingItems = state.cartItems.filter((item) => item.id !== payload.id)
        state.cartItems = remainingItems;
      }
    },
    getCartTotal: (state, {payload}) => {
          let total = 0;
          state.cartItems.forEach((item) => {
            total += item.totalPrice;
          });
          state.cartTotal = total
    }
  }
});

export default cartSlice.reducer

export const {toggleOverlay, toggleCart, closeOverlay, openOverlay, closeCart, openCart, addToCart, clearCart, changeCartItemQuantity, getCartTotal} = cartSlice.actions