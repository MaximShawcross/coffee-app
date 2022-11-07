import { createSlice , createEntityAdapter, createAsyncThunk} from "@reduxjs/toolkit";
import { useHttp } from "../../hooks/http.hook";

const coffeeItemAdapter = createEntityAdapter();

const initialState = coffeeItemAdapter.getInitialState({
    coffeeItemLoadingStatus: "idle",
})

export const fetchCoffeeItem = createAsyncThunk(
    'coffeeItem/fetchCoffeeItem',
    async (id) => {
        const {request} = useHttp();
        const response = await request(`https://api.sampleapis.com/coffee/hot/${id}`);
        return response;
    }
)

const coffeeItemSlice = createSlice({
    name: "coffeeItem",
    initialState,
    reducers: {
        coffeeItemFetched: (state, action) => {
            coffeeItemAdapter.setAll(action.payload);
            state.coffeeItemLoadingStatus = "idle";
        },
        coffeeItemFetching: (state) => {
            state.coffeeItemLoadingStatus = "loading";
        },
        coffeeItemFetchingError: (state) => { 
            state.coffeeItemLoadingStatus = "error";
        }
    },
    extraReducers: (builder) => {
        builder 
            .addCase(fetchCoffeeItem.pending, (state) => {
                state.coffeeItemLoadingStatus = "loading"
            })
            .addCase(fetchCoffeeItem.fulfilled, (state, action) => {
                state.coffeeItemLoadingStatus = "idle";
                coffeeItemAdapter.setOne(state, action.payload);
            })
            .addDefaultCase(() => {});
    }
}); 

const {actions, reducer} = coffeeItemSlice;

export const {selectById: selectCoffeeById} = coffeeItemAdapter.getSelectors(state => state.coffeeItem);

export default reducer;

export const {
    coffeeItemFetched, 
    coffeeItemFetching,
    coffeeItemFetchingError
} = actions; 
