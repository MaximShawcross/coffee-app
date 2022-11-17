import { createSlice, createAsyncThunk , createEntityAdapter, createSelector} from "@reduxjs/toolkit";
import { useHttp } from "../../hooks/http.hook";
import { priceGenerator } from "../../utils/price-generator";

const coffeAdapter = createEntityAdapter();

const initialState = coffeAdapter.getInitialState({
    loadingStatus: 'idle',
    singleloadingStatus: 'idle'
});

export const fetchCoffeeList = createAsyncThunk(
    'coffee/fetchCoffee',
    async () => {
        const { request } =  useHttp();
        const response = await request('https://api.sampleapis.com/coffee/hot');
        
        return response;
    }
);

const coffeeListSlice = createSlice({
    name: 'coffee',
    initialState,
    reducers: {
        coffeeFetchingError: (state) => { state.loadingStatus = 'error'},
        coffeeFetching: (state) => {
            state.loadingStatus = 'loading';
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchCoffeeList.pending, state => {
                state.loadingStatus = 'loading';
            })
            .addCase(fetchCoffeeList.fulfilled, (state, action) => {
                state.loadingStatus = 'success';
                action.payload.forEach(item => item.price = priceGenerator());
                coffeAdapter.setAll(state, action.payload)
            }) 
            .addCase(fetchCoffeeList.rejected, state => {
                state.loadingStatus = 'error';
            })
            .addDefaultCase(() => {});
    }
})

const {actions, reducer} = coffeeListSlice;

export default reducer;

export const { selectAll, selectById, selectIds } = coffeAdapter.getSelectors(state => state.coffee);

// const sortedCofee = createSelector([])

export const filteredCoffee = createSelector(
    selectAll,
    (state) => state.filters.activeFilter,
    ( coffees, activeFilter ) =>  {
        if (activeFilter === "all") {
            return coffees
        } else {
            return coffees.filter(coffee => {
                return coffee.ingredients.join("").indexOf(activeFilter) > -1;
            });
        }
    }
);

export const {
    coffeeFetchingError,
    coffeeFetching,
    coffeeFetched,
} = actions;