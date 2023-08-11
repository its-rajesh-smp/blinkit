import { createSlice } from "@reduxjs/toolkit";
const authSlice = createSlice({
  name: "user/auth",
  initialState: { auth: false },
  reducers: {
    authUser: (state, action) => {
      state.auth = true;
      Object.assign(state, action.payload);
    },
    updateUser: (state, action) => {
      Object.assign(state, action.payload);
    },
    logoutUser: () => {
      return { auth: false };
    },
  },
});
export default authSlice;
export const { authUser, updateUser, logoutUser } = authSlice.actions;
