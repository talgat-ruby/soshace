import React, { PropTypes, PureComponent } from 'react';
import { connect } from 'react-redux';
import './SideBar.css';

import { fetchCategories } from '../../redux/actions/categories/categories_actions';

import Logo from './logo/Logo';
import Category from './category/Category';

class SideBar extends PureComponent {
	componentDidMount = () => {
		this.props.fetchCategories();
	}

	renderCategories = ({ name, _id }) => (
		<Category name={ name } key={ _id } />
	)

	render = () => (
		<aside>
			<Logo />
			<ul className="categories-container">
				{  	[
						...this.props.categories,
						{ name: '', _id: 0 } 
					].map(this.renderCategories) }
			</ul>
		</aside>
	)
}

SideBar.propTypes = {
	fetchCategories: PropTypes.func.isRequired,
	categories: PropTypes.array.isRequired
};

const mapStateToProps = ({ categories }) => ({ categories });

export default connect(mapStateToProps, { fetchCategories })(SideBar); 