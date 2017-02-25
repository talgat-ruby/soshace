import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import './ControllerPanel.css';

import { newCategory } from '../../../redux/actions/categories/categories_actions';
import { locale } from '../../../utils';
import { BUTTON_TYPES } from '../../../environment/app_environment';
import { openModal } from '../../../redux/actions/modal-dialog/modal-dialog_actions';
import { TEMPLATES } from '../../../environment/modal-dialog_environment';

import Button from '../../share/button/Button';

const ControllerPanel = ({ openModal, newCategory, categories }) => {
	const addProduct = () => {
		console.log('Add product');
	};

	const addCategoryValidator = (action, data) => {
		const isCorrectAction = action === 'save' || action === 'enter';
		if(isCorrectAction && !data) {
			return { err: locale('modal.add_category.err_empty') };
		} else if(isCorrectAction && categories.some(({ name }) => name === data)) {
			return { err: locale('modal.add_category.err_duplication') };
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
		}, addCategoryValidator).then(data => {
			newCategory(data);
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
	categories: PropTypes.array.isRequired
};

const mapStateToProps = ({ categories }) => ({ categories });

export default connect(mapStateToProps, { openModal, newCategory })(ControllerPanel);
