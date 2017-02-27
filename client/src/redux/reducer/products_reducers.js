import { FETCH_PRODUCTS_SUCCESS } from '../constants/products_constants';

export default function products(state=[], action) {
	switch(action.type) {
		case FETCH_PRODUCTS_SUCCESS:
			return action.payload;
		default:
			return state;
	}
}