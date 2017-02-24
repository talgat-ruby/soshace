import axios from 'axios';

export const fetchCategoriesService = () => (
	axios.get('/api/categories')
);