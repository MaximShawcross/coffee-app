import { configureStore } from '@reduxjs/toolkit';
import coffee from '../components/coffe-list/coffeSlice';

const store = configureStore({
    reducer: {coffee},
    devTools: process.env.NODE_ENV !== 'production',
})
 
export {coffee};

export default store;