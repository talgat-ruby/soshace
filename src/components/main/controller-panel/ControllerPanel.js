import React from 'react';
import './ControllerPanel.css';

import { locale } from '../../../utils';
import { BUTTON_TYPES } from '../../../environment/app_environment';

import Button from '../../share/button/Button';

const ControllerPanel = () => {
	const addProduct = () => {
		console.log('Add product');
	};

	const addCategory = () => {
		console.log('Add category');
	};


	return (
		<div className="controller-panel">
			<Button name={locale('buttons.add_product')} type={BUTTON_TYPES.GREEN} clickHandler={ addProduct }/>	
			<Button name={locale('buttons.add_category')} type={BUTTON_TYPES.GREEN} clickHandler={ addCategory }/>
		</div>
	);
};

export default ControllerPanel