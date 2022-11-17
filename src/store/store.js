import { configureStore } from '@reduxjs/toolkit';
import coffeeReducer from '../components/coffe-list/coffeSlice';
import filterReducer from '../components/filters/filtersSlice';

const store = configureStore({
    reducer: {
        coffee: coffeeReducer,
        filters: filterReducer
    },
    devTools: process.env.NODE_ENV !== 'production',
})


export default store;