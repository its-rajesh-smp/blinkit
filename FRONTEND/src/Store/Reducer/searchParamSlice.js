import { createSlice } from "@reduxjs/toolkit";
const searchParamSlice = createSlice({
    name: "search param",
    initialState: { param: "" },
    reducers: {
        setSearchParam: (state, action) => {
            console.log(action.payload);
            state.param = action.payload
        },
        clearSearchParam: (state) => {
            state.param = ""
        }
    }
});

export default searchParamSlice;
export const { setSearchParam, clearSearchParam } = searchParamSlice.actions
