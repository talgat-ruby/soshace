import React, { PropTypes, PureComponent } from 'react';
import { connect } from 'react-redux';
import './SideBar.css';

import { fetchCategories } from '../../redux/actions/categories/categories_actions';

import Logo from './logo/Logo';
import Category from './category/Category';

const testCategories = [{
	name: 'Category 1'
}, {
	name: 'Category 2'
}, {
	name: 'Category 3'
}, {
	name: 'Category 4'
}];

const SideBar = () => {
	const renderCategories = ({ name }) => (
		<Category name={ name } key={ name } />
	);

	return (
		<aside>
			<Logo />
			<ul className="categories-container">
				{  	[
						...testCategories,
						{ name: '' } 
					].map(renderCategories) }
			</ul>
		</aside>
	);
}

SideBar.propTypes = {
	fetchCategories: PropTypes.func.isRequired
};

export default connect(null, { fetchCategories })(SideBar); 