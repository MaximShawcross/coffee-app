import { createSlice, createAsyncThunk, createEntityAdapter, createSelector } from "@reduxjs/toolkit";

import { useHttp } from "../../hooks/http.hook";

const ourBestAdapter = createEntityAdapter();

const initialState = ourBestAdapter.getInitialState({
    ourBestItemLoadingStatus: "idle"
})


export const fetchBestItem = createAsyncThunk(
    'ourBest/fetchItems',
    () => {
        const {request} = useHttp();

        let randomItem = Number(Math.random() * (18 - -1) + 1).toFixed(0);

        return request(`https://api.sampleapis.com/coffee/hot/${randomItem}`);
    }
)

const bestItemSlice = createSlice({
    name: "bestItemSlice",
    initialState,
    reducers: {
        bestItemFetched: (state, action) => {
            bestItemSlice.addOne(state, action.payload);
        }, 
        bestItemFetching: (state) => {
            state.ourBestItemLoadingStatus = "loading"
        },
        bestItemFetchingError: (state) => {
            state.ourBestItemLoadingStatus = "error"
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchBestItem.pending, (state) => {
                state.ourBestItemLoadingStatus = "loading"
            })
            .addCase(fetchBestItem.fulfilled, (state, action) => {
                state.ourBestItemLoadingStatus = "idle";
                ourBestAdapter.addMany(state, action.payload);
            })
            .addDefaultCase(() => {})
    }
})

const { actions, reducer } = bestItemSlice; 

export default reducer;

export const {
    bestItemFetched,
    bestItemFetching,
    bestItemFetchingError
} = actions;