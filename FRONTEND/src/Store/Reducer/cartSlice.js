import { createSlice } from "@reduxjs/toolkit";
const cartSlice = createSlice({
  name: "user/auth",
  initialState: [],
  reducers: {
    addToCart: (state, action) => {
      return [action.payload, ...state];
    },
    setCart: (state, action) => {
      return action.payload;
    },
  },
});
export default cartSlice;
export const { addToCart, setCart } = cartSlice.actions;
