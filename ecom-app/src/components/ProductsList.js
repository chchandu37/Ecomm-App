// components/ProductsList.js
import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteProduct as apiDeleteProduct, editProduct as apiEditProduct } from '../api';
import { deleteProduct, editProduct } from '../store/productsSlice';
import * as S from '../styles';

const ProductsList = ({ products }) => {
  const dispatch = useDispatch();

  const handleEdit = async (id, updatedProduct) => {
    try {
      await apiEditProduct(id, updatedProduct);
      dispatch(editProduct({ id, updatedProduct }));
    } catch (error) {
    }
  };

  const handleDelete = async (id) => {
    try {
      await apiDeleteProduct(id);
      dispatch(deleteProduct(id));
    } catch (error) {
    }
  };

  return (
    <div>
      {products.map((product) => (
        <S.ProductContainer key={product.id}>
          <p>{product.name}</p>
          <p>{product.price}</p>
          <button onClick={() => handleEdit(product.id)}>Edit</button>
          <button onClick={() => handleDelete(product.id)}>Delete</button>
        </S.ProductContainer>
      ))}
    </div>
  );
};

export default ProductsList;
