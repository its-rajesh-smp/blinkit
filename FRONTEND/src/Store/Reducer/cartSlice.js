import { createSlice } from "@reduxjs/toolkit";
const cartSlice = createSlice({
  name: "user/auth",
  initialState: {
    cartObj: {},
    total: { quantity: 0, price: 0 },
    cartVisibility: true,
  },
  reducers: {
    addToCart: (state, action) => {
      state.cartObj = {
        ...state.cartObj,
        [action.payload.producttypeId]: action.payload,
      };
      state.total = {
        quantity: state.total.quantity + action.payload.quantity,
        price: state.total.price + action.payload.price,
      };
    },
    setCart: (state, action) => {
      state.cartObj = action.payload.cartObj;
      state.total = action.payload.total;
    },
    showCart: (state) => {
      state.cartVisibility = true;
    },
    hideCart: (state) => {
      state.cartVisibility = false;
    },
    clearCart: () => {
      return {
        cartObj: {},
        total: { quantity: 0, price: 0 },
        cartVisibility: false,
      };
    },
  },
});
export default cartSlice;
export const { addToCart, setCart, showCart, hideCart, clearCart } =
  cartSlice.actions;
