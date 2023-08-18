import { createSlice } from "@reduxjs/toolkit";

const center = {
  lat: -3.745,
  lng: -38.523,
};

const selectAddressSlice = createSlice({
  name: "on Click select address fields",
  initialState: {
    name: "",
    address: "",
    phoneNumber: "",
    addressPosition: center,
  },
  reducers: {
    setAddress: (state, action) => {
      state.name = action.payload.name;
      state.address = action.payload.address;
      state.phoneNumber = action.payload.phoneNumber;
      state.addressPosition = action.payload.addressPosition;
    },
    onChange: (state, action) => {
      Object.assign(state, action.payload);
    },
  },
});

export default selectAddressSlice;
export const { setAddress, onChange } = selectAddressSlice.actions;
