import { combineReducers } from 'redux';

import categories from './redux/reducer/categories_reducer';
import products from './redux/reducer/products_reducers';
import modalDialog from './redux/reducer/modal-dialog_reducer';

export default combineReducers({
	categories,
	products,
	modalDialog
});
