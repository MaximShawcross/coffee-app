import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
    name: "filters",
    initialState: {
        activeFilter: "all"
    },
    reducers: {
        filterChanged: (state, action) => {
            state.activeFilter = action.payload;
        }
    }
})

export const {
    filterChanged
} = filterSlice.actions;

export default filterSlice.reducer;