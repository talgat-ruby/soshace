import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import './ControllerPanel.css';

import { newCategory } from '../../../redux/actions/categories/categories_actions';
import { newProduct } from '../../../redux/actions/products/products_actions';
import { locale } from '../../../utils';
import { BUTTON_TYPES } from '../../../environment/app_environment';
import { openModal } from '../../../redux/actions/modal-dialog/modal-dialog_actions';
import { TEMPLATES } from '../../../environment/modal-dialog_environment';

import Button from '../../share/button/Button';

const ControllerPanel = ({ openModal, newCategory, newProduct, categories, products }) => {

	const addProductValidator = (action, { name, purchasePrice, sellPrice }) => {
		const isCorrectAction = action === 'save';
		const err = {};
		if(isCorrectAction) {
			if(!name) {
				Object.assign(err, {
					name: `${locale(
						'modal.add-modify_product.name_placeholder'
					)} ${locale(
						'modal.add-modify_product.err_empty'
					)}`
				});
			} else if(products.some(product => product.name === name)) {
				Object.assign(err, { name: locale('modal.add-modify_product.err_duplication') });
			}

			if(!purchasePrice) {
				Object.assign(err, {
					purchase: `${locale(
						'modal.add-modify_product.purchase_placeholder'
					)} ${locale(
						'modal.add-modify_product.err_empty'
					)}`
				});
			}

			if(!sellPrice) {
				Object.assign(err, {
					sell: `${locale(
						'modal.add-modify_product.sell_placeholder'
					)} ${locale(
						'modal.add-modify_product.err_empty'
					)}`
				});
			}

			return (Object.keys(err).length > 0 ? { err } : null);
		}
	};

	const addProduct = () => {
		const {
			header,
			name_placeholder: namePlaceholder,
			purchase_placeholder: purchasePlaceholder,
			sell_placeholder: sellPlaceholder
		} = locale('modal.add-modify_product');
		openModal({
			template: TEMPLATES.ADD_PRODUCT,
			header,
			categories: [{ name: locale('categories.default') }, ...categories],
			namePlaceholder,
			purchasePlaceholder,
			sellPlaceholder,
			err: {
				category: '',
				name: '',
				purchase: '',
				sell: ''
			},
			buttons: [
				{ name: locale('buttons.save'), action: 'save', type: 'green' }
			]
		}, addProductValidator).then(({ action, data }) => {
			if(action === 'save') {
				newProduct(data);
			}
		});
	};

	const addCategoryValidator = (action, data) => {
		const isCorrectAction = action === 'save' || action === 'enter';
		if(isCorrectAction) {
			if(!data) {
				return { err: locale('modal.add_category.err_empty') };
			} else if(categories.some(({ name }) => name === data)) {
				return { err: locale('modal.add_category.err_duplication') };
			}
		}
	};

	const addCategory = () => {
		const { header, placeholder } = locale('modal.add_category');
		openModal({
			template: TEMPLATES.ADD_CATEGORY,
			header,
			placeholder,
			err: '',
			buttons: [
				{ name: locale('buttons.save'), action: 'save', type: 'green' }
			]
		}, addCategoryValidator).then(({action, data}) => {
			if(action === 'save' || action === 'enter') {
				newCategory(data);
			}
		});
	};


	return (
		<div className="controller-panel">
			<Button
				name={locale('buttons.add_product')}
				type={BUTTON_TYPES.GREEN}
				clickHandler={addProduct}/>
			<Button
				name={locale('buttons.add_category')}
				type={BUTTON_TYPES.GREEN}
				clickHandler={addCategory}/>
		</div>
	);
};

ControllerPanel.propTypes = {
	openModal: PropTypes.func.isRequired,
	newCategory: PropTypes.func.isRequired,
	categories: PropTypes.array.isRequired,
	products: PropTypes.array.isRequired
};

const mapStateToProps = ({ categories, products }) => ({ categories, products });

const mapDispatchToProps = { openModal, newCategory, newProduct };

export default connect(mapStateToProps, mapDispatchToProps)(ControllerPanel);
