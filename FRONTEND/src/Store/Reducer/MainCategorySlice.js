import { createSlice } from "@reduxjs/toolkit";
const mainCategorySlice = createSlice({
  name: "main category storage",
  initialState: [],
  reducers: {
    setMainCategory: (state, action) => {
      return action.payload;
    },
  },
});

export default mainCategorySlice;
export const { setMainCategory } = mainCategorySlice.actions;
