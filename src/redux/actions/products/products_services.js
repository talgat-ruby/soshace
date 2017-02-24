import axios from 'axios';

export const fetchProductsService = () => (
	axios.get('/api/products')
);