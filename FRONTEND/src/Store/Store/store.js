import { configureStore } from "@reduxjs/toolkit";
import authSlice from "../Reducer/authSlice";
import mainCategorySlice from "../Reducer/MainCategorySlice";
import cartSlice from "../Reducer/cartSlice";
import headerSlice from "../Reducer/headerLoginSlice";
import selectAddressSlice from "../Reducer/selectAddressSlice";

const store = configureStore({
  reducer: {
    authSlice: authSlice.reducer,
    mainCategorySlice: mainCategorySlice.reducer,
    cartSlice: cartSlice.reducer,
    headerSlice: headerSlice.reducer,
    selectAddressSlice: selectAddressSlice.reducer,
  },
});

export default store;
