import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
    name: "filters",
    initialState: {
        activeFilter: "all",
        searchTitle: ""
    },
    reducers: {
        filterChanged: (state, action) => {
            state.activeFilter = action.payload;
        },
        searchTitleChanged: (state, action) => {
            state.searchTitle = action.payload;
        }
    }
})

export const {
    filterChanged,
    searchTitleChanged
} = filterSlice.actions;

export default filterSlice.reducer;