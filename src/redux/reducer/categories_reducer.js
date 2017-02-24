import { FETCH_CATEGORIES_SUCCESS, REMOVE_CATEGORY_SUCCESS } from '../constants/categories_constants';

export default function categories(state=[], action) {
	switch(action.type) {
		case FETCH_CATEGORIES_SUCCESS:
			return action.payload;
		default:
			return state;
	}
}