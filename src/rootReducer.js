import { combineReducers } from 'redux';

import categories from './redux/reducer/categories_reducer';
import products from './redux/reducer/products_reducers';

export default combineReducers({
	categories,
	products
});