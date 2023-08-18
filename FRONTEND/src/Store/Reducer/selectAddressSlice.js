import { createSlice } from "@reduxjs/toolkit";

const center = {
  lat: -3.745,
  lng: -38.523,
};

const selectAddressSlice = createSlice({
  name: "on Click select address fields",
  initialState: {
    id: "",
    name: "",
    address: "",
    phoneNumber: "",
    addressPosition: center,
    operation: "ADD",
    addressForm: false,
  },
  reducers: {
    setAddress: (state, action) => {
      state.id = action.payload.id;
      state.name = action.payload.name;
      state.address = action.payload.address;
      state.phoneNumber = action.payload.phoneNumber;
      state.addressPosition = action.payload.addressPosition;
      state.operation = action.payload.operation;
    },
    assignSelectAddress: (state, action) => {
      Object.assign(state, action.payload);
    },
    showAddressForm: (state) => {
      state.addressForm = true;
    },
    hideAddressForm: (state) => {
      return {
        id: "",
        name: "",
        address: "",
        phoneNumber: "",
        addressPosition: center,
        operation: "ADD",
        addressForm: false,
      };
    },
  },
});

export default selectAddressSlice;
export const {
  setAddress,
  assignSelectAddress,
  showAddressForm,
  hideAddressForm,
} = selectAddressSlice.actions;
