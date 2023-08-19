import { createSlice } from "@reduxjs/toolkit";
const addressSlice = createSlice({
  name: "all address & selected address",
  initialState: { selectedAddress: {}, allAddress: [] },
  reducers: {
    setAllAddress: (state, action) => {
      state.allAddress = action.payload;
    },
    addNewAddress: (state, action) => {
      state.allAddress.push(action.payload);
    },
    selectAddress: (state, action) => {
      state.selectedAddress = action.payload;
    },
    clearSelectedAddress: (state) => {
      state.selectedAddress = {};
    },
  },
});

export default addressSlice;
export const {
  selectAddress,
  clearSelectedAddress,
  addNewAddress,
  setAllAddress,
} = addressSlice.actions;
