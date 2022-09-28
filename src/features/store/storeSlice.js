import { createSlice } from "@reduxjs/toolkit";
import initialStoreData from "../../JSON-Data/data.json";

const initialState = {
  mainStoreData: initialStoreData,
  activeProduct: {},
}

const storeSlice = createSlice({
  name: "store",
  initialState,
  reducers: {
    setActiveProduct: (state, { payload }) => {
      const active = state.mainStoreData.find((item) => item.slug === payload)
      state.activeProduct = active;
    },
  },
});

export default storeSlice.reducer

export const {setActiveProduct} = storeSlice.actions