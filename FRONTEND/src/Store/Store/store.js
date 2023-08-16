import { configureStore } from "@reduxjs/toolkit";
import authSlice from "../Reducer/authSlice";
import mainCategorySlice from "../Reducer/MainCategorySlice";

const store = configureStore({
  reducer: {
    authSlice: authSlice.reducer,
    mainCategorySlice: mainCategorySlice.reducer,
  },
});

export default store;
