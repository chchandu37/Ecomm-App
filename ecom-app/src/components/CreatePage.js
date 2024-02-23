// pages/CreatePage.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addProduct, setError, clearError } from '../store/productsSlice';
import { addProduct as apiAddProduct } from '../api';
import * as S from '../styles';

const CreatePage = () => {
  const dispatch = useDispatch();
  const [newProduct, setNewProduct] = useState({
    name: '',
    price: 0,
  });

  const handleChange = (e) => {
    setNewProduct({ ...newProduct, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    try {
      if (newProduct.name.trim() === '' || newProduct.price <= 0) {
        dispatch(setError('Please fill in all fields correctly.'));
        return;
      }

      await apiAddProduct(newProduct);
      dispatch(clearError());
    } catch (error) {
      dispatch(setError('Error adding product.'));
    }
  };

  return (
    <S.CreateProductContainer>
      <h2>Create Product</h2>
      <S.InputField
        type="text"
        name="name"
        value={newProduct.name}
        onChange={handleChange}
        placeholder="Product Name"
      />
      <S.InputField
        type="number"
        name="price"
        value={newProduct.price}
        onChange={handleChange}
        placeholder="Product Price"
      />
      {/* Other input fields */}
      <button onClick={handleSubmit}>Add Product</button>
    </S.CreateProductContainer>
  );
};

export default CreatePage;
