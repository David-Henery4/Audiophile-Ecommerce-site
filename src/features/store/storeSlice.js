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
    getActiveHeaderProduct: (state, { payload }) => {
      console.log(payload);
    },
  },
});

export default storeSlice.reducer

export const {getActiveHeaderProduct} = storeSlice.actions