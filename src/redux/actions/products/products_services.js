import axios from 'axios';

export const fetchProductsService = () => (
	axios.get('/api/products')
);

export const removeProductService = id => (
	axios.delete(`/api/products?id=${id}`)
);