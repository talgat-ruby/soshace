import React from 'react';
import './ControllerPanel.css';

import { locale } from '../../../utils';

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
			<Button name={ locale('buttons.add_product') } type="green" clickHandler={ addProduct }/>	
			<Button name={ locale('buttons.add_category') } type="green" clickHandler={ addCategory }/>
		</div>
	);
};

export default ControllerPanel