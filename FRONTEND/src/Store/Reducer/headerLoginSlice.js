import { createSlice } from "@reduxjs/toolkit";

const headerSlice = createSlice({
  name: "hold the state to open login card",
  initialState: {
    loginComponent: false,
  },
  reducers: {
    setLoginComponent: (state) => {
      state.loginComponent = true;
    },
    hideLoginComponent: (state) => {
      state.loginComponent = false;
    },
  },
});

export default headerSlice;
export const { setLoginComponent, hideLoginComponent } = headerSlice.actions;
