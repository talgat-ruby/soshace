import axios from 'axios';

export const fetchCategoriesService = () => (
	axios.get('/api/categories')
);

export const removeCategoryService = id => (
	axios.delete(`/api/categories?id=${id}`)
);

export const newCategoryService = name => (
	axios.post(`/api/categories?name=${name}`)
);
