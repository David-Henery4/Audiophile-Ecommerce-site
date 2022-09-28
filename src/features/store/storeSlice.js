import { createSlice } from "@reduxjs/toolkit";
import initialStoreData from "../../JSON-Data/data.json";

const initialState = {
  mainStoreData: initialStoreData,
  activeHeaderProduct: {},
}

const storeSlice = createSlice({
  name: "store",
  initialState,
  reducers: {
    setActiveHeaderProduct: (state, { payload }) => {
      const active = state.mainStoreData.find((item) => item.id === +payload)
      state.activeHeaderProduct = active;
    },
  },
});

export default storeSlice.reducer

export const {setActiveHeaderProduct} = storeSlice.actions