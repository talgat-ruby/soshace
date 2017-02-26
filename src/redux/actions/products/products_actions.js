import {
	fetchProductsService,
	removeProductService,
	newProductService,
	modifyProductService
} from './products_services';
import { FETCH_PRODUCTS_SUCCESS } from '../../constants/products_constants';

const fetchProductsSuccess = payload => ({
	type: FETCH_PRODUCTS_SUCCESS,
	payload
});

export const fetchProducts = () => (
	dispatch => (
		fetchProductsService().then(res => {
			dispatch(fetchProductsSuccess(res.data));
		})
	)
);

export const removeProduct = id => (
	dispatch => (
		removeProductService(id).then(() => {
			dispatch(fetchProducts());
		})
	)
);

export const newProduct = data => (
	dispatch => (
		newProductService(data).then(() => {
			dispatch(fetchProducts());
		})
	)
);

export const modifyProduct = data => (
	dispatch => (
		modifyProductService(data).then(() => {
			dispatch(fetchProducts());
		})
	)
);
