import { createSlice } from "@reduxjs/toolkit";
import initialStoreData from "../../JSON-Data/data.json";

const initialState = {
  mainStoreData: initialStoreData,
  activeProduct: {},
  activeCategories: [],
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
    }
  },
});

export default storeSlice.reducer

export const {setActiveProduct, setActiveCategories} = storeSlice.actions