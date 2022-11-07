import { createSlice, createAsyncThunk , createEntityAdapter} from "@reduxjs/toolkit";
import { useHttp } from "../../hooks/http.hook";

const coffeAdapter = createEntityAdapter();

const initialState = coffeAdapter.getInitialState({
    coffeeLoadingStatus: 'idle',
})

export const fetchCoffeeList = createAsyncThunk(
    'coffee/fetchCoffee',
    () => {
        const { request } = useHttp();
        return request('https://api.sampleapis.com/coffee/hot') 
    }
)

const coffeeListSlice = createSlice({
    name: 'coffee',
    initialState,
    reducers: {
        coffeeFetchingError: (state) => { state.coffeeLoadingStatus = 'error'},
        coffeeFetching: (state) => {
            state.coffeeLoadingStatus = 'loading';
        },
        coffeeFetched: (state, action) => {
            coffeAdapter.setAll(state, action.payload)
            state.coffeeLoadingStatus = 'idle';
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchCoffeeList.pending, state => {
                state.coffeeLoadingStatus = 'loading';
            })
            .addCase(fetchCoffeeList.fulfilled, (state, action) => {
                state.coffeeLoadingStatus = 'idle';
                coffeAdapter.setAll(state, action.payload)
            }) 
            .addCase(fetchCoffeeList.rejected, state => {
                state.coffeeLoadingStatus = 'error';
            })
            .addDefaultCase(() => {});
    }
})

const {actions, reducer} = coffeeListSlice;

export default reducer;

export const { selectAll, selectById } = coffeAdapter.getSelectors(state => state.coffee);


export const {
    coffeeFetchingError,
    coffeeFetching,
    coffeeFetched,
} = actions;