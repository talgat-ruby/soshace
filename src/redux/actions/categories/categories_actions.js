import { fetchCategoriesService, removeCategoryService } from './categories_services';
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
		removeCategoryService(id).then(res => {
			dispatch(fetchCategories());
		})
	)
);