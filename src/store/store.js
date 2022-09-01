import { configureStore } from '@reduxjs/toolkit';
import coffee from '../components/coffe-list/coffeSlice';

const stringMiddleware = ({dispatch, getState}) => (next) => (action) => {
    if(typeof action === 'string') {
        return next({
            type: action
        })
    }
    return next(action);

};

const store = configureStore({
    reducer: {coffee},
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(stringMiddleware),
    devTools: process.env.NODE_ENV !== 'production',
})
 
export {coffee};

export default store;