import { configureStore } from "@reduxjs/toolkit";
import authSlice from "../Reducer/authSlice";
import mainCategorySlice from "../Reducer/MainCategorySlice";
import cartSlice from "../Reducer/cartSlice";

const store = configureStore({
  reducer: {
    authSlice: authSlice.reducer,
    mainCategorySlice: mainCategorySlice.reducer,
    cartSlice: cartSlice.reducer,
  },
});

export default store;
