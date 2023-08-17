import { createSlice } from "@reduxjs/toolkit";
const cartSlice = createSlice({
  name: "user/auth",
  initialState: {
    cart: [],
    cartObj: {},
    total: { quantity: 0, price: 0 },
  },
  reducers: {
    addToCart: (state, action) => {
      state.cart = [action.payload, ...state.cart];
      state.cartObj = { [action.payload.id]: action.payload };
      state.total = {
        quantity: state.total.quantity + +action.payload.quantity,
        price: state.total.price + +action.payload.price,
      };
    },
    setCart: (state, action) => {
      state.cart = action.payload.cart;
      (state.cartObj = action.payload.cartObj),
        (state.total = action.payload.total);
    },
  },
});
export default cartSlice;
export const { addToCart, setCart } = cartSlice.actions;
