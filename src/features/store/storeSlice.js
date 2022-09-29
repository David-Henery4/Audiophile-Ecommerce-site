import { createSlice } from "@reduxjs/toolkit";
import initialStoreData from "../../JSON-Data/data.json";

const initialState = {
  mainStoreData: initialStoreData,
  activeProduct: {},
  activeCategories: [],
  isDropDownNavActive: false,
}

const storeSlice = createSlice({
  name: "store",
  initialState,
  reducers: {
    setActiveProduct: (state, { payload }) => {
      const active = state.mainStoreData.find((item) => item.slug === payload)
      state.activeProduct = active;
    },
    setActiveCategories: (state, {payload}) => {
      const duplicateCopy = state.mainStoreData
      const matchingCategories = duplicateCopy.filter((item) => {
        return item.category === payload
      })
      state.activeCategories = matchingCategories
    },
    toggleDropDownNav: (state, {payload}) => {
      state.isDropDownNavActive = !state.isDropDownNavActive
    },
    openDropDownNav: (state, {payload}) => {
      state.isDropDownNavActive = true
    },
    closeDropDownNav: (state, {payload}) => {
      state.isDropDownNavActive = false
    }
  },
});

export default storeSlice.reducer

export const {setActiveProduct, setActiveCategories, toggleDropDownNav, closeDropDownNav, openDropDownNav} = storeSlice.actions