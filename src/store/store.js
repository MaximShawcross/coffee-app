import { configureStore } from '@reduxjs/toolkit';
import coffee from '../components/coffe-list/coffeSlice';
import coffeeItem from '../components/coffee-list-item/coffee-list-item-slice';
import OurBest from '../components/our-best-item/our-best-item-slice';

const stringMiddleware = ({dispatch, getState}) => (next) => (action) => {
    if(typeof action === 'string') {
        return next({
            type: action
        })
    }
    return next(action);

};

const store = configureStore({
    reducer: {coffee, coffeeItem, OurBest},
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(stringMiddleware),
    devTools: process.env.NODE_ENV !== 'production',
})
 
export {coffee, coffeeItem, OurBest};

export default store;