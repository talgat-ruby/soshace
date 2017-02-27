import axios from 'axios';

export const fetchProductsService = () => (
	axios.get('/api/products')
);

export const removeProductService = id => (
	axios.delete(`/api/products?id=${id}`)
);

export const newProductService = data => (
	axios.post('/api/products', { ...data })
);

export const modifyProductService = data => (
	axios.put('/api/products', { ...data })
);
