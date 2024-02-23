
import axios from 'axios';

const BASE_URL = 'https://my-json-server.typicode.com/<your-username>/<your-repo>'; 

export const getProducts = () => axios.get(`${BASE_URL}/products`);
export const addProduct = (newProduct) => axios.post(`${BASE_URL}/products`, newProduct);
export const editProduct = (id, updatedProduct) => axios.put(`${BASE_URL}/products/${id}`, updatedProduct);
export const deleteProduct = (id) => axios.delete(`${BASE_URL}/products/${id}`);

