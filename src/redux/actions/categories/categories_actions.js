import { fetchCategoriesService } from './categories_services';
import { FETCH_CATEGORIES_SUCCESS } from '../../constants/categories_constants';


const fetchCategoriesSuccess = payload => ({
	type: FETCH_CATEGORIES_SUCCESS,
	payload
});

export const fetchCategories = () => (
	dispatch => (
		fetchCategoriesService().then(() => {
			dispatch(fetchCategoriesSuccess())
		})
	)
);