import React from 'react';
import './SideBar.css';

import Logo from './logo/Logo';
import Category from './category/Category';

const testCategories = [{
	name: 'Category 1'
}, {
	name: 'Category 2'
}, {
	name: 'Category 3'
}, {
	name: 'ddfdsfpsdfkdsfkwedewqdwefegrth yyjtjyjdhre6hejjrk gtgsh5hnw'
}];

const SideBar = () => {
	const renderCategories = ({ name }) => (
		<Category name={ name } key={ name } />
	);

	return (
		<aside>
			<Logo />
			<ul className="categories-container">
				{ testCategories.map(renderCategories) }
			</ul>
		</aside>
	);
}

export default SideBar; 