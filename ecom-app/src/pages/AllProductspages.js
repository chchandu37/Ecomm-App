
import React, { useEffect } from 'react';
import ProductsList from '../components/ProductsList';
import { useDispatch, useSelector } from 'react-redux';
import { setProducts, setError } from '../store/productsSlice';
import { getProducts } from '../api';
import * as S from '../styles';

const AllProductsPage = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.data);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await getProducts();
        dispatch(setProducts(response.data));
      } catch (error) {
        dispatch(setError('Error fetching products.'));
      }
    };

    fetchProducts();
  }, [dispatch]);

  return (
    <S.AllProductsContainer>
      <h2>All Products</h2>
      {products.length === 0 ? (
        <S.NoProductsMessage>No products available.</S.NoProductsMessage>
      ) : (
        <ProductsList products={products} />
      )}
    </S.AllProductsContainer>
  );
};

export default AllProductsPage;
