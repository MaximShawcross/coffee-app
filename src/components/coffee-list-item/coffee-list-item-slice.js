import { createSlice , createEntityAdapter, createAsyncThunk} from "@reduxjs/toolkit";
import { useHttp } from "../../hooks/http.hook";

const coffeeItemAdapter = createEntityAdapter();

const initialState = coffeeItemAdapter.getInitialState({
    coffeeItemLoadingStatus: "idle",
})

export const fetchCoffeeItem = createAsyncThunk(
    'coffeeItem/fetchCoffeeItem',
    (id) => {
        const {request} = useHttp();
        return request(`https://api.sampleapis.com/coffee/hot/${id}`);
    }
)

const coffeeItemSlice = createSlice({
    name: "coffeeItem",
    initialState,
    reducers: {
        coffeeItemFetched: (state, action) => {
            coffeeItemAdapter.upsertOne(state, action.payload);
            state.coffeeItemLoadingStatus = "idle";
        },
        coffeeItemFetching: (state) => {
            state.coffeeItemLoadingStatus = "loading"
        },
        coffeeItemFetchingError: (state) => { 
            state.coffeeItemLoadingStatus = "error"
        }
    },
    extraReducers: (builder) => {
        builder 
            .addCase(fetchCoffeeItem.pending, (state) => {
                state.coffeeItemLoadingStatus = "loading"
            })
            .addCase(fetchCoffeeItem.fulfilled, (state, action) => {
                state.coffeeItemLoadingStatus = "idle";
                coffeeItemAdapter.upsertOne(state, action.payload);
            })
            .addDefaultCase(() => {});
    }
}); 

const {actions, reducer} = coffeeItemSlice;

export const {selectAll} = coffeeItemAdapter.getSelectors(state => state.coffeeItem);

export default reducer;

export const {
    coffeeItemFetched, 
    coffeeItemFetching,
    coffeeItemFetchingError
} = actions; 
