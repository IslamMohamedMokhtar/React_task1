import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    color: "light",
};
const themeSlice = createSlice({
    name: "theme",
    initialState,
    reducers:{
        theme(state, {payload}){
            state.color = payload;
        }
    }
});

export const {theme}  = themeSlice.actions;
export default themeSlice.reducer;