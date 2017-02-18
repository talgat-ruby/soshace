import React from 'react';
import './SideBar.css';

import { locale } from '../../utils';

import Logo from './logo/Logo';
import Button from '../share/button/Button';

const SideBar = () => {
	const addProduct = () => {
		console.log('Add product');
	};

	const addCategory = () => {
		console.log('Add category');
	};

	return (
		<aside>
			<Logo />
			<Button name={ locale('buttons.add_product') } type="" clickHandler={ addProduct }/>	
			<Button name={ locale('buttons.add_category') } type="" clickHandler={ addCategory }/>
		</aside>
	);
}

export default SideBar; 