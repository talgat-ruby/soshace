import { fetchCategoriesService, removeCategoryService, newCategoryService } from './categories_services';
import { fetchProducts } from '../products/products_actions';
import { FETCH_CATEGORIES_SUCCESS} from '../../constants/categories_constants';


const fetchCategoriesSuccess = payload => ({
	type: FETCH_CATEGORIES_SUCCESS,
	payload
});

export const fetchCategories = () => (
	dispatch => (
		fetchCategoriesService().then(res => {
			dispatch(fetchCategoriesSuccess(res.data));
		})
	)
);

export const removeCategory = id => (
	dispatch => (
		removeCategoryService(id).then(() => {
			dispatch(fetchCategories());
		})
	)
);

export const newCategory = name => (
	dispatch => (
		newCategoryService(name).then(() => {
			dispatch(fetchCategories());
			dispatch(fetchProducts());
		})
	)
);
