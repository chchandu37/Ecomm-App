import { configureStore } from '@reduxjs/toolkit';
import productsReducer from './store/productsSlice';

const store = configureStore({
  reducer: {
    productsReducer
  },
});

export default store;
