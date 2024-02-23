
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: [],
  notification: null,
  error: null,
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProducts: (state, action) => {
      state.data = action.payload;
    },
    addProduct: (state, action) => {
      state.data.push(action.payload);
      state.notification = 'Product added successfully.';
    },
    editProduct: (state, action) => {
      const { id, updatedProduct } = action.payload;
      const index = state.data.findIndex((product) => product.id === id);
      state.data[index] = { ...state.data[index], ...updatedProduct };
      state.notification = 'Product updated successfully.';
    },
    deleteProduct: (state, action) => {
      const id = action.payload;
      state.data = state.data.filter((product) => product.id !== id);
      state.notification = 'Product deleted successfully.';
    },
    clearNotification: (state) => {
      state.notification = null;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    clearError: (state) => {
      state.error = null;
    },
  },
});

export const {
  setProducts,
  addProduct,
  editProduct,
  deleteProduct,
  clearNotification,
  setError,
  clearError,
} = productsSlice.actions;

export const productsReducer= productsSlice.reducer;
